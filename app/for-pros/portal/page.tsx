export default function PortalPage() {
  return (
    <div className="space-y-4 max-w-3xl">
      <h1 className="text-2xl font-semibold text-beisserGray">Customer Portal</h1>
      <p className="text-sm text-slate-600">
        This page explains the benefits of the ToolBx-powered customer portal and provides a clear link out to the
        live portal. Once you have your final ToolBx URL, you can wire a button here directly to it.
      </p>
      <p className="text-xs text-slate-500">
        Placeholder copy: describe what contractors can do in the portal—view invoices, pay bills, check balances,
        and review recent activity.
      </p>
      <a
        href="https://example-toolbx-portal-url.com"
        target="_blank"
        rel="noreferrer"
        className="inline-flex px-4 py-2 rounded-md bg-beisserGreen text-white text-sm font-medium hover:bg-emerald-700 transition-colors"
      >
        Open Customer Portal
      </a>
    </div>
  );
}
