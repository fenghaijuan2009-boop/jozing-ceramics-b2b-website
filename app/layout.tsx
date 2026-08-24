import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["500", "600"] });

export const metadata: Metadata = {
  title: "JOZING Ceramics | Ready Stock & OEM/ODM Tableware",
  description: "Source ceramic tableware from China by carton, pallet, ton or container. Ready stock, mixed loading and OEM/ODM manufacturing for global B2B buyers.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "JOZING Ceramics — Tableware supply, made flexible.", description: "Ready stock and OEM/ODM ceramic tableware manufacturing for global B2B buyers.", type: "website", images: [{ url: "/og.png", width: 1734, height: 907, alt: "JOZING Ceramics — Tableware supply, made flexible." }] },
  twitter: { card: "summary_large_image", title: "JOZING Ceramics — Tableware supply, made flexible.", description: "Ready stock and OEM/ODM ceramic tableware manufacturing for global B2B buyers.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
