import type { MetadataRoute } from "next";
export const dynamic="force-static";
const aiBots=[
  "OAI-SearchBot","ChatGPT-User","GPTBot","Googlebot","Google-Extended",
  "Bingbot","PerplexityBot","ClaudeBot","Claude-Web","anthropic-ai",
  "Applebot","Applebot-Extended","Bytespider","Amazonbot","Meta-ExternalAgent",
  "YouBot","cohere-ai","diffbot","embeddingbot","AI2Bot","AI2Bot-Dolma",
  "FacebookBot","ICC-Crawler","CCBot","EcosiaBot","DuckDuckBot",
];
export default function robots():MetadataRoute.Robots{
  const rules:MetadataRoute.Robots["rules"]=[{userAgent:"*",allow:"/"}];
  aiBots.forEach((bot)=>{rules.push({userAgent:bot,allow:"/"})});
  return{rules,sitemap:"https://www.jozing.cn/sitemap.xml",host:"https://www.jozing.cn"};
}
