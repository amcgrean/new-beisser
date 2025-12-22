import Link from "next/link";

const coordinationBullets = [
  "Single point of contact for schedules, substitutions, and field fixes.",
  "Proactive communication when weather or site access changes.",
  "Return pickups and exchanges documented so credits are clear.",
  "Service requests routed to the right product specialists quickly.",
];

export default function JobsiteCoordinationPage() {
  return (
    <div className="space-y-5 max-w-4xl">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-beisserGreen font-semibold">
          Services
        </p>
        <h1 className="text-3xl font-bold text-beisserGray">Jobsite Coordination</h1>
        <p className="text-sm text-slate-700 max-w-3xl">
          Clear communication between your superintendent, crew leads, and our branch teams. We align delivery
          schedules, handle field questions, and keep returns or service calls organized so crews stay productive.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-beisserGray">What’s Included</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
            {coordinationBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-beisserGray">How to Engage Us</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
            <li>Share weekly schedules and priorities with your account manager or inside sales lead.</li>
            <li>Flag changes to framing, window and door swings, or exterior details before deliveries.</li>
            <li>Provide the best onsite contact for each phase so questions get answered fast.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3 rounded-xl border bg-slate-50 p-4">
        <h2 className="text-lg font-semibold text-beisserGray">Service & Warranty Routing</h2>
        <p className="text-sm text-slate-700">
          Window or door service requests go straight to the correct vendor team with photos, job info, and swing
          details included. We help track status so you know when to expect onsite visits or parts.
        </p>
      </section>

      <div className="rounded-xl border bg-white p-4 shadow-sm flex flex-wrap gap-3 items-center">
        <div className="text-sm text-slate-800">
          Share your project list and preferred cadence for updates. We will set up a communication plan that fits
          how your team works.
        </div>
        <Link
          href="/request-quote"
          className="inline-flex rounded-md bg-brand-green px-3 py-2 text-sm font-semibold text-white hover:bg-brand-accent"
        >
          Set Up Coordination
        </Link>
      </div>
    </div>
  );
}
