import Link from "next/link";

export function CategoryBuyingChecklist({ category }: { category: string }) {
  if (!["ceramic-plates", "ceramic-mug-cup"].includes(category)) return null;
  const mugs = category === "ceramic-mug-cup";
  return <section className="category-purchase-plan" aria-labelledby="purchase-plan-title">
    <p className="eyebrow">FROM SHORTLIST TO QUOTATION</p>
    <h2 id="purchase-plan-title">{mugs ? "Choose mugs by capacity, assortment and packing." : "Choose plates by shape, serving use and packing."}</h2>
    <div className="purchase-plan-grid">
      <article><h3>1. Match the specification</h3><p>{mugs ? "Specify usable capacity, handle clearance, decoration and intended drink service. For an assorted stocklot, ask for quantities by design and whether repeats can be supplied." : "Specify diameter or length × width, rim profile, usable serving area and stacking requirements. Confirm individual pieces versus matching sets before comparing offers."}</p></article>
      <article><h3>2. Compare the landed order</h3><p>Use the same sales unit when comparing prices. Request pieces per carton, carton dimensions, gross weight, loading quantity and a freight quote to your destination. A low piece price alone does not describe the full shipment cost.</p></article>
      <article><h3>3. Approve the actual lot</h3><p>Request current photographs and a representative sample. Agree condition criteria, acceptable defects, packing protection and the shipment schedule in writing. Check food-contact documents against the chosen product and market.</p></article>
    </div>
    <nav className="purchase-reading" aria-label="Related purchasing resources">
      <Link href="/guides/ceramic-container-loading-guide/">Packing &amp; container planning →</Link>
      <Link href="/guides/ceramic-stock-lots-vs-regular-production/">Stocklots or repeat production? →</Link>
      <Link href="/factory/test-reports/">Food-contact reports &amp; sample scope →</Link>
      <Link href="/contact/">Request a product-specific packing list →</Link>
    </nav>
  </section>;
}
