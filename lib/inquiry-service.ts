import { createHash, createHmac } from "node:crypto";
import { purchaseTypes, safeSourcePath, buildInquiry } from "../app/inquiry-utils";

const limits = { email: 160, country: 80, product: 240, quantity: 100, destination: 100, message: 1500 };
const retentionSeconds = 365 * 86400;
const headers = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" };
const json = (body: object, status = 200) => Response.json(body, { status, headers });

export function validateInquiry(raw: unknown) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw new Error("Invalid form.");
  const value = raw as Record<string, unknown>;
  const data: Record<string, string> = {};
  for (const [field, limit] of Object.entries(limits)) {
    if (value[field] !== undefined && typeof value[field] !== "string") throw new Error("Invalid field.");
    const text = (value[field] as string ?? "").trim();
    if (text.length > limit || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(text)) throw new Error("Invalid field length or characters.");
    data[field] = text;
  }
  if (![data.email, data.country, data.product, data.quantity].every(Boolean)) throw new Error("Please complete email, country, product and quantity.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) throw new Error("Please enter a valid email address.");
  if (!purchaseTypes.some(type => type === value.purchaseType)) throw new Error("Please choose a purchase type.");
  if (value.consent !== true) throw new Error("Please agree to inquiry processing.");
  if (value.website) throw new Error("Unable to submit this form.");
  if (typeof value.reference !== "string" || !/^JZ-\d{8}-[A-F0-9]{8}$/.test(value.reference)) throw new Error("Please refresh the form and try again.");
  data.purchaseType = value.purchaseType as string;
  data.source = safeSourcePath(typeof value.source === "string" ? value.source : null) ?? "/contact/";
  data.productUrl = safeSourcePath(typeof value.productUrl === "string" ? value.productUrl : null) ?? "";
  return { data, reference: value.reference };
}

// One atomic operation: deduplicate, limit abuse, save, and index. No public read endpoint.
const saveScript = `
local old = redis.call('GET', KEYS[1])
if old then
  local previous = cjson.decode(old)
  if previous.fingerprint == ARGV[1] then return 'duplicate' else return 'conflict' end
end
for i=2,4 do
  local count = tonumber(redis.call('GET', KEYS[i]) or '0')
  local maximum = tonumber(ARGV[i+3])
  if count >= maximum then return 'limited' end
end
redis.call('SET', KEYS[1], ARGV[2], 'EX', ARGV[3])
redis.call('ZADD', KEYS[5], ARGV[4], KEYS[1])
redis.call('ZREMRANGEBYSCORE', KEYS[5], '-inf', tonumber(ARGV[4]) - tonumber(ARGV[3]) * 1000)
for i=2,4 do
  local count = redis.call('INCR', KEYS[i])
  if count == 1 then redis.call('EXPIRE', KEYS[i], i == 2 and 600 or 86400) end
end
return 'saved'
`;

async function redis(command: (string | number)[]) {
  const endpoint = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!endpoint || !token || !endpoint.startsWith("https://")) throw new Error("Storage unavailable");
  const response = await fetch(endpoint, { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(command), cache: "no-store", signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error("Storage unavailable");
  const result = await response.json();
  if (result.error) throw new Error("Storage unavailable");
  return result.result;
}

export async function receiveInquiry(request: Request) {
  const origin = request.headers.get("origin");
  const allowed = ["https://www.jozing.com", ...(process.env.VERCEL_URL ? [`https://${process.env.VERCEL_URL}`] : [])];
  if (process.env.NODE_ENV !== "production") allowed.push("http://localhost:3000", "http://localhost:3001");
  if (!origin || !allowed.includes(origin)) return json({ error: "Please submit through the JOZING website." }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return json({ error: "Invalid request format." }, 415);
  let parsed: ReturnType<typeof validateInquiry>;
  try {
    if (Number(request.headers.get("content-length") ?? 0) > 8192) return json({ error: "Form is too long." }, 413);
    const reader = request.body?.getReader();
    if (!reader) return json({ error: "Empty form." }, 400);
    let total = 0;
    const chunks: Uint8Array[] = [];
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > 8192) { await reader.cancel(); return json({ error: "Form is too long." }, 413); }
      chunks.push(value);
    }
    parsed = validateInquiry(JSON.parse(Buffer.concat(chunks).toString("utf8")));
  } catch (error) {
    return json({ error: error instanceof SyntaxError ? "Invalid form." : error instanceof Error ? error.message : "Invalid form." }, 400);
  }
  const { data, reference } = parsed;
  const fingerprint = createHash("sha256").update(JSON.stringify(data)).digest("hex");
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!token) return json({ error: "Online submission is temporarily unavailable. Please use WhatsApp or email below." }, 503);
  const hash = (value: string) => createHmac("sha256", token).update(value).digest("hex");
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const key = `inquiry:${reference}`;
  const now = Date.now();
  const record = { reference, receivedAt: new Date(now).toISOString(), ...data, fingerprint, consent: true, status: "new", notification: "not_sent", retentionDays: 365 };
  let saved: string;
  try {
    saved = await redis(["EVAL", saveScript, 5, key, `inquiry-rate:ip:${hash(ip)}`, `inquiry-rate:email:${hash(data.email.toLowerCase())}`, "inquiry-rate:daily", "inquiries:received", fingerprint, JSON.stringify(record), retentionSeconds, now, 5, 10, 100]);
  } catch {
    return json({ error: "We could not confirm that your inquiry was saved. Retry with the same form, or contact us on WhatsApp using your reference." }, 503);
  }
  if (saved === "limited") return json({ error: "Too many submissions. Please wait before retrying or contact us on WhatsApp." }, 429);
  if (saved === "conflict") return json({ error: "This reference belongs to a different brief. Change a field and submit again." }, 409);
  if (!["saved", "duplicate"].includes(saved)) return json({ error: "We could not confirm your submission. Please contact us directly." }, 503);
  // Notification is best-effort AFTER durable storage; an accepted email is not delivery proof.
  if (process.env.RESEND_API_KEY && process.env.INQUIRY_FROM_EMAIL) {
    try {
      const notification = await fetch("https://api.resend.com/emails", {
        method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json", "Idempotency-Key": `inquiry/${reference}` },
        body: JSON.stringify({ from: process.env.INQUIRY_FROM_EMAIL, to: ["sales_b2b@jozing.cn"], reply_to: data.email, subject: `Website inquiry ${reference}`, text: buildInquiry(data, reference, data.source, data.productUrl) }),
        signal: AbortSignal.timeout(8000),
      });
      if (notification.ok) {
        const result = await notification.json();
        await redis(["SET", `inquiry-notification:${reference}`, JSON.stringify({ status: "accepted_by_provider", providerId: result.id }), "EX", retentionSeconds]);
      }
    } catch { /* The saved inquiry remains available to staff in the private database. */ }
  }
  return json({ saved: true, reference }, saved === "saved" ? 201 : 200);
}
