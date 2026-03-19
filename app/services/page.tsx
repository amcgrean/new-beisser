import Link from "next/link";

const services = [
  { href: "/services/design", title: "Design", summary: "In-house design support with 25+ years of experience, from stock blueprints to custom floor plans." },
  { href: "/services/estimating", title: "Estimating", summary: "Commercial and residential takeoffs with dedicated sales-rep and specialist support." },
  { href: "/services/installation", title: "Installation", summary: "Installed sales, window service and warranty work, and wall-panel delivery ready to install." },
];

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-beisserGray">Services</h1>
        <p className="text-sm text-slate-700 max-w-3xl">Beisser offers design, estimating, and installation-related support that connects material selection, project planning, and after-sale follow-through.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm">
        {services.map((service) => (
          <Link key={service.href} href={service.href} className="rounded-lg border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md block">
            <div className="text-base font-semibold text-beisserGray">{service.title}</div>
            <p className="mt-1 text-slate-600">{service.summary}</p>
            <span className="mt-3 inline-flex text-sm font-semibold text-beisserGreen underline-offset-4 hover:underline">Learn more &rarr;</span>
          </Link>
        ))}
      </div>

      <div className="rounded-xl border bg-slate-50 p-4 text-sm">
        <div className="font-semibold text-beisserGray">Need a quick next step?</div>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link href="/quote" className="inline-flex rounded-md bg-brand-green px-3 py-2 text-white font-medium hover:bg-brand-accent">Request a Quote</Link>
          <Link href="/service-request" className="inline-flex rounded-md border border-slate-300 px-3 py-2 font-medium hover:border-brand-accent hover:text-brand-green">Service Request</Link>
        </div>
      </div>
    </div>
  );
}
