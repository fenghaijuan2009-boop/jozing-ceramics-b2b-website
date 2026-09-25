// Parse only explicit order quantities. Dimensions and variant descriptions stay text.
export function offerQuantity(text: string) {
  const match = text.trim().match(/^(≥\s*)?([\d,]+)(?:\s*[–-]\s*([\d,]+)|(\+))?\s+(tons?|pieces?|sets?|cartons?)(?:\s*·.*)?$/i);
  if (!match) return undefined;
  const minValue = Number(match[2].replaceAll(",", ""));
  const maxValue = match[3] ? Number(match[3].replaceAll(",", "")) : undefined;
  if (!Number.isFinite(minValue) || minValue <= 0 || (maxValue !== undefined && maxValue < minValue)) return undefined;
  return { "@type": "QuantitativeValue", minValue, ...(maxValue !== undefined ? { maxValue } : {}), unitText: match[5].toLowerCase().replace(/s$/, "") };
}

export function unitPrice(priceLabel: string, price: string) {
  const unit = priceLabel.trim().match(/^(?:price\s*\/|sold by)\s*(ton|piece|set|carton)$/i)?.[1].toLowerCase();
  if (!unit || !/^\d+(?:\.\d+)?$/.test(price)) return undefined;
  return { "@type": "UnitPriceSpecification", price, priceCurrency: "USD", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitText: unit } };
}
