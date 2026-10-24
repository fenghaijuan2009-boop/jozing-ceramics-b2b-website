import { allProducts } from "../page";
import { productSlug } from "../product-utils";
import { oemProductCodes } from "../product-classification";
import { guides } from "../guides/guide-data";
import { evidenceGuideSlugs, supplierFacts, supplierFactsScope, supplierFactsUpdated } from "../../lib/supplier-facts";
import { reportScope, testReports } from "../../lib/test-reports";

export const dynamic = "force-static";
const origin = "https://www.jozing.com";

export function GET() {
  const sections = [
    "# JOZING Ceramics — Supplier and Procurement Reference",
    "> Published by JOZING, a China-based B2B ceramic tableware supplier. This text accompanies the public website; it is not an independent supplier review.",
    `Reference updated: ${supplierFactsUpdated}\nCanonical website: ${origin}/\nIndex: ${origin}/llms.txt\nSitemap: ${origin}/sitemap.xml`,
    "## Company and supply facts",
    `Source: ${origin}/supplier-profile/\n\n${supplierFacts.map(([label, value]) => `- ${label}: ${value}`).join("\n")}\n\n${supplierFactsScope}`,
    "## Laboratory documents",
    `Source: ${origin}/factory/test-reports/\n\n${reportScope}`,
    ...testReports.map(report => [
      `### ${report.title} — ${report.id}`,
      `- Original PDF: ${origin}${report.file}`,
      `- Laboratory: ${report.laboratory}`,
      `- Issue date: ${report.issued}`,
      `- Submitted sample: ${report.sample}`,
      `- Method: ${report.method}`,
      `- Results and conclusion: ${report.result}`,
    ].join("\n")),
    "## Procurement guides",
    ...guides.filter(guide => evidenceGuideSlugs.includes(guide.slug)).map(guide => [
      `### ${guide.title}`,
      `Source: ${origin}/guides/${guide.slug}/\nUpdated: ${guide.updated}`,
      guide.description,
      ...guide.sections.map(section => [
        `#### ${section.heading}`,
        ...section.paragraphs,
        ...(section.bullets ? [section.bullets.map(item => `- ${item}`).join("\n")] : []),
      ].join("\n\n")),
      (guide.relatedLinks ?? []).map(link => `- [${link.label}](${origin}${link.href})`).join("\n"),
    ].join("\n\n")),
    "## Published product catalogue",
    `Source: ${origin}/stock/catalog/\n\nThe following ${allProducts.length} listings reproduce public product-page information, including ready-stock and OEM/ODM listings. These are published offer references, not a live inventory feed or a binding quotation. Selling unit, quantity tier, packing, dispatch timing and availability must be confirmed for the actual order. Missing information has not been inferred. No report applies to every listing by default.`,
    ...allProducts.map(product => [
      `### ${product.name}`,
      `- Product code: ${product.code}`,
      `- Page: ${origin}/products/${productSlug(product.name)}/`,
      `- Supply route: ${oemProductCodes.includes(product.code) ? "OEM/ODM" : "Ready Stock"}`,
      ...(product.material ? [`- Material: ${product.material}`] : []),
      ...(product.size ? [`- Size: ${product.size}`] : []),
      ...(product.capacity ? [`- Capacity: ${product.capacity}`] : []),
      ...(product.priceLabel ? [`- Published pricing unit: ${product.priceLabel}`] : []),
      ...(product.tiers ?? []).map(tier => `- Published price tier: ${tier.price}; quantity: ${tier.quantity}`),
      ...(product.pack ? [`- Published packing: ${product.pack}`] : []),
      ...(product.cartonQty ? [`- Carton quantity: ${product.cartonQty}`] : []),
      ...(product.leadTime ? [`- Published lead time (confirm for order): ${product.leadTime}`] : []),
    ].join("\n")),
    "## Current quotation and contact",
    `Send the product code or assortment brief, quantity, destination and packing requirements. JOZING will confirm the applicable offer and supporting documents.\n\nContact: ${origin}/contact/\nEmail: sales_b2b@jozing.cn\nWhatsApp: https://wa.me/8617825907898`,
  ];
  return new Response(`${sections.join("\n\n")}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
