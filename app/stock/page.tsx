import type { Metadata } from "next";
import { stockLots } from "../page";
import { productSlug } from "../product-utils";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  alternates: { canonical: "/stock/" },
  title: "Current Ceramic Tableware Stock | JOZING",
  description: "Request JOZING's current ceramic tableware stock list, packing details, quantities and export quotation. Availability changes frequently and is confirmed for each inquiry.",
};

export default function StockPage() {
  const latestProduct = stockLots.find((product) => product.code === "JZ-A1601655571782");

  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="CURRENT READY STOCK"
        title="Ask for today’s available stock."
        intro="Our ceramic stock lots change frequently. Contact the JOZING team for current product photos, available quantities, packing details, loading options and the latest quotation for your destination."
      />
      {latestProduct ? <section className="stock-section stock-page-products">
        <div className="shell">
          <div className="section-head"><div><p className="eyebrow">NEW READY-STOCK PRODUCT</p><h2>Assorted 3D porcelain coffee mugs.</h2></div><div className="section-note"><p>Current colors and designs are allocated by lot. Ask for dated assortment photos before confirming an order.</p></div></div>
          <div className="product-grid single-product-grid">
            <article className="product-card tiered-card">
              <div className="product-art"><span className="lot-badge">READY STOCK</span><a className="product-plus" href={`/contact/?product=${encodeURIComponent(`${latestProduct.code} - ${latestProduct.name}`)}`} aria-label={`Request a quote for ${latestProduct.name}`}>+</a><img src={latestProduct.image} alt={latestProduct.name}/><span className="preview-mark" aria-hidden="true">▧</span><a className="view-details" href={`/products/${productSlug(latestProduct.name)}`}>View Details</a></div>
              <div className="product-copy"><div><h3>{latestProduct.name}</h3><p>{latestProduct.type}</p></div><div className="price-tiers" aria-label={`${latestProduct.name} tiered prices`}><span>{latestProduct.priceLabel}</span>{latestProduct.tiers?.map((tier) => <div key={tier.quantity}><strong>{tier.price}</strong><small>{tier.quantity}</small></div>)}</div></div>
            </article>
          </div>
        </div>
      </section> : null}
      <section className="page-cta">
        <div className="shell">
          <p className="eyebrow">LIVE AVAILABILITY</p>
          <h2>Tell us what you need and where it is shipping.</h2>
          <p>Include the product category, estimated quantity, target price and destination port so we can match the right stock lot.</p>
          <div>
            <a className="btn primary" href="/contact/">Request the current stock list</a>
            <a className="btn text" href="https://wa.me/8615280186517?text=Hello%20JOZING%2C%20please%20send%20me%20your%20current%20ceramic%20tableware%20stock%20list." target="_blank" rel="noreferrer">Ask on WhatsApp →</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
