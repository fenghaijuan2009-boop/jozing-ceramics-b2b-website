export const purchaseTypes = ["Ready stock", "OEM / ODM", "Mixed container", "Not sure yet"] as const;
const sourcePaths = ["/", "/stock/", "/stock/ceramic-plates/", "/stock/dinner-set-tableware/", "/stock/ceramic-mug-cup/", "/stock/hot-sale-by-ton-carton/", "/oem-odm/", "/contact/"];
// Only published routes, never query strings or contact details.
export function safeSourcePath(value: string | null): string | null {
  if (!value) return null;
  try {
    const url = new URL(value, "https://www.jozing.cn");
    if (url.origin !== "https://www.jozing.cn") return null;
    const path = url.pathname.endsWith("/") ? url.pathname : url.pathname + "/";
    return sourcePaths.includes(path) || /^\/products\/[a-z0-9-]+\/$/.test(path) ? path : null;
  } catch { return null; }
}
export function procurementGroup(path: string): string {
  if (path === "/stock/ceramic-plates/") return "plates";
  if (path === "/stock/dinner-set-tableware/") return "dinnerware";
  if (path === "/stock/ceramic-mug-cup/") return "mugs";
  if (path === "/oem-odm/") return "oem";
  if (path.startsWith("/products/")) return "product";
  if (path.startsWith("/stock/")) return "stock";
  return path === "/" ? "home" : "other";
}
export function inquiryReference(): string {
  return "JZ-" + new Date().toISOString().slice(0, 10).replaceAll("-", "") + "-" + crypto.randomUUID().slice(0, 8).toUpperCase();
}
export function buildInquiry(data: Record<string, string>, reference: string, source: string, productUrl = ""): string {
  return ["Hello JOZING, I would like to request a ceramic tableware quotation.",
    "Inquiry reference: " + reference,
    "Source page: https://www.jozing.cn" + (safeSourcePath(source) ?? "/contact/"),
    "Purchase type: " + (purchaseTypes.some(t => t === data.purchaseType) ? data.purchaseType : "Not sure yet"),
    productUrl && safeSourcePath(productUrl)?.startsWith("/products/") ? "Product page: https://www.jozing.cn" + safeSourcePath(productUrl) : "",
    "Product / reference: " + data.product, "Required quantity: " + data.quantity, "Country / market: " + data.country,
    data.destination && "Destination port: " + data.destination, data.email && "Work email: " + data.email,
    data.message && "Additional requirements: " + data.message,
  ].filter(Boolean).join("\n");
}
