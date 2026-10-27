import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

const compile = source => 'data:text/javascript;base64,' + Buffer.from(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText).toString('base64');
const utils = compile(await readFile(new URL('../app/inquiry-utils.ts', import.meta.url), 'utf8'));
const serviceSource = (await readFile(new URL('../lib/inquiry-service.ts', import.meta.url), 'utf8')).replace('"../app/inquiry-utils"', JSON.stringify(utils));
const { receiveInquiry, validateInquiry } = await import(compile(serviceSource));
const base = { email: 'test@example.com', country: 'TEST ONLY', product: 'TEST ONLY - validation', quantity: 'Test only', purchaseType: 'Ready stock', reference: 'JZ-20261027-ABCDEF12', consent: true, source: '/contact/?email=private', message: '' };
const request = (body = base, origin = 'https://www.jozing.com') => new Request('https://www.jozing.com/api/inquiries/', { method: 'POST', headers: { origin, 'Content-Type': 'application/json', 'x-forwarded-for': '192.0.2.1' }, body: JSON.stringify(body) });
const originalFetch = globalThis.fetch;
const env = { ...process.env };
let calls = 0;
try {
  process.env.KV_REST_API_URL = 'https://example.upstash.io'; process.env.KV_REST_API_TOKEN = 'test-server-secret'; delete process.env.RESEND_API_KEY;
  globalThis.fetch = async (_url, options) => {
    calls++;
    const command = JSON.parse(options.body);
    assert.equal(command[0], 'EVAL');
    assert.equal(command[2], 5);
    assert(!command[4].includes('192.0.2.1'));
    assert(!command[5].includes('test@example.com'));
    const stored = JSON.parse(command[9]);
    assert.equal(stored.email, 'test@example.com');
    assert.equal(stored.source, '/contact/');
    assert.equal(stored.notification, 'not_sent');
    assert.equal(command[10], 365 * 86400);
    return Response.json({ result: 'saved' });
  };
  let result = await receiveInquiry(request());
  assert.equal(result.status, 201); assert.deepEqual(await result.json(), { saved: true, reference: base.reference });
  assert.equal(result.headers.get('Cache-Control'), 'no-store');
  const before = calls;
  for (const invalid of [{ email: '' }, { email: 'invalid' }, { consent: false }, { website: 'spam' }, { country: '' }, { quantity: '' }, { purchaseType: 'injected' }, { reference: '../../private' }, { product: 'x'.repeat(241) }]) {
    assert.equal((await receiveInquiry(request({ ...base, ...invalid }))).status, 400);
  }
  assert.equal((await receiveInquiry(request(base, 'https://unrelated.example'))).status, 403);
  assert.equal((await receiveInquiry(request({ ...base, message: 'x'.repeat(9000) }))).status, 413);
  assert.equal(calls, before, 'invalid requests must not write or notify');
  assert.equal(validateInquiry({ ...base, source: 'https://foreign.example/' }).data.source, '/contact/');
  for (const [value, status] of [['duplicate', 200], ['limited', 429], ['conflict', 409], ['unexpected', 503]]) {
    globalThis.fetch = async () => Response.json({ result: value });
    assert.equal((await receiveInquiry(request())).status, status);
  }
  globalThis.fetch = async () => { throw new Error('Simulated outage'); };
  result = await receiveInquiry(request()); assert.equal(result.status, 503); assert.equal((await result.json()).saved, undefined);
  delete process.env.KV_REST_API_TOKEN; delete process.env.UPSTASH_REDIS_REST_TOKEN;
  assert.equal((await receiveInquiry(request())).status, 503);
  console.log('PASS: durable-save response, private fields, input limits, consent, honeypot, origin, duplicate/conflict/rate outcomes, outages and missing storage.');
} finally { globalThis.fetch = originalFetch; process.env = env; }
