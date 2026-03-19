import { notFound } from "next/navigation";
import Link from "next/link";
import FAQSection, { FAQ } from "@/components/FAQSection";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { getBrandBySlug, getBrandEntries } from "@/app/lib/brands";

const waveOneSlugs = ["trex", "james-hardie", "lp-smartside", "andersen", "weyerhaeuser"];

export function generateStaticParams() {
  const all = getBrandEntries().map((b) => b.slug);
  const merged = Array.from(new Set([...all, ...waveOneSlugs]));
  return merged.map((slug) => ({ slug }));
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = getBrandBySlug(params.slug);
  if (!brand) return notFound();

  const faqs: FAQ[] = [
    { question: `What ${brand.name} products are available from Beisser Lumber?`, answer: "[Answer pending — sales team review]" },
    { question: `Can I request current pricing for ${brand.name}?`, answer: "[Answer pending — sales team review]" },
    { question: `Do all Beisser locations stock ${brand.name}?`, answer: "[Answer pending — sales team review]" },
    { question: `Can your team help with ${brand.name} takeoffs and package planning?`, answer: "[Answer pending — sales team review]" },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Brands", href: "/brands" },
          { label: brand.name },
        ]}
      />

      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-beisserGray">{brand.name} at Beisser Lumber — Authorized Iowa Dealer</h1>
        <p className="max-w-3xl text-sm text-slate-700">
          Beisser Lumber carries {brand.name} products at select Iowa locations. Contact your nearest branch or request
          a quote for current availability, lead times, and pricing.
        </p>
      </header>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Products We Carry</h2>
        <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-700">
          <li>Core {brand.name} product lines for builder and remodeler projects</li>
          <li>Special-order options based on plan requirements and finish preferences</li>
          <li>Accessory and companion products coordinated through Beisser teams</li>
        </ul>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Why Buy {brand.name} from Beisser</h2>
        <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-700">
          <li>Local branch support for pricing, product selection, and schedule planning</li>
          <li>Material coordination across lumber, millwork, and exterior packages</li>
          <li>Delivery options aligned with your project timeline across Iowa</li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link href={`/quote?brand=${brand.slug}`} className="inline-flex rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#163f6e]">
          Request a {brand.name} Quote
        </Link>
        <Link href="/locations" className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#1B4F8A] hover:text-[#1B4F8A]">
          Find a Location
        </Link>
      </div>

      <FAQSection title={`${brand.name} FAQs`} faqs={faqs} />
    </div>
  );
}
