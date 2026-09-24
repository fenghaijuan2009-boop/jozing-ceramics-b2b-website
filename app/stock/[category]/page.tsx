import type { Metadata } from "next";
import { ProductCard } from "../../product-card";
import { notFound } from "next/navigation";
import { stockLots } from "../../page";
import { stockCategories } from "../../stock-categories";
import { productSlug } from "../../product-utils";
import { SiteHeader, SiteFooter, PageHero } from "../../site-shell";

import { buyingPages } from "../buying-pages";
import { BuyingComparison } from "../../buying-comparison";
import { CatalogLink } from "../catalog-link";

type Props = { params: Promise<{ category: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return stockCategories.map(c => ({ category: c.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const item = stockCategories.find(c => c.slug === category);
  if (!item) notFound();
  const buying = buyingPages[category];
  const title = buying?.title ?? `${item.name} | JOZING Ready Stock`;
  const description = buying?.description ?? `Explore JOZING ${item.name.toLowerCase()}. Request current availability, wholesale quantities and export packing details.`;
  const image = stockLots.find(product => item.codes.includes(product.code))?.image ?? "/og.png";
  return { title, description, alternates: { canonical: `/stock/${item.slug}/` }, openGraph: { title, description, url: `https://www.jozing.cn/stock/${item.slug}/`, images: [{ url: image, alt: item.name }] }, twitter: { card: "summary_large_image", title, description, images: [image] }, ...(item.codes.length ? {} : { robots: { index: false, follow: true } }) };
}
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const item = stockCategories.find(c => c.slug === category);
  if (!item) notFound();
  const buying = buyingPages[category];
  const products = stockLots.filter(product => item.codes.includes(product.code));
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", name: `JOZING ${item.name}`, numberOfItems: products.length, itemListElement: products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: `https://www.jozing.cn/products/${productSlug(product.name)}/` })) };
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} /><SiteHeader /><PageHero eyebrow="READY STOCK" title={buying ? buying.title.split(" | ")[0] : item.name} intro={buying?.intro ?? "Explore our selected ceramic stock lots. Confirm current availability and packing before ordering."} />
    <section className="shell stock-category-content">
      <p><a href="/">Home</a> / <a href="/stock/">Ready Stock</a> / {item.name}</p>
      {buying && <CatalogLink />}
      {buying?.selections && <BuyingComparison category={item.name} products={buying.selections.codes.flatMap(code => { const product = products.find(p => p.code === code); return product ? [product] : []; })} />}
      {products.length ? <div className="product-grid">{products.map(product => <ProductCard key={product.code} item={product} category={item.slug} />)}</div> : <div className="category-empty"><h2>Ask for current options</h2><p>Products in this category have not yet been published. Contact us for current photos, specifications and availability.</p><a className="btn primary" href={`/contact/?product=${encodeURIComponent(item.name)}`}>Request this category</a></div>}
    </section>{buying && <section className="shell buying-guide" aria-labelledby="buying-heading"><h2 id="buying-heading">Buying {item.name.toLowerCase()} from JOZING</h2>{buying.questions.map(({question,answer}) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}<div className="buying-links"><a href={`/guides/${buying.guide}/`}>{buying.guideLabel} →</a><a className="btn primary" href={`/contact/?product=${encodeURIComponent(item.name)}`}>Request availability & packing list</a></div></section>}<SiteFooter /></main>;
}
