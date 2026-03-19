import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl space-y-4 rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="text-sm text-slate-700">We couldn&apos;t find that page. You can jump back to product categories or request a quote below.</p>
      <div className="flex flex-wrap gap-2 text-sm">
        <Link href="/products/decking" className="rounded-md border px-3 py-2">Decking</Link>
        <Link href="/products/siding" className="rounded-md border px-3 py-2">Siding</Link>
        <Link href="/products/windows" className="rounded-md border px-3 py-2">Windows & Doors</Link>
      </div>
      <Link href="/quote" className="inline-flex rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white">Request a Quote</Link>
      <p className="text-xs text-slate-600">Need help now? Grimes: (515) 986-4422 • Coralville: (319) 545-7120 • Fort Dodge: (515) 573-4166</p>
    </div>
  );
}
