import type { MetadataRoute } from "next";
import { getCategoryEntries, getBlogEntries } from "@/app/lib/content";
import { getBrandEntries } from "@/app/lib/brands";
import { locations } from "@/app/data/locations";

const baseUrl = "https://beisserlumber.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/careers",
    "/contact",
    "/quote",
    "/service-request",
    "/locations",
    "/pros",
    "/pros/commercial-multifamily",
    "/pros/residential-builders",
    "/pros/remodelers",
    "/pros/trades-specialty",
    "/services",
    "/services/design",
    "/services/estimating",
    "/services/installation",
    "/blog",
  ];

  const productRoutes = getCategoryEntries().map((category) => `/products/${category.slug}`);
  const brandRoutes = getBrandEntries().map((brand) => `/brands/${brand.slug}`);
  const locationRoutes = locations.map((location) => `/locations/${location.slug}`);
  const blogRoutes = getBlogEntries().map((entry) => `/blog/${entry.slug}`);

  const all = Array.from(new Set([...staticRoutes, ...productRoutes, ...brandRoutes, ...locationRoutes, ...blogRoutes]));

  return all.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
