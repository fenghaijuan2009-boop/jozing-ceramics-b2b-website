import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jozing.cn"),
  alternates: { canonical: "/" },
  verification: { google: "PyzNVgmVXAYdBNxB2x4bVG306-fMzeVaKbCZH_98pQ0" },
  title: "JOZING Ceramics | Ready Stock & OEM/ODM Tableware",
  description: "Source ceramic tableware from China by carton, pallet, ton or container. Ready stock, mixed loading and OEM/ODM manufacturing for global B2B buyers.",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "JOZING Ceramics — Tableware supply, made flexible.", description: "Ready stock and OEM/ODM ceramic tableware manufacturing for global B2B buyers.", type: "website", images: [{ url: "/og.png", width: 1734, height: 907, alt: "JOZING Ceramics — Tableware supply, made flexible." }] },
  twitter: { card: "summary_large_image", title: "JOZING Ceramics — Tableware supply, made flexible.", description: "Ready stock and OEM/ODM ceramic tableware manufacturing for global B2B buyers.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", "@id": "https://www.jozing.cn/#organization", name: "Xiamen Jozing Industrial Co., Ltd.", alternateName: ["JOZING", "JOZING Ceramics"], url: "https://www.jozing.cn/", logo: { "@type": "ImageObject", url: "https://www.jozing.cn/jozing-logo.png" }, image: "https://www.jozing.cn/og.png", foundingDate: "2017", description: "China ceramic tableware supplier with ceramic experience since 2003, supporting ready-stock clearance lots and OEM/ODM manufacturing for global B2B buyers.", slogan: "Tableware supply, made flexible.", knowsAbout: ["ceramic tableware", "porcelain dinnerware", "ready-stock ceramic lots", "ceramic tableware OEM", "ceramic tableware ODM", "ceramic export packing"], areaServed: "Worldwide", address: { "@type": "PostalAddress", streetAddress: "No. 3, Gubantou Village, Chao'an District", addressLocality: "Chaozhou", addressRegion: "Guangdong", addressCountry: "CN" }, contactPoint: { "@type": "ContactPoint", telephone: "+86-15280186517", email: "sales@jozing.cn", contactType: "sales", areaServed: "Worldwide", availableLanguage: ["English", "Chinese"] } };
  const website = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://www.jozing.cn/#website", name: "JOZING Ceramics", url: "https://www.jozing.cn/", publisher: { "@id": "https://www.jozing.cn/#organization" }, inLanguage: "en" };
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(website)}}/>{children}</body></html>;
}
