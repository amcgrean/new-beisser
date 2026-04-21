import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import FAQSection, { FAQ } from "@/components/FAQSection";
import RelatedLinks, { RelatedLinkItem } from "@/components/RelatedLinks";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { MdxContent } from "@/app/ui/MdxContent";
import { getCategoryEntries, getCategoryMdx, getCategoryBySlug } from "@/app/lib/content";
import { getBrandEntries } from "@/app/lib/brands";
import { productFaqsBySlug } from "@/app/data/faqs";
import { generateCategoryMetadata } from "@/app/lib/seo";

const slugAliases: Record<string, string> = {
  decking: "decking-railing",
  "decking-and-exteriors": "decking-railing",
  windows: "windows-patio-doors",
  "windows-and-patio-doors": "windows-patio-doors",
  doors: "doors",
  "interior-and-exterior-doors": "doors",
  siding: "siding",
  "siding-and-exterior-trim": "siding",
  lumber: "lumber-panels",
  "lumber-and-panels": "lumber-panels",
  millwork: "millwork",
  "millwork-and-trim": "millwork",
  "engineered-wood": "engineered-wood-products",
  "building-envelope": "building-envelope-accessories",
  weatherization: "building-envelope-accessories",
  "hardware-and-screws": "hardware-screws",
};

const internalLinksByCategory: Record<string, RelatedLinkItem[]> = {
  "decking-railing": [
    { href: "/brands/trex", label: "Browse Trex products at Beisser", description: "Compare Trex decking and request a quote for your Iowa project." },
    { href: "/tools/deck-visualizer", label: "Try the deck visualizer", description: "Preview decking colors and railing combinations before you buy. Aaron: confirm final visualizer URL before launch." },
    { href: "/quote", label: "Request a material quote", description: "Get branch-routed pricing for your next deck project." },
  ],
  siding: [
    { href: "/brands/james-hardie", label: "James Hardie at Beisser Lumber", description: "Explore James Hardie support at Beisser." },
    { href: "/brands/lp-smartside", label: "LP SmartSide dealer in Iowa", description: "See LP SmartSide options from Beisser Lumber." },
    { href: "/blog/james-hardie-vs-lp-smartside-iowa", label: "Compare Hardie and LP for Iowa", description: "Read an Iowa-focused siding comparison guide." },
  ],
  doors: [
    { href: "/products/doors/interior-doors", label: "Interior door options", description: "See interior door lines, styles, and package support." },
    { href: "/products/doors/exterior-doors", label: "Exterior entry systems", description: "Compare fiberglass, steel, wood, and specialty exterior doors." },
    { href: "/products/doors/door-hardware", label: "Door hardware & locksets", description: "Review Schlage-focused hardware support and keying services." },
  ],
  "engineered-wood-products": [
    { href: "/pros/commercial-multifamily", label: "Commercial and multifamily support", description: "See how Beisser supports larger EWP scopes and panelized walls." },
    { href: "/services/estimating", label: "Estimating support", description: "Coordinate engineered packages with takeoffs and dedicated support." },
  ],
  "windows-patio-doors": [
    { href: "/brands/marvin", label: "Marvin Windows at Beisser", description: "Browse Marvin window and door options available through Beisser." },
    { href: "/brands/andersen", label: "Andersen at Beisser", description: "Review Andersen support through an official retailer." },
    { href: "/brands/gerkin", label: "Gerkin at Beisser", description: "See Beisser's Iowa-based Gerkin window offering." },
  ],
};

const schemaTypeByCategory: Record<string, string> = {
  "windows-patio-doors": "OfferCatalog",
  "engineered-wood-products": "OfferCatalog",
  "decking-railing": "OfferCatalog",
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return generateCategoryMetadata(slugAliases[params.slug] ?? params.slug);
}

export default function ProductCategoryPage({ params }: { params: { slug: string } }) {
  const requestedSlug = params.slug;
  const canonicalSlug = slugAliases[requestedSlug] ?? requestedSlug;

  const category = getCategoryBySlug(canonicalSlug);
  if (!category) return notFound();

  const categoryMdx = getCategoryMdx(category.slug);
  const allBrands = getBrandEntries();
  const categoryBrands = allBrands.filter((b) => (b.categories ?? []).includes(category.slug));
  const heroSrc = category.heroImage ?? "/placeholders/category.jpg";
  const mdxBody = categoryMdx?.content;
  const description = category.description ?? category.summary ?? "";
  const subcategories = category.subcategories ?? [];
  const faqs: FAQ[] = productFaqsBySlug[canonicalSlug] ?? [];
  const relatedLinks = internalLinksByCategory[canonicalSlug] ?? [{ href: "/quote", label: "Request a material quote", description: "Share your plans and get branch-routed pricing." }];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://beisserlumber.com/products" },
      { "@type": "ListItem", position: 3, name: category.name, item: `https://beisserlumber.com/products/${canonicalSlug}` },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": schemaTypeByCategory[canonicalSlug] ?? "CollectionPage",
    name: category.name,
    description,
    url: `https://beisserlumber.com/products/${canonicalSlug}`,
  };

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: category.name }]} />

      <section className="grid gap-8 items-start lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)]">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-beisserGray">{category.name} at Beisser Lumber</h1>
          <p className="max-w-2xl text-sm text-slate-700">{description}</p>
          <p className="max-w-2xl text-sm text-slate-700">
            Beisser Lumber supports builders and homeowners with product comparisons, branch-level guidance, estimating help,
            and coordinated delivery schedules across Iowa.
          </p>
          {subcategories.length > 0 && (
            <ul className="list-inside list-disc space-y-1 text-sm text-slate-700">
              {subcategories.map((item) => (<li key={item}>{item}</li>))}
            </ul>
          )}
        </div>
        <div className="relative h-64 overflow-hidden rounded-2xl border bg-slate-100 shadow-sm sm:h-72 lg:h-80">
          <Image src={heroSrc} alt={category.name} fill className="object-cover" priority />
        </div>
      </section>

      {categoryMdx && mdxBody ? (
        <section className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-beisserGray">{category.name}</h2>
          <MdxContent content={mdxBody} />
        </section>
      ) : null}

      {categoryBrands.length > 0 ? (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-beisserGray">Relevant Brands</h2>
          <div className="flex flex-wrap gap-2">
            {categoryBrands.map((brand) => (
              <Link key={brand.slug} href={`/brands/${brand.slug}`} className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-brand-green hover:text-brand-green">
                {brand.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="rounded-xl border bg-slate-50 p-4">
        <p className="text-sm text-slate-700">Need pricing for this category? We can quote by plan set, takeoff, or material list.</p>
        <Link href={`/quote?category=${canonicalSlug}`} className="mt-3 inline-flex rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-greenDark">Request a Quote</Link>
      </section>

      <RelatedLinks links={relatedLinks} />
      <FAQSection title={`${category.name} FAQs`} faqs={faqs} category={canonicalSlug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}

export function generateStaticParams() {
  const canonical = getCategoryEntries().map((c) => ({ slug: c.slug }));
  const aliases = Object.keys(slugAliases).map((slug) => ({ slug }));
  return [...canonical, ...aliases];
}
