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
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Beisser Lumber Locations</h1>
        <p className="max-w-2xl text-sm text-slate-700">
          Visit our Iowa branches in Grimes, Coralville, Fort Dodge, and the Birchwood / Johnston showroom.
        </p>
      </header>

      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700">
        <h2 className="text-xl font-semibold text-beisserGray">All branch addresses</h2>
        <ul className="mt-3 list-inside list-disc space-y-1">
          {branchAddresses.map((address) => <li key={address}>{address}</li>)}
        </ul>
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        {locations.map((loc) => (
          <section key={loc.slug} className="rounded-lg border bg-white p-5 shadow-sm space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">{loc.name}</h2>
            <div className="text-sm text-slate-700">
              <div>{loc.addressLine1}</div>
              <div>{loc.city}, {loc.state} {loc.zip}</div>
              <div className="mt-1">{loc.phone}</div>
              <div className="mt-1">{loc.hoursWeekday}</div>
              <div>{loc.hoursSaturday}</div>
              <div>{loc.hoursSundayNote}</div>
              {loc.notes?.length ? (
                <ul className="mt-2 list-inside list-disc space-y-1 text-xs text-slate-600">
                  {loc.notes.map((note) => <li key={note}>{note}</li>)}
                </ul>
              ) : null}
            </div>
            <Link href={`/locations/${loc.slug}`} className="inline-flex rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium hover:border-[#1B4F8A] hover:text-[#1B4F8A]">
              View Branch Details
            </Link>
          </section>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
