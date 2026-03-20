import type { Metadata } from "next";
import { getBrandBySlug } from "@/app/lib/brands";
import { getCategoryBySlug } from "@/app/lib/content";
import { locations } from "@/app/data/locations";

const defaultOgImage = "/og-default.svg";

export function generateBrandMetadata(slug: string): Metadata {
  const brand = getBrandBySlug(slug);

  if (!brand) return {};

  const description = brand.description || brand.summary;

  return {
    title: `${brand.name} Dealer in Iowa | Beisser Lumber`,
    description,
    openGraph: {
      title: `${brand.name} Dealer in Iowa | Beisser Lumber`,
      description,
      images: [{ url: brand.logo || defaultOgImage, width: 800, height: 600 }],
    },
  };
}

export function generateCategoryMetadata(slug: string): Metadata {
  const cat = getCategoryBySlug(slug);

  if (!cat) return {};

  return {
    title: `${cat.name} — Iowa Contractors & Homeowners | Beisser Lumber`,
    description: cat.description || cat.summary,
    openGraph: {
      title: `${cat.name} — Iowa Contractors & Homeowners | Beisser Lumber`,
      description: cat.description || cat.summary,
      images: [{ url: cat.heroImage || defaultOgImage }],
    },
  };
}

export function generateLocationMetadata(slug: string): Metadata {
  const location = locations.find((item) => item.slug === slug);

  if (!location) return {};

  return {
    title: `Beisser Lumber ${location.city} — Lumberyard & Building Materials`,
    description: `Visit Beisser Lumber in ${location.city}, Iowa for lumber, building materials, contractor support, and branch services.`,
    openGraph: {
      title: `Beisser Lumber ${location.city} — Lumberyard & Building Materials`,
      description: `Visit Beisser Lumber in ${location.city}, Iowa for lumber, building materials, contractor support, and branch services.`,
      images: [{ url: location.image || defaultOgImage }],
    },
  };
}

export function generateShowroomMetadata(): Metadata {
  return {
    title: "Beisser Lumber Johnston — Lumberyard & Building Materials",
    description:
      "Explore the Beisser Lumber Birchwood / Johnston showroom for windows, doors, millwork, and design support.",
  };
}
