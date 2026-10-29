export const adsId = "AW-842600977";
export const inquiryConversion = `${adsId}/--KRCLap_60dEJGk5JED`;

// Never forward form fields, arbitrary query strings or customer identifiers.
export function adsPageLocation(href: string): string {
  const url = new URL(href);
  const clean = new URL(url.origin + url.pathname);
  for (const key of ["gclid", "gbraid", "wbraid"]) {
    const values = url.searchParams.getAll(key);
    if (values.length === 1 && /^[A-Za-z0-9_-]{10,256}$/.test(values[0])) clean.searchParams.set(key, values[0]);
  }
  return clean.href;
}

export function conversionParameters(detail: unknown) {
  if (!detail || typeof detail !== "object" || !("measurement_id" in detail) || typeof detail.measurement_id !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(detail.measurement_id)) return null;
  return { send_to: inquiryConversion, transaction_id: detail.measurement_id };
}
