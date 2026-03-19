import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import FAQSection from "@/components/FAQSection";
import RelatedLinks, { RelatedLinkItem } from "@/components/RelatedLinks";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { MdxContent } from "@/app/ui/MdxContent";
import { getCategoryEntries, getCategoryMdx, getCategoryBySlug } from "@/app/lib/content";
import { getBrandEntries } from "@/app/lib/brands";
import { productFaqsBySlug } from "@/app/data/faqs";

type PageProps = {
  params: { slug: string };
};

const slugAliases: Record<string, string> = {
  decking: "decking-and-exteriors",
  siding: "siding-and-exterior-trim",
  windows: "windows-and-patio-doors",
  doors: "interior-and-exterior-doors",
  "engineered-wood": "engineered-wood-products",
  lumber: "lumber-and-panels",
  millwork: "millwork-and-trim",
  roofing: "roofing",
  weatherization: "housewrap-and-weatherization",
};

const internalLinksByCategory: Record<string, RelatedLinkItem[]> = {
  decking: [
    { href: "/brands/trex", label: "Browse Trex products at Beisser", description: "Compare Trex decking lines available through Beisser branches." },
    { href: "/brands/fiberon", label: "See Fiberon decking options", description: "Review Fiberon offerings and request current lead times." },
    { href: "/pros/residential-builders", label: "Pro account pricing for builders", description: "See builder-focused support and account options." },
    { href: "/quote", label: "Request a material quote", description: "Get branch-routed pricing for your next deck project." },
  ],
  siding: [
    { href: "/brands/james-hardie", label: "James Hardie at Beisser Lumber", description: "Explore Hardie siding support at Beisser." },
    { href: "/brands/lp-smartside", label: "LP SmartSide dealer in Iowa", description: "See LP SmartSide options from Beisser Lumber." },
    { href: "/quote", label: "Request a material quote", description: "Start a siding quote with your nearest branch." },
  ],
  "engineered-wood": [
    { href: "/pros/commercial-multifamily", label: "Commercial and multi-family projects", description: "See EWP support for larger project scopes." },
    { href: "/quote", label: "Request a material quote", description: "Get engineered wood pricing and lead-time guidance." },
  ],
};

export default function ProductCategoryPage({ params }: PageProps) {
  const requestedSlug = params.slug;
  const canonicalSlug = slugAliases[requestedSlug] ?? requestedSlug;

  const category = getCategoryBySlug(canonicalSlug);
  if (!category) return notFound();

  const categoryMdx = getCategoryMdx(category.slug);
  const allBrands = getBrandEntries();
  const categoryBrands = allBrands.filter((b) => (b.categories ?? []).includes(category.slug));
  const heroSrc = category.heroImage ?? "/placeholders/category.jpg";
  const mdxBody = (categoryMdx?.frontmatter?.body as string | undefined) ?? categoryMdx?.content;
  const description = category.description ?? category.summary ?? "";
  const subcategories = category.subcategories ?? [];

  const faqSlug = Object.keys(slugAliases).find((k) => slugAliases[k] === canonicalSlug) ?? requestedSlug;
  const faqs = productFaqsBySlug[faqSlug] ?? [];
  const relatedLinks = internalLinksByCategory[faqSlug] ?? [{ href: "/quote", label: "Request a material quote", description: "Share your plans and get branch-routed pricing." }];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: category.name }]} />

      <section className="grid gap-8 items-start lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)]">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-beisserGray">{category.name} at Beisser Lumber</h1>
          <p className="max-w-2xl text-sm text-slate-700">{description}</p>
          <p className="max-w-2xl text-sm text-slate-700">
            Beisser Lumber supports builders and homeowners with product options, estimating help, and coordinated
            delivery schedules across Iowa branches.
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
          <h2 className="text-xl font-semibold text-beisserGray">{(categoryMdx.frontmatter.title as string) ?? category.name}</h2>
          <MdxContent content={mdxBody} />
        </section>
      ) : null}

      {categoryBrands.length > 0 ? (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-beisserGray">Relevant Brands</h2>
          <div className="flex flex-wrap gap-2">
            {categoryBrands.map((brand) => (
              <Link key={brand.slug} href={`/brands/${brand.slug}`} className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-[#1B4F8A] hover:text-[#1B4F8A]">
                {brand.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="rounded-xl border bg-slate-50 p-4">
        <p className="text-sm text-slate-700">Need pricing for this category? We can quote by plan set, takeoff, or material list.</p>
        <Link href={`/quote?category=${requestedSlug}`} className="mt-3 inline-flex rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#163f6e]">Request a Quote</Link>
      </section>

      <RelatedLinks links={relatedLinks} />
      <FAQSection title={`${category.name} FAQs`} faqs={faqs} category={faqSlug} />
    </div>
  );
}

export function generateStaticParams() {
  const canonical = getCategoryEntries().map((c) => ({ slug: c.slug }));
  const aliases = Object.keys(slugAliases).map((slug) => ({ slug }));
  return [...canonical, ...aliases];
}
