import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations } from "@/app/data/locations";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import PhoneLink from "@/components/PhoneLink";
import { generateLocationMetadata } from "@/app/lib/seo";

type Params = { slug: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  return generateLocationMetadata(params.slug);
}

export default function LocationDetailPage({ params }: { params: Params }) {
  const location = locations.find((l) => l.slug === params.slug);
  if (!location) return notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `Beisser Lumber — ${location.name}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.addressLine1,
      addressLocality: location.city,
      addressRegion: "IA",
      postalCode: location.zip,
      addressCountry: "US",
    },
    telephone: location.phone,
    url: `https://beisserlumber.com/locations/${location.slug}`,
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: location.slug === "grimes" ? "07:00" : "08:00", closes: "12:00" },
    ],
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".entity-definition", ".faq-answer"] },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://beisserlumber.com/locations" },
      { "@type": "ListItem", position: 3, name: location.name, item: `https://beisserlumber.com/locations/${location.slug}` },
    ],
  };

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations", href: "/locations" }, { label: location.name }]} />
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Beisser Lumber — {location.name}</h1>
        <p className="entity-definition max-w-2xl text-sm text-slate-700">Branch support for contractors, remodelers, and homeowners in {location.city}, Iowa.</p>
      </header>

      <section className="grid gap-5 rounded-xl border bg-white p-5 shadow-sm md:grid-cols-2">
        <div className="space-y-2 text-sm text-slate-700">
          <div><strong>Address:</strong> {location.addressLine1}, {location.city}, {location.state} {location.zip}</div>
          <div><strong>Phone:</strong> <PhoneLink phone={location.phone} branch={location.slug} className="text-brand-green underline" /></div>
          <div><strong>Hours:</strong> {location.hoursWeekday} • {location.hoursSaturday} • {location.hoursSundayNote}</div>
          {location.notes?.length ? <ul className="list-inside list-disc space-y-1 pt-2">{location.notes.map((note) => <li key={note}>{note}</li>)}</ul> : null}
        </div>
        <div className="rounded-lg border bg-slate-50 p-4 text-sm text-slate-600">
          <div className="font-semibold text-slate-900">Map & Directions</div>
          <p className="mt-2">Use the branch address above for GPS directions, or open the location in Google Maps.</p>
          {location.mapUrl ? <a href={location.mapUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-brand-green underline">Open map</a> : null}
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link href={`/quote?branch=${location.slug}`} className="inline-flex rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-greenDark">Request a Quote at This Branch</Link>
        <Link href={`/contact?branch=${location.slug}`} className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold hover:border-brand-green hover:text-brand-green">Contact This Branch</Link>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}
