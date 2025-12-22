import Link from "next/link";

const visitSteps = [
  "Book time at the Birchwood/Johnston showroom with your homeowner or designer.",
  "Share plans, inspiration photos, and budget ranges before the visit.",
  "Walk through windows, doors, trim, stair parts, and hardware with our specialists.",
  "Leave with selections documented so your quotes and orders stay organized.",
];

export default function ShowroomDesignPage() {
  return (
    <div className="space-y-5 max-w-4xl">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-beisserGreen font-semibold">
          Services
        </p>
        <h1 className="text-3xl font-bold text-beisserGray">Showroom & Design Support</h1>
        <p className="text-sm text-slate-700 max-w-3xl">
          Guided selections for windows, doors, and millwork at the largest showroom in the region. Our team helps
          homeowners make confident decisions while keeping builder specs, budgets, and timelines aligned.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-beisserGray">Who It’s For</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
            <li>Builders and remodelers needing a selection-ready showroom for clients.</li>
            <li>Homeowners comparing window, door, and trim packages before sign-off.</li>
            <li>Designers wanting product samples and support for jobsite details.</li>
          </ul>
        </div>
        <div className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-beisserGray">What to Expect</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
            {visitSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-3 rounded-xl border bg-slate-50 p-4">
        <h2 className="text-lg font-semibold text-beisserGray">Categories on Display</h2>
        <p className="text-sm text-slate-700">
          Windows and patio doors, interior and exterior doors, hardware, mouldings, stair parts, decking,
          siding, and specialty millwork. If you need a sample that is not on the floor, we can request it ahead of
          your appointment.
        </p>
      </section>

      <div className="rounded-xl border bg-white p-4 shadow-sm flex flex-wrap gap-3 items-center">
        <div className="text-sm text-slate-800">
          Tell us who is attending and what you want to review. We will pair you with the right specialist and block
          time on the calendar.
        </div>
        <Link
          href="/request-quote"
          className="inline-flex rounded-md bg-brand-green px-3 py-2 text-sm font-semibold text-white hover:bg-brand-accent"
        >
          Book Showroom Time
        </Link>
      </div>
    </div>
  );
}
