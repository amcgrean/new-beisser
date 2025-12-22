export default function DeliveryPage() {
  return (
    <div className="space-y-4 max-w-3xl">
      <h1 className="text-2xl font-semibold text-beisserGray">Delivery & Pickup</h1>
      <p className="text-sm text-slate-600">
        For scheduling guidance, jobsite readiness tips, and what to include with each request, visit our Delivery &
        Pickup service page.
      </p>
      <a
        href="/services/delivery"
        className="inline-flex rounded-md bg-brand-green px-3 py-2 text-sm font-semibold text-white hover:bg-brand-accent"
      >
        View Delivery Service
      </a>
    </div>
  );
}
