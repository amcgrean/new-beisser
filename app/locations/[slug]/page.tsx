import { notFound } from "next/navigation";
import Image from "next/image";
import { locations } from "../../data/locations";

type Params = { slug: string };

export default function LocationDetailPage({ params }: { params: Params }) {
  const location = locations.find((l) => l.slug === params.slug);

  if (!location) {
    return notFound();
  }

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-beisserGreen">
          Location
        </p>
        <h1 className="text-2xl font-semibold text-beisserGray">{location.name}</h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          Use this page to highlight branch-specific services, teams, and contact information. The image and
          map below are placeholders your team can swap out for real photos and embed codes.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3 items-start">
        <div className="md:col-span-2 space-y-4">
          <Image
            src={location.image}
            alt={location.name}
            width={800}
            height={450}
            className="w-full h-56 object-cover rounded-lg border bg-slate-100"
          />

          <div className="grid gap-4 sm:grid-cols-2 text-sm">
            <div>
              <div className="font-medium text-slate-800">Address</div>
              <div className="text-slate-600 text-sm">
                {location.addressLine1}
                {location.addressLine2 ? `, ${location.addressLine2}` : ""}
                <br />
                {location.city}, {location.state} {location.zip}
              </div>
            </div>

            <div>
              <div className="font-medium text-slate-800">Phone</div>
              <div className="text-slate-600 text-sm">{location.phone}</div>
            </div>

            <div>
              <div className="font-medium text-slate-800">Hours</div>
              <div className="text-slate-600 text-sm space-y-1">
                <div>{location.hoursWeekday}</div>
                <div>{location.hoursSaturday}</div>
                <div>{location.hoursSundayNote}</div>
              </div>
            </div>

            <div>
              <div className="font-medium text-slate-800">Notes</div>
              <div className="text-slate-600 text-sm">
                {location.notes ?? "Branch-specific services and notes coming soon."}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg border bg-white p-4 text-sm">
            <div className="font-medium text-slate-800">Map</div>
            {location.mapUrl ? (
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="text-beisserGreen hover:underline"
              >
                Open in Google Maps
              </a>
            ) : (
              <div className="text-slate-600">Map link coming soon.</div>
            )}
          </div>
        </div>

        <aside className="rounded-lg border bg-white p-4 text-sm space-y-3">
          <div className="font-medium text-slate-800">Next Steps</div>
          <ul className="space-y-1 text-slate-600">
            <li>Call this branch to start an order</li>
            <li>Request a quote via the Contact page</li>
            <li>Visit the For Pros section for account tools</li>
          </ul>
          <div className="text-xs text-slate-500 pt-1">
            This sidebar can be tailored for each branch with specific contacts, specialties, or notes for
            local builders.
          </div>
        </aside>
      </div>
    </div>
  );
}
