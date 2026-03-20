import Link from "next/link";

export default function ForProsPage() {
  const items = [
    {
      title: "Customer Portal",
      description: "Secure online access to your account, invoices, and statements through Beisser's online portal.",
      href: "https://pro.beisserlumber.com",
      external: true,
    },
    {
      title: "Contractor Resources",
      description: "Downloadable credit apps, tax forms, span tables, and other essential docs.",
      href: "/for-pros/resources",
    },
    {
      title: "Estimating & Takeoffs",
      description: "Partner with our estimating team for lumber lists, window and door packages, and more.",
      href: "/services/estimating",
    },
    {
      title: "Delivery & Pickup",
      description: "Jobsite delivery, will call, and options for coordinating material flow.",
      href: "/services/delivery",
    },
    {
      title: "Design Consultation",
      description: "Host client selections at our Birchwood/Johnston showroom with product specialists.",
      href: "/services/design-consultation",
    },
  ];

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-beisserGray">For Pros</h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          A central hub for builders, remodelers, and contractors.
          Access your tools and key services below.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 text-sm">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
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
