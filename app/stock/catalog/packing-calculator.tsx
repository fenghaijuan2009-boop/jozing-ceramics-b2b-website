"use client";

import { useState } from "react";

export function PackingCalculator() {
  const [cartons, setCartons] = useState("100");
  const count = Number(cartons);
  const valid = cartons !== "" && Number.isSafeInteger(count) && count > 0 && count <= 100000;
  return <section className="catalog-calculator" aria-labelledby="packing-title"><div><p className="eyebrow">PLAN YOUR QUANTITY</p><h2 id="packing-title">What does your carton count mean?</h2><p>This example uses the <a href="/products/wholesale-ready-stock-ceramic-coffee-mug-cute-3d-porcelain-cups/">cute 3D mug listing</a>: 54 pieces per carton, 62 × 35 × 33 cm and 24–25 kg gross per carton.</p><label>Number of cartons<input type="number" min="1" max="100000" step="1" value={cartons} onChange={event => setCartons(event.target.value)} aria-describedby="packing-note" /></label></div><div className="packing-results" aria-live="polite">{valid ? <><div><strong>{(count * 54).toLocaleString("en-US")}</strong><span>pieces</span></div><div><strong>{(count * .62 * .35 * .33).toLocaleString("en-US", { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</strong><span>carton CBM</span></div><div><strong>{(count * 24).toLocaleString("en-US")}–{(count * 25).toLocaleString("en-US")}</strong><span>kg gross weight</span></div></> : <p>Enter a whole number of cartons from 1 to 100,000.</p>}</div><p className="packing-note" id="packing-note">Planning example only. Carton volume = length × width × height ÷ 1,000,000 (dimensions in cm). It excludes pallets and loading gaps and does not represent confirmed stock or container capacity. Final quantities and packing require confirmation.</p></section>;
}
