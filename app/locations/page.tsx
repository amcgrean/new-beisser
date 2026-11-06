import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/app/data/locations";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";
import { Clock, MapPin, Phone } from "@/app/ui/icons";


export const metadata: Metadata = {
  title: "Beisser Lumber Locations | Beisser Lumber",
  description: "Visit Beisser Lumber locations in Grimes, Coralville, Fort Dodge, and Johnston for lumberyard, showroom, and contractor support.",
};

export default function LocationsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://beisserlumber.com/locations" },
    ],
  };

  return (
    <div>
      <PageHeader
        eyebrow="Locations"
        title="Beisser Lumber locations"
        lead="Visit our Iowa branches in Grimes, Coralville, Fort Dodge, and the Birchwood / Johnston showroom."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((loc) => (
          <section key={loc.slug} className="card flex flex-col p-6">
            <h2 className="text-xl font-semibold text-ink-1">{loc.name}</h2>
            <div className="mt-4 space-y-3 text-ink-3">
              <p className="flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-brand-500" />
                <span>{loc.addressLine1}<br />{loc.city}, {loc.state} {loc.zip}</span>
              </p>
              <p className="flex gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-brand-500" />
                <a href={`tel:${loc.phone.replace(/[^\d]/g, "")}`} className="text-link">{loc.phone}</a>
              </p>
              <p className="flex gap-3">
                <Clock size={18} className="mt-1 shrink-0 text-brand-500" />
                <span>{loc.hoursWeekday}<br />{loc.hoursSaturday}<br />{loc.hoursSundayNote}</span>
              </p>
            </div>
            {loc.notes?.length ? (
              <ul className="bullets mt-4 text-sm text-ink-4">
                {loc.notes.map((note) => <li key={note}>{note}</li>)}
              </ul>
            ) : null}
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <Link href={`/locations/${loc.slug}`} className="btn-secondary">Branch details</Link>
              {loc.mapUrl ? <a href={loc.mapUrl} target="_blank" rel="noreferrer" className="btn-secondary">Directions</a> : null}
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
