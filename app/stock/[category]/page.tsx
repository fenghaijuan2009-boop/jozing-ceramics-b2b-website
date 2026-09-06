import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { stockLots } from "../../page";
import { stockCategories } from "../../stock-categories";
import { productSlug } from "../../product-utils";
import { SiteHeader, SiteFooter, PageHero } from "../../site-shell";

type Props = { params: Promise<{ category: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return stockCategories.map(c => ({ category: c.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const item = stockCategories.find(c => c.slug === category);
  if (!item) notFound();
  return { title: `${item.name} | JOZING Ready Stock`, description: `Explore JOZING ${item.name.toLowerCase()}. Request current availability, wholesale quantities and export packing details.`, alternates: { canonical: `/stock/${item.slug}/` }, ...(item.codes.length ? {} : { robots: { index: false, follow: true } }) };
}
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const item = stockCategories.find(c => c.slug === category);
  if (!item) notFound();
  const products = stockLots.filter(product => item.codes.includes(product.code));
  return <main><SiteHeader /><PageHero eyebrow="READY STOCK" title={item.name} intro="Explore our selected ceramic stock lots. Confirm current availability and packing before ordering." />
    <section className="shell stock-category-content">
      <p><a href="/">Home</a> / <a href="/stock/">Ready Stock</a> / {item.name}</p>
      {products.length ? <div className="product-grid">{products.map(product => <article className="product-card" key={product.code}>
        <a className="category-product-image" href={`/products/${productSlug(product.name)}/`}><Image src={product.image} alt={product.name} width={600} height={600} sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw" /></a>
        <div className="product-copy"><h2>{product.name}</h2><p>{product.type}</p>
          {product.tiers && <div className="price-tiers"><span>{product.priceLabel ?? "Price / ton"}</span>{product.tiers.map(tier => <div key={tier.quantity}><strong>{tier.price}</strong><small>{tier.quantity}</small></div>)}</div>}
          <p>MOQ: {product.stock}</p><a href={`/products/${productSlug(product.name)}/`}>View Details →</a>
        </div>
      </article>)}</div> : <div className="category-empty"><h2>Ask for current options</h2><p>Products in this category have not yet been published. Contact us for current photos, specifications and availability.</p><a className="btn primary" href={`/contact/?product=${encodeURIComponent(item.name)}`}>Request this category</a></div>}
    </section><SiteFooter /></main>;
}
