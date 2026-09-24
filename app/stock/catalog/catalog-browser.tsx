"use client";

import { ProductCard } from "../../product-card";
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
    <div className="product-grid">{products.map(row => <ProductCard key={row.code} item={{code:row.code,name:row.name,type:row.type,image:row.image,pack:row.unit,priceLabel:row.unit,tiers:row.tiers}} category={category || "catalog"}>
      <details className="catalog-packing"><summary>Packing & quotation</summary><dl><div><dt>Carton quantity</dt><dd>{row.cartonQuantity}</dd></div><div><dt>Carton size</dt><dd>{row.cartonSize}</dd></div><div><dt>Carton gross weight</dt><dd>{row.cartonWeight}</dd></div></dl><a href={`/contact/?product=${encodeURIComponent(`${row.name} (${row.code})`)}&productUrl=${encodeURIComponent(`https://www.jozing.cn${row.href}`)}`}>Confirm this lot & request a quote →</a></details>
    </ProductCard>)}</div>
    {!products.length && <p className="catalog-empty">No matching products. Try another product name or select All Ready Stock.</p>}
  </section>;
}

