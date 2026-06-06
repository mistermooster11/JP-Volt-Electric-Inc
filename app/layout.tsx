import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import SalePopup from "@/components/custom/popup/SalePopup";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "JP Volt Electric Inc — Licensed Electrician | West Palm Beach, FL",
    template: "%s | JP Volt Electric Inc",
  },
  description:
    "Licensed electrical contractor serving West Palm Beach and Palm Beach County. Panel upgrades, EV chargers, smart home automation, lighting, and full electrical services. License EC13011506.",
  alternates: {
    canonical: "https://[TODO: production-domain]",
  },
  openGraph: {
    type: "website",
    siteName: "JP Volt Electric Inc",
    title: "JP Volt Electric Inc — Licensed Electrician | West Palm Beach, FL",
    description:
      "Licensed electrical contractor serving West Palm Beach and Palm Beach County. Panel upgrades, EV chargers, smart home automation, lighting, and full electrical services.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "JP Volt Electric Inc" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "JP Volt Electric Inc",
  "telephone": "+17864511973",
  "url": "https://[TODO: production-domain]",
  "email": "jpvoltelectric@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "625 El Vedado",
    "addressLocality": "West Palm Beach",
    "addressRegion": "FL",
    "postalCode": "33405",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "West Palm Beach" },
    { "@type": "City", "name": "Palm Beach" },
    { "@type": "City", "name": "Lake Worth" },
    { "@type": "City", "name": "Boynton Beach" },
    { "@type": "City", "name": "Delray Beach" }
  ],
  "openingHours": "[TODO: Mo-Fr 08:00-17:00 — confirm with client]",
  "priceRange": "$$",
  "hasCredential": "Florida Electrical Contractor License EC13011506",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100089103150752",
    "https://instagram.com/jpvoltelectric"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <PageTransition />
        <SalePopup businessName="JP Volt Electric Inc" expiryDate="June 20, 2026" trade="electricians" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
