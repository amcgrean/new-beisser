import Link from "next/link";

const services = [
  {
    slug: "delivery",
    title: "Delivery & Pickup",
    summary:
      "Coordinated jobsite delivery, will call, and load sequencing to match your schedule.",
    cta: "Plan delivery",
  },
  {
    slug: "estimating",
    title: "Estimating & Takeoffs",
    summary:
      "Lumber lists, window and door quotes, and engineered wood layouts with clear turnaround times.",
    cta: "Request an estimating slot",
  },
  {
    slug: "showroom-design",
    title: "Showroom & Design Support",
    summary:
      "Guided window, door, and millwork selections at our Birchwood/Johnston showroom.",
    cta: "Book a visit",
  },
  {
    slug: "special-orders",
    title: "Special Orders",
    summary:
      "Non-stock products, custom sizes, and coordinated lead times through trusted vendors.",
    cta: "Start a special order",
  },
  {
    slug: "jobsite-coordination",
    title: "Jobsite Coordination",
    summary:
      "Communication with supers and crews so loads, returns, and service calls stay organized.",
    cta: "Coordinate a project",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-beisserGray">Services</h1>
        <p className="text-sm text-slate-700 max-w-3xl">
          Support built for professional builders and remodelers. Each service below is tied to a clear
          process and a simple way to request what you need without guessing who to call.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="rounded-lg border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-base font-semibold text-beisserGray">
              {service.title}
            </div>
            <p className="mt-1 text-slate-600">{service.summary}</p>
            <span className="mt-3 inline-flex text-sm font-semibold text-beisserGreen underline-offset-4 hover:underline">
              {service.cta}
            </span>
          </Link>
        ))}
      </div>

      <div className="rounded-xl border bg-slate-50 p-4 text-sm">
        <div className="font-semibold text-beisserGray">Need a quick quote?</div>
        <p className="mt-1 text-slate-700">
          Use our quote request form to summarize your project, upload plans, and tell us how you prefer to
          receive pricing. A branch team member will follow up to confirm details and timelines.
        </p>
        <Link
          href="/request-quote"
          className="mt-3 inline-flex rounded-md bg-brand-green px-3 py-2 text-white font-medium hover:bg-brand-accent"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
