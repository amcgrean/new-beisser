export default function EstimatingPage() {
  return (
    <div className="space-y-4 max-w-3xl">
      <h1 className="text-2xl font-semibold text-beisserGray">Estimating & Takeoffs</h1>
      <p className="text-sm text-slate-600">
        Looking for full details? Visit our services page for scope, turnaround expectations, and how to share plans.
      </p>
      <a
        href="/services/estimating"
        className="inline-flex rounded-md bg-brand-green px-3 py-2 text-sm font-semibold text-white hover:bg-brand-accent"
      >
        View Estimating Service
      </a>
    </div>
  );
}
