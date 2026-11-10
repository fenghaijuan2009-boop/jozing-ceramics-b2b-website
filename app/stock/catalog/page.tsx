import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../../site-shell";
import { CatalogBrowser } from "./catalog-browser";
import { PackingCalculator } from "./packing-calculator";
import { catalogPrepared, catalogRows, catalogNotice } from "./catalog-data";
import "./catalog.css";

export const metadata: Metadata = {
  title: "Ready Stock Ceramic Catalogue | Prices, MOQ & Packing | JOZING",
  description: "Compare JOZING ready-stock ceramic mugs, plates and stock lots. Download the wholesale price and MOQ catalogue, view packing details and estimate carton volume.",
  alternates: { canonical: "/stock/catalog/" },
  twitter: { card: "summary_large_image", title: "JOZING Ready Stock Procurement Catalogue", description: "Compare published prices, minimum orders and packing. Download the ceramic wholesale catalogue.", images: ["/products/mug-11000037532651/main-01.webp"] },
  openGraph: { title: "JOZING Ready Stock Procurement Catalogue", description: "Compare published prices, minimum orders and packing. Download the ceramic wholesale catalogue.", url: "https://www.jozing.com/stock/catalog/", images: [{ url: "https://www.jozing.com/products/mug-11000037532651/main-01.webp", width: 960, height: 960 }] },
};

export default function CatalogPage() {
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: "JOZING Ready Stock Procurement Catalogue", url: "https://www.jozing.com/stock/catalog/", dateModified: catalogPrepared, description: catalogNotice, mainEntity: { "@type": "ItemList", numberOfItems: catalogRows.length, itemListElement: catalogRows.map((row, index) => ({ "@type": "ListItem", position: index + 1, name: row.name, url: `https://www.jozing.com${row.href}` })) } };
  return <main><SiteHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll("<", "\\u003c") }} /><div className="shell procurement-catalog">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/stock/">Ready Stock</Link><span>/</span><span>Procurement catalogue</span></nav>
    <header className="catalog-hero"><div><p className="eyebrow">JOZING BUYER RESOURCES</p><h1>Ready Stock<br />Procurement Catalogue</h1><p className="catalog-deck">Compare ceramic stock lots, shortlist your products and prepare a better quotation request.</p><p className="catalog-date">Catalogue prepared <time dateTime={catalogPrepared}>{new Date(`${catalogPrepared}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time> · {catalogRows.length} published products</p></div><aside className="catalog-download"><span className="eyebrow">TAKE THE LIST WITH YOU</span><h2>Explore our<br />product catalogue</h2><p>Download our 94-page ceramic product catalog and price list to share with your team (PDF, 27 MB).</p><a className="btn primary" href="/JOZING-Stock-Ceramic-Catalog-2026.pdf" download="JOZING-Stock-Ceramic-Catalog-2026.pdf" data-catalog-download>Download catalogue ↓</a></aside></header>
    <p className="catalog-notice">{catalogNotice} Prices are listed in USD. Selling units differ by product; compare the quantity tier as well as the price.</p>
    <CatalogBrowser rows={catalogRows} />
    <PackingCalculator />
    <section className="catalog-next"><div><p className="eyebrow">FROM SHORTLIST TO QUOTATION</p><h2>Send us your product codes.</h2><p>Include quantities, destination port and preferred assortment. We will confirm availability, the applicable price tier and the packing list for your order.</p><Link className="btn primary" href="/contact/?product=Ready%20Stock%20Procurement%20Catalogue">Request availability & quotation →</Link></div><div><h3>Useful buying guides</h3><Link href="/guides/buy-ceramic-tableware-by-ton-from-china/">Compare ton-based offers →</Link><Link href="/guides/ceramic-container-loading-guide/">Plan cartons and mixed loading →</Link><Link href="/guides/ceramic-stock-lots-vs-regular-production/">Choose stock or OEM/ODM →</Link></div></section>
  </div><SiteFooter /></main>;
}

