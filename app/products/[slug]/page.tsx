import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import FAQSection, { FAQ } from "@/components/FAQSection";
import RelatedLinks, { RelatedLinkItem } from "@/components/RelatedLinks";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";
import { MdxContent } from "@/app/ui/MdxContent";
import { ProductCatalog } from "@/app/ui/ProductCatalog";
import { getCategoryEntries, getCategoryMdx, getCategoryBySlug } from "@/app/lib/content";
import { getBrandEntries } from "@/app/lib/brands";
import { productFaqsBySlug } from "@/app/data/faqs";
import { generateCategoryMetadata } from "@/app/lib/seo";
import { mainPhone } from "@/app/data/navigation";
import { Phone } from "@/app/ui/icons";

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
  // Only our own photos go in the header: local images, or product shots from
  // Beisser's image host (shown whole on white). Placeholders and remote stock
  // images (several do not match their category) are skipped.
  const hero = category.heroImage ?? "";
  const isProductShot = hero.startsWith("https://images.beisser.cloud/");
  const heroSrc = isProductShot || (hero.startsWith("/") && !hero.startsWith("/placeholders/")) ? hero : null;
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
    <div>
      <PageHeader
        eyebrow="Products"
        title={`${category.name} at Beisser Lumber`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: category.name }]}
        image={heroSrc ? { src: heroSrc, alt: category.name, width: 1600, height: 1200, className: isProductShot ? "border border-line-soft bg-canvas object-contain p-8" : undefined } : undefined}
        lead={
          <>
            <p>{description}</p>
            <p className="text-base">
              Beisser Lumber supports builders and homeowners with product comparisons, branch-level guidance, estimating help,
              and coordinated delivery schedules across Iowa.
            </p>
          </>
        }
        actions={
          <>
            <Link href={`/quote?category=${canonicalSlug}`} className="btn-primary">Request a Quote</Link>
            <a href={mainPhone.href} className="btn-secondary"><Phone size={16} /> {mainPhone.label}</a>
          </>
        }
      />

      <div className="space-y-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            {categoryMdx && mdxBody ? <MdxContent content={mdxBody} /> : null}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {subcategories.length > 0 && (
              <div className="card-muted p-6">
                <h2 className="text-base font-semibold text-ink-1">In this category</h2>
                <ul className="bullets mt-3 text-sm text-ink-3">
                  {subcategories.map((item) => (<li key={item}>{item}</li>))}
                </ul>
              </div>
            )}
            {categoryBrands.length > 0 ? (
              <div className="card-muted p-6">
                <h2 className="text-base font-semibold text-ink-1">Brands we carry</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {categoryBrands.map((brand) => (
                    <Link key={brand.slug} href={`/brands/${brand.slug}`} className="chip">
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="card p-6">
              <h2 className="text-base font-semibold text-ink-1">Need pricing?</h2>
              <p className="mt-2 text-sm text-ink-3">We can quote by plan set, takeoff, or material list.</p>
              <Link href={`/quote?category=${canonicalSlug}`} className="btn-primary mt-4 w-full">Request a Quote</Link>
            </div>
          </aside>
        </div>

        <ProductCatalog category={canonicalSlug} />

        <RelatedLinks links={relatedLinks} />
        <FAQSection title={`${category.name} FAQs`} faqs={faqs} category={canonicalSlug} />
      </div>

      <CtaBand primary={{ href: `/quote?category=${canonicalSlug}`, label: "Request a Quote" }} />
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
