import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { blogPosts } from "../../../lib/blog-posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    alternates: { canonical: `/blog/${post.slug}/` },
    title: `${post.title} | JOZING Blog`,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: "article", url: `https://www.jozing.cn/blog/${post.slug}/` },
  };
}

const sectionStyle: React.CSSProperties = { margin: "0 0 1.5rem" };
const pStyle: React.CSSProperties = { margin: "0 0 0.9rem", color: "#374151", lineHeight: 1.75, fontSize: "1rem" };
const listStyle: React.CSSProperties = { margin: "0 0 1rem", paddingLeft: "1.4rem", color: "#374151", lineHeight: 1.7 };

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "JOZING Industrial Co., Ltd." },
    publisher: { "@type": "Organization", name: "JOZING Ceramics", url: "https://www.jozing.cn/" },
    mainEntityOfPage: `https://www.jozing.cn/blog/${post.slug}/`,
  };
  const faqSchema = post.faq
    ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: post.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
    : null;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jozing.cn/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.jozing.cn/blog/" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.jozing.cn/blog/${post.slug}/` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SiteHeader />
      <article className="shell" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "3rem" }}>
        <p style={{ fontSize: "0.8rem", color: "#9ca3af", letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 0.5rem" }}>{post.date} · {post.readingTime} · JOZING Export Team</p>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.4rem)", lineHeight: 1.25, margin: "0 0 1rem" }}>{post.title}</h1>
        <p style={{ fontSize: "1.05rem", color: "#4b5563", lineHeight: 1.7, margin: "0 0 2rem" }}>{post.description}</p>
        {post.sections.map((section) => (
          <section key={section.h2} style={sectionStyle}>
            <h2 style={{ fontSize: "1.3rem", margin: "0 0 0.8rem" }}>{section.h2}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i} style={pStyle}>{p}</p>
            ))}
            {section.list && (
              <ul style={listStyle}>
                {section.list.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        {post.faq && (
          <section style={{ margin: "2rem 0", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.2rem", margin: "0 0 1rem" }}>Quick answers</h2>
            {post.faq.map((f) => (
              <div key={f.q} style={{ marginBottom: "1rem" }}>
                <h3 style={{ fontSize: "1rem", margin: "0 0 0.4rem" }}>{f.q}</h3>
                <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.65 }}>{f.a}</p>
              </div>
            ))}
          </section>
        )}
        <section className="page-cta" style={{ marginTop: "1rem" }}>
          <div className="shell">
            <p className="eyebrow">READY TO SOURCE?</p>
            <h2 style={{ fontSize: "1.4rem" }}>Talk to our team about your order.</h2>
            <div>
              <a className="btn primary" href="/contact">Request a quote</a>
              <a className="btn text" href="/stock">Browse stock catalog →</a>
            </div>
          </div>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
