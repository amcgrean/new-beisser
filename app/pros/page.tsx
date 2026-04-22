import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

const pages = [
  { href: "/pros/commercial-multifamily", title: "Commercial & Multi-Family Builders" },
  { href: "/pros/residential-builders", title: "Residential Builders" },
  { href: "/pros/remodelers", title: "Remodelers" },
  { href: "/pros/trades-specialty", title: "Trades & Specialty Contractors" },
];

export const metadata: Metadata = {
  title: "Pros | Beisser Lumber",
  description: "Audience-specific Beisser Lumber pages for residential builders, remodelers, commercial teams, and specialty trades across Iowa.",
};

export default function ProsIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Pros", item: "https://beisserlumber.com/pros" },
    ],
  };

  return (
    <div className="space-y-16">
      <div>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pros" }]} />
        <header className="mt-4 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">For pros</p>
          <h1 className="text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">Pros at Beisser Lumber</h1>
          <p className="max-w-3xl text-base text-slate-700">
            Audience-specific pages for remodelers, residential builders, commercial teams, and specialty trades. Each page connects product categories, Beisser services, and quote pathways that match how your team buys.
          </p>
        </header>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {pages.map((page) => (
          <Link key={page.href} href={page.href} className="group flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md">
            <div className="text-lg font-semibold text-brand-ink">{page.title}</div>
            <span className="text-sm font-semibold text-brand-green group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
