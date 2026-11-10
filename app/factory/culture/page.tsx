import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../site-shell";
import { company } from "../../../lib/company";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Culture & Core Values | JOZING Ceramics",
  description: "Good ceramics. Greater possibilities. Explore JOZING’s mission, six core values and approach to lasting partnerships in ceramic tableware supply.",
  alternates: { canonical: "/factory/culture/" },
  openGraph: {
    title: "Good ceramics. Greater possibilities. | JOZING",
    description: "Our purpose, our principles and the partnerships we hope to build. Discover the JOZING brand story.",
    url: "https://www.jozing.com/factory/culture/",
    images: [{ url: "/hero-products-poster.webp", width: 1920, height: 1024, alt: "A colorful JOZING ceramic tableware collection" }],
  },
  twitter: { card: "summary_large_image", title: "Our Culture & Core Values | JOZING", description: "Good ceramics. Greater possibilities. Discover our mission and values.", images: ["/hero-products-poster.webp"] },
};

const values = [
  ["Integrity First", "We build trust through honesty, transparency, and accountability, honoring our commitments and treating every partner fairly."],
  ["Customer Success", "Our partners’ growth is our success. We go beyond supplying products to support their business development and long-term success."],
  ["Win-Win Partnership", "We believe true business success comes from creating value together. We build fair, mutually beneficial, and lasting partnerships."],
  ["Quality Matters", "We are committed to delivering reliable, functional, and competitive products, earning trust through consistent quality and creating lasting business value."],
  ["Empower Entrepreneurs", "We believe every entrepreneurial dream deserves an opportunity. Regardless of business size, we strive to provide fair opportunities, quality products, and professional support to help entrepreneurs start and grow."],
  ["Long-Term Thinking", "We never sacrifice long-term trust for short-term gains. We focus on sustainable growth, continuous improvement, and lasting partnerships."],
];

