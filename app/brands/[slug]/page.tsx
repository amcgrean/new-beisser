import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { brands } from "@/app/data/brands";
import { productCategories } from "@/app/data/categories";
import { generateBrandMetadata } from "@/app/lib/seo";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return generateBrandMetadata(params.slug);
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = brands.find((b) => b.slug === params.slug);

  if (!brand) return notFound();

  const relatedCategories = productCategories.filter((c) =>
    brand.categories.includes(c.slug)
  );

  const description = brand.description || brand.summary;

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Brands", href: "/brands" },
          { label: brand.name },
        ]}
      />

      <div className="flex flex-col items-center gap-4">
        <div className="relative h-24 w-64">
          <Image
            src={brand.logo}
            alt={brand.name}
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-3xl font-bold text-beisserGray text-center">
          {brand.name}
        </h1>
        <p className="text-slate-600 text-center max-w-2xl">
          {description}
        </p>
      </div>

      {brand.bullets && brand.bullets.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-beisserGray text-center sm:text-left">
            What this brand is known for
          </h2>
          <ul className="list-disc list-inside space-y-1 text-slate-700 max-w-2xl">
            {brand.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {relatedCategories.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Available in These Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white"
              >
                <div className="relative h-40">
                  <Image
                    src={cat.heroImage}
                    alt={cat.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{cat.name}</h3>
                  <p className="text-slate-600 text-sm mt-1 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="text-center mt-8">
        <a
          href={brand.website}
          target="_blank"
          className="inline-flex px-4 py-2 rounded-md bg-beisserGreen text-white hover:bg-emerald-700"
        >
          Visit {brand.name}&apos;s Website
        </a>
      </div>
    </div>
  );
}
