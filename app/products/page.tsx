import Link from "next/link";
import Image from "next/image";
import { productCategories } from "@/app/data/categories";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Products & Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/products/${cat.slug}`}
            className="rounded-lg overflow-hidden border shadow hover:shadow-md transition"
          >
            <div className="relative h-40 w-full">
              <Image
                src={cat.heroImage}
                alt={cat.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg">{cat.name}</h2>
              <p className="text-slate-600 text-sm mt-1">{cat.description.slice(0, 90)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
