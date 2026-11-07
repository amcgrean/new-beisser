import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getCategoryEntries } from "./lib/content";
import { locations } from "./data/locations";
import { mainPhone } from "./data/navigation";
import TestimonialSection from "@/components/TestimonialSection";
import { ArrowRight, Clock, HardHat, Hammer, Home, MapPin, PencilRuler, Phone, Ruler, Truck } from "./ui/icons";

export const metadata: Metadata = {
  title: "Iowa's Largest Family-Owned Lumberyard | Beisser Lumber",
  description: "Iowa's largest family-owned lumberyard, established in 1953. Selling lumber, engineered wood, decking, siding, doors, and windows to contractors and homeowners across Central and Eastern Iowa.",
};

// Same figures as the About and Delivery pages (from the 2026 company overview).
const stats = [
  { value: "1953", label: "Founded in Fort Dodge" },
  { value: "4", label: "Iowa locations" },
  { value: "165", label: "Employees" },
  { value: "34", label: "Delivery trucks" },
  { value: "65,000", label: "Orders a year" },
];

const audiences = [
  {
    icon: HardHat,
    eyebrow: "For pros",
    title: "Builders, remodelers and contractors",
    text: "A dedicated sales rep, in-house takeoffs and estimating, jobsite delivery on your schedule, and online account access for invoices and payments.",
    href: "/pros",
    cta: "Explore pro services",
  },
  {
    icon: Home,
    eyebrow: "For homeowners",
    title: "Planning a build or remodel",
    text: "See windows, doors, decking and millwork in person at our Johnston showroom, and get help choosing products that fit your project and budget.",
    href: "/showroom",
    cta: "Visit the showroom",
  },
];

const services = [
  { icon: PencilRuler, title: "Design", text: "In-house design support with 25+ years of experience creating stock and custom plans.", href: "/services/design" },
  { icon: Ruler, title: "Estimating", text: "Commercial and residential takeoffs, with specialists for windows, decking and engineered wood.", href: "/services/estimating" },
  { icon: Hammer, title: "Installation", text: "Installed sales for doors, windows and some decking, plus window service and warranty work.", href: "/services/installation" },
  { icon: Truck, title: "Delivery", text: "34 trucks and piggyback forklifts delivering on-time and in-full across Iowa.", href: "/services/delivery" },
];

const partners = [
  { slug: "andersen", name: "Andersen" },
  { slug: "sierra-pacific", name: "Sierra Pacific" },
  { slug: "gerkin", name: "Gerkin" },
  { slug: "therma-tru", name: "Therma-Tru" },
  { slug: "weyerhaeuser", name: "Weyerhaeuser" },
  { slug: "james-hardie", name: "James Hardie" },
  { slug: "lp-smartside", name: "LP SmartSide" },
  { slug: "trex", name: "Trex" },
  { slug: "timbertech", name: "TimberTech" },
];

const showroomStats = [
  { value: "100", label: "Doors on display" },
  { value: "34", label: "Full-size windows" },
  { value: "7", label: "Full-size decks" },
];

