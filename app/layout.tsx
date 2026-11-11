import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
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
  title: "Daniel & Kaylila – Bersama untuk Undip yang Lebih Baik",
  description:
    "Daniel Lamganda Tua Gultom dan Kaylila Alexandra Nesta. Dua mahasiswa Undip dengan pengalaman kepemimpinan, organisasi, dan pengabdian.",
  openGraph: {
    title: "Daniel & Kaylila – Bersama untuk Undip yang Lebih Baik",
    description:
      "Daniel Lamganda Tua Gultom dan Kaylila Alexandra Nesta. Bersama untuk Undip yang lebih baik.",
    locale: "id_ID",
    type: "website",
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
