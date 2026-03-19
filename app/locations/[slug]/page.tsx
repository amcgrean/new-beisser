import { notFound } from "next/navigation";
import Link from "next/link";
import { locations } from "@/app/data/locations";

type Params = { slug: string };

export default function LocationDetailPage({ params }: { params: Params }) {
  const location = locations.find((l) => l.slug === params.slug);
  if (!location) return notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `Beisser Lumber — ${location.name}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.addressLine1 || "[Address TBD — confirm with branch]",
      addressLocality: location.city,
      addressRegion: "IA",
      postalCode: location.zip,
    },
    telephone: location.phone || "[Phone TBD]",
    url: `https://beisserlumber.com/locations/${location.slug}`,
  };

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Beisser Lumber — {location.name}</h1>
        <p className="text-sm text-slate-700 max-w-2xl">Branch support for contractors, remodelers, and homeowners in {location.city}, IA.</p>
      </header>

      <section className="grid gap-5 rounded-xl border bg-white p-5 shadow-sm md:grid-cols-2">
        <div className="space-y-2 text-sm text-slate-700">
          <div><strong>Address:</strong> {location.addressLine1 || "[Address TBD — confirm with branch]"}, {location.city}, IA {location.zip}</div>
          <div><strong>Phone:</strong> {location.phone || "[Phone TBD]"}</div>
          <div><strong>Hours:</strong> Call for current hours</div>
          <div>
            <strong>Services:</strong>
            <ul className="list-disc list-inside mt-1">
              <li>Material quoting and order coordination</li>
              <li>Delivery scheduling and will-call support</li>
              <li>Takeoff and package planning assistance</li>
            </ul>
          </div>
        </div>

        <div id={`map-${location.slug}`} className="min-h-40 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
          {/* Google Maps embed goes here */}
          Map embed placeholder
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link href={`/quote?branch=${location.slug}`} className="inline-flex rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#163f6e]">Request a Quote at This Branch</Link>
        <Link href={`/contact?branch=${location.slug}`} className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Contact This Branch</Link>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}
