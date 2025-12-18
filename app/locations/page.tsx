import Link from "next/link";
import { locations } from "@/app/data/locations";

export default function LocationsPage() {
  return (
    <main className="main-container py-10">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-beisserGreen">
          Locations
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Beisser Lumber Locations
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-700">
          Visit any of our Iowa locations for building materials, millwork, and
          pro customer support. Hours vary slightly by location — check below
          before you stop in.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((loc) => (
          <section
            key={loc.slug}
            className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-semibold text-slate-900">
                  {loc.name}
                </h2>
                {loc.isPrimary && (
                  <span className="rounded-full bg-beisserGreen/10 px-3 py-1 text-xs font-medium text-beisserGreen">
                    Main Yard
                  </span>
                )}
              </div>

              <div className="mt-2 text-sm text-slate-700">
                <div>{loc.addressLine1}</div>
                {loc.addressLine2 && <div>{loc.addressLine2}</div>}
                <div>
                  {loc.city}, {loc.state} {loc.zip}
                </div>
              </div>

              <div className="mt-3 text-sm text-slate-800">
                <div>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a
                    href={`tel:${loc.phone.replace(/[^\d]/g, "")}`}
                    className="text-beisserGreen hover:underline"
                  >
                    {loc.phone}
                  </a>
                </div>
              </div>

              <div className="mt-4 text-sm text-slate-800">
                <div className="font-semibold">Hours</div>
                <div className="text-xs text-slate-700 mt-1">
                  {loc.hoursWeekday}
                </div>
                <div className="text-xs text-slate-700">
                  {loc.hoursSaturday}
                </div>
                <div className="text-xs text-slate-700">
                  {loc.hoursSundayNote}
                </div>
              </div>

              {loc.notes && (
                <p className="mt-3 text-xs text-slate-600">{loc.notes}</p>
              )}
            </div>

            <div className="mt-4 flex gap-3">
              {loc.mapUrl && (
                <Link
                  href={loc.mapUrl}
                  target="_blank"
                  className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-beisserGreen hover:text-beisserGreen"
                >
                  View on Google Maps
                </Link>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-beisserGreen px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700"
              >
                Contact this location
              </Link>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
