import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/app/ui/PageHeader";
import { ChevronDown } from "@/app/ui/icons";
import literature from "@/app/data/literature.json";

export const metadata: Metadata = {
  title: "Product Literature & Spec Sheets | Beisser Lumber",
  description: "Download product brochures, spec sheets, installation guides, CAD drawings, and warranty references for brands carried by Beisser Lumber.",
};

// app/data/literature.json is generated from PIP's vendor document list
// (agility-ai: workbench/projects/pip-vendor-docs/vendor_documents.csv, public URLs only).
// Rows with an empty url are documents the branch emails on request.
// See docs/agility-sync-plan.md for the planned PIP -> site sync that will replace the manual regeneration.

type Doc = { title: string; type: string; url: string; appliesTo: string };
type Brand = { brand: string; docs: Doc[] };
type Section = { category: string; brands: Brand[] };

const typeLabels = literature.types as Record<string, string>;
const sections = literature.sections as Section[];
const COLLAPSE_OVER = 8;

function anchor(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function isPdf(url: string) {
  return /\.pdf(\?|$)/i.test(url) || url.includes("/is/content/") || url.includes("cloudinary");
}

function DocRow({ doc }: { doc: Doc }) {
  return (
    <li className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-line-soft py-2 last:border-b-0">
      <span className="inline-flex shrink-0 rounded-sm bg-surface-2 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-ink-3">
        {typeLabels[doc.type] ?? doc.type}
      </span>
      {doc.url ? (
        <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-link font-medium">
          {doc.title}
          <span className="ml-1 text-xs font-normal text-ink-4">{isPdf(doc.url) ? "PDF" : "link"}</span>
        </a>
      ) : (
        <span className="font-medium text-ink-2">
          {doc.title}
          <Link href="/contact" className="ml-2 text-xs font-normal text-ink-4 underline underline-offset-4 hover:text-brand-500">
            Request from your branch
          </Link>
        </span>
      )}
      {doc.appliesTo ? <span className="text-xs text-ink-4">{doc.appliesTo}</span> : null}
    </li>
  );
}

function BrandGroup({ brand }: { brand: Brand }) {
  const heading = (
    <span className="flex items-baseline gap-2">
      <span className="text-base font-semibold text-ink-1">{brand.brand}</span>
      <span className="text-xs text-ink-4">{brand.docs.length} document{brand.docs.length === 1 ? "" : "s"}</span>
    </span>
  );
  const list = <ul className="mt-1">{brand.docs.map((doc) => <DocRow key={`${brand.brand}-${doc.title}-${doc.url}`} doc={doc} />)}</ul>;

  if (brand.docs.length > COLLAPSE_OVER) {
    return (
      <details className="group">
        <summary className="cursor-pointer list-none py-1 marker:content-none [&::-webkit-details-marker]:hidden">
          <span className="flex items-center justify-between gap-3">
            {heading}
            <ChevronDown size={18} className="shrink-0 text-brand-500 transition-transform group-open:rotate-180" />
          </span>
        </summary>
        {list}
      </details>
    );
  }
  return (
    <div>
      <h3 className="py-1">{heading}</h3>
      {list}
    </div>
  );
}

export default function LiteraturePage() {
  const totalDocs = sections.reduce((n, s) => n + s.brands.reduce((m, b) => m + b.docs.filter((d) => d.url).length, 0), 0);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://beisserlumber.com/resources" },
      { "@type": "ListItem", position: 3, name: "Product Literature & Spec Sheets", item: "https://beisserlumber.com/resources/literature" },
    ],
  };

  return (
    <div>
      <PageHeader
        eyebrow="Resources"
        title="Product Literature & Spec Sheets"
        lead={`${totalDocs} manufacturer documents for the products we carry: catalogs, spec sheets, installation guides, CAD drawings, and warranties.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Product Literature & Spec Sheets" }]}
      >
        <p className="text-sm text-ink-4">Looking for a document that isn&apos;t listed? Call your branch: we can email any current spec sheet or brochure directly.</p>
      </PageHeader>

      <nav aria-label="Categories" className="mb-8 flex flex-wrap gap-2">
        {sections.map((s) => (
          <a key={s.category} href={`#${anchor(s.category)}`} className="chip">
            {s.category}
          </a>
        ))}
      </nav>

      <div className="space-y-5">
        {sections.map((section) => (
          <section key={section.category} id={anchor(section.category)} className="card scroll-mt-28 p-6">
            <h2 className="section-title">{section.category}</h2>
            <div className="mt-4 space-y-5">
              {section.brands.map((brand) => <BrandGroup key={brand.brand} brand={brand} />)}
            </div>
          </section>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
