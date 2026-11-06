import type { Metadata } from "next";
import ServiceRequestForm from "@/components/ServiceRequestForm";
import Link from "next/link";
import { PageHeader } from "@/app/ui/PageHeader";
import { locations } from "@/app/data/locations";

export const metadata: Metadata = {
  title: "Service Request | Beisser Lumber",
  description: "Request design follow-up, estimating help, installation support or window service from Beisser Lumber.",
};

export default function ServiceRequestPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Service Request"
        title="Service Request"
        lead="Use this form for design follow-up, estimating questions, installation support, or window service requests. If you need material pricing, use the quote form instead."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Service Request" }]}
      />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <ServiceRequestForm />
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="card-muted p-6">
            <h2 className="text-base font-semibold text-ink-1">Prefer to call?</h2>
            <ul className="mt-3 space-y-2 text-sm text-ink-3">
              {locations.map((loc) => (
                <li key={loc.slug} className="flex justify-between gap-3">
                  <span>{loc.shortName}</span>
                  <a href={`tel:${loc.phone.replace(/[^\d]/g, "")}`} className="font-semibold text-brand-500 hover:underline">{loc.phone}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-muted p-6 text-sm text-ink-3">
            <h2 className="text-base font-semibold text-ink-1">Pricing a new project?</h2>
            <p className="mt-2">Use the <Link href="/quote" className="text-link">quote form</Link> so we can capture the plans and details your branch needs.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
