const host = "www.jozing.cn";
const key = "6f3e9a2c84b741d5a7e8c12f90b6d431";
const keyLocation = `https://${host}/${key}.txt`;
const keyResponse = await fetch(keyLocation, { signal: AbortSignal.timeout(30000) });
if (!keyResponse.ok || (await keyResponse.text()).trim() !== key) throw new Error("Live IndexNow ownership file is missing or invalid.");
const sitemapResponse = await fetch(`https://${host}/sitemap.xml`, { signal: AbortSignal.timeout(30000) });
if (!sitemapResponse.ok) throw new Error(`Sitemap returned ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const urlList = [...new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].replaceAll('&amp;', '&')))];
if (!urlList.length) throw new Error("No URLs found in the live sitemap.");
if (urlList.length > 10000 || urlList.some(value => { const url = new URL(value); return url.protocol !== 'https:' || url.host !== host || url.search || url.hash; })) throw new Error('Sitemap contains unsupported URLs.');
if (process.argv.includes('--dry-run')) {
  console.log(`Validated ownership file and ${urlList.length} live canonical URLs; no submission sent.`);
} else {
  const response = await fetch("https://api.indexnow.org/indexnow", { method: "POST", signal: AbortSignal.timeout(30000), headers: { "content-type": "application/json; charset=utf-8" }, body: JSON.stringify({ host, key, keyLocation, urlList }) });
  if (![200, 202].includes(response.status)) throw new Error(`IndexNow returned ${response.status}: ${await response.text()}`);
  console.log(`IndexNow received ${urlList.length} JOZING URLs (${response.status}); ${response.status === 202 ? 'key validation pending' : 'submission successful'}. This does not confirm indexing.`);
}
