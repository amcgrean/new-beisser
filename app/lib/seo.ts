import { getBrandBySlug } from "@/app/lib/brands";
import { getCategoryBySlug } from "@/app/lib/content";

export function generateBrandMetadata(slug: string) {
  const brand = getBrandBySlug(slug);

  if (!brand) return {};

  const description = brand.description || brand.summary;

  return {
    title: `${brand.name} | Beisser Lumber`,
    description,
    openGraph: {
      title: `${brand.name} at Beisser Lumber`,
      description,
      images: [
        {
          url: brand.logo,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}


export function generateCategoryMetadata(slug: string) {
  const cat = getCategoryBySlug(slug);

  if (!cat) return {};

  return {
    title: `${cat.name} | Beisser Lumber`,
    description: cat.description || cat.summary,
    openGraph: {
      title: cat.name,
      description: cat.description || cat.summary,
      images: [{ url: cat.heroImage }],
    },
  };
}

export function generateShowroomMetadata() {
  return {
    title: "Johnston Showroom & Millwork Center | Beisser Lumber",
    description:
      "Explore the largest window, door, and millwork showroom in the region at Beisser Lumber’s Johnston Millwork Center.",
  };
}
