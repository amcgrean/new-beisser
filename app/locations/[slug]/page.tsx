import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations } from "@/app/data/locations";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";
import { Clock, MapPin, Phone } from "@/app/ui/icons";
import PhoneLink from "@/components/PhoneLink";
import { generateLocationMetadata } from "@/app/lib/seo";

type Params = { slug: string };

// Photos large enough for the page header. Coralville has only a small
// thumbnail so far, so its page shows no header photo.
const headerImages: Record<string, { src: string; alt: string; width: number; height: number }> = {
  grimes: { src: "/locations/grimes.jpg", alt: "Beisser Lumber main yard in Grimes, Iowa", width: 820, height: 720 },
  "fort-dodge": { src: "/locations/fort-dodge.jpg", alt: "Beisser Lumber Co. building and crew in Fort Dodge, Iowa", width: 1100, height: 825 },
  "birchwood-johnston": { src: "/images/company/showroom-stair-display.jpg", alt: "Stair parts and railing display in the Johnston showroom", width: 2000, height: 1500 },
};

export function generateMetadata({ params }: { params: Params }): Metadata {
  return generateLocationMetadata(params.slug);
}

export default function LocationDetailPage({ params }: { params: Params }) {
  const location = locations.find((l) => l.slug === params.slug);
  if (!location) return notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `Beisser Lumber, ${location.name}`,
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

  const headerImage = headerImages[location.slug];

  return (
    <div>
      <PageHeader
        eyebrow="Locations"
        title={`Beisser Lumber, ${location.name}`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations", href: "/locations" }, { label: location.name }]}
        lead={<p className="entity-definition">Branch support for contractors, remodelers, and homeowners in {location.city}, Iowa.</p>}
        image={headerImage}
        actions={
          <>
            <Link href={`/quote?branch=${location.slug}`} className="btn-primary">Request a Quote at This Branch</Link>
            <Link href={`/contact?branch=${location.slug}`} className="btn-secondary">Contact This Branch</Link>
          </>
        }
      />

      <section className="grid gap-6 md:grid-cols-3">
        <div className="card space-y-2 p-6">
          <MapPin size={22} className="text-brand-500" />
          <h2 className="text-lg font-semibold text-ink-1">Address</h2>
          <p className="text-ink-3">{location.addressLine1}<br />{location.city}, {location.state} {location.zip}</p>
          {location.mapUrl ? <a href={location.mapUrl} target="_blank" rel="noreferrer" className="text-link inline-flex">Get directions</a> : null}
        </div>
        <div className="card space-y-2 p-6">
          <Phone size={22} className="text-brand-500" />
          <h2 className="text-lg font-semibold text-ink-1">Phone</h2>
          <p><PhoneLink phone={location.phone} branch={location.slug} className="text-link" /></p>
        </div>
        <div className="card space-y-2 p-6">
          <Clock size={22} className="text-brand-500" />
          <h2 className="text-lg font-semibold text-ink-1">Hours</h2>
          <p className="text-ink-3">{location.hoursWeekday}<br />{location.hoursSaturday}<br />{location.hoursSundayNote}</p>
        </div>
      </section>

      {location.notes?.length ? (
        <section className="card-muted mt-6 p-6">
          <h2 className="text-lg font-semibold text-ink-1">About this branch</h2>
          <ul className="bullets mt-3 text-ink-3">{location.notes.map((note) => <li key={note}>{note}</li>)}</ul>
        </section>
      ) : null}

      <CtaBand primary={{ href: `/quote?branch=${location.slug}`, label: "Request a Quote" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}
