import { NextResponse } from "next/server";
import { brands } from "@/app/data/brands";
import { productCategories } from "@/app/data/categories";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").toLowerCase();

  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results: any[] = [];

  // Brands
  for (const b of brands) {
    if (b.name.toLowerCase().includes(q)) {
      results.push({
        title: b.name,
        url: `/brands/${b.slug}`,
        image: b.logo,
        type: "Brand",
      });
    }
  }

  // Categories
  for (const c of productCategories) {
    if (
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q)
    ) {
      results.push({
        title: c.name,
        url: `/products/${c.slug}`,
        image: c.heroImage,
        type: "Product Category",
      });
    }
  }

  return NextResponse.json({ results });
}
