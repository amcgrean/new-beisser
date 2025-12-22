import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { MdxContent } from "@/app/ui/MdxContent";

import {
  getCategoryEntries,
  getCategoryMdx,
  getCategoryBySlug,
} from "@/app/lib/content";

import { getBrandEntries } from "@/app/lib/brands";

type PageProps = {
  params: { slug: string };
};

export default function ProductCategoryPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.slug);
  if (!category) return notFound();

  const categoryMdx = getCategoryMdx(category.slug);

  const allBrands = getBrandEntries();
  const categoryBrands = allBrands.filter((b) =>
    (b.categories ?? []).includes(category.slug)
  );

  const heroSrc = category.heroImage ?? "/placeholders/category.jpg";

  const mdxBody =
    (categoryMdx?.frontmatter?.body as string | undefined) ??
    categoryMdx?.content;

  const description = category.description ?? category.summary ?? "";
  const subcategories = category.subcategories ?? [];
  const useCases = category.useCases ?? [];
  const materials = category.materials ?? [];

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: category.name },
        ]}
      />

      {/* Hero section */}
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] items-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-beisserGray">
            {category.name}
          </h1>

          {category.tagline ? (
            <p className="text-sm font-medium text-beisserGreen">
              {category.tagline}
            </p>
          ) : null}

          {description ? (
            <p className="max-w-2xl text-sm text-slate-700">{description}</p>
          ) : null}

          {Array.isArray(category.bullets) && category.bullets.length > 0 ? (
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-slate-700">
              {category.bullets.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="relative h-64 overflow-hidden rounded-2xl border bg-slate-100 shadow-sm sm:h-72 lg:h-80">
          <Image src={heroSrc} alt={category.name} fill className="object-cover" />
        </div>
      </section>

      <section className="grid gap-4 rounded-xl border bg-white p-4 shadow-sm md:grid-cols-3">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-beisserGray">Category Coverage</h2>
          {subcategories.length ? (
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {subcategories.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-700">
              Explore common options and packages available through Beisser Lumber.
            </p>
          )}
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-beisserGray">Typical Uses</h2>
          {useCases.length ? (
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-700">
              Built for residential and light commercial projects across Iowa.
            </p>
          )}
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-beisserGray">Materials & Options</h2>
          {materials.length ? (
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {materials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-700">
              Material selections tailored to your plans, climate considerations, and budgets.
            </p>
          )}
        </div>
      </section>

      {/* MDX detail section */}
      {categoryMdx && mdxBody ? (
        <section className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-beisserGray">
            {(categoryMdx.frontmatter.title as string) ?? category.name}
          </h2>

          {categoryMdx.frontmatter.summary ? (
            <p className="max-w-2xl text-sm text-slate-700">
              {categoryMdx.frontmatter.summary as string}
            </p>
          ) : null}

          <MdxContent content={mdxBody} />
        </section>
      ) : null}

      <section className="flex flex-wrap gap-3 rounded-xl border bg-slate-50 p-4">
        <div className="text-sm text-slate-800">
          Ready for pricing or product guidance? Tell us about your project and we’ll connect you with the right
          team member.
        </div>
        <Link
          href="/request-quote"
          className="inline-flex rounded-md bg-brand-green px-3 py-2 text-sm font-semibold text-white hover:bg-brand-accent"
        >
          Request a Quote
        </Link>
      </section>

      {/* Brands section */}
      {categoryBrands.length > 0 ? (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-beisserGray">
            Featured Brands in {category.name}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categoryBrands.map((brand) => {
              const brandLogo = brand.logo ?? "/placeholders/brand.png";

              return (
                <Link
                  key={brand.slug}
                  href={`/brands/${brand.slug}`}
                  className="flex flex-col items-center rounded-lg border bg-white p-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="relative mb-2 h-12 w-32">
                    <Image
                      src={brandLogo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="text-sm font-semibold text-beisserGray">
                    {brand.name}
                  </div>

                  {brand.summary ? (
                    <p className="mt-1 line-clamp-3 text-xs text-slate-600">
                      {brand.summary}
                    </p>
                  ) : null}
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export function generateStaticParams() {
  return getCategoryEntries().map((c) => ({ slug: c.slug }));
}
