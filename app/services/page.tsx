import Link from "next/link";

const services = [
  { href: "/services/design", title: "Design", summary: "In-house design support with 25+ years of experience, from stock blueprints to custom floor plans." },
  { href: "/services/estimating", title: "Estimating", summary: "Commercial and residential takeoffs with dedicated sales-rep and specialist support." },
  { href: "/services/installation", title: "Installation", summary: "Installed sales, window service and warranty work, and wall-panel delivery ready to install." },
];

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Services</p>
        <h1 className="text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">Services for builders</h1>
        <p className="max-w-3xl text-base text-slate-700">
          Beisser offers design, estimating, and installation-related support that connects material selection, project planning, and after-sale follow-through.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link key={service.href} href={service.href} className="group block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md">
            <div className="text-lg font-semibold text-brand-ink">{service.title}</div>
            <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-brand-green underline-offset-4 group-hover:underline">Learn more →</span>
          </Link>
        ))}
      </div>

      <section className="section-band bg-brand-mist py-12">
        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-brand-ink sm:text-3xl">Need a quick next step?</h2>
            <p className="mt-2 text-sm text-slate-700">Send us plans or a service request and we&apos;ll get the right team on it.</p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link href="/quote" className="inline-flex items-center rounded-md bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-greenDark">Request a Quote</Link>
            <Link href="/service-request" className="inline-flex items-center rounded-md border border-brand-green px-5 py-3 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-green hover:text-white">Service Request</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
