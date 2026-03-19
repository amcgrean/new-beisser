import ServiceRequestForm from "@/components/ServiceRequestForm";

export default function ServiceRequestPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B4F8A]">Service Request</p>
        <h1 className="text-3xl font-bold text-slate-900">Service Request</h1>
        <p className="text-sm text-slate-700">Use this form for design follow-up, estimating questions, installation support, or window service requests. If you need material pricing, use the quote form instead.</p>
      </header>
      <ServiceRequestForm />
    </div>
  );
}
