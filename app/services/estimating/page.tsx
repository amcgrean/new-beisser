import Link from "next/link";

const scopeItems = [
  "Lumber and structural takeoffs from plans or material lists.",
  "Window and door schedules with series, glass, and hardware options.",
  "Engineered wood layouts with sizing, spacing, and load paths.",
  "Decking, siding, and exterior trim packages coordinated with accessories.",
];

const prepItems = [
  "Current plan set (PDF preferred) with elevations and sections.",
  "Desired turnaround date and any bid deadlines.",
  "Known brand or series preferences for windows, doors, and millwork.",
  "Project location and whether the lot is platted or under construction.",
];

export default function EstimatingPage() {
  return (
    <div className="space-y-5 max-w-4xl">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-beisserGreen font-semibold">
          Services
        </p>
        <h1 className="text-3xl font-bold text-beisserGray">Estimating & Takeoffs</h1>
        <p className="text-sm text-slate-700 max-w-3xl">
          Plan reviews, lumber lists, engineered wood layouts, and window and door quotes from a team that works
          with Iowa builders every day. We focus on clear scopes and predictable turnaround times so you can bid
          confidently.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-beisserGray">What We Cover</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
            {scopeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-beisserGray">How to Request</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
            {prepItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-3 rounded-xl border bg-slate-50 p-4">
        <h2 className="text-lg font-semibold text-beisserGray">Turnaround Expectations</h2>
        <p className="text-sm text-slate-700">
          Standard takeoffs are scheduled on a first-in basis with timelines confirmed up front. If you have a
          bid deadline, let us know early and we will align the scope with what you need to submit on time.
        </p>
        <p className="text-sm text-slate-700">
          For engineered wood, we coordinate with suppliers to ensure sizing meets plan requirements and local code
          before you receive your quote.
        </p>
      </section>

      <div className="rounded-xl border bg-white p-4 shadow-sm flex flex-wrap gap-3 items-center">
        <div className="text-sm text-slate-800">
          Send your plans and project details to secure an estimating slot. A team member will confirm timing and
          follow-ups.
        </div>
        <Link
          href="/request-quote"
          className="inline-flex rounded-md bg-brand-green px-3 py-2 text-sm font-semibold text-white hover:bg-brand-accent"
        >
          Request Estimating
        </Link>
      </div>
    </div>
  );
}
