export const dynamic = "force-static";

const aiBots = [
  "OAI-SearchBot", "ChatGPT-User", "GPTBot", "Googlebot", "Google-Extended",
  "Bingbot", "PerplexityBot", "Claude-SearchBot", "Claude-User", "ClaudeBot", "Claude-Web", "anthropic-ai",
  "Applebot", "Applebot-Extended", "Bytespider", "Amazonbot", "Meta-ExternalAgent",
  "YouBot", "cohere-ai", "diffbot", "embeddingbot", "AI2Bot", "AI2Bot-Dolma",
  "FacebookBot", "ICC-Crawler", "CCBot", "EcosiaBot", "DuckDuckBot",
];

export function GET() {
  const groups = ["*", ...aiBots].map(bot =>
    `User-agent: ${bot}\nAllow: /\nDisallow: /wp-admin/\nDisallow: /cgi-bin/`
  );
  const text = [
    "# JOZING public website crawling rules",
    ...groups,
    "Sitemap: https://www.jozing.com/sitemap.xml",
    "# LLMs Guide: https://www.jozing.com/llms.txt",
    "# Full reference: https://www.jozing.com/llms-full.txt",
    "",
  ].join("\n\n");
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
