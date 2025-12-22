import Link from "next/link";

const orderSteps = [
  "Confirm exact specs, finishes, and handedness for windows and doors.",
  "Align brand lead times with your project schedule and framing milestones.",
  "Document approvals before placing the order to minimize changes.",
  "Provide delivery or will call timing once the product ships to our yard.",
];

export default function SpecialOrdersPage() {
  return (
    <div className="space-y-5 max-w-4xl">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-beisserGreen font-semibold">
          Services
        </p>
        <h1 className="text-3xl font-bold text-beisserGray">Special Orders</h1>
        <p className="text-sm text-slate-700 max-w-3xl">
          Access to non-stock items, custom sizes, and brand-specific solutions with clear expectations on lead
          times, approvals, and jobsite delivery. We coordinate with manufacturers so you have one point of
          contact.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-beisserGray">Common Requests</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
            <li>Custom door sizes, glass options, and hardware configurations.</li>
            <li>Specialty siding profiles, soffit, and trim details.</li>
            <li>Engineered wood substitutions and value-engineered alternates.</li>
            <li>Unique decking colors, railing infill, and accessory kits.</li>
          </ul>
        </div>
        <div className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-beisserGray">How We Manage It</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
            {orderSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-3 rounded-xl border bg-slate-50 p-4">
        <h2 className="text-lg font-semibold text-beisserGray">What to Share Up Front</h2>
        <p className="text-sm text-slate-700">
          Project name and location, product type, manufacturer preferences, and any deadlines tied to inspections
          or homeowner approvals. If you have submittals or inspiration photos, include them so we can align options
          quickly.
        </p>
      </section>

      <div className="rounded-xl border bg-white p-4 shadow-sm flex flex-wrap gap-3 items-center">
        <div className="text-sm text-slate-800">
          Start a special order request and we will confirm availability, lead times, and next steps.
        </div>
        <Link
          href="/request-quote"
          className="inline-flex rounded-md bg-brand-green px-3 py-2 text-sm font-semibold text-white hover:bg-brand-accent"
        >
          Start a Request
        </Link>
      </div>
    </div>
  );
}
