import type { Metadata } from "next";
import { Cormorant_Infant, Outfit, Caveat } from "next/font/google";
import "./globals.css";
import siteData from "@/lib/siteData";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteData.seo.title,
  description: siteData.seo.description,
  keywords: [...siteData.seo.keywords],
  authors: [{ name: siteData.name }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    type: "website",
    locale: "fr_FR",
    siteName: siteData.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.title,
    description: siteData.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${outfit.variable} ${caveat.variable}`}>
      <body className="font-sans bg-cream text-coffee antialiased">
        {children}
      </body>
    </html>
  );
}
