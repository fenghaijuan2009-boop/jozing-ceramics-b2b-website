import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import productsData from "../../deliverables/product-catalog.json";

export const metadata: Metadata = {
  alternates: { canonical: "/stock/" },
  title: "Ceramic Tableware Stock Catalog | Wholesale Dinnerware by Ton & Carton — JOZING",
  description: "Browse 200+ ready-stock ceramic tableware lots from JOZING: plates, bowls, cups, dinner sets, bakeware and more. Factory-direct wholesale by ton or carton with tiered pricing from Chaozhou, China.",
};

type Tier = { tier: string; qty: string; price: number };
type Product = { name: string; category: string; unit: string; tiers: Tier[]; page: number };

const products = productsData as Product[];

const categories = [
  "Stock",
  "Cup",
  "Bowl",
  "Plate",
  "Dinner Set",
  "Bakeware",
  "Sauce Dish",
  "Ceramic Canister & Jar",
  "Ceramic Decoration & Vase",
  "Ceramic Pot & Kettle",
  "Cake Stand",
  "Egg Storage Container",
];

const catId = (c: string) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "JOZING Ready Stock Ceramic Tableware Catalog",
  description: "Factory-direct ready-stock ceramic tableware wholesale by ton or carton.",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      category: p.category,
      url: `https://www.jozing.cn/contact?product=${encodeURIComponent(p.name.slice(0, 60))}`,
      offers: p.tiers.length
        ? { "@type": "Offer", price: p.tiers[0].price, priceCurrency: "USD", availability: "https://schema.org/InStock" }
        : undefined,
    },
  })),
};

const cardStyle: React.CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "1.25rem",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
};

const tierStyle: React.CSSProperties = {
  fontSize: "0.78rem",
  color: "#6b7280",
  borderTop: "1px dashed #e5e7eb",
  paddingTop: "0.5rem",
  display: "flex",
  justifyContent: "space-between",
};

export default function StockPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <SiteHeader />
      <PageHero
        eyebrow="READY STOCK CATALOG"
        title="200+ stock lots, priced to move."
        intro="Factory-direct ready-stock ceramic tableware available by ton, carton or piece. Every lot below lists the sales unit and tiered wholesale price — confirm current availability and packing with our team before ordering."
      />
      <nav className="shell" aria-label="Stock categories" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", paddingBottom: "2rem" }}>
        {categories.map((c) => (
          <a key={c} href={`#${catId(c)}`} style={{ border: "1px solid #d1d5db", borderRadius: "999px", padding: "0.4rem 0.9rem", fontSize: "0.85rem", background: "#fff" }}>
            {c} ({products.filter((p) => p.category === c).length})
          </a>
        ))}
      </nav>

      {categories.map((cat) => {
        const items = products.filter((p) => p.category === cat);
        if (!items.length) return null;
        return (
          <section key={cat} id={catId(cat)} className="shell" style={{ paddingBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.6rem", margin: "0 0 1rem", borderBottom: "2px solid #0030F8", paddingBottom: "0.5rem", display: "inline-block" }}>
              {cat} <span style={{ color: "#9ca3af", fontWeight: 400 }}>· {items.length} lots</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
              {items.map((p, idx) => (
                <article key={idx} style={cardStyle}>
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.08em", color: "#0030F8", fontWeight: 700 }}>READY STOCK · {p.unit.toUpperCase()}</span>
                  <h3 style={{ fontSize: "0.95rem", lineHeight: 1.4, margin: 0 }}>{p.name}</h3>
                  <div>
                    {p.tiers.length ? (
                      <div>
                        {p.tiers.map((t) => (
                          <div key={t.tier} style={tierStyle}>
                            <span>{t.qty} {p.unit.toLowerCase()}{Number(t.qty.replace(/[^0-9]/g, "")) > 1 ? "s" : ""}</span>
                            <strong style={{ color: "#111" }}>${t.price.toFixed(2)}</strong>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>Price on request — confirm current availability.</p>
                    )}
                  </div>
                  <a href={`/contact?product=${encodeURIComponent(p.name.slice(0, 60))}`} style={{ marginTop: "auto", display: "inline-block", background: "#0030F8", color: "#fff", borderRadius: "8px", padding: "0.55rem 1rem", textAlign: "center", fontSize: "0.9rem" }}>
                    Request this lot →
                  </a>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <section className="page-cta">
        <div className="shell">
          <p className="eyebrow">NEED THE CURRENT LIST?</p>
          <h2>Stock changes fast — ask for today&apos;s availability.</h2>
          <div>
            <a className="btn primary" href="/contact">Get the latest stock list</a>
            <a className="btn text" href="https://wa.me/8615280186517" target="_blank" rel="noreferrer">WhatsApp →</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
