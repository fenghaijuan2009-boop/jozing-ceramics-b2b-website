import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stockLots } from "../../page";
import { productSlug } from "../../product-utils";
import { SiteFooter, SiteHeader } from "../../site-shell";

const origin = "https://www.jozing.cn";

export function generateStaticParams() {
  return stockLots.map((product) => ({ slug: productSlug(product.name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = stockLots.find((item) => productSlug(item.name) === slug);
  if (!product) return {};
  const title = `${product.name} | Wholesale Ceramic Tableware — JOZING`;
  const description = `${product.type}. ${product.pack}; MOQ ${product.stock}. Request current availability, packing details and a factory-direct quotation from JOZING.`;
  return { title, description, alternates: { canonical: `${origin}/products/${slug}/` }, openGraph: { title, description, images: [product.image] } };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = stockLots.find((item) => productSlug(item.name) === slug);
  if (!product) notFound();
  const url = `${origin}/products/${slug}/`;
  const offers = product.tiers?.map((tier) => ({ "@type": "Offer", priceCurrency: "USD", price: tier.price.replace(/[$,]/g, ""), description: tier.quantity, availability: "https://schema.org/InStock", url })) ?? [];
  const productSchema = { "@context": "https://schema.org", "@type": "Product", name: product.name, sku: product.code, image: `${origin}${product.image}`, description: product.type, brand: { "@type": "Brand", name: "JOZING" }, manufacturer: { "@type": "Organization", name: "Xiamen Jozing Industrial Co., Ltd.", url: origin }, offers: offers.length ? offers : { "@type": "Offer", priceCurrency: "USD", availability: "https://schema.org/InStock", url } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` }, { "@type": "ListItem", position: 2, name: "Ready Stock", item: `${origin}/#stock` }, { "@type": "ListItem", position: 3, name: product.name, item: url }] };
  return <main><SiteHeader />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <section className="product-detail shell"><div className="product-detail-media"><img src={product.image} alt={product.name}/></div><div className="product-detail-copy"><nav className="breadcrumbs"><a href="/">Home</a><span>/</span><a href="/#stock">Ready Stock</a><span>/</span><b>{product.code}</b></nav><p className="eyebrow">READY STOCK · {product.code}</p><h1>{product.name}</h1><p className="product-intro">{product.type}. Availability changes quickly; confirm current quantity, condition, packing and loading plan before ordering.</p><dl className="spec-list"><div><dt>Supply format</dt><dd>{product.pack}</dd></div><div><dt>Starting MOQ</dt><dd>{product.stock}</dd></div><div><dt>Material</dt><dd>Porcelain / ceramic, confirmed by lot</dd></div><div><dt>Customization</dt><dd>Logo, decal and packaging subject to quantity</dd></div><div><dt>Export support</dt><dd>Inspection, packing and container planning</dd></div></dl>{product.tiers && <div className="detail-prices"><h2>{product.priceLabel ?? "Tier pricing"}</h2>{product.tiers.map((tier) => <div key={tier.quantity}><strong>{tier.price}</strong><span>{tier.quantity}</span></div>)}</div>}<a className="btn primary" href={`https://wa.me/8615280186517?text=${encodeURIComponent(`Hello JOZING, please quote ${product.code}: ${product.name}.`)}`}>Confirm stock & request quote</a></div></section>
    <section className="product-evidence"><div className="shell"><h2>Information buyers should confirm</h2><div className="evidence-grid"><article><b>01</b><h3>Current lot</h3><p>Ask for dated photos, available quantity and the exact assortment included.</p></article><article><b>02</b><h3>Packing list</h3><p>Confirm pieces per carton, carton dimensions, gross weight and CBM.</p></article><article><b>03</b><h3>Quality standard</h3><p>Agree inspection criteria, acceptable variation and compliance documents for your market.</p></article></div></div></section>
    <section className="page-cta"><div className="shell"><p className="eyebrow">BUY WITH CURRENT INFORMATION</p><h2>Request the latest packing list and availability.</h2><div><a className="btn primary" href="/contact">Contact JOZING</a><a className="btn text" href="/guides">Read buyer guides →</a></div></div></section><SiteFooter /></main>;
}
