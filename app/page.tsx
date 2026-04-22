import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HomeCarousel } from "./ui/HomeCarousel";
import { getCategoryEntries } from "./lib/content";
import { locations } from "./data/locations";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: "Iowa's Largest Family-Owned Lumberyard | Beisser Lumber",
  description: "Iowa's largest family-owned lumberyard, established in 1953. Selling lumber, engineered wood, decking, siding, doors, and windows to contractors and homeowners across Central and Eastern Iowa.",
};

const featuredServiceCards = [
  { title: "Design", description: "In-house design support with 25+ years of experience creating stock and custom plans.", href: "/services/design" },
  { title: "Estimating", description: "Commercial and residential takeoffs with support teams across windows, decking, and EWP.", href: "/services/estimating" },
  { title: "Installation", description: "Installed sales, window service and warranty work, and wall-panel delivery ready to install.", href: "/services/installation" },
];

const partnerBrands = ["Marvin", "Gerkin", "Andersen", "Sierra Pacific", "Weyerhaeuser", "Trex", "James Hardie", "LP SmartSide"];

const heroTertiaryLinks = [
  { href: "/services/estimating", label: "Estimating services" },
  { href: "/service-request", label: "Service request" },
  { href: "/locations", label: "Visit a location" },
];

export default function HomePage() {
  const categories = getCategoryEntries();
  const speakableSchema = {"@context": "https://schema.org", "@type": "WebPage", speakable: {"@type": "SpeakableSpecification", cssSelector: ["h1", ".entity-definition", ".faq-answer"]}};

  return (
    <div className="space-y-16">
      <section id="about" className="entity-definition pt-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
          Beisser Lumber Company · Est. 1953
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">
          Iowa&apos;s Largest Family-Owned Lumberyard Since 1953
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-700">
          Beisser Lumber serves contractors and homeowners across Central and Eastern Iowa from Grimes, Coralville, Fort Dodge, and the Birchwood / Johnston showroom. We support lumber, engineered wood, decking, siding, doors, windows, estimating, and jobsite delivery across Iowa.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/quote"
            className="inline-flex items-center rounded-md bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-greenDark"
          >
            Request a Quote
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center rounded-md border border-brand-green px-5 py-3 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-green hover:text-white"
          >
            View Products
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {heroTertiaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 underline-offset-4 hover:text-brand-green hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <HomeCarousel />

      <section className="section-band bg-brand-mist py-12">
        <h2 className="text-2xl font-semibold text-brand-ink sm:text-3xl">Quick answers</h2>
        <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm text-slate-700 sm:grid-cols-2">
          <li itemProp="areaServed">✓ Beisser Lumber serves contractors and homeowners across Central and Eastern Iowa</li>
          <li itemProp="department">✓ Four locations: Grimes, Coralville, Fort Dodge, and Birchwood / Johnston</li>
          <li itemProp="hasOfferCatalog">✓ Job site delivery, takeoffs, and showroom support are available through Beisser teams</li>
          <li>✓ Credit applications and customer AR portal access are available online</li>
          <li itemProp="foundingDate">✓ Iowa&apos;s largest family-owned lumberyard since 1953</li>
        </ul>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-brand-ink sm:text-3xl">Product categories</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-700">
              Lumber, engineered wood, windows, doors, decking, siding, millwork, stair parts, and hardware for residential, remodel, commercial, and specialty-trade projects.
            </p>
          </div>
          <Link href="/products" className="hidden shrink-0 text-sm font-semibold text-brand-green underline-offset-4 hover:underline sm:inline-flex">View all categories →</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const hero = cat.heroImage ?? "/placeholders/category.jpg";
            return (
              <Link key={cat.slug} href={`/products/${cat.slug}`} className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md">
                <div className="relative h-40 w-full overflow-hidden"><Image src={hero} alt={cat.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                <div className="flex flex-1 flex-col gap-1 p-6"><h3 className="text-base font-semibold text-brand-ink">{cat.name}</h3><p className="text-sm text-slate-600 line-clamp-2">{cat.summary ?? cat.description}</p></div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section-band relative overflow-hidden py-16">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero-yard.png" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/85 via-brand-ink/65 to-brand-ink/30" />
        </div>
        <div className="max-w-xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Built for builders</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">From takeoff to truck: one partner, one crew, one schedule.</h2>
          <p className="mt-4 text-base text-white/90">Dedicated sales reps, in-house estimators, and four Iowa yards keep your job moving from first plan to final delivery.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/services" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-mist">Explore services</Link>
            <Link href="/pros" className="inline-flex items-center rounded-md border border-white/70 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">For pros</Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-brand-ink sm:text-3xl">Brand partners</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {partnerBrands.map((brand) => (
            <div key={brand} className="rounded-lg border border-slate-200 bg-white px-4 py-5 text-center text-sm font-semibold text-brand-green shadow-sm">{brand}</div>
          ))}
        </div>
      </section>

      <section className="section-band bg-brand-mist py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-brand-ink sm:text-3xl">Services for builders</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-700">
              Design, estimating, and installation support that connects material selection, project planning, and after-sale follow-through.
            </p>
          </div>
          <Link href="/services" className="hidden shrink-0 text-sm font-semibold text-brand-green underline-offset-4 hover:underline sm:inline-flex">View all services →</Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featuredServiceCards.map((service) => (
            <Link key={service.href} href={service.href} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md">
              <div className="text-base font-semibold text-brand-ink">{service.title}</div>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-brand-green underline-offset-4 group-hover:underline">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-brand-ink sm:text-3xl">Visit a Beisser location</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {locations.map((location) => (
            <div key={location.slug} className="rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-700">
              <div className="text-base font-semibold text-brand-ink">{location.name}</div>
              <div className="mt-1">{location.addressLine1}, {location.city}, {location.state} {location.zip}</div>
              <div>{location.phone}</div>
              <div className="mt-2 text-slate-600">{location.hoursWeekday}</div>
              <div className="text-slate-600">{location.hoursSaturday}</div>
            </div>
          ))}
        </div>
      </section>

      <TestimonialSection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
    </div>
  );
}
