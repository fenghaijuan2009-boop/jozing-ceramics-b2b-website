import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  alternates: { canonical: "/stock/" },
  title: "Current Ceramic Tableware Stock | JOZING",
  description: "Request JOZING's current ceramic tableware stock list, packing details, quantities and export quotation. Availability changes frequently and is confirmed for each inquiry.",
};

export default function StockPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="CURRENT READY STOCK"
        title="Ask for today’s available stock."
        intro="Our ceramic stock lots change frequently. Contact the JOZING team for current product photos, available quantities, packing details, loading options and the latest quotation for your destination."
      />
      <section className="page-cta">
        <div className="shell">
          <p className="eyebrow">LIVE AVAILABILITY</p>
          <h2>Tell us what you need and where it is shipping.</h2>
          <p>Include the product category, estimated quantity, target price and destination port so we can match the right stock lot.</p>
          <div>
            <a className="btn primary" href="/contact/">Request the current stock list</a>
            <a className="btn text" href="https://wa.me/8615280186517?text=Hello%20JOZING%2C%20please%20send%20me%20your%20current%20ceramic%20tableware%20stock%20list." target="_blank" rel="noreferrer">Ask on WhatsApp →</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
