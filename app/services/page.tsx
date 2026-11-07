import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";
import { ArrowRight, PencilRuler, Ruler, Hammer, Truck } from "@/app/ui/icons";

const services = [
  { href: "/services/design", title: "Design", icon: PencilRuler, summary: "In-house design support with 25+ years of experience, from stock blueprints to custom floor plans." },
  { href: "/services/estimating", title: "Estimating", icon: Ruler, summary: "Commercial and residential takeoffs with dedicated sales-rep and specialist support." },
  { href: "/services/installation", title: "Installation", icon: Hammer, summary: "Installed sales, window service and warranty work, and wall-panel delivery ready to install." },
  { href: "/services/delivery", title: "Delivery & Pickup", icon: Truck, summary: "Jobsite delivery and will call across Central and Eastern Iowa, scheduled by phase." },
];

export const metadata: Metadata = {
  title: "Services for Builders | Beisser Lumber",
  description: "Design, estimating, installation and delivery support from Beisser Lumber for builders and remodelers across Iowa.",
};

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Services for builders"
        lead="Beisser offers design, estimating, installation and delivery support that connects material selection, project planning and after-sale follow-through."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map(({ href, title, summary, icon: Icon }) => (
          <Link key={href} href={href} className="group card flex gap-5 p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-500">
              <Icon size={24} />
            </span>
            <span className="flex flex-col">
              <span className="text-lg font-semibold text-ink-1">{title}</span>
              <span className="mt-1 text-ink-4">{summary}</span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
                Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>
        ))}
      </div>

      <CtaBand
        title="Need a quick next step?"
        body="Send us plans for a quote, or open a service request for an installed product, and the right team will pick it up."
      />
      <p className="mt-4 text-sm text-ink-4">
        Already have a Beisser product that needs attention?{" "}
        <Link href="/service-request" className="text-link">Open a service request</Link>.
      </p>
    </div>
  );
}
