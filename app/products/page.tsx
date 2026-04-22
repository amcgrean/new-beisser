import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getCategoryEntries } from "@/app/lib/content";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Building Materials Products | Beisser Lumber",
  description: "Browse Beisser Lumber product categories for Iowa builders and homeowners, including lumber, windows, doors, siding, decking, and hardware.",
};

export default function ProductsPage() {
  const categories = getCategoryEntries();
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://beisserlumber.com/products" },
    ],
  };

  return (
    <div className="space-y-16">
      <div>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
        <header className="mt-4 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Products</p>
          <h1 className="text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">Building materials for Iowa builders</h1>
          <p className="max-w-3xl text-base text-slate-700">
            Materials, components, and systems for residential and light commercial projects across Iowa. Browse
            categories, see brand coverage, and request pricing when you are ready.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/quote" className="inline-flex items-center rounded-md bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-greenDark">Request a Quote</Link>
            <Link href="/services" className="inline-flex items-center rounded-md border border-brand-green px-5 py-3 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-green hover:text-white">View Services</Link>
          </div>
        </header>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const heroSrc = cat.heroImage ?? "/placeholders/category.jpg";
          const desc = cat.description ?? cat.summary ?? "";

          return (
            <Link key={cat.slug} href={`/products/${cat.slug}`} className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md">
              <div className="relative h-44 w-full overflow-hidden">
                <Image src={heroSrc} alt={cat.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h2 className="text-lg font-semibold text-brand-ink">{cat.name}</h2>
                {desc ? (
                  <p className="text-sm text-slate-600">
                    {desc.slice(0, 90)}
                    {desc.length > 90 ? "..." : ""}
                  </p>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
