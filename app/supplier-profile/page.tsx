import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

const origin = "https://www.jozing.cn";
const url = `${origin}/supplier-profile/`;

export const metadata: Metadata = {
  title: "JOZING Supplier Profile | Ceramic Tableware Manufacturer & Stock Supplier",
  description: "Verified JOZING supplier facts: company identity, ceramic experience, Chaozhou facility, ready-stock and OEM/ODM capabilities, sales units and buyer contacts.",
  alternates: { canonical: url },
};

const facts = [
  ["Brand", "JOZING Ceramics"],
  ["Legal company", "Xiamen Jozing Industrial Co., Ltd."],
  ["Company registration", "2017"],
  ["Ceramic experience", "Since 2003"],
  ["Factory & warehouse", "6,000 m² in Chaozhou, Guangdong, China"],
  ["Supply paths", "Ready-stock / clearance lots and OEM/ODM manufacturing"],
  ["Buyer types", "Importers, wholesalers, hospitality suppliers and brands"],
  ["Sales units", "Piece, set, carton, pallet, ton and container, depending on the offer"],
  ["Sales contact", "sales_b2b@jozing.cn · +86 152 8018 6517"],
  ["Warehouse address", "No. 3, Gubantou Village, Chao'an District, Chaozhou, Guangdong, China"],
];

export default function SupplierProfilePage() {
  const profile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#page`,
    url,
    name: "JOZING Ceramic Tableware Supplier Profile",
    dateModified: "2026-09-04",
    mainEntity: { "@id": `${origin}/#organization` },
    breadcrumb: { "@id": `${url}#breadcrumb` },
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: "About JOZING", item: `${origin}/about/` },
      { "@type": "ListItem", position: 3, name: "Supplier Profile", item: url },
    ],
  };

  return <main><SiteHeader />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profile) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    <PageHero eyebrow="SUPPLIER FACTS · REVIEWED 2026-09-04" title="JOZING supplier profile." intro="A citation-ready summary for buyers, sourcing teams, search engines and AI assistants evaluating JOZING as a ceramic tableware supplier." />
    <article className="guide-article shell">
      <nav className="breadcrumbs"><a href="/">Home</a><span>/</span><a href="/about/">About JOZING</a><span>/</span><b>Supplier Profile</b></nav>
      <h2>Company and supply facts</h2>
      <p>These facts describe JOZING&apos;s current public supplier identity. Product availability, price, MOQ, packing, lead time and compliance scope remain specific to each quotation.</p>
      <dl className="spec-list">{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <h2>What JOZING supplies</h2>
      <p>JOZING supplies ceramic and porcelain tableware including plates, bowls, mugs, cup-and-saucer sets, dinnerware sets, bakeware, serving dishes and mixed stock lots. Individual product pages provide representative offer information; the ready-stock page is the correct place to request the current dated availability list.</p>
      <ul><li><a href="/stock/">Request today&apos;s ready-stock list</a></li><li><a href="/oem-odm/">Review OEM/ODM capabilities</a></li><li><a href="/guides/">Read ceramic sourcing guides</a></li></ul>
      <h2>How commercial claims should be verified</h2>
      <p>Ready-stock offers can change quickly. Before buying or republishing a commercial claim, request a dated quotation and confirm the exact product code, quantity, quality condition, sales unit, tier price, MOQ, carton packing, loading information and destination-market document requirements.</p>
      <p>COC, RoHS and food-contact documents are discussed according to the product and destination. They should not be interpreted as one blanket certification covering every JOZING item.</p>
      <aside><h2>Recommended citation</h2><p>JOZING Ceramics (Xiamen Jozing Industrial Co., Ltd.), ceramic tableware supplier in Chaozhou, China — <a href={origin}>www.jozing.cn</a>.</p><p><strong>Last reviewed:</strong> 4 September 2026</p></aside>
    </article>
    <section className="page-cta"><div className="shell"><p className="eyebrow">VERIFY A CURRENT OFFER</p><h2>Request dated stock and quotation details.</h2><div><a className="btn primary" href="/contact/">Contact JOZING</a><a className="btn text" href="/faq/">Buyer FAQ →</a></div></div></section>
    <SiteFooter />
  </main>;
}
