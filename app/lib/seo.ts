import { brands } from "@/app/data/brands";
import { productCategories } from "@/app/data/categories";

export function generateBrandMetadata(slug: string) {
  const brand = brands.find((b) => b.slug === slug);

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
  const cat = productCategories.find((c) => c.slug === slug);

  if (!cat) return {};

  return {
    title: `${cat.name} | Beisser Lumber`,
    description: cat.description,
    openGraph: {
      title: cat.name,
      description: cat.description,
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
