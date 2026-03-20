import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import FAQSection, { FAQ } from "@/components/FAQSection";
import RelatedLinks from "@/components/RelatedLinks";
import BrandViewTracker from "@/components/BrandViewTracker";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { getBrandBySlug, getBrandEntries } from "@/app/lib/brands";
import { generateBrandMetadata } from "@/app/lib/seo";

const waveOneSlugs = ["trex", "james-hardie", "lp-smartside", "andersen", "weyerhaeuser", "gerkin", "sierra-pacific"];

const brandCategoryLinks: Record<string, string> = {
  trex: "/products/decking-railing",
  fiberon: "/products/decking-railing",
  timbertech: "/products/decking-railing",
  "james-hardie": "/products/siding",
  "lp-smartside": "/products/siding",
  andersen: "/products/windows-patio-doors",
  gerkin: "/products/windows-patio-doors",
  "sierra-pacific": "/products/windows-patio-doors",
  weyerhaeuser: "/products/engineered-wood-products",
  schlage: "/products/doors/door-hardware",
};

const brandNearestLocation: Record<string, string> = {
  trex: "/locations/grimes",
  "james-hardie": "/locations/grimes",
  "lp-smartside": "/locations/grimes",
  andersen: "/locations/birchwood-johnston",
  gerkin: "/locations/birchwood-johnston",
  "sierra-pacific": "/locations/birchwood-johnston",
  weyerhaeuser: "/locations/grimes",
  schlage: "/locations/birchwood-johnston",
};

export function generateStaticParams() {
  const all = getBrandEntries().map((b) => b.slug);
  const merged = Array.from(new Set([...all, ...waveOneSlugs]));
  return merged.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return generateBrandMetadata(params.slug);
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = getBrandBySlug(params.slug);
  if (!brand) return notFound();

  const faqs: FAQ[] = [
    { question: `What ${brand.name} products are available from Beisser Lumber?`, answer: "" },
    { question: `Can I request current pricing for ${brand.name}?`, answer: "" },
    { question: `Do all Beisser locations stock ${brand.name}?`, answer: "" },
    { question: `Can your team help with ${brand.name} takeoffs and package planning?`, answer: "" },
  ];

  const categoryLink = brandCategoryLinks[brand.slug] ?? "/products";
  const locationLink = brandNearestLocation[brand.slug] ?? "/locations";
  const retailerLabel = brand.slug === "andersen"
    ? "Official Andersen Retailer"
    : brand.slug === "sierra-pacific"
      ? "Official Sierra Pacific Retailer"
      : brand.slug === "gerkin"
        ? "Iowa-Based Manufacturer Partner"
        : brand.slug === "james-hardie"
          ? "Authorized James Hardie Dealer"
          : brand.slug === "schlage"
            ? "Preferred Schlage Dealer"
            : "Brand Partner";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Brands", item: "https://beisserlumber.com/brands" },
      { "@type": "ListItem", position: 3, name: brand.name, item: `https://beisserlumber.com/brands/${brand.slug}` },
    ],
  };

  return (
    <div className="space-y-8">
      <BrandViewTracker brandName={brand.name} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Brands", href: "/brands" }, { label: brand.name }]} />

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B4F8A]">{retailerLabel}</p>
        <h1 className="text-3xl font-bold text-beisserGray">{brand.name} at Beisser Lumber</h1>
        <p className="max-w-3xl text-sm text-slate-700">
          {brand.slug === "andersen"
            ? "Beisser Lumber is an official Andersen retailer with access to Andersen product lines, parts, and custom design support for Iowa projects."
            : brand.description}
        </p>
      </header>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Products We Carry</h2>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-700">
          {brand.bullets?.length ? brand.bullets.map((bullet) => <li key={bullet}>{bullet}</li>) : <li>Core {brand.name} product lines for builder and remodeler projects</li>}
        </ul>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link href={`/quote?brand=${brand.slug}`} className="inline-flex rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#163f6e]">Request a {brand.name} Quote</Link>
        <Link href="/locations" className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Find a Location</Link>
      </div>

      <RelatedLinks
        links={[
          { href: categoryLink, label: "View related product category", description: `Browse the product category tied to ${brand.name}.` },
          { href: locationLink, label: "Visit our nearest showroom", description: "Connect with a local Beisser branch for product support." },
          { href: "/quote", label: "Request a material quote", description: "Get branch-routed pricing and lead-time guidance." },
        ]}
      />

      <FAQSection title={`${brand.name} FAQs`} faqs={faqs} category={brand.slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
