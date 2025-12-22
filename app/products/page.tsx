import Link from "next/link";
import Image from "next/image";
import { getCategoryEntries } from "@/app/lib/content";

export default function ProductsPage() {
  const categories = getCategoryEntries();

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-beisserGray">Products</h1>
        <p className="text-sm text-slate-700 max-w-3xl">
          Materials, components, and systems for residential and light commercial projects across Iowa. Browse
          categories, see brand coverage, and request pricing when you are ready.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href="/request-quote"
            className="inline-flex rounded-md bg-brand-green px-3 py-2 font-semibold text-white hover:bg-brand-accent"
          >
            Request a Quote
          </Link>
          <Link
            href="/services"
            className="inline-flex rounded-md border border-slate-300 px-3 py-2 font-semibold text-slate-700 hover:border-beisserGreen hover:text-beisserGreen"
          >
            View Services
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const heroSrc = cat.heroImage ?? "/placeholders/category.jpg";
          const desc = cat.description ?? cat.summary ?? "";

          return (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="rounded-lg overflow-hidden border shadow hover:shadow-md transition"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={heroSrc}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-lg">{cat.name}</h2>
                {desc ? (
                  <p className="text-slate-600 text-sm mt-1">
                    {desc.slice(0, 90)}
                    {desc.length > 90 ? "..." : ""}
                  </p>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
