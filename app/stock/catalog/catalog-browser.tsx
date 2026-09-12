"use client";

import Image from "next/image";
import { useState } from "react";
import type { CatalogRow } from "./catalog-data";

export function CatalogBrowser({ rows }: { rows: CatalogRow[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const categories = Array.from(new Map(rows.flatMap(row => row.categories.map(item => [item.slug, item] as const))).values());
  const products = rows.filter(row => (!category || row.categories.some(item => item.slug === category)) && `${row.name} ${row.code}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <section className="catalog-products" aria-labelledby="catalog-products-title">
    <div className="catalog-section-head"><div><p className="eyebrow">COMPARE THE LISTINGS</p><h2 id="catalog-products-title">Find your next stock lot</h2></div><p aria-live="polite">{products.length} of {rows.length} products</p></div>
    <div className="catalog-filters"><label>Search product or code<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try mugs, plates or STOCK · 16" /></label><label>Product category<select value={category} onChange={event => setCategory(event.target.value)}><option value="">All Ready Stock</option>{categories.map(item => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></label></div>
    <div className="catalog-list">{products.map(row => <article className="catalog-row" key={row.code}>
      <a className="catalog-photo" href={row.href}><Image src={row.image} alt={row.name} width={220} height={220} sizes="(max-width: 600px) 92px, 140px" /></a>
      <div className="catalog-product-copy"><span className="catalog-code">{row.code}</span><h3><a href={row.href}>{row.name}</a></h3><p>MOQ: <strong>{row.moq}</strong></p><p>{row.categories.map(item => item.name).join(" · ")}</p><a className="catalog-details" href={row.href}>Photos & specifications →</a></div>
      <div className="catalog-prices"><span className="eyebrow">{row.unit} · USD</span>{row.tiers.length ? row.tiers.map(tier => <div key={tier.quantity}><strong>{tier.price}</strong><span>{tier.quantity}</span></div>) : <p>Request a quotation</p>}</div>
      <details className="catalog-packing"><summary>Packing & quotation</summary><dl><div><dt>Carton quantity</dt><dd>{row.cartonQuantity}</dd></div><div><dt>Carton size</dt><dd>{row.cartonSize}</dd></div><div><dt>Carton gross weight</dt><dd>{row.cartonWeight}</dd></div></dl><a href={`/contact/?product=${encodeURIComponent(`${row.name} (${row.code})`)}`}>Confirm this lot & request a quote →</a></details>
    </article>)}</div>
    {!products.length && <p className="catalog-empty">No matching products. Try another product name or select All Ready Stock.</p>}
  </section>;
}
