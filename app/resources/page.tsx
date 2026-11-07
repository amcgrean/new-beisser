import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/app/ui/PageHeader";
import { ArrowRight } from "@/app/ui/icons";
import { resources } from "../data/resources";

export const metadata: Metadata = {
  title: "Resources for Builders | Beisser Lumber",
  description: "Practical guidance for builders and remodelers working with Beisser Lumber, covering quotes, deliveries, product basics and terminology.",
};

export default function ResourcesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Resources"
        title="Resources"
        lead="Practical guidance for builders and remodelers working with Beisser Lumber, covering quotes, deliveries, product basics, and terminology you can share with clients."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        actions={<Link href="/resources/literature" className="btn-secondary">Product literature &amp; spec sheets</Link>}
      />
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/resources/${article.slug}`}
              className="group card flex h-full flex-col p-6 transition hover:border-brand-200 hover:shadow-lift"
            >
              <span className="eyebrow">{article.category}</span>
              <span className="mt-2 text-lg font-semibold leading-snug text-ink-1 group-hover:text-brand-500">{article.title}</span>
              <span className="mt-2 text-sm text-ink-4">{article.summary}</span>
              <span className="mt-auto flex items-center justify-between pt-4 text-sm">
                <span className="text-ink-5">{article.readTime}</span>
                <ArrowRight size={18} className="text-brand-500 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
