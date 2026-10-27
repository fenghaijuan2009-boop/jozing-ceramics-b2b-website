import Link from "next/link";

export function MugLoadingPlan() {
  return <section className="shell buying-comparison mug-loading-plan" aria-labelledby="mug-loading-title">
    <h2 id="mug-loading-title">Plan bulk mug quantities for a 20GP or 40HQ shipment</h2>
    <p>Start with the approved carton specifications. The current <Link href="/products/wholesale-ready-stock-ceramic-coffee-mug-cute-3d-porcelain-cups/">novelty mug listing</Link> provides this example; other mugs have different packing.</p>
    <div className="buying-table-scroll" role="region" aria-label="Mug carton and container planning" tabIndex={0}>
      <table><caption>Example carton data and the information needed for an export loading plan</caption>
        <thead><tr><th scope="col">Planning item</th><th scope="col">Quantity / method</th><th scope="col">Before ordering</th></tr></thead>
        <tbody>
          <tr><th scope="row">Novelty mug carton</th><td>54 pieces; 62 × 35 × 33 cm; 24–25 kg gross</td><td>Confirm the actual assortment and final packed carton.</td></tr>
          <tr><th scope="row">Calculated carton volume</th><td>0.62 × 0.35 × 0.33 = 0.07161 m³</td><td>Use unrounded dimensions, rather than the listed approximation of 0.07 CBM.</td></tr>
          <tr><th scope="row">100-carton illustration</th><td>5,400 mugs; 7.161 m³; 2,400–2,500 kg gross</td><td>Calculation only; excludes pallets and loading gaps. This is not a full-container quantity.</td></tr>
          <tr><th scope="row">20GP / 40HQ loading</th><td>Confirmed cartons × pieces per carton</td><td>Check usable space, carton orientation, permitted payload, pallets and all other products in the shipment.</td></tr>
        </tbody>
      </table>
    </div>
    <div className="buying-links"><Link className="btn primary" href="/contact/?product=Bulk%20ceramic%20mugs%20-%20container%20packing%20plan&source=%2Fstock%2Fceramic-mug-cup%2F">Request a mug loading plan</Link><Link href="/guides/ceramic-container-loading-guide/">Read the container packing guide →</Link></div>
  </section>;
}
