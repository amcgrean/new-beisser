import type { MetadataRoute } from "next";
import { getCategoryEntries } from "@/app/lib/content";
import { getBrandEntries } from "@/app/lib/brands";
import { locations } from "@/app/data/locations";

const baseUrl = "https://beisserlumber.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/quote",
    "/locations",
    "/pros",
    "/pros/commercial-multifamily",
    "/pros/residential-builders",
    "/pros/remodelers",
    "/pros/trades-specialty",
  ];

  const productRoutes = [
    "/products/decking",
    "/products/siding",
    "/products/windows",
    "/products/doors",
    "/products/engineered-wood",
    "/products/lumber",
    "/products/millwork",
    "/products/roofing",
    "/products/weatherization",
    ...getCategoryEntries().map((category) => `/products/${category.slug}`),
  ];

  const brandRoutes = getBrandEntries().map((brand) => `/brands/${brand.slug}`);
  const locationRoutes = locations.map((location) => `/locations/${location.slug}`);

  const all = Array.from(new Set([...staticRoutes, ...productRoutes, ...brandRoutes, ...locationRoutes]));

  return all.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
