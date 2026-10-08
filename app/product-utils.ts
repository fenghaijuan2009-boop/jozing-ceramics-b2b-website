export function productSlug(name: string) {
  // Preserve the indexed URL when refreshing the existing STOCK 10 title.
  if (name === "Wholesale 300–350ml Textured Ceramic Coffee Mugs in Assorted Designs") return "manufacturer-price-porcelain-coffee-cup-12oz-stock-ceramic-mugs";
  return name.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
