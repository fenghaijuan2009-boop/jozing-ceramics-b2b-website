const routes = [
  ["/stock/ceramic-plates/", "Wholesale ceramic plates", "White, square & serving plates"],
  ["/stock/dinner-set-tableware/", "Ready-stock dinnerware", "Sets, individual pieces & mixed lots"],
  ["/stock/ceramic-mug-cup/", "Bulk ceramic mugs", "Compare designs, capacity & packing"],
  ["/oem-odm/", "OEM / ODM tableware", "Custom shapes, logo & packaging"],
];
export function ProcurementNav({ current }: { current?: string }) {
  return <nav className="procurement-nav" aria-label="Shop by purchasing need">{routes.map(([href, label, detail]) => <a href={href} key={href} aria-current={current === href ? "page" : undefined}><strong>{label}</strong><span>{detail}</span></a>)}</nav>;
}
