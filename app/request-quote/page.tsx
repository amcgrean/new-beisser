export default function RequestQuotePage() {
  return (
    <div className="space-y-5 max-w-3xl">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-beisserGreen font-semibold">
          Request a Quote
        </p>
        <h1 className="text-3xl font-bold text-beisserGray">Tell Us About Your Project</h1>
        <p className="text-sm text-slate-700">
          Use this form to share project details, timelines, and any files we should review. A Beisser team
          member will follow up to confirm next steps and delivery expectations.
        </p>
      </header>

      <form className="space-y-4 rounded-xl border bg-white p-4 shadow-sm text-sm">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Name</label>
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Jane Builder" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Company</label>
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Builder Co." />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
            <input type="email" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="jane@example.com" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Phone</label>
            <input type="tel" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="(555) 123-4567" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Project Location</label>
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="City / Lot / Subdivision" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Nearest Branch</label>
            <select className="w-full rounded-md border border-slate-300 px-3 py-2">
              <option>Grimes</option>
              <option>Coralville</option>
              <option>Fort Dodge</option>
              <option>Birchwood / Johnston</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">What do you need quoted?</label>
          <textarea
            className="w-full rounded-md border border-slate-300 px-3 py-2 min-h-[120px]"
            placeholder="Lumber package, window and door schedule, decking, siding, engineered wood, etc."
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Timing</label>
            <select className="w-full rounded-md border border-slate-300 px-3 py-2">
              <option>Select one</option>
              <option>Need pricing to bid</option>
              <option>Ready to order</option>
              <option>Exploring options</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">How should we follow up?</label>
            <select className="w-full rounded-md border border-slate-300 px-3 py-2">
              <option>Email summary</option>
              <option>Phone call</option>
              <option>Schedule a site visit</option>
              <option>Meet at the showroom</option>
            </select>
          </div>
        </div>

        <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 p-3 text-xs text-slate-600">
          File upload placeholder — add plan PDFs or photos when your CMS or form provider is connected.
        </div>

        <button
          type="button"
          className="rounded-md bg-brand-green px-4 py-2 text-white font-semibold hover:bg-brand-accent"
        >
          Submit (demo)
        </button>
        <p className="text-[11px] text-slate-500">
          A team member will respond within one business day to confirm details and next steps.
        </p>
      </form>
    </div>
  );
}
