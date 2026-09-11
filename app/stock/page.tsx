import type { Metadata } from "next";
import Image from "next/image";
import { stockLots } from "../page";
import { productSlug } from "../product-utils";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  alternates: { canonical: "/stock/" },
  title: "All Ready Stock | JOZING",
  description: "Request JOZING's current ceramic tableware stock list, packing details, quantities and export quotation. Availability changes frequently and is confirmed for each inquiry.",
};

export default function StockPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", name: "JOZING Ready Stock Ceramic Tableware", numberOfItems: stockLots.length, itemListElement: stockLots.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: `https://www.jozing.cn/products/${productSlug(product.name)}/` })) };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <SiteHeader />
      <PageHero
        eyebrow="CURRENT READY STOCK"
        title="All Ready stock"
        intro="Browse all published ready-stock ceramic products. View product photos, wholesale prices and minimum order quantities, then contact us to confirm availability."
      />
      <section className="shell stock-category-content">
        <p>{stockLots.length} ready-stock products</p>
        <div className="product-grid">{stockLots.map(product => <article className="product-card" key={product.code}>
        <a className="category-whatsapp" href={`https://wa.me/8615280186517?text=${encodeURIComponent(`Hello JOZING, I am interested in ${product.name} (${product.code}). Please confirm pricing and availability. https://www.jozing.cn/products/${productSlug(product.name)}/`)}`} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp inquiry about ${product.name}`}>WhatsApp ↗</a>
        <a className="category-product-image" href={`/products/${productSlug(product.name)}/`}><Image src={product.image} alt={product.name} width={600} height={600} sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw" /></a>
        <div className="product-copy"><h2>{product.name}</h2><p>{product.type}</p>
          {product.tiers && <div className="price-tiers"><span>{product.priceLabel ?? "Price / ton"}</span>{product.tiers.map(tier => <div key={tier.quantity}><strong>{tier.price}</strong><small>{tier.quantity}</small></div>)}</div>}
          <p>MOQ: {product.stock}</p><a href={`/products/${productSlug(product.name)}/`}>View Details →</a>
        </div>
      </article>)}</div>
      </section>
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
