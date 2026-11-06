import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl py-12 text-center">
      <p className="eyebrow">404</p>
      <h1 className="page-title mt-3">Page not found</h1>
      <p className="mt-4 text-ink-3">We couldn&apos;t find that page. You can jump back to product categories or request a quote below.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Link href="/products/decking-railing" className="chip">Decking &amp; Railing</Link>
        <Link href="/products/siding" className="chip">Siding</Link>
        <Link href="/products/windows-patio-doors" className="chip">Windows &amp; Patio Doors</Link>
        <Link href="/products" className="chip">All products</Link>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/quote" className="btn-primary">Request a Quote</Link>
        <Link href="/" className="btn-secondary">Back to home</Link>
      </div>
      <p className="mt-8 text-sm text-ink-4">Need help now? Grimes: (515) 986-4422 · Coralville: (319) 545-7120 · Fort Dodge: (515) 573-4166 · Birchwood / Johnston: (515) 986-4422</p>
    </div>
  );
}
