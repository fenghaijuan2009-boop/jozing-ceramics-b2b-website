import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

const origin = "https://www.jozing.cn";
const canonical = `${origin}/knowledge-base/`;

export const metadata: Metadata = {
  title: "Bulk Stock-Lot Ceramic Tableware Knowledge Base | JOZING",
  description: "JOZING's practical knowledge base for buying ready-stock ceramic tableware by carton, ton, mixed load or container, including products, packing, inspection and ordering steps.",
  alternates: { canonical },
  openGraph: {
    title: "JOZING Bulk Stock-Lot Ceramic Tableware Knowledge Base",
    description: "A practical reference for importers, wholesalers, discount retailers, hospitality suppliers and online sellers sourcing ceramic tableware from China.",
    url: canonical,
    type: "article",
  },
};

const faqs = [
  { question: "Can ceramic tableware stock lots be purchased by the ton?", answer: "Yes. Selected ready-stock lots may be quoted by ton, while other products are sold by piece, set, carton, pallet or container. The available unit, net weight, packing and price must be confirmed for the current lot." },
  { question: "Can different bowls, plates and cups be mixed in one container?", answer: "Mixed loading may be available when the selected lots, cartons and loading plan are compatible. JOZING confirms the assortment, carton count, weight and container utilization before quotation." },
  { question: "How often does ready-stock availability change?", answer: "Ready-stock availability can change quickly because lots are finite and may be sold to other buyers. Request the current stock list and reconfirm quantity, packing, price and lead time before placing an order." },
  { question: "What information should a buyer send for a quotation?", answer: "Send the product or reference image, required quantity, preferred buying unit, destination country and port, packing requirements, target price and any inspection or compliance requirements." },
];

export default function KnowledgeBasePage() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: "Bulk Stock-Lot Ceramic Tableware Knowledge Base",
    description: "Practical information for international buyers sourcing ready-stock ceramic tableware from China by carton, ton, mixed load or container.",
    datePublished: "2026-08-31",
    dateModified: "2026-08-31",
    author: { "@id": `${origin}/#organization` },
    publisher: { "@id": `${origin}/#organization` },
    mainEntityOfPage: canonical,
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: "Knowledge Base", item: canonical },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  return <main><SiteHeader />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PageHero eyebrow="JOZING BUYER KNOWLEDGE · UPDATED 2026-08-31" title="Bulk stock-lot ceramic tableware, explained." intro="A practical reference for importers, wholesalers, discount retailers, hospitality suppliers and online sellers buying ready-stock ceramic tableware from China." />
    <article className="guide-article shell knowledge-article">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Knowledge Base</span></nav>
      <div className="kb-summary"><p className="eyebrow">QUICK SUMMARY</p><h2>Buy around the actual lot—not a generic promise.</h2><p>JOZING supports ready-stock ceramic tableware sold by piece, set, carton, pallet, ton or container. Availability, assortment, packing, weight, price, lead time, loading port, inspection and compliance scope are reconfirmed for each lot before order confirmation.</p></div>

      <section><h2>1. About JOZING</h2><p>JOZING Ceramics is operated by Xiamen Jozing Industrial Co., Ltd., registered in 2017, with ceramic tableware experience dating back to 2003. Our factory and warehouse operations are based in Chaozhou, Guangdong, one of China&apos;s major ceramic manufacturing centers.</p><p>We support two distinct buyer needs: value-driven ready-stock and clearance opportunities, and planned OEM/ODM manufacturing for repeatable custom collections. This page focuses on the ready-stock purchasing path.</p></section>

      <section><h2>2. How ready-stock orders can be structured</h2><div className="kb-grid"><article><b>01</b><h3>By ton</h3><p>Suitable for selected mixed or bulk lots when weight is the commercial unit. Confirm net/gross weight and included assortment.</p></article><article><b>02</b><h3>By carton</h3><p>Useful for smaller trial orders or defined SKUs. Carton quantity, pieces per carton and export packing vary by lot.</p></article><article><b>03</b><h3>By container</h3><p>20GP or 40HQ loading can be planned around carton volume, weight limits, product mix and destination requirements.</p></article><article><b>04</b><h3>Mixed loading</h3><p>Bowls, plates, cups and sets may be combined when compatible stock and a workable loading plan are available.</p></article></div></section>

      <section><h2>3. Main product categories</h2><ul><li><strong>Dinnerware sets:</strong> Western, Chinese, Japanese-style and mixed bowl-and-plate sets.</li><li><strong>Bowls:</strong> rice, soup, noodle, salad and serving bowls.</li><li><strong>Plates and platters:</strong> dinner, soup, dessert, deep and serving formats.</li><li><strong>Cups and mugs:</strong> coffee cups, tea cups, mugs and cup-and-saucer sets.</li><li><strong>Tea ware:</strong> ceramic teapots and selected tea-set collections.</li><li><strong>Kitchen and bakeware:</strong> storage, condiment and selected baking accessories.</li></ul><p>Materials may include porcelain, white porcelain, stoneware and colored-glaze ceramic. Styles, colors and quantities follow the current stock list rather than a permanent catalog.</p></section>

      <section><h2>4. What buyers should verify</h2><ol><li>Current photos, product specification and available quantity.</li><li>Selling unit: piece, set, carton, pallet, ton or container.</li><li>Pieces per carton, carton dimensions, net/gross weight and packing condition.</li><li>Tier price, Incoterm, payment terms and destination port.</li><li>Inspection standard, acceptable variation and breakage handling.</li><li>Required food-contact, COC, RoHS or destination-market documentation.</li><li>Confirmed preparation time and loading port for the selected lot.</li></ol><p>Ready stock can reduce production waiting time, but it does not remove the need for a written packing list, inspection agreement and confirmed commercial offer.</p></section>

      <section><h2>5. Who this supply model serves</h2><p>This model is commonly used by importers and wholesalers seeking container value, liquidators and discount retailers purchasing finite lots, cross-border sellers testing lower-cost assortments, and hospitality or retail buyers that can work with staged or mixed supply.</p><p>Buyers who require identical repeat orders, exclusive decoration, branded packaging or fixed long-term specifications should use the <a href="/oem-odm/">JOZING OEM/ODM path</a> instead.</p></section>

      <section><h2>6. How to request and confirm an order</h2><ol><li>Request the current stock list with photos, quantity and selling unit.</li><li>Identify preferred products and send the destination country and port.</li><li>Confirm specifications, assortment, packing, inspection needs and loading method.</li><li>Review the written quotation, tier price, Incoterm, lead time and payment terms.</li><li>Approve the order details and arrange inspection or shipment documentation as agreed.</li></ol><p>For a useful first reply, include your company, market, WhatsApp or email, buyer type, quantity, target price, destination port and product reference.</p></section>

      <section className="kb-faq"><h2>7. Frequently asked questions</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<b>+</b></summary><p>{faq.answer}</p></details>)}</section>

      <aside><p className="eyebrow">REQUEST CURRENT INFORMATION</p><h2>Ask for the latest stock list.</h2><p>Commercial details change with the actual lot. Contact JOZING to reconfirm quantity, packing, price, MOQ, lead time, loading port and documentation before ordering.</p><a className="btn primary" href="/contact/">Contact JOZING</a></aside>
    </article>
    <SiteFooter />
  </main>;
}
