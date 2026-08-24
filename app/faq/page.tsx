import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
export const metadata: Metadata = { alternates: { canonical: "/faq/" }, title: "Ceramic Tableware Buyer FAQ | JOZING", description: "Answers about JOZING ready stock, packing, mixed loading, OEM/ODM, MOQ, samples and compliance support." };
const faqs = [
  ["How do I get the latest ready-stock list?", "Contact us by WhatsApp or email and tell us your market and preferred product types. Because stock changes quickly, photos, available quantity, packing, MOQ and pricing are confirmed for each inquiry."],
  ["Can I buy ceramic tableware by carton or by ton?", "Depending on the stock lot, supply may be discussed by carton, pallet, ton or container. The applicable sales unit and minimum quantity will be confirmed with the current packing list."],
  ["Can different products be mixed in one shipment?", "Mixed loading may be available for suitable stock lots or planned orders. Send your preferred items and destination so we can check packing compatibility and loading options."],
  ["What is your MOQ?", "MOQ is not one fixed number. It depends on ready stock or OEM/ODM, as well as product, decoration, packing and production requirements. We confirm MOQ item by item."],
  ["What can JOZING customize?", "OEM/ODM discussions can cover shape, glaze, decal or hand-applied decoration, logo and packaging. Feasibility is reviewed against your reference, quantity, target market and quality requirement."],
  ["Can I request a sample?", "Sample arrangements depend on whether the item is current stock or a new custom development. Share your product reference and project details so we can confirm the sample route, cost and timing."],
  ["What is the production or delivery lead time?", "Timing varies by stock status, product complexity, quantity, packaging and shipping plan. We confirm a realistic schedule after reviewing the complete inquiry rather than publishing a generic lead time."],
  ["How is ceramic tableware packed for export?", "Packing is matched to the product and shipment. Carton configuration, protective materials and custom packaging are confirmed in the quotation or order details."],
  ["Do you support COC and RoHS requirements?", "JOZING can discuss COC and RoHS compliance support based on the product and destination requirements. State the market, test or document requirement so it can be checked before order confirmation."],
  ["What information is needed for a quotation?", "Send the product photo or code, quality requirement, quantity, sales unit, carton packing, target price, destination port and required timing. For custom projects, also include artwork, logo and packaging references."],
];
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};
export default function FaqPage() { return <main><SiteHeader />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <PageHero eyebrow="BUYER FAQ" title="Clear answers before you source." intro="Practical guidance for ready-stock ceramic tableware, mixed loading and OEM/ODM projects. Final commercial details are always confirmed against the current stock lot or project brief." />
 <section className="faq-list shell">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>{String(i+1).padStart(2,"0")}</span><h2>{q}</h2><b>+</b></summary><p>{a}</p></details>)}</section>
 <section className="faq-note"><div className="shell"><div><p className="eyebrow">IMPORTANT</p><h2>Stock and commercial terms change.</h2></div><p>Before procurement, confirm actual condition, available quantity, price unit, MOQ, packing list, payment terms, shipping terms and container loading information for the specific offer.</p></div></section>
 <section className="page-cta"><div className="shell"><p className="eyebrow">STILL HAVE A QUESTION?</p><h2>Send it directly to our team.</h2><div><a className="btn primary" href="/contact">Contact JOZING</a><a className="btn text" href="https://wa.me/8615280186517" target="_blank" rel="noreferrer">WhatsApp →</a></div></div></section><SiteFooter /></main>; }
