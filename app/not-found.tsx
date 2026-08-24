import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./site-shell";

export const metadata: Metadata = { title: "Page Not Found | JOZING" };

export default function NotFound() {
  return (
    <main>
      <SiteHeader />
      <section className="shell" style={{ padding: "120px 0", textAlign: "center" }}>
        <p className="eyebrow">404</p>
        <h1 style={{ fontSize: "clamp(2.5rem,6vw,4rem)", margin: "0.5rem 0 1rem" }}>Page not found.</h1>
        <p style={{ maxWidth: "480px", margin: "0 auto" }}>The page you are looking for does not exist or has moved. Explore our ready-stock ceramic tableware or contact our team directly.</p>
        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a className="btn primary" href="/">Back to homepage</a>
          <a className="btn text" href="/contact">Contact JOZING →</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
