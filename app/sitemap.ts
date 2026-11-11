import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.VERCEL_ENV === "preview") return [];
  return [
    {
      url: getSiteUrl(),
      lastModified: "2026-11-11",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
