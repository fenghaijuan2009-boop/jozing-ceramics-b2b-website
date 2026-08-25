const host = "www.jozing.cn";
const key = "6f3e9a2c84b741d5a7e8c12f90b6d431";
const sitemap = await fetch(`https://${host}/sitemap.xml`).then((response) => response.text());
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
if (!urlList.length) throw new Error("No URLs found in the live sitemap.");
const response = await fetch("https://api.indexnow.org/indexnow", { method: "POST", headers: { "content-type": "application/json; charset=utf-8" }, body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }) });
if (!response.ok && response.status !== 202) throw new Error(`IndexNow returned ${response.status}: ${await response.text()}`);
console.log(`IndexNow accepted ${urlList.length} JOZING URLs (${response.status}).`);
