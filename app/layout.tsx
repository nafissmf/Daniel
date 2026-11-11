import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import { getSiteUrl, seo } from "@/lib/seo";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: seo.title,
    template: "%s | Daniel & Kaylila",
  },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: "Daniel & Kaylila",
  authors: [
    { name: "Daniel Lamganda Tua Gultom" },
    { name: "Kaylila Alexandra Nesta" },
  ],
  creator: "Daniel & Kaylila",
  category: "Pendidikan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    locale: "id_ID",
    type: "website",
    url: "/",
    siteName: "Daniel & Kaylila",
    images: [seo.image],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.image.url],
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/png" }],
    apple: [{ url: "/favicon.ico", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${caveat.variable} motion`}>
      <body>{children}</body>
    </html>
  );
}
