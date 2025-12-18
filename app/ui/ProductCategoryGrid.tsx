"use client";

import { useState } from "react";
import Link from "next/link";
import type { Brand } from "@/app/data/brands";

type ProductCategory = {
  slug: string;
  name: string;
  summary?: string;
  description?: string;
};

type Props = {
  categories: ProductCategory[];
  brands: Brand[];
};

export function ProductCategoryGrid({ categories, brands }: Props) {
  const [selectedBrandSlug, setSelectedBrandSlug] = useState<string>("all");

  const filterableBrands = brands;

  const selectedBrand =
    selectedBrandSlug === "all"
      ? null
      : filterableBrands.find((b) => b.slug === selectedBrandSlug) || null;

  const visibleCategories =
    selectedBrand == null
      ? categories
      : categories.filter((cat) =>
          selectedBrand.categories?.includes(cat.slug)
        );

  return (
    <div className="space-y-4">
      {/* Filter bar */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">
          Products &amp; Services
        </h1>
        <div className="flex items-center gap-2">
          <label
            htmlFor="brand-filter"
            className="text-sm text-slate-700 whitespace-nowrap"
          >
            Filter by brand:
          </label>
          <select
            id="brand-filter"
            value={selectedBrandSlug}
            onChange={(e) => setSelectedBrandSlug(e.target.value)}
            className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm"
          >
            <option value="all">All brands</option>
            {filterableBrands.map((brand) => (
              <option key={brand.slug} value={brand.slug}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedBrand && (
        <p className="text-xs text-slate-600">
          Showing categories where{" "}
          <span className="font-semibold">{selectedBrand.name}</span> is a
          featured brand.
        </p>
      )}

      {/* Categories grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCategories.map((category) => (
          <Link
            key={category.slug}
            href={`/products/${category.slug}`}
            className="group rounded-lg border border-slate-200 bg-white p-4 hover:border-beisserGreen hover:shadow-sm transition"
          >
            <h2 className="text-base font-semibold text-slate-900 group-hover:text-beisserGreen">
              {category.name}
            </h2>
            <p className="mt-1 text-sm text-slate-600 line-clamp-3">
              {category.summary || category.description}
            </p>
            <span className="mt-3 inline-flex text-xs font-medium text-beisserGreen">
              View details &rarr;
            </span>
          </Link>
        ))}
        {visibleCategories.length === 0 && (
          <div className="col-span-full rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
            No categories match this brand filter yet. Try selecting a different
            brand or resetting to &quot;All brands&quot;.
          </div>
        )}
      </div>
    </div>
  );
}
