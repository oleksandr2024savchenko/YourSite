import type { Metadata, Viewport } from "next";
import { Caveat, Geist, Geist_Mono, Newsreader } from "next/font/google";
import { dictionaries } from "@/i18n/dictionary";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/** Display serif for h1/h2 – calm, upright, with optical sizes for large headlines. */
const display = Newsreader({
  variable: "--font-display-serif",
  subsets: ["latin"],
  style: "normal",
  axes: ["opsz"],
});

/** Handwritten accent for small human notes (annotations, signature). */
const hand = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f6f2ea",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL || "https://oleksandr2024savchenko.github.io/YourSite"),
  title: dictionaries.de.meta.title,
  description: dictionaries.de.meta.description,
  // Preview builds (GitHub Pages) must not compete with the main domain in search.
  robots: process.env.NEXT_PUBLIC_NOINDEX === "true" ? { index: false, follow: false } : { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${hand.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
