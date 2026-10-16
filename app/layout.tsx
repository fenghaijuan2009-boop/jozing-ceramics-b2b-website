import { InquiryTracking } from "./inquiry-tracking";
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteAnalytics } from "./site-analytics";

const sans = DM_Sans({ display: "optional", variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant_Garamond({ display: "optional", preload: false, variable: "--font-serif", subsets: ["latin"], weight: ["500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jozing.com"),
  alternates: { canonical: "/" },
  verification: { google: ["PyzNVgmVXAYdBNxB2x4bVG306-fMzeVaKbCZH_98pQ0", "WG98Abrx_wPH8IVbfPUX7fCuSqpiD4-vaGrOmMYHELg"] },
  title: "Wholesale Ceramic Tableware from China | JOZING",
  description: "Source ceramic tableware from China by carton, pallet, ton or container. Ready stock, mixed loading and OEM/ODM manufacturing for global B2B buyers.",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: [
      { url: "/jozing-icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/jozing-icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/jozing-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/jozing-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: { title: "JOZING Ceramics — Tableware supply, made flexible.", description: "Ready stock and OEM/ODM ceramic tableware manufacturing for global B2B buyers.", type: "website", images: [{ url: "/og.png", width: 1734, height: 907, alt: "JOZING Ceramics — Tableware supply, made flexible." }] },
  twitter: { card: "summary_large_image", title: "JOZING Ceramics — Tableware supply, made flexible.", description: "Ready stock and OEM/ODM ceramic tableware manufacturing for global B2B buyers.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const analyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-43Z67R5H54";
  const organization = { "@context": "https://schema.org", "@type": "Organization", "@id": "https://www.jozing.com/#organization", name: "Xiamen Jozing Industrial Co., Ltd.", alternateName: ["JOZING", "JOZING Ceramics"], url: "https://www.jozing.com/", logo: { "@type": "ImageObject", url: "https://www.jozing.com/jozing-logo.png", width: 240, height: 241 }, image: "https://www.jozing.com/og.png", foundingDate: "2017", description: "China ceramic tableware supplier with ceramic experience since 2003, supporting ready-stock clearance lots and OEM/ODM manufacturing for global B2B buyers.", slogan: "Tableware supply, made flexible.", knowsAbout: ["ceramic tableware", "porcelain dinnerware", "ready-stock ceramic lots", "ceramic tableware OEM", "ceramic tableware ODM", "ceramic export packing"], areaServed: "Worldwide", sameAs: ["https://www.youtube.com/@jozingstockceramic", "https://www.facebook.com/haijuan.feng", "https://www.instagram.com/jozingstockceramic"], address: { "@type": "PostalAddress", streetAddress: "No. 3, Gubantou Village, Chao'an District", addressLocality: "Chaozhou", addressRegion: "Guangdong", addressCountry: "CN" }, contactPoint: { "@type": "ContactPoint", telephone: "+8617825907898", email: "sales_b2b@jozing.cn", contactType: "sales", areaServed: "Worldwide", availableLanguage: ["English", "Chinese"] } };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.jozing.com/#website",
    name: "JOZING - Wholesale Clearance Ceramic Tableware",
    alternateName: ["JOZING", "JOZING Ceramics"],
    url: "https://www.jozing.com/",
    description: "Wholesale ready-stock clearance ceramic tableware and stocklot porcelain plates, bowls and mugs from China. Sourcing by carton, pallet, ton or container, with OEM/ODM manufacturing for global B2B buyers.",
    publisher: { "@id": "https://www.jozing.com/#organization" },
    inLanguage: "en",
  };
  return <html lang="en"><head><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(website)}}/></head><body className={`${sans.variable} ${serif.variable}`}>{children}<InquiryTracking />{analyticsId && /^G-[A-Z0-9]+$/.test(analyticsId) ? <SiteAnalytics measurementId={analyticsId} /> : null}</body></html>;
}
