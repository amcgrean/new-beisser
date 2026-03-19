import Link from "next/link";
import Image from "next/image";
import { HomeCarousel } from "./ui/HomeCarousel";
import { getCategoryEntries } from "./lib/content";
import { locations } from "./data/locations";
import TestimonialSection from "@/components/TestimonialSection";

const featuredServiceCards = [
  { title: "Design", description: "In-house design support with 25+ years of experience creating stock and custom plans.", href: "/services/design" },
  { title: "Estimating", description: "Commercial and residential takeoffs with support teams across windows, decking, and EWP.", href: "/services/estimating" },
  { title: "Installation", description: "Installed sales, window service and warranty work, and wall-panel delivery ready to install.", href: "/services/installation" },
];

const partnerBrands = ["Gerkin", "Andersen", "Sierra Pacific", "Weyerhaeuser", "Trex", "James Hardie", "LP SmartSide", "FastenMaster"];

export default function HomePage() {
  const categories = getCategoryEntries();
  const speakableSchema = {"@context": "https://schema.org", "@type": "WebPage", speakable: {"@type": "SpeakableSpecification", cssSelector: ["h1", ".entity-definition", ".faq-answer"]}};

  return (
    <div className="space-y-12">
      <HomeCarousel />

      <section id="about" className="entity-definition rounded-xl border border-[#1B4F8A]/20 bg-[#D6E4F0] p-5 text-sm text-[#1a1a1a]">
        <h1 className="text-2xl font-bold text-beisserGray">Iowa&apos;s Largest Family-Owned Lumberyard Since 1953</h1>
        <p className="mt-2">Beisser Lumber serves contractors and homeowners across Central and Eastern Iowa from Grimes, Coralville, Fort Dodge, and the Birchwood / Johnston showroom. We support lumber, engineered wood, decking, siding, doors, windows, estimating, and jobsite delivery across Iowa.</p>
      </section>

      <section className="rounded-xl border bg-white p-5 text-sm">
        <h2 className="text-xl font-semibold text-beisserGray">Quick Answers</h2>
        <ul className="mt-2 space-y-1">
          <li itemProp="areaServed">✓ Beisser Lumber serves contractors and homeowners across Central and Eastern Iowa</li>
          <li itemProp="department">✓ Four locations: Grimes, Coralville, Fort Dodge, and Birchwood / Johnston</li>
          <li itemProp="hasOfferCatalog">✓ Job site delivery, takeoffs, and showroom support are available through Beisser teams</li>
          <li>✓ Credit applications and customer AR portal access are available online</li>
          <li itemProp="foundingDate">✓ Iowa&apos;s largest family-owned lumberyard since 1953</li>
        </ul>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] items-start">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-beisserGray">Building Materials for Iowa Builders</h2>
          <p className="text-sm text-slate-700">We supply lumber, engineered wood, windows, doors, decking, siding, millwork, stair parts, and hardware for residential, remodel, commercial, and specialty-trade projects.</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/quote" className="inline-flex rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-accent">Request a Quote</Link>
            <Link href="/products" className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-beisserGreen hover:text-beisserGreen">View Products</Link>
            <Link href="/services/estimating" className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-beisserGreen hover:text-beisserGreen">Estimating services</Link>
            <Link href="/service-request" className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-beisserGreen hover:text-beisserGreen">Service request</Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3"><h2 className="text-2xl font-semibold text-beisserGray">Product Categories</h2><Link href="/products" className="text-sm font-medium text-beisserGreen hover:underline">View all categories</Link></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const hero = cat.heroImage ?? "/placeholders/category.jpg";
            return (
              <Link key={cat.slug} href={`/products/${cat.slug}`} className="group flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="relative h-36 w-full overflow-hidden"><Image src={hero} alt={cat.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                <div className="flex flex-1 flex-col gap-1 p-4"><h3 className="text-sm font-semibold text-beisserGray">{cat.name}</h3><p className="text-xs text-slate-600 line-clamp-2">{cat.summary ?? cat.description}</p></div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="space-y-4"><h2 className="text-2xl font-semibold text-beisserGray">Brand Partners</h2><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{partnerBrands.map((brand) => <div key={brand} className="rounded-lg border bg-white px-4 py-5 text-center text-sm font-semibold text-[#1B4F8A] shadow-sm">{brand}</div>)}</div></section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3"><h2 className="text-2xl font-semibold text-beisserGray">Services for Builders</h2><Link href="/services" className="text-sm font-medium text-beisserGreen hover:underline">View all services</Link></div>
        <div className="grid gap-4 md:grid-cols-3 text-sm">{featuredServiceCards.map((service) => <Link key={service.href} href={service.href} className="rounded-lg border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><div className="text-base font-semibold text-beisserGray">{service.title}</div><p className="mt-1 text-slate-600">{service.description}</p></Link>)}</div>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-semibold text-beisserGray">Visit a Beisser location</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {locations.map((location) => (
            <div key={location.slug} className="rounded-lg border bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-semibold text-beisserGray">{location.name}</div>
              <div>{location.addressLine1}, {location.city}, {location.state} {location.zip}</div>
              <div>{location.phone}</div>
              <div className="mt-1">{location.hoursWeekday}</div>
              <div>{location.hoursSaturday}</div>
            </div>
          ))}
        </div>
      </section>

      <TestimonialSection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
    </div>
  );
}
