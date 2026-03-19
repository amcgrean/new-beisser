import Link from "next/link";

type QuotePageProps = {
  searchParams?: {
    category?: string;
    brand?: string;
    branch?: string;
  };
};

export default function QuotePage({ searchParams }: QuotePageProps) {
  const source = searchParams?.category || searchParams?.brand || searchParams?.branch || "direct";

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B4F8A]">Request a Quote</p>
        <h1 className="text-3xl font-bold text-slate-900">Project Quote Request</h1>
        <p className="text-sm text-slate-700">
          Share your project scope and we’ll route your request to the right branch team for pricing, lead-time
          guidance, and material planning.
        </p>
      </header>

      <form
        name="quote-request"
        data-netlify="true"
        action="/thank-you"
        method="POST"
        encType="multipart/form-data"
        className="space-y-4 rounded-xl border bg-white p-5 shadow-sm"
      >
        <input type="hidden" name="form-name" value="quote-request" />
        <input type="hidden" name="source" value={source} />

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">Name *<input required name="name" type="text" className="mt-1 w-full rounded-md border px-3 py-2" /></label>
          <label className="text-sm">Company / Business Name<input name="company" type="text" className="mt-1 w-full rounded-md border px-3 py-2" /></label>
          <label className="text-sm">Email *<input required name="email" type="email" className="mt-1 w-full rounded-md border px-3 py-2" /></label>
          <label className="text-sm">Phone<input name="phone" type="tel" className="mt-1 w-full rounded-md border px-3 py-2" /></label>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">Branch
            <select name="branch" className="mt-1 w-full rounded-md border px-3 py-2">
              <option>Grimes</option><option>Coralville</option><option>Fort Dodge</option><option>Birchwood-Johnston</option>
            </select>
          </label>
          <label className="text-sm">Project Type
            <select name="project_type" className="mt-1 w-full rounded-md border px-3 py-2">
              <option>Residential New Construction</option><option>Residential Remodel</option><option>Commercial-Multi-Family</option><option>Decking-Exterior</option><option>Other</option>
            </select>
          </label>
        </div>

        <label className="block text-sm">Product Category
          <select name="product_category" className="mt-1 w-full rounded-md border px-3 py-2">
            <option>Lumber</option><option>Decking</option><option>Siding</option><option>Windows</option><option>Doors</option><option>Engineered Wood</option><option>Millwork</option><option>Roofing</option><option>Weatherization</option><option>Other</option>
          </select>
        </label>

        <label className="block text-sm">Project Description
          <textarea name="project_description" className="mt-1 min-h-[120px] w-full rounded-md border px-3 py-2" />
        </label>

        <label id="plans" className="block text-sm">File Upload (optional)
          <input name="file_upload" type="file" accept=".pdf,.jpg,.png,.dwg" className="mt-1 w-full rounded-md border px-3 py-2" />
        </label>

        <button type="submit" className="rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#163f6e]">Submit Quote Request</button>
      </form>

      <p className="text-xs text-slate-600">Need immediate help? <Link href="/contact" className="text-[#1B4F8A] underline">Contact your branch team</Link>.</p>
    </div>
  );
}
