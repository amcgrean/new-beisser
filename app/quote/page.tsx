import QuoteForm from "@/components/QuoteForm";

type QuotePageProps = {
  searchParams?: {
    category?: string;
    brand?: string;
    branch?: string;
  };
};

export default function QuotePage({ searchParams }: QuotePageProps) {
  const source = searchParams?.category || searchParams?.brand || searchParams?.branch || "direct";
  const initialBranch = searchParams?.branch || "grimes";

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B4F8A]">Request a Quote</p>
        <h1 className="text-3xl font-bold text-slate-900">Project Quote Request</h1>
        <p className="text-sm text-slate-700">Share your plans, project scope, and branch preference. We&apos;ll route your request to the right Beisser location for pricing, delivery planning, and lead-time guidance.</p>
      </header>

      <QuoteForm source={source} initialBranch={initialBranch} />
    </div>
  );
}
