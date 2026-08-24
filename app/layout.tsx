import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jozing.cn"),
  alternates: { canonical: "/" },
  title: "JOZING Ceramics | Ready Stock & OEM/ODM Tableware",
  description: "Source ceramic tableware from China by carton, pallet, ton or container. Ready stock, mixed loading and OEM/ODM manufacturing for global B2B buyers.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  verification: { google: "PyzNVgmVXAYdBNxB2x4bVG306-fMzeVaKbCZH_98pQ0" },
  openGraph: { title: "JOZING Ceramics — Tableware supply, made flexible.", description: "Ready stock and OEM/ODM ceramic tableware manufacturing for global B2B buyers.", type: "website", url: "https://www.jozing.cn/", siteName: "JOZING Ceramics", images: [{ url: "/og.png", width: 1734, height: 907, alt: "JOZING Ceramics — Tableware supply, made flexible." }] },
  twitter: { card: "summary_large_image", title: "JOZING Ceramics — Tableware supply, made flexible.", description: "Ready stock and OEM/ODM ceramic tableware manufacturing for global B2B buyers.", images: ["/og.png"] },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JOZING Industrial Co., Ltd.",
  url: "https://www.jozing.cn/",
  logo: "https://www.jozing.cn/jozing-logo.png",
  description: "Ceramic tableware manufacturer and exporter in Chaozhou, China. Ready stock clearance and OEM/ODM manufacturing for global B2B buyers.",
  address: { "@type": "PostalAddress", addressLocality: "Chaozhou", addressRegion: "Guangdong", addressCountry: "CN" },
  contactPoint: { "@type": "ContactPoint", telephone: "+86-15280186517", contactType: "sales", availableLanguage: ["English", "Chinese"] },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "JOZING Ceramics",
  url: "https://www.jozing.cn/",
  inLanguage: "en",
  description: "Ready stock and OEM/ODM ceramic tableware supply from China.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
    {children}
  </body></html>;
}
