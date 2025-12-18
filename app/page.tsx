import Link from "next/link";
import Image from "next/image";
import { HomeCarousel } from "./ui/HomeCarousel";
import { productCategories } from "./data/categories";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HomeCarousel />

      {/* Quick intro */}
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-beisserGray">
            Your Building Materials Partner in Iowa
          </h2>
          <p className="text-sm text-slate-700">
            Beisser Lumber is a family- and employee-owned building materials
            supplier serving professional builders, remodelers, and contractors
            across Iowa. From framing packages to finished millwork and
            showrooms that help your clients make decisions, our goal is to keep
            your jobs moving and your crews supported.
          </p>
          <p className="text-sm text-slate-700">
            With locations in Grimes, Coralville, Fort Dodge, and our
            Birchwood/Johnston showroom and millwork facility, we offer
            centralized service with local relationships and jobsite knowledge.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/products"
              className="inline-flex rounded-md bg-beisserGreen px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Browse Products & Services
            </Link>
            <Link
              href="/for-pros"
              className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-beisserGreen hover:text-beisserGreen"
            >
              For Pros
            </Link>
          </div>
        </div>

        <div className="grid gap-3 text-sm text-slate-700">
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-beisserGray">Serving Iowa Builders</h3>
            <p className="mt-1 text-xs text-slate-600">
              Pro-focused service for framing crews, trim carpenters, and
              exterior contractors who need the right loads on the ground at the
              right time.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-beisserGray">
              Largest Millwork Showroom in the Region
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Our Birchwood/Johnston showroom lets your customers see, touch,
              and compare windows, doors, and trim before they sign off.
            </p>
            <Link
              href="/showroom"
              className="mt-2 inline-block text-xs font-medium text-beisserGreen hover:underline"
            >
              Explore the showroom
            </Link>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-beisserGray">Digital Tools for Pros</h3>
            <p className="mt-1 text-xs text-slate-600">
              Online customer portal, credit applications, and more tools coming
              to make working with Beisser even easier.
            </p>
            <Link
              href="/for-pros"
              className="mt-2 inline-block text-xs font-medium text-beisserGreen hover:underline"
            >
              See pro resources
            </Link>
          </div>
        </div>
      </section>

      {/* Products & services overview */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-beisserGray">
            Products & Services
          </h2>
          <Link
            href="/products"
            className="text-sm font-medium text-beisserGreen hover:underline"
          >
            View all categories
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative h-36 w-full overflow-hidden">
                <Image
                  src={cat.heroImage}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 p-4">
                <h3 className="text-sm font-semibold text-beisserGray">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {cat.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Simple gallery teaser */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-beisserGray">
            Project & Product Gallery
          </h2>
          <Link
            href="/gallery"
            className="text-sm font-medium text-beisserGreen hover:underline"
          >
            View full gallery
          </Link>
        </div>
        <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
          {[
            "https://images.unsplash.com/photo-1519710889899-4fbb2a9a5214?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a5345c9bc?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
          ].map((src) => (
            <div key={src} className="relative h-28 overflow-hidden rounded-lg">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
