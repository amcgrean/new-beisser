import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/app/data/categories";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { getBrandEntries } from "@/app/lib/brands";

export const metadata: Metadata = {
  title: "Brand Partners | Beisser Lumber",
  description: "Explore brand partners carried by Beisser Lumber across windows, doors, siding, decking, lumber, millwork, and hardware categories.",
};

export default function BrandsPage() {
  const brands = getBrandEntries();
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Brands", item: "https://beisserlumber.com/brands" },
    ],
  };

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Brands", href: "/brands" }]} />

      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-beisserGray">Brands We Carry</h1>
        <p className="max-w-2xl text-sm text-slate-700">
          Beisser Lumber partners with trusted brands in windows, doors, decking, siding, millwork, framing, and hardware. Our goal is to help you spec products that perform on Iowa jobsites and fit the needs of builders and homeowners alike.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {brands.map((brand) => {
          const brandCategories = productCategories.filter((cat) => (brand.categories ?? []).includes(cat.slug));

          return (
            <Link key={brand.slug} href={`/brands/${brand.slug}`} className="flex flex-col items-center rounded-lg border bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="relative mb-3 h-14 w-36">
                <Image src={brand.logo} alt={brand.name} fill className="object-contain" />
              </div>
              <div className="text-sm font-semibold text-beisserGray">{brand.name}</div>
              {brand.summary && <p className="mt-1 line-clamp-3 text-xs text-slate-600">{brand.summary}</p>}
              {brandCategories.length > 0 && (
                <div className="mt-3 w-full border-t pt-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Common Categories</div>
                  <ul className="mt-1 space-y-0.5 text-[11px] text-slate-600">
                    {brandCategories.slice(0, 3).map((cat) => <li key={cat.slug}>{cat.name}</li>)}
                    {brandCategories.length > 3 && <li>+ more</li>}
                  </ul>
                </div>
              )}
            </Link>
          );
        })}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
