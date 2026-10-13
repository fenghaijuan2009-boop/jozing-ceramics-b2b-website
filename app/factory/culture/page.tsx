import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../site-shell";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Corporate Culture & Core Values | JOZING",
  description: "Discover JOZING's mission and six core values: integrity, customer success, partnership, quality, entrepreneurship and long-term thinking.",
  alternates: { canonical: "/factory/culture/" },
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
      <header className={styles.intro}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/#factory">Factory</a><span>/</span><span>Our Culture</span></nav>
        <p className={styles.label}>THE JOZING PHILOSOPHY</p>
        <h1>Corporate Culture<br />&amp; Core Values</h1>
        <div className={styles.rule} aria-hidden="true" />
        <p className={styles.subtitle}>Our purpose. Our principles. Our commitment to every partnership.</p>
      </header>
      <section className={styles.mission} aria-labelledby="mission-title">
        <div className={styles.missionInner}>
          <p className={styles.label}>OUR MISSION</p>
          <h2 id="mission-title">Empowering Entrepreneurs Worldwide,<br /><em>Creating Better Lives.</em></h2>
          <p className={styles.missionCopy}>Connecting global opportunities through quality products, empowering aspiring entrepreneurs to start their businesses, helping wholesalers grow, create prosperity, and build better lives for their families.</p>
          <p className={styles.missionCopy}>We strive to turn every partnership into an opportunity for shared growth and lasting value.</p>
        </div>
      </section>
      <section className={styles.values} aria-labelledby="values-title">
        <div className={styles.valuesHeading}><p className={styles.label}>WHAT WE STAND FOR</p><h2 id="values-title">Our Core Values</h2><p>Six principles that guide how we work and grow together.</p></div>
        <div className={styles.grid}>{values.map(([title, text], index) => <article className={styles.value} key={title}><span className={styles.number}>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className={styles.closing}><p className={styles.label}>GROW WITH JOZING</p><h2>Shared growth. Lasting value.</h2><a href="/contact/">Start a conversation <span aria-hidden="true">↗</span></a></section>
    </main>
    <SiteFooter />
  </>;
}
