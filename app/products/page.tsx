import Link from "next/link";
import Image from "next/image";
import { getCategoryEntries } from "@/app/lib/content";

export default function ProductsPage() {
  const categories = getCategoryEntries();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Products & Services</h1>

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
