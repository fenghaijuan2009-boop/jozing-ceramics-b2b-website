const campaignSources = [
  ["linkedin", "organic_social"],
  ["youtube", "organic_social"],
  ["facebook", "organic_social"],
  ["alibaba", "referral"],
  ["made_in_china", "referral"],
  ["google", "cpc"],
] as const;

const campaignContents = ["mugs", "ton_lots", "dinnerware", "catalog"] as const;
const campaignKeys = ["utm_campaign", "utm_source", "utm_medium", "utm_content"] as const;

export type CampaignAttribution = {
  campaign_name: "ready_stock_202609" | "peru_ton_202610";
  campaign_source: (typeof campaignSources)[number][0];
  campaign_medium: (typeof campaignSources)[number][1];
  campaign_content: (typeof campaignContents)[number];
};

// Only these complete, unambiguous campaign combinations may enter analytics.
// Other query values can contain inquiry or contact information and stay local.
export function readCampaignAttribution(search: string): CampaignAttribution | null {
  const params = new URLSearchParams(search);
  if (campaignKeys.some((key) => params.getAll(key).length !== 1)) return null;
  const campaign = params.get("utm_campaign");
  if (campaign !== "ready_stock_202609" && campaign !== "peru_ton_202610") return null;
  if (campaign === "peru_ton_202610" && (params.get("utm_source") !== "google" || params.get("utm_medium") !== "cpc" || params.get("utm_content") !== "ton_lots")) return null;
  if (campaign === "ready_stock_202609" && params.get("utm_source") === "google") return null;

  const source = campaignSources.find(([name, medium]) =>
    name === params.get("utm_source") && medium === params.get("utm_medium"));
  const content = campaignContents.find((value) => value === params.get("utm_content"));
  if (!source || !content) return null;

  return {
    campaign_name: campaign,
    campaign_source: source[0],
    campaign_medium: source[1],
    campaign_content: content,
  };
}
