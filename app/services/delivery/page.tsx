import Link from "next/link";

const deliveryTips = [
  "Share gate codes, onsite contacts, and preferred drop locations with your dispatcher.",
  "Mark staging areas for framing, exterior, and trim packages so crews can move faster.",
  "Confirm equipment needs (forklift, boom) for tight lots or multi-level projects.",
  "Send quick photos of the lot if access or weather conditions have changed.",
];

export default function DeliveryPage() {
  return (
    <div className="space-y-5 max-w-4xl">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-beisserGreen font-semibold">
          Services
        </p>
        <h1 className="text-3xl font-bold text-beisserGray">Delivery & Pickup</h1>
        <p className="text-sm text-slate-700 max-w-3xl">
          Jobsite delivery, will call, and sequencing support to match how your crew builds. Our fleet covers
          Central and Eastern Iowa with drivers who know the sites, the loads, and the timelines.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-beisserGray">Who It&apos;s For</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
            <li>Builders sequencing framing, exterior, and trim loads by phase.</li>
            <li>Remodelers coordinating tight access sites that need specific equipment.</li>
            <li>Crews scheduling will call pickups for fills, repairs, or returns.</li>
          </ul>
        </div>
        <div className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-beisserGray">How it Works</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
            <li>Schedule deliveries by phase so framing, exterior, and finish loads arrive when you need them.</li>
            <li>Dedicated dispatch contacts at each branch to confirm dates, windows, and onsite requirements.</li>
            <li>Photos or signatures on delivery to document where materials were placed.</li>
            <li>Will call options for quick pickups and small fills.</li>
          </ul>
        </div>

        <div className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-beisserGray">What to Include</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
            <li>Job name and lot number.</li>
            <li>Requested delivery date/time window and onsite contact.</li>
            <li>Any tight access notes, equipment needs, or weather considerations.</li>
            <li>Whether this is a partial fill, full package, or return pickup.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3 rounded-xl border bg-slate-50 p-4">
        <h2 className="text-lg font-semibold text-beisserGray">Jobsite Readiness Tips</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
          {deliveryTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <div className="rounded-xl border bg-white p-4 shadow-sm flex flex-wrap gap-3 items-center">
        <div className="text-sm text-slate-800">
          Ready to schedule a delivery or pickup? Send details and our dispatch team will confirm timing.
        </div>
        <Link
          href="/request-quote"
          className="inline-flex rounded-md bg-brand-green px-3 py-2 text-sm font-semibold text-white hover:bg-brand-accent"
        >
          Schedule Delivery
        </Link>
      </div>
    </div>
  );
}
