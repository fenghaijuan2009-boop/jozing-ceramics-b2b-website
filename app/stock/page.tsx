import type { Metadata } from "next";
import Image from "next/image";
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
  const productUrl = latestProduct ? `/products/${productSlug(latestProduct.name)}/` : "/stock/";
  const whatsappUrl = `https://wa.me/8615280186517?text=${encodeURIComponent(`Hello JOZING, I am interested in Assorted 3D Ceramic Coffee Mugs (${latestProduct?.code}). Please confirm available designs, wholesale pricing and shipping. https://www.jozing.cn${productUrl}`)}`;

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
          <div className="stock-shop-grid">
            <article className="stock-shop-card">
              <a className="stock-shop-photo" href={productUrl} aria-label={`View details: ${latestProduct.name}`}><Image src={latestProduct.image} alt={latestProduct.name} width={1200} height={1200} sizes="(max-width: 599px) 100vw, (max-width: 899px) 50vw, (max-width: 1199px) 33vw, 20vw" /></a>
              <div className="stock-shop-info">
                <h3><a href={productUrl}>Assorted 3D Ceramic Coffee Mugs</a></h3>
                <p className="stock-shop-moq">MOQ: {latestProduct.stock}</p>
                <table className="stock-shop-prices"><caption>USD / piece</caption><thead className="stock-shop-sr"><tr><th scope="col">Order quantity</th><th scope="col">Unit price (USD)</th></tr></thead><tbody>{latestProduct.tiers?.map(tier => <tr key={tier.quantity}><th scope="row">{tier.quantity}</th><td>{tier.price}</td></tr>)}</tbody></table>
                <a className="stock-shop-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp about Assorted 3D Ceramic Coffee Mugs"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20.5 11.7a8.6 8.6 0 0 1-12.8 7.5L3 20.5l1.3-4.6A8.6 8.6 0 1 1 20.5 11.7Z"/><path d="M8 7.5c-1 1.2.5 4 2.3 5.8s4.4 3 5.6 1.7l.5-1.2-2.5-1.2-.9 1c-1.4-.6-2.5-1.7-3.1-3.1l.9-1-1.2-2.4Z"/></svg>Chat on WhatsApp</a>
                <a className="stock-shop-details" href={productUrl}>View Details →</a>
              </div>
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
