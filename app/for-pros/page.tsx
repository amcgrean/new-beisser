import Link from "next/link";

export default function ForProsPage() {
  const items = [
    {
      title: "Customer Portal",
      description: "Secure online access to your account, invoices, and statements via ToolBx.",
      href: "/for-pros/portal",
    },
    {
      title: "Credit & Accounts",
      description: "Apply for a line of credit and manage terms through our online credit application.",
      href: "/for-pros/credit",
    },
    {
      title: "Estimating & Takeoffs",
      description: "Partner with our estimating team for lumber lists, window and door packages, and more.",
      href: "/for-pros/estimating",
    },
    {
      title: "Delivery & Pickup",
      description: "Jobsite delivery, will call, and options for coordinating material flow to your projects.",
      href: "/for-pros/delivery",
    },
  ];

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-beisserGray">For Pros</h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          A central hub for builders, remodelers, and contractors who rely on Beisser for consistent material supply,
          local expertise, and jobsite support. The tiles below show how your key pro tools and services will be
          organized.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 text-sm">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg border bg-white hover:border-beisserGreen/70 transition-colors p-4"
          >
            <div className="font-medium text-slate-800">{item.title}</div>
            <p className="text-xs text-slate-500 mt-1">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
