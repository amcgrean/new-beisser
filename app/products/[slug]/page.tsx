import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/app/data/categories";
import { brands } from "@/app/data/brands";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { getCategoryMdx } from "@/app/lib/content";
import { MdxContent } from "@/app/ui/MdxContent";

type PageProps = {
  params: { slug: string };
};

export default function ProductCategoryPage({ params }: PageProps) {
  const category = productCategories.find((c) => c.slug === params.slug);

  if (!category) return notFound();

  const categoryMdx = getCategoryMdx(category.slug);

  const categoryBrands = brands.filter((b) =>
    (b.categories ?? []).includes(category.slug)
  );

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products & Services", href: "/products" },
          { label: category.name },
        ]}
      />

      {/* Hero section */}
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] items-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-beisserGray">
            {category.name}
          </h1>
          {category.tagline && (
            <p className="text-sm font-medium text-beisserGreen">
              {category.tagline}
            </p>
          )}
          {category.description && (
            <p className="max-w-2xl text-sm text-slate-700">
              {category.description}
            </p>
          )}
          {category.bullets && category.bullets.length > 0 && (
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-slate-700">
              {category.bullets.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative h-64 overflow-hidden rounded-2xl border bg-slate-100 shadow-sm sm:h-72 lg:h-80">
          <Image
            src={category.heroImage}
            alt={category.name}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* MDX detail section */}
      {categoryMdx && (
        <section className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-beisserGray">
            {categoryMdx.frontmatter.title ?? category.name}
          </h2>
          {categoryMdx.frontmatter.summary && (
            <p className="max-w-2xl text-sm text-slate-700">
              {categoryMdx.frontmatter.summary as string}
            </p>
          )}
          <MdxContent content={categoryMdx.content} />
        </section>
      )}

      {/* Brands section */}
      {categoryBrands.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-beisserGray">
            Featured Brands in {category.name}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categoryBrands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="flex flex-col items-center rounded-lg border bg-white p-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative mb-2 h-12 w-32">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-sm font-semibold text-beisserGray">
                  {brand.name}
                </div>
                {brand.summary && (
                  <p className="mt-1 line-clamp-3 text-xs text-slate-600">
                    {brand.summary}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
