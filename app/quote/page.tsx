import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { PageHeader } from "@/app/ui/PageHeader";
import { locations } from "@/app/data/locations";

type QuotePageProps = {
  searchParams?: {
    category?: string;
    brand?: string;
    branch?: string;
  };
};

export const metadata: Metadata = {
  title: "Request a Quote | Beisser Lumber",
  description: "Share your plans, project scope and branch preference, and the right Beisser location will follow up with pricing, delivery planning and lead times.",
};

export default function QuotePage({ searchParams }: QuotePageProps) {
  const source = searchParams?.category || searchParams?.brand || searchParams?.branch || "direct";
  const initialBranch = searchParams?.branch || "grimes";

  return (
    <div>
      <PageHeader
        eyebrow="Request a Quote"
        title="Project Quote Request"
        lead="Share your plans, project scope, and branch preference. We'll route your request to the right Beisser location for pricing, delivery planning, and lead-time guidance."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]}
      />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div id="plans" className="scroll-mt-32">
          <QuoteForm source={source} initialBranch={initialBranch} />
        </div>
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
            <h2 className="text-base font-semibold text-ink-1">Already a customer?</h2>
            <p className="mt-2">Your sales rep can price from the same plans. Account holders can also review invoices and balances in the <a href="https://pro.beisserlumber.com" target="_blank" rel="noreferrer" className="text-link">customer portal</a>.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
