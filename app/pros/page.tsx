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
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pros" }]} />
      <h1 className="text-3xl font-bold text-slate-900">Pros at Beisser Lumber</h1>
      <p className="max-w-3xl text-sm text-slate-700">
        Explore audience-specific pages for remodelers, residential builders, commercial teams, and specialty trades. Each page connects product categories, Beisser services, and quote pathways that match how your team buys.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {pages.map((page) => (
          <Link key={page.href} href={page.href} className="rounded-lg border bg-white p-4 text-sm font-semibold text-[#1B4F8A] shadow-sm hover:shadow-md">
            {page.title}
          </Link>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
