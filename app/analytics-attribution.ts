const campaignSources = [
  ["linkedin", "organic_social"],
  ["youtube", "organic_social"],
  ["facebook", "organic_social"],
  ["alibaba", "referral"],
  ["made_in_china", "referral"],
] as const;

const campaignContents = ["mugs", "ton_lots", "dinnerware", "catalog"] as const;
const campaignKeys = ["utm_campaign", "utm_source", "utm_medium", "utm_content"] as const;

export type CampaignAttribution = {
  campaign_name: "ready_stock_202609";
  campaign_source: (typeof campaignSources)[number][0];
  campaign_medium: (typeof campaignSources)[number][1];
  campaign_content: (typeof campaignContents)[number];
};

// Only these complete, unambiguous campaign combinations may enter analytics.
// Other query values can contain inquiry or contact information and stay local.
export function readCampaignAttribution(search: string): CampaignAttribution | null {
  const params = new URLSearchParams(search);
  if (campaignKeys.some((key) => params.getAll(key).length !== 1)) return null;
  if (params.get("utm_campaign") !== "ready_stock_202609") return null;

  const source = campaignSources.find(([name, medium]) =>
    name === params.get("utm_source") && medium === params.get("utm_medium"));
  const content = campaignContents.find((value) => value === params.get("utm_content"));
  if (!source || !content) return null;

  return {
    campaign_name: "ready_stock_202609",
    campaign_source: source[0],
    campaign_medium: source[1],
    campaign_content: content,
  };
}
