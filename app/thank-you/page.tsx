import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-4 rounded-xl border bg-white p-6 text-center shadow-sm">
      <h1 className="text-3xl font-bold text-slate-900">Thank You</h1>
      <p className="text-sm text-slate-700">Your quote request has been submitted. A Beisser Lumber team member will follow up shortly.</p>
      <div>
        <Link href="/products" className="inline-flex rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-greenDark">Back to Products</Link>
      </div>
    </div>
  );
}
