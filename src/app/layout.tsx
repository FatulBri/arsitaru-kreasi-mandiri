import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "Arsitaru Arsitek | Studio Arsitektur & Interior Bekasi";
const description =
  "Arsitaru Arsitek (CV. Arsitaru Kreasi Mandiri) — studio desain arsitektur dan interior di Bekasi. Melayani desain rumah tinggal, Design & Build, renovasi, interior, dan tata ruang di Bekasi, Tangerang, dan Jabodetabek.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://arsitaru-arsitek.vercel.app",
  ),
  title,
  description,
  keywords: [
    "arsitek Bekasi",
    "arsitek Tangerang",
    "arsitek Jabodetabek",
    "desain rumah Bekasi",
    "studio arsitektur interior",
    "design and build Bekasi",
    "renovasi rumah",
    "Arsitaru Arsitek",
    "CV. Arsitaru Kreasi Mandiri",
  ],
  authors: [{ name: site.legalName }],
  creator: site.brand,
  openGraph: {
    title,
    description,
    locale: "id_ID",
    type: "website",
    siteName: site.brand,
    images: [
      {
        url: "/images/og.jpg",
        width: 1280,
        height: 720,
        alt: "Arsitaru Arsitek — studio desain arsitektur dan interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
