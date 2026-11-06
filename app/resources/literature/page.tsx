import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
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

function isPdf(url: string) {
  return /\.pdf(\?|$)/i.test(url) || url.includes("/is/content/") || url.includes("cloudinary");
}

function DocRow({ doc }: { doc: Doc }) {
  return (
    <li className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-slate-100 py-2 last:border-b-0">
      <span className="inline-flex shrink-0 rounded bg-brand-mist px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-600">
        {typeLabels[doc.type] ?? doc.type}
      </span>
      {doc.url ? (
        <a href={doc.url} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-green underline-offset-4 hover:underline">
          {doc.title}
          <span className="ml-1 text-xs font-normal text-slate-500">{isPdf(doc.url) ? "PDF" : "link"}</span>
        </a>
      ) : (
        <span className="font-medium text-slate-800">
          {doc.title}
          <Link href="/contact" className="ml-2 text-xs font-normal text-slate-600 underline underline-offset-4">
            Request from your branch
          </Link>
        </span>
      )}
      {doc.appliesTo ? <span className="text-xs text-slate-500">{doc.appliesTo}</span> : null}
    </li>
  );
}

function BrandGroup({ brand }: { brand: Brand }) {
  const heading = (
    <span className="flex items-baseline gap-2">
      <span className="text-base font-semibold text-brand-ink">{brand.brand}</span>
      <span className="text-xs text-slate-500">{brand.docs.length} document{brand.docs.length === 1 ? "" : "s"}</span>
    </span>
  );
  const list = <ul className="mt-1">{brand.docs.map((doc) => <DocRow key={`${brand.brand}-${doc.title}-${doc.url}`} doc={doc} />)}</ul>;

  if (brand.docs.length > COLLAPSE_OVER) {
    return (
      <details className="group">
        <summary className="cursor-pointer list-none py-1 marker:content-none [&::-webkit-details-marker]:hidden">
          <span className="flex items-center justify-between gap-3">
            {heading}
            <span aria-hidden="true" className="text-sm text-brand-green transition-transform group-open:rotate-180">▾</span>
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
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Product Literature & Spec Sheets" }]} />
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Resources</p>
        <h1 className="text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">Product Literature &amp; Spec Sheets</h1>
        <p className="max-w-3xl text-base text-slate-700">
          {totalDocs} manufacturer documents for the products we carry: catalogs, spec sheets, installation guides, CAD drawings, and warranties.
        </p>
      </header>

      <nav aria-label="Categories" className="flex flex-wrap gap-2 text-sm">
        {sections.map((s) => (
          <a key={s.category} href={`#${s.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-slate-700 hover:border-brand-green hover:text-brand-green">
            {s.category}
          </a>
        ))}
      </nav>

      <section className="rounded-lg border border-brand-green/20 bg-brand-green/10 p-5 text-sm text-slate-800">
        <p>Looking for a document that isn&apos;t listed? Call your branch — we can email any current spec sheet or brochure directly.</p>
      </section>

      <div className="space-y-6">
        {sections.map((section) => (
          <section key={section.category} id={section.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="scroll-mt-28 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-brand-ink">{section.category}</h2>
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
