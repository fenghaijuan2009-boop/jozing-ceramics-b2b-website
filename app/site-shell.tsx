import Link from "next/link";
import { FactoryMenu } from "./factory-menu";
import { HeaderTools } from "./header-tools";
import { StockMenu } from "./stock-menu";
export function SiteHeader() {
  return <><div className="topbar"><span>China · Bulk Ceramic Tableware Supply</span><span>Ready stock · OEM / ODM · FOB · CIF · FCL · Mixed Container · Global shipping</span><div className="topbar-contacts"><a href="mailto:sales_b2b@jozing.cn">sales_b2b@jozing.cn</a><a href="https://wa.me/8617825907898" target="_blank" rel="noreferrer">WhatsApp: +8617825907898</a></div><HeaderTools /></div><header className="nav shell"><Link className="brand-logo" href="/" aria-label="JOZING home"><img src="/jozing-icon-192.png" alt="JOZING" width="192" height="192" /></Link><nav aria-label="Main navigation"><Link href="/">Home</Link><StockMenu /><Link href="/oem-odm/">OEM/ODM</Link><FactoryMenu /><Link href="/guides">Guides</Link><Link href="/blog/">Blog</Link><Link href="/about">About Us</Link><Link href="/faq">FAQ</Link></nav><Link className="nav-cta" href="/contact">Get a quote <span>→</span></Link></header></>;
}

export function SiteFooter() {
  return <><footer><div className="shell footer-grid"><Link className="brand-logo footer-logo" href="/" aria-label="JOZING home"><img src="/jozing-icon-192.png" alt="JOZING" width="192" height="192" /></Link><p>Flexible ceramic tableware supply<br/>for global B2B buyers.</p><div><Link href="/stock/">All Ready Stock</Link><Link href="/stock/catalog/">Procurement Catalogue</Link><Link href="/oem-odm/">OEM/ODM</Link><Link href="/guides">Guides</Link><Link href="/knowledge-base/">Knowledge Base</Link><Link href="/blog/">Blog</Link><Link href="/about">About Us</Link><Link href="/supplier-profile/">Supplier Facts</Link><Link href="/factory/test-reports/">Test Reports</Link><Link href="/factory/culture/">Our Culture</Link><Link href="/faq">FAQ</Link><a href="mailto:sales_b2b@jozing.cn">Email</a><Link href="/contact">Contact</Link></div></div><div className="shell copyright"><span>© 2026 JOZING Ceramics. All rights reserved.</span><span>No. 3, Gubantou Village, Chao&apos;an District, Chaozhou, Guangdong, China</span></div></footer><a className="whatsapp-float" href="https://wa.me/8617825907898?text=Hello%20JOZING%2C%20I%20am%20looking%20for%20ceramic%20tableware." target="_blank" rel="noreferrer" aria-label="Contact JOZING on WhatsApp"><b>WA</b><span>WhatsApp</span></a></>;
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <section className="page-hero"><div className="shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div></section>;
}
