import type { MetadataRoute } from "next";

const BASE = "https://[TODO: production-domain]";

const serviceRoutes = [
  "/electrical-wiring",
  "/meter-panel",
  "/ev-charger",
  "/lighting",
  "/landscape-lighting",
  "/outlet-and-switch",
  "/smart-home",
  "/security-cameras",
  "/troubleshooting",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = serviceRoutes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/services-page`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/about-us`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.7 },
    { url: `${BASE}/contact-us`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/blog-unclogme`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.6 },
    ...serviceUrls,
  ];
}
