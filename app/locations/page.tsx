import Link from "next/link";
import { locations } from "@/app/data/locations";

export default function LocationsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Beisser Lumber Locations</h1>
        <p className="max-w-2xl text-sm text-slate-700">
          Visit our Iowa branches in Grimes, Coralville, Fort Dodge, and the Birchwood/Johnston showroom.
        </p>
      </header>

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
            </div>
            <Link href={`/locations/${loc.slug}`} className="inline-flex rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium hover:border-[#1B4F8A] hover:text-[#1B4F8A]">
              View Branch Details
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
