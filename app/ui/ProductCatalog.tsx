import Image from "next/image";
import catalog from "@/app/data/pip/catalog.json";
import { ChevronDown } from "./icons";

// Stock catalog for a product category, from app/data/pip/catalog.json: the
// published web:<category> guides that PIP exports (scripts/sync-pip.mjs).
// Cards show the manufacturer profile, species, finish, size and brand; never
// an Agility item code.

type Item = {
  catalogId: number;
  title: string;
  description: string | null;
  profile: string | null;
  species: string | null;
  finish: string | null;
  size: string | null;
  categoryMinor: string | null;
  brand: string | null;
  imageUrl: string | null;
  imageAlt: string | null;
  branchScope: string | null;
};
type Section = { name: string | null; items: Item[] };
type Guide = { id: number; name: string; part: string | null; description: string | null; sections: Section[] };
type Category = { slug: string; guides: Guide[] };

const categories = catalog.categories as Category[];

export function hasProductCatalog(slug: string) {
  return categories.some((c) => c.slug === slug && c.guides.length > 0);
}

function metaLine(item: Item) {
  return [item.species, item.finish, item.size].filter((b): b is string => !!b).join(" · ");
}

function ItemCard({ item }: { item: Item }) {
  const title = item.title;
  return (
    <li className="card-muted flex gap-4 p-4">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-line-soft bg-canvas">
        {item.imageUrl ? (
          <Image src={item.imageUrl} alt={item.imageAlt ?? title} width={160} height={160} sizes="80px" className="h-full w-full object-contain p-1" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[10px] font-semibold uppercase tracking-wide text-ink-5">No photo</div>
        )}
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-semibold leading-snug text-ink-1">{title}</h4>
        {metaLine(item) ? <p className="mt-1 text-xs text-ink-4">{metaLine(item)}</p> : null}
        {item.brand ? <p className="mt-1 text-xs text-ink-4">{item.brand}</p> : null}
        {item.description ? <p className="mt-1 text-xs text-ink-3">{item.description}</p> : null}
      </div>
    </li>
  );
}

function GuidePart({ guide, open }: { guide: Guide; open: boolean }) {
  const count = guide.sections.reduce((n, s) => n + s.items.length, 0);
  const named = guide.sections.some((s) => s.name);
  return (
    <details className="card group p-6" open={open}>
      <summary className="cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-3">
          <span>
            <span className="text-lg font-semibold text-ink-1">{guide.part ?? "All products"}</span>
            <span className="ml-2 text-xs text-ink-4">{count} products</span>
          </span>
          <ChevronDown size={18} className="shrink-0 text-brand-500 transition-transform group-open:rotate-180" />
        </span>
      </summary>
      <div className="mt-4 space-y-8">
        {guide.sections.map((section) => (
          <div key={section.name ?? "_"}>
            {section.name || named ? <h3 className="mb-3 text-base font-semibold text-ink-1">{section.name ?? "Other products"}</h3> : null}
            <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {section.items.map((item) => <ItemCard key={item.catalogId} item={item} />)}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
}

export function ProductCatalog({ category, title = "What we stock" }: { category: string; title?: string }) {
  const cat = categories.find((c) => c.slug === category);
  if (!cat || !cat.guides.length) return null;
  const note = cat.guides.find((g) => g.description)?.description ?? null;
  const total = cat.guides.reduce((n, g) => n + g.sections.reduce((m, s) => m + s.items.length, 0), 0);
  return (
    <section aria-labelledby={`catalog-${category}`} className="space-y-4">
      <div>
        <p className="eyebrow">Stock list</p>
        <h2 id={`catalog-${category}`} className="section-title mt-2">{title}</h2>
        <p className="mt-2 max-w-3xl text-sm text-ink-3">
          {total} products{note ? `. ${note}` : "."}
        </p>
      </div>
      {cat.guides.map((guide, i) => <GuidePart key={guide.id} guide={guide} open={i === 0} />)}
    </section>
  );
}
