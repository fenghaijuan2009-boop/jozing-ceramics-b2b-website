import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { blogPosts } from "../../lib/blog-posts";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/" },
  title: "Ceramic Tableware Buying Guides | JOZING Blog",
  description: "Practical B2B buying guides for ceramic tableware: importing from China, material comparison, wholesale pricing, OEM/ODM MOQ, restaurant procurement and mug wholesale.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jozing.cn/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.jozing.cn/blog/" },
  ],
};

const cardStyle: React.CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "1.5rem",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
};

export default function BlogPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SiteHeader />
      <PageHero
        eyebrow="BUYING GUIDES"
        title="Source ceramic tableware with confidence."
        intro="Practical guides for importers, wholesalers and hospitality buyers — written by our export team, grounded in how B2B ceramic sourcing actually works."
      />
      <section className="shell" style={{ paddingBottom: "3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
          {blogPosts.map((post) => (
            <article key={post.slug} style={cardStyle}>
              <span style={{ fontSize: "0.72rem", color: "#9ca3af", letterSpacing: "0.05em", textTransform: "uppercase" }}>{post.date} · {post.readingTime}</span>
              <h2 style={{ margin: 0, fontSize: "1.2rem", lineHeight: 1.35 }}>
                <a href={`/blog/${post.slug}/`} style={{ color: "inherit", textDecoration: "none" }}>{post.title}</a>
              </h2>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6 }}>{post.description}</p>
              <a href={`/blog/${post.slug}/`} style={{ marginTop: "auto", color: "#0030F8", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>Read guide →</a>
            </article>
          ))}
        </div>
      </section>
      <section className="page-cta">
        <div className="shell">
          <p className="eyebrow">READY TO SOURCE?</p>
          <h2>Get the current stock list or discuss a custom project.</h2>
          <div>
            <a className="btn primary" href="/stock">Browse stock catalog</a>
            <a className="btn text" href="/contact">Contact our team →</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