function SectionHeading({ eyebrow, title, text, link }: { eyebrow?: string; title: string; text?: string; link?: { href: string; label: string } }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="mt-2 text-3xl font-bold text-ink-1 sm:text-4xl">{title}</h2>
        {text ? <p className="mt-3 text-base text-ink-3">{text}</p> : null}
      </div>
      {link ? (
        <Link href={link.href} className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-600">
          {link.label} <ArrowRight size={16} />
        </Link>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const categories = getCategoryEntries();
  const speakableSchema = { "@context": "https://schema.org", "@type": "WebPage", speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".entity-definition", ".faq-answer"] } };

  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="entity-definition section-band -mt-8 border-b border-line-soft bg-surface-1 pb-16 pt-12 lg:pb-20 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <div>
            <p className="eyebrow">Beisser Lumber Company · Est. 1953</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-ink-1 sm:text-5xl xl:text-6xl">
              Iowa&apos;s Largest Family-Owned Lumberyard Since 1953
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-3">
              Lumber, engineered wood, windows, doors, decking and siding for contractors and homeowners across Central and Eastern Iowa, with estimating and jobsite delivery from Grimes, Coralville, Fort Dodge and our Johnston showroom.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quote" className="btn-primary">Request a Quote <ArrowRight size={16} /></Link>
              <Link href="/products" className="btn-secondary">Browse Products</Link>
            </div>
            <a href={mainPhone.href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink-3 hover:text-brand-500">
              <Phone size={16} className="text-brand-500" /> Talk to our team: {mainPhone.label}
            </a>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-3 shadow-lift">
              <Image
                src="/images/company/delivery-flatbed-home.jpg"
                alt="Beisser flatbed truck delivering materials to a home build"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-6 hidden w-56 overflow-hidden rounded-lg border-4 border-canvas shadow-lift sm:block">
              <div className="relative aspect-[4/3]">
                <Image src="/images/company/showroom-stair-display.jpg" alt="Stair display in the Johnston showroom" fill sizes="224px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Beisser at a glance">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-gold-500 pl-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-bold tracking-tight text-ink-1 sm:text-4xl">{stat.value}</dd>
              <dd className="mt-1 text-sm text-ink-4">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Audiences */}
      <section className="grid gap-6 md:grid-cols-2">
        {audiences.map(({ icon: AudienceIcon, ...item }) => (
          <Link key={item.href} href={item.href} className="group flex flex-col rounded-lg border border-line bg-canvas p-8 shadow-card transition hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-lift">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-500">
              <AudienceIcon size={24} />
            </span>
            <p className="eyebrow mt-6">{item.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-bold text-ink-1">{item.title}</h2>
            <p className="mt-3 flex-1 text-base text-ink-3">{item.text}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
              {item.cta} <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </section>

      {/* Products */}
      <section className="space-y-10">
        <SectionHeading
          eyebrow="Products"
          title="Everything for the build, in stock and on order"
          text="Lumber and panels to finish millwork, for residential, remodel, commercial and specialty-trade projects."
          link={{ href: "/products", label: "All products" }}
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link href={`/products/${cat.slug}`} className="group flex h-full flex-col rounded-lg border border-line bg-canvas p-5 transition hover:border-brand-500/50 hover:bg-surface-1">
                <h3 className="text-base font-semibold text-ink-1 group-hover:text-brand-500">{cat.name}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-ink-4">{cat.summary ?? cat.description}</p>
                <span className="mt-auto pt-4 text-brand-500"><ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Builders band */}
      <section className="section-band relative isolate overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/company/delivery-multifamily-jobsite.jpg" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-900/60" />
        </div>
        <div className="max-w-2xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">Built for builders</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">From takeoff to truck: one partner, one crew, one schedule.</h2>
          <p className="mt-4 text-lg text-white/85">Dedicated sales reps, in-house estimators and four Iowa yards keep your job moving from first plan to final delivery.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/pros" className="btn-on-dark">Work with Beisser</Link>
            <Link href="/quote#plans" className="btn-outline-on-dark">Upload your plans</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="space-y-10">
        <SectionHeading
          eyebrow="Services"
          title="Support from plan to punch list"
          text="Design, estimating, installation and delivery that connect material selection, project planning and follow-through."
          link={{ href: "/services", label: "All services" }}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: ServiceIcon, ...service }) => (
            <Link key={service.href} href={service.href} className="group flex flex-col rounded-lg border border-line bg-canvas p-6 transition hover:border-brand-500/50 hover:shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-500">
                <ServiceIcon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink-1">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-3">{service.text}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
                Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Showroom */}
      <section className="grid items-center gap-10 overflow-hidden rounded-lg bg-surface-1 lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px]">
          <Image src="/images/company/showroom-after-hours.jpg" alt="Guests at a Beisser event in the Johnston showroom" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="px-6 pb-10 lg:px-4 lg:py-12 lg:pr-12">
          <p className="eyebrow">Johnston showroom</p>
          <h2 className="mt-2 text-3xl font-bold text-ink-1 sm:text-4xl">See it before you build it</h2>
          <p className="mt-4 text-base text-ink-3">
            Our 56,000 sq ft Birchwood / Johnston facility is home to one of the region&apos;s largest window, door and millwork showrooms. Bring your clients, compare options side by side, and make decisions before anything is ordered.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-4">
            {showroomStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-bold text-brand-500">{stat.value}</dd>
                <dd className="mt-1 text-sm text-ink-4">{stat.label}</dd>
              </div>
            ))}
          </dl>
          <Link href="/showroom" className="btn-primary mt-8">Plan your visit <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* Partners */}
      <section className="space-y-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-ink-4">Brands we carry</p>
        <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-4 gap-y-4 sm:gap-x-8">
          {partners.map((partner) => (
            <li key={partner.slug}>
              <Link href={`/brands/${partner.slug}`} className="relative block h-16 w-28 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-20 sm:w-40" title={partner.name}>
                <Image src={`/images/partners/${partner.slug}.png`} alt={partner.name} fill sizes="160px" className="object-contain mix-blend-multiply" />
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-center">
          <Link href="/brands" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-600">
            See all brands <ArrowRight size={16} />
          </Link>
        </p>
      </section>

      {/* Locations */}
      <section className="space-y-10">
        <SectionHeading eyebrow="Locations" title="Four Iowa locations" link={{ href: "/locations", label: "All locations" }} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <div key={location.slug} className="flex flex-col rounded-lg border border-line bg-canvas p-6 text-sm">
              <Link href={`/locations/${location.slug}`} className="text-lg font-semibold text-ink-1 hover:text-brand-500">{location.name}</Link>
              <p className="mt-3 flex gap-2 text-ink-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-500" />
                <span>{location.addressLine1}<br />{location.city}, {location.state} {location.zip}</span>
              </p>
              <p className="mt-2 flex gap-2 text-ink-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-brand-500" />
                <span>{location.hoursWeekday}<br />{location.hoursSaturday}</span>
              </p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-line-soft pt-4 font-semibold">
                <a href={`tel:${location.phone.replace(/[^\d]/g, "")}`} className="text-brand-500 hover:text-brand-600">{location.phone}</a>
                {location.mapUrl ? (
                  <a href={location.mapUrl} target="_blank" rel="noreferrer" className="text-brand-500 hover:text-brand-600">Directions</a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <TestimonialSection />

      {/* Closing CTA */}
      <section className="rounded-lg bg-brand-600 px-6 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to price your next project?</h2>
          <p className="mt-3 text-base text-white/85">Send your plans or a material list and the right branch will get back to you with pricing and availability.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
          <Link href="/quote" className="btn-on-dark">Request a Quote</Link>
          <a href={mainPhone.href} className="btn-outline-on-dark"><Phone size={16} /> {mainPhone.label}</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
    </div>
  );
}
