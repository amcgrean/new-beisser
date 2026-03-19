import Link from "next/link";

type ProPageProps = {
  h1: string;
};

export default function ProAudiencePage({ h1 }: ProPageProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">{h1}</h1>
      <p className="max-w-3xl text-sm text-slate-700">
        Beisser Lumber partners with Iowa project teams on material takeoffs, phased deliveries, and branch-level
        support. Our teams coordinate product availability and quote timing so your crews can keep jobs moving.
      </p>
      <p className="max-w-3xl text-sm text-slate-700">
        Tell us your timeline and scope, and we’ll connect you with the right branch contacts for lumber, exterior,
        doors, windows, and engineered products.
      </p>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Relevant Product Paths</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="/products/lumber" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Lumber</Link>
          <Link href="/products/engineered-wood" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Engineered Wood</Link>
          <Link href="/products/windows" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Windows</Link>
          <Link href="/products/doors" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Doors</Link>
          <Link href="/products/decking" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Decking</Link>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link href="/quote" className="inline-flex rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#163f6e]">
          Request a Quote
        </Link>
      </div>

      <section className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-700">
        <strong>Testimonial slot:</strong> [Customer testimonial pending — marketing team review]
      </section>
    </div>
  );
}
