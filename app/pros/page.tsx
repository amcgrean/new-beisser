import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";
import { ArrowRight } from "@/app/ui/icons";

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
    <div>
      <PageHeader
        eyebrow="For pros"
        title="Pros at Beisser Lumber"
        lead="Pages for remodelers, residential builders, commercial teams and specialty trades. Each one connects product categories, Beisser services and quote paths that match how your team buys."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pros" }]}
        image={{ src: "/images/company/delivery-multifamily-jobsite.jpg", alt: "Beisser Lumber delivery at a multi-family jobsite", width: 776, height: 384 }}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {pages.map((page) => (
          <Link key={page.href} href={page.href} className="group card flex items-center justify-between gap-4 p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift">
            <span className="text-lg font-semibold text-ink-1">{page.title}</span>
            <ArrowRight size={20} className="shrink-0 text-brand-500 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
