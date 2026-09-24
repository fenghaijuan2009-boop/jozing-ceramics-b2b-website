const buyingSteps: Record<string, { title: string; text: string; links: [string, string][] }> = {
  "ceramic-vs-porcelain-vs-bone-china": {
    title: "Turn the material comparison into a sourcing shortlist",
    text: "Compare actual samples of the intended shape and decoration. Request item weight, dimensions, care instructions and food-contact documentation for the selected product. A material name alone does not establish the performance of a finished plate or mug.",
    links: [["/stock/dinner-set-tableware/", "Compare ready-stock dinnerware"], ["/stock/ceramic-mug-cup/", "Compare wholesale ceramic mugs"], ["/oem-odm/", "Develop a repeatable OEM collection"]],
  },
  "wholesale-dinnerware-pricing": {
    title: "Compare ton prices on the same basis",
    text: "For illustration, a $600 lot with 2,000 saleable pieces has a goods cost of $0.30 per piece, before freight, duty, sorting and other costs. This is a calculation example, not a quotation. Confirm whether the ton means net ceramic weight or packed gross weight, and obtain the actual saleable assortment before comparing offers.",
    links: [["/stock/hot-sale-by-ton-carton/", "Compare current ton and carton offers"], ["/guides/buy-ceramic-tableware-by-ton-from-china/", "Check the full lot-cost calculation"]],
  },
  "how-many-plates-does-a-restaurant-need": {
    title: "Build a count for each plate size",
    text: "Start with peak simultaneous covers × pieces of that size per cover, then add the plates unavailable during washing and an agreed spare allowance. For example: 80 covers × 1 dinner plate + 40 in washing + 12 spares = 132 dinner plates. This illustrative starting count is not a universal purchasing rule; adjust for menu, wash turnaround, service peaks and breakage history. Repeat the calculation for side plates and bowls.",
    links: [["/stock/dinner-set-tableware/", "Compare wholesale dinner plates and sets"], ["/blog/restaurant-tableware-procurement/", "Use the restaurant purchasing checklist"], ["/oem-odm/", "Discuss matching pieces and repeat orders"]],
  },
};
export const buyerNextStepSlugs = Object.keys(buyingSteps);
export function BuyerNextStep({ slug }: { slug: string }) {
  const step = buyingSteps[slug];
  if (!step) return null;
  return <section className="buyer-next-step"><p className="eyebrow">BUYER APPLICATION · UPDATED SEPTEMBER 24, 2026</p><h2>{step.title}</h2><p>{step.text}</p><ul>{step.links.map(([href, label]) => <li key={href}><a href={href}>{label} →</a></li>)}</ul><a className="btn primary" href={`/contact/?product=${encodeURIComponent(step.title)}`}>Discuss your buying requirements</a></section>;
}
