export default function CreditPage() {
  return (
    <div className="space-y-4 max-w-3xl">
      <h1 className="text-2xl font-semibold text-beisserGray">Credit & Accounts</h1>
      <p className="text-sm text-slate-600">
        Outline how credit accounts work at Beisser, typical terms, and who they are designed for. Then link to
        your Nuvo-powered online credit application so contractors can get started quickly.
      </p>
      <p className="text-xs text-slate-500">
        Placeholder copy: include a short list of requirements, expected review timelines, and who to contact with
        questions about account status.
      </p>
      <a
        href="https://example-nuvo-credit-url.com"
        target="_blank"
        rel="noreferrer"
        className="inline-flex px-4 py-2 rounded-md bg-white border border-beisserGreen text-beisserGreen text-sm font-medium hover:bg-beisserGreen hover:text-white transition-colors"
      >
        Apply for Credit Online
      </a>
    </div>
  );
}
