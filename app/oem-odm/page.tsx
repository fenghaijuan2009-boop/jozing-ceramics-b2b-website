import { ProductCard } from "../product-card";
import { oemProducts } from "../page";
import { oemBakewareCodes } from "../product-classification";
import { productSlug } from "../product-utils";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  alternates: { canonical: "/oem-odm/" },
  title: "Ceramic Tableware Manufacturer in China | OEM/ODM | JOZING",
  description: "Custom ceramic tableware from Chaozhou, China. Explore OEM/ODM shapes, glazes, logos and packaging, with sampling support for brands and importers.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jozing.com/" },
    { "@type": "ListItem", position: 2, name: "OEM/ODM", item: "https://www.jozing.com/oem-odm/" },
  ],
};

const process = [
  ["01", "Share your brief", "A reference image, sketch, target market or existing product tells us where to start. Shape, glaze, decoration, logo and packaging goals are captured in a short commercial brief."],
  ["02", "Feasibility & quote", "We review the design against production capability, quantity, decoration method and target price, then confirm sampling cost, timeline and commercial terms."],
  ["03", "Sampling", "Prototype samples confirm shape, glaze and decoration. Adjustments are made until the sample matches your commercial and quality requirement."],
  ["04", "Bulk production", "Production is scheduled against the confirmed sample. In-process checks cover forming, glazing, firing and decoration quality."],
  ["05", "QC & export packing", "Finished goods are inspected, packed to export standard and prepared for container loading with inspection support if required."],
];

const customizations = [
  ["Shape & size", "Plates, bowls, cups, mugs, sets and tableware shapes developed to your drawings or reference."],
  ["Glaze & color", "Glaze colors, finishes and surface effects matched to your brand or market taste."],
  ["Decoration", "Decal, hand-painted, underglaze and logo decoration applied to your artwork."],
  ["Packaging", "Carton configuration, protective inserts, gift boxes and brand packaging."],
];

export default function OemOdmPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", name: "JOZING OEM/ODM Ceramic Tableware", numberOfItems: oemProducts.length, itemListElement: oemProducts.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: `https://www.jozing.com/products/${productSlug(product.name)}/` })) };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <SiteHeader />
      <h1 style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clipPath: "inset(50%)", whiteSpace: "nowrap", border: 0 }}>OEM/ODM Ceramic Tableware</h1>
      <section className="shell stock-category-content">
        <div className="product-grid">{oemProducts.filter(product => oemBakewareCodes.includes(product.code)).map(product => <ProductCard key={product.code} item={product} category="oem-bakeware" />)}</div>
        <h2 style={{ marginTop: "3rem" }}>Tableware, Cups &amp; Serving Collections</h2>
        <div className="product-grid">{oemProducts.filter(product => !oemBakewareCodes.includes(product.code)).map(product => <ProductCard key={product.code} item={product} category={"oem-odm"} />)}</div>
      </section>

      <section className="shell" style={{ paddingBottom: "3rem" }}>
        <div className="oem-intro" style={{ marginBottom: "2rem" }}>
          <p className="eyebrow">WHAT WE CUSTOMIZE</p>
          <h2>Every element of the product.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
          {customizations.map(([t, d]) => (
            <article key={t} style={{ border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.25rem", background: "#fff" }}>
              <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>{t}</h3>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6 }}>{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell" style={{ paddingBottom: "3rem" }}>
        <p className="eyebrow">HOW IT WORKS</p>
        <h2 style={{ fontSize: "1.6rem", margin: "0 0 1.5rem" }}>From brief to bulk, in five steps.</h2>
        <div style={{ display: "grid", gap: "1rem" }}>
          {process.map(([n, t, d]) => (
            <article key={n} style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: "1rem", alignItems: "start", borderBottom: "1px solid #e5e7eb", paddingBottom: "1rem" }}>
              <span style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0030F8" }}>{n}</span>
              <div>
                <h3 style={{ margin: "0 0 0.35rem", fontSize: "1.1rem" }}>{t}</h3>
                <p style={{ margin: 0, color: "#4b5563", fontSize: "0.92rem", lineHeight: 1.6 }}>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>



      <section className="page-cta">
        <div className="shell">
          <p className="eyebrow">START A CUSTOM PROJECT</p>
          <h2>Send your reference — we&apos;ll check feasibility.</h2>
          <div>
            <a className="btn primary" href="/contact/?product=Custom%20ceramic%20tableware&purchaseType=OEM%20%2F%20ODM&source=%2Foem-odm%2F">Discuss your project</a>
            <a className="btn text" href="/stock">Browse ready stock instead →</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
