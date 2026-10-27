import Link from "next/link";

const sourcingCopy: Record<string, { title: string; text: string }> = {
  "is-ceramic-dinnerware-from-china-safe": {
    title: "Need food-contact documents for your ceramic tableware order?",
    text: "Review JOZING's SGS and ZTS laboratory reports, then match the tested sample, glaze and decoration to your chosen plates or mugs. The reports cover the identified samples; they do not certify every product or current stock lot.",
  },
  "how-many-plates-does-a-restaurant-need": {
    title: "Turn your plate count into a purchasing shortlist",
    text: "Compare wholesale plate sizes and bulk ceramic mugs for your service. Send quantities by item, your washing cycle and spare-stock requirements for a product-specific quotation.",
  },
  "ceramic-vs-porcelain-vs-bone-china": {
    title: "Compare actual plates and mugs before choosing a material",
    text: "Shortlist shapes, capacities and selling units, then request samples and product-specific care and food-contact information. Confirm performance against your intended use before ordering.",
  },
  "restaurant-tableware-procurement": {
    title: "Build your restaurant tableware quotation",
    text: "Compare wholesale ceramic plates and bulk mugs, then send your quantities, destination and required delivery date. Ask for current stock photos, carton specifications and reorder availability.",
  },
  "restaurant-dinnerware-breakage": {
    title: "Choose replacement tableware against your service conditions",
    text: "Review plate rims, stacking and mug handles with actual samples. Share your current breakage issues and quantities so we can discuss suitable stock options and inspection criteria.",
  },
};

export const sourcingCalloutSlugs = Object.keys(sourcingCopy);
export const sourcingCalloutUpdated = "2026-10-27";

export function SourcingCallout({ slug, placement }: { slug: string; placement: "early" | "end" }) {
  const copy = sourcingCopy[slug];
  if (!copy) return null;
  const source = `/blog/${slug}/`;
  const message = `Hello JOZING, I am sourcing wholesale ceramic plates or bulk mugs. Please share current stock photos, prices, packing details and applicable test reports.\nArticle: https://www.jozing.com${source}`;
  return <aside className="blog-sourcing-callout" aria-labelledby={`sourcing-${placement}`} data-sourcing-callout={placement}>
    <p className="eyebrow">YOUR NEXT SOURCING STEP</p>
    <h2 id={`sourcing-${placement}`}>{copy.title}</h2>
    <p>{copy.text}</p>
    <nav aria-label={`Sourcing resources ${placement === "early" ? "within article" : "after article"}`}>
      <Link href="/stock/ceramic-plates/">Wholesale Ceramic Plates →</Link>
      <Link href="/stock/ceramic-mug-cup/">Bulk Ceramic Mugs →</Link>
      <Link href="/factory/test-reports/">View reports &amp; sample scope →</Link>
    </nav>
    <div className="sourcing-actions">
      <a className="btn primary" href={`https://wa.me/8617825907898?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" data-inquiry-category="blog-sourcing">Ask on WhatsApp</a>
      <Link className="btn text" href={`/contact/?product=${encodeURIComponent(copy.title)}&source=${encodeURIComponent(source)}`}>Send a buying brief →</Link>
    </div>
  </aside>;
}
