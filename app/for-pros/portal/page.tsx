export default function PortalPage() {
  return (
    <div className="space-y-4 max-w-3xl">
      <h1 className="text-2xl font-semibold text-beisserGray">Customer Portal</h1>
      <p className="text-sm text-slate-600">
        Use Beisser's online portal to review invoices, pay bills, check balances, and keep your account activity in one place.
      </p>
      <a
        href="https://pro.beisserlumber.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex px-4 py-2 rounded-md bg-beisserGreen text-white text-sm font-medium hover:bg-emerald-700 transition-colors"
      >
        Open Customer Portal
      </a>
    </div>
  );
}
