import type { Metadata } from "next";
import { oemProducts } from "../../page";
import { oemBakewareCodes } from "../../product-classification";
import { ProductCard } from "../../product-card";
import { productSlug } from "../../product-utils";
import { PageHero, SiteFooter, SiteHeader } from "../../site-shell";

export const metadata: Metadata = {
  title: "Custom Ceramic Baking Dish Sets Wholesale | OEM/ODM | JOZING",
  description: "Source three-piece oval and rectangular ceramic baking dish sets with handles. OEM/ODM logo, floral decoration and packaging options. Starting MOQ 1,000 sets.",
  alternates: { canonical: "/oem-odm/bakeware/" },
};

export default function BakewarePage() {
  const products = oemProducts.filter(product => oemBakewareCodes.includes(product.code));
  const schema = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jozing.com/" },
      { "@type": "ListItem", position: 2, name: "OEM/ODM", item: "https://www.jozing.com/oem-odm/" },
      { "@type": "ListItem", position: 3, name: "Ceramic Bakeware", item: "https://www.jozing.com/oem-odm/bakeware/" },
    ] },
    { "@context": "https://schema.org", "@type": "ItemList", name: "OEM/ODM Ceramic Bakeware", numberOfItems: products.length, itemListElement: products.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: `https://www.jozing.com/products/${productSlug(p.name)}/` })) },
  ];
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <SiteHeader />
    <PageHero eyebrow="OEM / ODM · CERAMIC BAKEWARE" title="Custom ceramic baking dish sets for wholesale." intro="Oval and rectangular three-piece collections with handles, glossy glaze and decorative motifs for kitchenware brands, importers and hospitality buyers." />
    <section className="shell stock-category-content">
      <nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/oem-odm/">OEM/ODM</a> / Ceramic Bakeware</nav>
      <h2>Ceramic Baking Dishes &amp; Pans</h2>
      <p>Prices are in USD per three-piece set for the listed specification: $5.22 for 1,000–1,999 sets and $4.78 for 2,000 sets or more. Custom logo, decoration, packaging, sampling, freight and lead time require a confirmed quotation.</p>
      <div className="product-grid">{products.map(product => <ProductCard key={product.code} item={product} category="oem-bakeware" />)}</div>
      <h2>Build your branded bakeware collection</h2>
      <p>Send your preferred shape, design reference, logo artwork, quantity and packing requirements. Confirm the approved sample, dimensions, care instructions and export carton details before bulk production.</p>
      <a className="btn primary" href="/contact/?product=Custom%20ceramic%20bakeware&purchaseType=OEM%20%2F%20ODM&source=%2Foem-odm%2Fbakeware%2F">Request a custom bakeware quotation</a>
    </section>
    <SiteFooter />
  </main>;
}
