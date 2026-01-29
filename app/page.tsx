import Link from "next/link";
import Image from "next/image";
import { HomeCarousel } from "./ui/HomeCarousel";
import { getCategoryEntries, getServiceBySlug } from "./lib/content";

const FEATURED_SERVICE_SLUGS = [
  "delivery",
  "estimating",
  "showroom-design",
  "special-orders",
  "jobsite-coordination",
];

export default function HomePage() {
  const categories = getCategoryEntries().slice(0, 9);

  const services = FEATURED_SERVICE_SLUGS.map((slug) => {
    const entry = getServiceBySlug(slug);
    if (!entry) return null;
    return {
      title: entry.frontmatter.title,
      description: entry.frontmatter.summary,
      href: `/services/${slug}`,
    };
  }).filter((s): s is NonNullable<typeof s> => s !== null);

  return (
    <div className="space-y-12">
      <HomeCarousel />

      {/* Quick intro */}
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] items-start">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-beisserGray">
            Building Materials for Iowa Builders
          </h2>
          <p className="text-sm text-slate-700">
            Beisser Lumber supplies framing packages, engineered wood, windows and doors, decking, siding, and
            interior millwork for residential and light commercial projects. We pair product depth with local service
            teams who understand jobsite realities.
          </p>
          <p className="text-sm text-slate-700">
            With branches in Grimes, Coralville, Fort Dodge, and our Birchwood/Johnston showroom and millwork
            facility, you get centralized coordination with people who know your market.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/request-quote"
              className="inline-flex rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-accent"
            >
              Request a Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-beisserGreen hover:text-beisserGreen"
            >
              View Products
            </Link>
            <Link
              href="/services"
              className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-beisserGreen hover:text-beisserGreen"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="grid gap-3 text-sm text-slate-700">
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-beisserGray">Pro-Ready Supply</h3>
            <p className="mt-1 text-xs text-slate-600">
              Framing lumber, engineered wood, weatherization, and fasteners backed by dispatch teams who know your job
              timelines.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-beisserGray">
              Showroom &amp; Millwork
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Windows, doors, trim, and stair parts displayed for homeowner selections with specialist support.
            </p>
            <Link
              href="/showroom"
              className="mt-2 inline-block text-xs font-medium text-beisserGreen hover:underline"
            >
              Explore the showroom
            </Link>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-beisserGray">Built for Pros</h3>
            <p className="mt-1 text-xs text-slate-600">
              Request quotes, coordinate deliveries, and access your account online through our pro tools.
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
            Product Categories
          </h2>
          <Link
            href="/products"
            className="text-sm font-medium text-beisserGreen hover:underline"
          >
            View all categories
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const hero = cat.heroImage ?? "/placeholders/category.jpg";
            return (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={hero}
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
                    {cat.summary ?? cat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Services snapshot */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-beisserGray">
            Services for Builders
          </h2>
          <Link
            href="/services"
            className="text-sm font-medium text-beisserGreen hover:underline"
          >
            View all services
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="rounded-lg border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-base font-semibold text-beisserGray">
                {service.title}
              </div>
              <p className="mt-1 text-slate-600">{service.description}</p>
              <span className="mt-2 inline-flex text-sm font-semibold text-beisserGreen underline-offset-4 hover:underline">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Resources & Guides */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-beisserGray">
            Contractor Resources
          </h2>
          <Link
            href="/for-pros"
            className="text-sm font-medium text-beisserGreen hover:underline"
          >
            View all resources
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/for-pros/credit"
            className="group flex flex-col rounded-lg border bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-semibold text-beisserGray group-hover:text-beisserGreen">
              Credit Application
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Apply for a trade account to get terms, statement billing, and online access.
            </p>
          </Link>
          <Link
            href="/for-pros/resources"
            className="group flex flex-col rounded-lg border bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-semibold text-beisserGray group-hover:text-beisserGreen">
              Technical Guides
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Span tables, energy code reference sheets, and egress window requirements.
            </p>
          </Link>
          <div className="flex flex-col rounded-lg border bg-slate-50 p-5">
            <h3 className="font-semibold text-beisserGray">Portal Access</h3>
            <p className="mt-2 text-sm text-slate-600">
              Manage invoices and track active orders.
            </p>
            <a href="https://beisser.inet.lbm.net/" className="mt-3 text-sm font-semibold text-beisserGreen hover:underline">
              Login to iNet
            </a>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="grid gap-4 rounded-2xl border bg-slate-50 p-6 md:grid-cols-3">
        <div>
          <div className="text-2xl font-bold text-beisserGray">70+ years</div>
          <p className="text-sm text-slate-700">Family- and employee-owned since 1953, serving Iowa builders.</p>
        </div>
        <div>
          <div className="text-2xl font-bold text-beisserGray">Showroom &amp; Millwork</div>
          <p className="text-sm text-slate-700">Largest regional showroom for windows, doors, trim, and hardware.</p>
        </div>
        <div>
          <div className="text-2xl font-bold text-beisserGray">Pro Support</div>
          <p className="text-sm text-slate-700">Estimating, delivery, and jobsite coordination built for trade timelines.</p>
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
