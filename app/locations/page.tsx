import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/app/data/locations";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";


const branchAddresses = [
  "3705 SE Beisser Drive, Grimes, IA 50111",
  "415 Westcor Drive, Coralville, IA 52241",
  "1920 Central Avenue, Fort Dodge, IA 50501",
  "7901 Birchwood Court, Johnston, IA 50131",
];

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
    <div className="space-y-16">
      <div>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
        <header className="mt-4 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Locations</p>
          <h1 className="text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">Beisser Lumber locations</h1>
          <p className="max-w-2xl text-base text-slate-700">
            Visit our Iowa branches in Grimes, Coralville, Fort Dodge, and the Birchwood / Johnston showroom.
          </p>
        </header>
      </div>

      <section className="section-band bg-brand-mist py-12">
        <h2 className="text-2xl font-semibold text-brand-ink sm:text-3xl">All branch addresses</h2>
        <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm text-slate-700 sm:grid-cols-2">
          {branchAddresses.map((address) => <li key={address}>{address}</li>)}
        </ul>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((loc) => (
          <section key={loc.slug} className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-brand-ink">{loc.name}</h2>
            <div className="text-sm text-slate-700">
              <div>{loc.addressLine1}</div>
              <div>{loc.city}, {loc.state} {loc.zip}</div>
              <div className="mt-1">{loc.phone}</div>
              <div className="mt-2">{loc.hoursWeekday}</div>
              <div>{loc.hoursSaturday}</div>
              <div>{loc.hoursSundayNote}</div>
              {loc.notes?.length ? (
                <ul className="mt-2 list-inside list-disc space-y-1 text-xs text-slate-600">
                  {loc.notes.map((note) => <li key={note}>{note}</li>)}
                </ul>
              ) : null}
            </div>
            <Link href={`/locations/${loc.slug}`} className="inline-flex items-center rounded-md border border-brand-green px-4 py-2 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-green hover:text-white">
              View Branch Details
            </Link>
          </section>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
