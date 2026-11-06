import type { Metadata } from "next";
import Link from "next/link";
import { getCategoryEntries } from "@/app/lib/content";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";
import { ArrowRight } from "@/app/ui/icons";

export const metadata: Metadata = {
  title: "Building Materials Products | Beisser Lumber",
  description: "Browse Beisser Lumber product categories for Iowa builders and homeowners, including lumber, windows, doors, siding, decking, and hardware.",
};

export default function ProductsPage() {
  const categories = getCategoryEntries();
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://beisserlumber.com/products" },
    ],
  };

  return (
    <div>
      <PageHeader
        eyebrow="Products"
        title="Building materials for Iowa builders"
        lead="Materials, components, and systems for residential and light commercial projects across Iowa. Browse categories, see brand coverage, and request pricing when you are ready."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        actions={
          <>
            <Link href="/quote" className="btn-primary">Request a Quote</Link>
            <Link href="/services" className="btn-secondary">View Services</Link>
          </>
        }
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <li key={cat.slug}>
            <Link href={`/products/${cat.slug}`} className="group flex h-full flex-col rounded-lg border border-line bg-canvas p-6 transition hover:border-brand-500/50 hover:bg-surface-1">
              <h2 className="text-lg font-semibold text-ink-1 group-hover:text-brand-500">{cat.name}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-ink-4">{cat.description ?? cat.summary}</p>
              <span className="mt-auto pt-4 text-brand-500"><ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" /></span>
            </Link>
          </li>
        ))}
      </ul>

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
