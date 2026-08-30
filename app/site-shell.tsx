import { HeaderTools } from "./header-tools";
export function SiteHeader() {
  return <><div className="topbar"><span>China ceramic tableware supply partner</span><span>Ready stock · OEM/ODM · Global shipping</span><HeaderTools /></div><header className="nav shell"><a className="brand-logo" href="/" aria-label="JOZING home"><img src="/jozing-logo-fresh.png" alt="JOZING" width="567" height="158" /></a><nav aria-label="Main navigation"><a href="/stock/">Stock Catalog</a><a href="/oem-odm/">OEM/ODM</a><a href="/guides">Guides</a><a href="/blog/">Blog</a><a href="/about">About Us</a><a href="/faq">FAQ</a></nav><a className="nav-cta" href="/contact">Get a quote <span>→</span></a></header></>;
}

export function SiteFooter() {
  return <><footer><div className="shell footer-grid"><a className="brand-logo footer-logo" href="/" aria-label="JOZING home"><img src="/jozing-logo-fresh.png" alt="JOZING" width="567" height="158" /></a><p>Flexible ceramic tableware supply<br/>for global B2B buyers.</p><div><a href="/stock/">Stock Catalog</a><a href="/oem-odm/">OEM/ODM</a><a href="/guides">Guides</a><a href="/blog/">Blog</a><a href="/about">About Us</a><a href="/supplier-profile/">Supplier Facts</a><a href="/faq">FAQ</a><a href="mailto:sales@jozing.cn">Email</a><a href="/contact">Contact</a></div></div><div className="shell copyright"><span>© 2026 JOZING Ceramics. All rights reserved.</span><span>No. 3, Gubantou Village, Chao&apos;an District, Chaozhou, Guangdong, China</span></div></footer><a className="whatsapp-float" href="https://wa.me/8615280186517?text=Hello%20JOZING%2C%20I%20am%20looking%20for%20ceramic%20tableware." target="_blank" rel="noreferrer" aria-label="Contact JOZING on WhatsApp"><b>WA</b><span>WhatsApp</span></a></>;
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <section className="page-hero"><div className="shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div></section>;
}
