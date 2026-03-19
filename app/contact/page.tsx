import Link from "next/link";
import { locations } from "@/app/data/locations";

export default function ContactPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-beisserGray">Contact Us</h1>
        <p className="text-sm text-slate-600">
          Reach a Beisser branch for general questions, service requests, or project support. For pricing and takeoffs, use the quote form so we can capture the project details your branch needs.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {locations.map((location) => (
          <div key={location.slug} className="rounded-lg border bg-white p-4 text-sm text-slate-700 shadow-sm">
            <div className="font-semibold text-beisserGray">{location.name}</div>
            <div className="mt-1">{location.addressLine1}</div>
            <div>{location.city}, {location.state} {location.zip}</div>
            <div className="mt-2">{location.phone}</div>
            <div className="mt-1">{location.hoursWeekday}</div>
            <div>{location.hoursSaturday}</div>
            <div>{location.hoursSundayNote}</div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border bg-white p-4 text-xs text-slate-700 shadow-sm">
        <div className="font-semibold text-beisserGray">Need a different workflow?</div>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link href="/quote" className="text-[#1B4F8A] underline">Request a Quote</Link>
          <Link href="/service-request" className="text-[#1B4F8A] underline">Submit a Service Request</Link>
          <a href="https://www.nuvo.credit/app/beisserlumber" target="_blank" rel="noreferrer" className="text-[#1B4F8A] underline">Credit Application</a>
          <a href="https://beisserlumber.com/ar-login" target="_blank" rel="noreferrer" className="text-[#1B4F8A] underline">Account / AR Portal Sign In</a>
        </div>
      </div>
    </div>
  );
}