export default function CulturePage() {
  return <>
    <SiteHeader />
    <main className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.folio}><Link href="/">JOZING CERAMICS</Link><span>OUR CULTURE &amp; VALUES</span><span>BRAND BOOK · 2026</span></div>
        <section className={styles.cover} aria-labelledby="culture-title">
          <div className={styles.coverCopy}>
            <p className={styles.eyebrow}><span aria-hidden="true" /> MORE THAN TABLEWARE</p>
            <h1 id="culture-title">Good ceramics.<br /><em>Greater<br />possibilities.</em></h1>
            <p className={styles.deck}>For the tables we bring together.<br />For the businesses we help build.</p>
            <p className={styles.coverNote}>Our purpose. Our principles.<br />Our commitment to every partnership.</p>
            <div className={styles.coverActions}><a className={styles.primary} href="#our-purpose">Discover our story <span aria-hidden="true">↓</span></a><Link className={styles.textLink} href="/guides/">Product Catalog <span aria-hidden="true">↗</span></Link></div>
          </div>
          <figure className={styles.coverImage}>
            <Image src="/hero-products-poster.webp" alt="Colorful floral and fruit-pattern ceramic plates, bowls and cups arranged as a tableware collection" width={1920} height={1024} priority sizes="(max-width: 760px) 100vw, 55vw" />
            <figcaption><span>THE EVERYDAY, REIMAGINED</span><span>Ceramic collection inspiration</span></figcaption>
            <span className={styles.imageStamp} aria-hidden="true">A world of<br /><em>possibilities.</em></span>
          </figure>
        </section>
        <nav className={styles.contents} aria-label="Culture page chapters"><span>INSIDE OUR BRAND</span><a href="#our-purpose"><b>01</b> Our purpose <span aria-hidden="true">↘</span></a><a href="#our-values"><b>02</b> Our values <span aria-hidden="true">↘</span></a><a href="#in-practice"><b>03</b> Working together <span aria-hidden="true">↘</span></a></nav>
      </div>
      <section className={styles.mission} id="our-purpose" aria-labelledby="mission-title">
        <div className={`${styles.wrap} ${styles.missionLayout}`}>
          <div className={styles.chapter}><span>01 / OUR PURPOSE</span><span>OPPORTUNITY STARTS HERE</span></div>
          <div className={styles.missionHeading}><p className={styles.eyebrow}>OUR MISSION</p><h2 id="mission-title">Empowering Entrepreneurs Worldwide,<br /><em>Creating Better Lives.</em></h2></div>
          <div className={styles.missionBody}><span className={styles.quoteMark} aria-hidden="true">“</span><p>Connecting global opportunities through quality products, empowering aspiring entrepreneurs to start their businesses, and helping wholesalers grow.</p><p>We strive to turn every partnership into an opportunity for shared growth and lasting value — for businesses, families and the lives they build.</p><span className={styles.signature}>THE JOZING PHILOSOPHY</span></div>
          <div className={styles.missionFoot}><span>CERAMICS CONNECT US.</span><span>OPPORTUNITY MOVES US FORWARD.</span></div>
        </div>
      </section>
      <section className={`${styles.wrap} ${styles.values}`} id="our-values" aria-labelledby="values-title">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>02 / OUR VALUES</p><h2 id="values-title">Six principles.<br /><em>One shared direction.</em></h2></div><p>Our culture is expressed in the choices we make — how we listen, how we agree and how we work toward the next order together.</p></div>
        <div className={styles.valuesGrid}>{values.map(([title, text], index) => <article className={styles.value} key={title}><span className={styles.number}>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><span className={styles.valueMark} aria-hidden="true">{["↗", "+", "∞", "◇", "✳", "→"][index]}</span></article>)}</div>
      </section>
      <section className={styles.place} aria-labelledby="place-title">
        <div className={`${styles.wrap} ${styles.placeLayout}`}>
          <figure className={styles.warehouse}><Image src="/factory/jozing-warehouse-1200.webp" alt="Original photograph of cartons and ceramic stock inside the JOZING warehouse in Chaozhou" width={1200} height={900} sizes="(max-width: 760px) 100vw, 60vw" /><figcaption><span>CHAOZHOU, GUANGDONG, CHINA</span><span>Original JOZING warehouse photography</span></figcaption></figure>
          <div className={styles.placeCopy}><p className={styles.eyebrow}>THE PLACE BEHIND THE PROMISE</p><h2 id="place-title">Rooted in Chaozhou.<br /><em>Open to the world.</em></h2><p>Ceramic tableware connects our local experience with the ambitions of buyers around the world.</p><dl className={styles.facts}><div><dt>{company.facilityArea}</dt><dd>Facility &amp; warehouse</dd></div><div><dt>{company.ceramicExperienceSince}</dt><dd>Ceramic experience since</dd></div><div><dt>{company.registrationYear}</dt><dd>Company registration</dd></div></dl><p className={styles.address}>{company.legalName}<br />{company.address}</p><Link className={styles.textLink} href="/supplier-profile/">Explore our company facts <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
      <section className={`${styles.wrap} ${styles.practice}`} id="in-practice" aria-labelledby="practice-title">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>03 / WORKING TOGETHER</p><h2 id="practice-title">Good partnerships<br />start with <em>clarity.</em></h2></div><p>Values mean more when they shape the conversation. Here is how to turn a product idea into a clear buying brief.</p></div>
        <div className={styles.steps}>
          <article><span className={styles.stepLabel}>01 — FIND YOUR FIT</span><h3>A collection for<br />your business.</h3><p>Explore ready stock or discuss an OEM/ODM brief. Share your product references, quantities and destination.</p><Link className={styles.textLink} href="/guides/">Explore the catalog <span aria-hidden="true">↗</span></Link></article>
          <article><span className={styles.stepLabel}>02 — CHECK THE DETAILS</span><h3>A clear brief.<br />A clear agreement.</h3><p>Confirm the selling unit, assortment, condition, packing and delivery schedule for the actual order.</p><Link className={styles.textLink} href="/stock/catalog/">Compare stock information <span aria-hidden="true">↗</span></Link></article>
          <article><span className={styles.stepLabel}>03 — REVIEW THE EVIDENCE</span><h3>Confidence<br />through context.</h3><p>Check which test reports apply to the selected product. Our published laboratory reports cover identified samples and test conditions.</p><Link className={styles.textLink} href="/factory/test-reports/">Read the reports &amp; scope <span aria-hidden="true">↗</span></Link></article>
        </div>
      </section>
      <section className={styles.closing} aria-labelledby="closing-title"><div className={`${styles.wrap} ${styles.closingInner}`}><p className={styles.eyebrow}>LET’S BUILD WHAT COMES NEXT</p><h2 id="closing-title">Your next chapter.<br /><em>Let’s shape it together.</em></h2><div className={styles.closingBottom}><p>Ready stock. OEM/ODM. A conversation about your next ceramic collection.</p><div><Link className={styles.lightButton} href="/contact/?product=JOZING%20Culture%20%26%20Partnership">Discuss your buying requirements <span aria-hidden="true">↗</span></Link><Link className={styles.closingCatalog} href="/guides/">View Product Catalog <span aria-hidden="true">→</span></Link></div></div><div className={styles.endFolio}><span>JOZING CERAMICS</span><span>GOOD CERAMICS. GREATER POSSIBILITIES.</span><span>JOZING.COM</span></div></div></section>
    </main>
    <SiteFooter />
  </>;
}
