export default function ContactPage() {
  return (
    <div className="space-y-4 max-w-xl">
      <h1 className="text-2xl font-semibold text-beisserGray">Contact Us</h1>
      <p className="text-sm text-slate-600">
        A simple starting point contact form. In production you&apos;ll want to wire this up to your preferred
        email or CRM system.
      </p>
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
