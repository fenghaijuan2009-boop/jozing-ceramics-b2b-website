import { stockLots } from "../../page";
import { stockCategories } from "../../stock-categories";
import { productSlug } from "../../product-utils";

export const catalogPrepared = "2026-09-12";
export const catalogNotice = "Published listing information; current stock, assortment, prices and packing must be confirmed before ordering.";
export const catalogRows = stockLots.map(product => {
  const specifications = product.specifications ?? [];
  const spec = (...labels: string[]) => specifications.find(item => labels.some(label => item.label.toLowerCase() === label.toLowerCase()))?.value;
  return {
    code: product.code,
    name: product.name,
    image: product.image,
    href: `/products/${productSlug(product.name)}/`,
    categories: stockCategories.filter(category => category.codes.includes(product.code)).map(category => ({ slug: category.slug, name: category.name })),
    unit: product.priceLabel ?? (product.pack.toLowerCase().includes("ton") ? "Price / ton" : product.pack),
    moq: product.stock,
    tiers: product.tiers ?? [],
    cartonQuantity: product.cartonQty ?? spec("Packing quantity", "Quantity of Each Carton") ?? "Confirm for this lot",
    cartonSize: spec("Carton size") ?? "Confirm for this lot",
    cartonWeight: spec("Carton gross weight", "Weight Per Box") ?? "Confirm for this lot",
  };
});
export type CatalogRow = (typeof catalogRows)[number];

export function catalogCsv() {
  const header = ["Product code", "Product", "Categories", "Price basis (USD)", "Listed price tiers", "Starting MOQ", "Carton quantity", "Carton size", "Carton gross weight", "Product URL", "Catalogue prepared", "Availability status"];
  const rows = catalogRows.map(row => [row.code, row.name, row.categories.map(category => category.name).join("; "), row.unit, row.tiers.map(tier => `${tier.price}: ${tier.quantity}`).join("; ") || "Request a quote", row.moq, row.cartonQuantity, row.cartonSize, row.cartonWeight, `https://www.jozing.cn${row.href}`, catalogPrepared, catalogNotice]);
  const cell = (value: string) => `"${(/^[=+@\-\t\r]/.test(value) ? "'" + value : value).replaceAll('"', '""')}"`;
  return "\uFEFF" + [header, ...rows].map(row => row.map(cell).join(",")).join("\r\n");
}
