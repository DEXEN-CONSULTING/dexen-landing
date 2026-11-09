import type { MetadataRoute } from "next";
import { site } from "@/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/terminos`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/privacidad`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
