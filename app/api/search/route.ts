import { NextResponse } from "next/server";
import { getBrandEntries } from "@/app/lib/brands";
import { productCategories } from "@/app/data/categories";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").toLowerCase();

  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results: { title: string; url: string; image: string; type: string }[] = [];
  const brands = getBrandEntries();

  for (const b of brands) {
    if (b.name.toLowerCase().includes(q)) {
      results.push({ title: b.name, url: `/brands/${b.slug}`, image: b.logo, type: "Brand" });
    }
  }

  for (const c of productCategories) {
    if (c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)) {
      results.push({ title: c.name, url: `/products/${c.slug}`, image: c.heroImage, type: "Product Category" });
    }
  }

  return NextResponse.json({ results });
}
