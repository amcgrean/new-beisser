import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/app/data/categories";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";
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
    <div>
      <PageHeader
        eyebrow="Brands"
        title="Brands We Carry"
        lead="Beisser Lumber partners with trusted brands in windows, doors, decking, siding, millwork, framing, and hardware. Our goal is to help you spec products that perform on Iowa jobsites and fit the needs of builders and homeowners alike."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Brands" }]}
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {brands.map((brand) => {
          const brandCategories = productCategories.filter((cat) => (brand.categories ?? []).includes(cat.slug));

          return (
            <li key={brand.slug}>
              <Link href={`/brands/${brand.slug}`} className="group card flex h-full flex-col p-5 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift">
                <span className="relative mb-4 block h-14 w-full">
                  <Image src={brand.logo} alt={brand.name} fill sizes="12rem" className="object-contain object-left" />
                </span>
                <span className="font-semibold text-ink-1 group-hover:text-brand-500">{brand.name}</span>
                {brand.summary && <span className="mt-1 line-clamp-3 text-sm text-ink-4">{brand.summary}</span>}
                {brandCategories.length > 0 && (
                  <span className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {brandCategories.slice(0, 3).map((cat) => (
                      <span key={cat.slug} className="rounded-sm bg-surface-2 px-2 py-0.5 text-xs text-ink-4">{cat.name}</span>
                    ))}
                    {brandCategories.length > 3 && <span className="px-1 py-0.5 text-xs text-ink-5">+{brandCategories.length - 3} more</span>}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
