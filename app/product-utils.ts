export function productSlug(name: string) {
  // Keep published OEM product URLs stable after title updates.
  if (name === "3-Piece Oval Ceramic Baking Dish Set – Strawberry & Floral") return "wholesale-3-piece-oval-ceramic-baking-dish-set-with-strawberry-floral-designs";
  if (name === "3-Piece Rectangular Ceramic Baking Dish Set – Blue & White Floral") return "wholesale-3-piece-blue-floral-ceramic-baking-dish-set-with-handles";
  // Preserve the indexed URL when refreshing the existing STOCK 10 title.
  if (name === "Wholesale 300–350ml Textured Ceramic Coffee Mugs in Assorted Designs") return "manufacturer-price-porcelain-coffee-cup-12oz-stock-ceramic-mugs";
  return name.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
