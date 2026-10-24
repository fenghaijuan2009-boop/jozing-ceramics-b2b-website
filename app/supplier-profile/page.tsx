import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { supplierFacts, supplierFactsScope, supplierFactsUpdated } from "../../lib/supplier-facts";
import { reportScope, testReports } from "../../lib/test-reports";

const origin = "https://www.jozing.com";
const url = `${origin}/supplier-profile/`;

export const metadata: Metadata = {
  title: "JOZING Supplier Facts & Ceramic Test Reports",
  description: "JOZING company details, ready-stock and OEM/ODM supply, sales units and buyer contacts, with original SGS and ZTS sample test reports and scope.",
  alternates: { canonical: url },
};

export default function SupplierProfilePage() {
  const profile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#page`,
    url,
    name: "JOZING Supplier Facts & Ceramic Test Reports",
    dateModified: supplierFactsUpdated,
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
    <PageHero eyebrow={`SUPPLIER FACTS · UPDATED ${supplierFactsUpdated}`} title="Company facts. Original reports." intro="A practical reference for ceramic tableware buyers: company details, supply options and laboratory documents you can read before requesting a quotation." />
    <article className="guide-article shell">
      <nav className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/about/">About JOZING</Link><span>/</span><b>Supplier Profile</b></nav>
      <h2>Company and supply facts</h2>
      <p>{supplierFactsScope}</p>
      <dl className="spec-list">{supplierFacts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <h2>What JOZING supplies</h2>
      <p>JOZING supplies ceramic and porcelain tableware including plates, bowls, mugs, cup-and-saucer sets, dinnerware sets, bakeware, serving dishes and mixed stock lots. Individual product pages provide representative offer information; the ready-stock page is the correct place to request the current dated availability list.</p>
      <ul><li><Link href="/stock/">Request today&apos;s ready-stock list</Link></li><li><Link href="/oem-odm/">Review OEM/ODM capabilities</Link></li><li><Link href="/guides/">Read ceramic sourcing guides</Link></li></ul>
      <section id="laboratory-reports">
        <h2>Original laboratory reports and their scope</h2>
        <p>{reportScope}</p>
        {testReports.map(report => <section key={report.id}>
          <h3>{report.title}</h3>
          <p><strong>{report.id}</strong> · Issued {report.issued} · {report.laboratory}</p>
          <p><strong>Submitted sample:</strong> {report.sample}. <strong>Method:</strong> {report.method}.</p>
          <p>{report.result}</p>
          <a href={report.file}>Read the complete original {report.id} report (PDF) →</a>
        </section>)}
        <p><Link href="/factory/test-reports/">Read the document notes and applicability checklist →</Link></p>
      </section>
      <h2>How commercial claims should be verified</h2>
      <p>Ready-stock offers can change quickly. Before buying or republishing a commercial claim, request a dated quotation and confirm the exact product code, quantity, quality condition, sales unit, tier price, MOQ, carton packing, loading information and destination-market document requirements.</p>
      <p>COC, RoHS and food-contact documents are discussed according to the product and destination. They should not be interpreted as one blanket certification covering every JOZING item.</p>
      <h2>Compare offers using the same information</h2>
      <ul>
        <li>Identify the lot and sales unit. For ton-based pricing, confirm net product weight versus gross packed weight.</li>
        <li>Request actual assortment, condition, carton quantities, dimensions and loading weights.</li>
        <li>Confirm the dispatch schedule after packing and inspection requirements are agreed.</li>
        <li>Match laboratory documents to the exact material, glaze, decoration and intended market.</li>
      </ul>
      <p><Link href="/guides/buy-ceramic-tableware-by-ton-from-china/">Buying ceramic tableware by the ton →</Link></p>
      <p><Link href="/guides/evaluate-ceramic-tableware-supplier-china/">Evaluating a ceramic supplier with evidence →</Link></p>
      <aside><h2>Source information</h2><p>Published by JOZING Ceramics (Xiamen Jozing Industrial Co., Ltd.), ceramic tableware supplier in Chaozhou, China — <Link href="/">www.jozing.com</Link>.</p><p><strong>Last updated:</strong> 24 October 2026. Report issue dates are listed separately above.</p><p><a href="/llms-full.txt">Read the plain-text supplier and procurement reference →</a></p></aside>
    </article>
    <section className="page-cta"><div className="shell"><p className="eyebrow">VERIFY A CURRENT OFFER</p><h2>Request dated stock and quotation details.</h2><div><Link className="btn primary" href="/contact/">Contact JOZING</Link><Link className="btn text" href="/faq/">Buyer FAQ →</Link></div></div></section>
    <SiteFooter />
  </main>;
}
