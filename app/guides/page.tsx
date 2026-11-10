import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "../site-shell";
import styles from "./catalog.module.css";

const pdf = "/JOZING-Stock-Ceramic-Catalog-2026.pdf";
export const metadata: Metadata = {
  title: "Product Catalog & Prices | JOZING Ceramics",
  description: "View or download the 94-page JOZING ceramic product catalog and price list. Share your selected products and quantities to confirm availability and a quotation.",
  alternates: { canonical: "https://www.jozing.com/guides/" },
};

export default function ProductCatalogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "JOZING Product Catalog",
    url: "https://www.jozing.com/guides/",
    dateModified: "2026-11-10",
    mainEntity: {
      "@type": "DigitalDocument",
      name: "Product Catalog and Price from JOZING",
      url: `https://www.jozing.com${pdf}`,
      encodingFormat: "application/pdf",
      publisher: { "@id": "https://www.jozing.com/#organization" },
    },
  };
  return <main>
    <SiteHeader />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className={`shell ${styles.catalog}`}>
      <div className={styles.copy}>
        <p className="eyebrow">JOZING CERAMICS</p>
        <h1>Product Catalog</h1>
        <p className={styles.intro}>Explore our ceramic collection and price list.</p>
        <p>Browse the catalog, save your preferred product codes and send us your quantities and destination port for a quotation.</p>
        <p className={styles.details}>2026 edition · 94 pages · PDF · 27 MB</p>
        <div className={styles.actions}>
          <a className="btn primary" href={pdf} target="_blank" rel="noopener noreferrer" data-catalog-download>View catalog (PDF) ↗</a>
          <a className="btn" href={pdf} download="JOZING-Stock-Ceramic-Catalog-2026.pdf" data-catalog-download>Download PDF ↓</a>
        </div>
        <p className={styles.notice}>Prices, stock availability, packing and delivery dates are subject to confirmation with your quotation.</p>
        <div className={styles.links}>
          <Link href="/stock/catalog/">Compare Ready Stock online →</Link>
          <Link href="/contact/?product=JOZING%20Product%20Catalog">Request a quotation →</Link>
        </div>
      </div>
      <a className={styles.cover} href={pdf} target="_blank" rel="noopener noreferrer" data-catalog-download aria-label="Open the JOZING product catalog PDF">
        <Image src="/catalog/jozing-product-catalog-2026-cover.webp" alt="Cover of Product Catalog and Price from JOZING, 2026 edition" width={778} height={1100} priority />
        <span>Product Catalog and Price from JOZING ↗</span>
      </a>
    </section>
    <SiteFooter />
  </main>;
}
