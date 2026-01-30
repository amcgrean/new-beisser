export default function ContactPage() {
  return (
    <div className="space-y-4 max-w-xl">
      <h1 className="text-2xl font-semibold text-beisserGray">Contact Us</h1>
      <p className="text-sm text-slate-600">
        Reach a branch team for general questions or partnership requests. For pricing or submittals, use the
        Request a Quote form so we capture the details needed to respond quickly.
      </p>
      <div className="rounded-lg border bg-white p-3 text-xs text-slate-700">
        <div className="font-semibold text-beisserGray">Prefer to stop by?</div>
        <p className="mt-1">
          Locations in Grimes, Coralville, Fort Dodge, and the Birchwood/Johnston showroom cover Central and Eastern
          Iowa. See addresses and hours on the locations page.
        </p>
        <a
          href="/locations"
          className="mt-2 inline-flex text-beisserGreen font-semibold underline-offset-4 hover:underline"
        >
          View locations
        </a>
      </div>
      <form className="space-y-3 bg-white border rounded-lg p-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
              placeholder="Jane Builder"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
              placeholder="jane@example.com"
            />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Phone</label>
            <input
              type="tel"
              className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Nearest Location</label>
            <select className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm">
              <option>Fort Dodge</option>
              <option>Grimes</option>
              <option>Coralville</option>
              <option>Johnston</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">How can we help?</label>
          <textarea
            className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm min-h-[120px]"
            placeholder="Tell us about your project, question, or request."
          />
        </div>
        <p className="text-[11px] text-slate-500">
          A team member will route your note to the right branch. This demo form is not yet connected to a live system.
        </p>
        <button
          type="button"
          className="px-4 py-2 rounded-md bg-beisserGreen text-white text-sm font-medium hover:bg-emerald-700 transition-colors"
        >
          Submit (demo only)
        </button>
      </form>
    </div>
  );
}
