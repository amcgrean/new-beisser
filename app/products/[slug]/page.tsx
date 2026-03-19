import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import FAQSection, { FAQ } from "@/components/FAQSection";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { MdxContent } from "@/app/ui/MdxContent";
import {
  getCategoryEntries,
  getCategoryMdx,
  getCategoryBySlug,
} from "@/app/lib/content";
import { getBrandEntries } from "@/app/lib/brands";

type PageProps = {
  params: { slug: string };
};

const placeholderAnswer = "[Answer pending — sales team review]";

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

const faqBySlug: Record<string, FAQ[]> = {
  decking: [
    "What decking brands does Beisser carry?",
    "Difference between Trex, Fiberon, and TimberTech?",
    "Best composite for Iowa freeze/thaw climate?",
    "Do you offer deck material takeoffs?",
    "Can I see samples?",
    "Do you deliver to job sites?",
  ].map((question) => ({ question, answer: placeholderAnswer })),
  siding: [
    "What siding brands do you carry?",
    "Hardie vs LP SmartSide difference?",
    "Is Beisser an authorized Hardie dealer?",
    "Best siding for Iowa climate?",
    "Can you estimate siding quantity?",
    "Pre-primed or pre-finished options?",
  ].map((question) => ({ question, answer: placeholderAnswer })),
  windows: [
    "What window brands do you carry?",
    "Do you have a window showroom?",
    "Can I get custom sizes?",
    "Do you install windows?",
    "Lead time on special orders?",
    "Andersen 100 vs 400 vs E-Series?",
  ].map((question) => ({ question, answer: placeholderAnswer })),
  doors: [
    "What door brands do you carry?",
    "Pre-hung exterior doors in stock?",
    "Can I see samples at Birchwood?",
    "What info for custom door order?",
    "Do you sell hardware packages?",
    "Fiberglass vs steel vs wood for Iowa?",
  ].map((question) => ({ question, answer: placeholderAnswer })),
  "engineered-wood": [
    "Do you carry LVL beams?",
    "LVL vs LSL vs PSL?",
    "I-joists and floor systems?",
    "Value engineering on EWP packages?",
    "Lead times for commercial packages?",
    "Engineered vs dimensional lumber?",
  ].map((question) => ({ question, answer: placeholderAnswer })),
  lumber: [
    "What lumber grades do you stock?",
    "Do you deliver to job sites?",
    "Can I order by the piece?",
    "Pressure-treated options?",
    "What panel products do you carry?",
  ].map((question) => ({ question, answer: placeholderAnswer })),
  millwork: [
    "Do you stock primed interior trim?",
    "Can I order custom stair parts?",
    "Do you have a millwork showroom?",
    "What trim profiles are in stock?",
    "Can you pull a complete trim package?",
  ].map((question) => ({ question, answer: placeholderAnswer })),
  roofing: [
    "What roofing brands do you carry?",
    "Do you stock accessories (ice shield, underlayment, etc.)?",
    "Can you deliver to the jobsite?",
    "Synthetic vs felt underlayment for Iowa?",
    "Do you do roofing takeoffs?",
  ].map((question) => ({ question, answer: placeholderAnswer })),
  weatherization: [
    "What housewrap brands do you carry?",
    "ZIP System vs traditional housewrap?",
    "Do you stock fluid-applied WRBs?",
    "What do you recommend for Iowa new construction?",
    "Do you carry flashing tapes?",
  ].map((question) => ({ question, answer: placeholderAnswer })),
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
  const faqs = faqBySlug[faqSlug] ?? [];

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: category.name },
        ]}
      />

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] items-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-beisserGray">{category.name} at Beisser Lumber</h1>
          <p className="max-w-2xl text-sm text-slate-700">{description}</p>
          <p className="max-w-2xl text-sm text-slate-700">
            Beisser Lumber supports builders and homeowners with product options, estimating help, and coordinated
            delivery schedules across Iowa branches.
          </p>
          {subcategories.length > 0 && (
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {subcategories.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative h-64 overflow-hidden rounded-2xl border bg-slate-100 shadow-sm sm:h-72 lg:h-80">
          <Image src={heroSrc} alt={category.name} fill className="object-cover" />
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
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-[#1B4F8A] hover:text-[#1B4F8A]"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="rounded-xl border bg-slate-50 p-4">
        <p className="text-sm text-slate-700">Need pricing for this category? We can quote by plan set, takeoff, or material list.</p>
        <Link
          href={`/quote?category=${requestedSlug}`}
          className="mt-3 inline-flex rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#163f6e]"
        >
          Request a Quote
        </Link>
      </section>

      {faqs.length > 0 ? <FAQSection title={`${category.name} FAQs`} faqs={faqs} /> : null}
    </div>
  );
}

export function generateStaticParams() {
  const canonical = getCategoryEntries().map((c) => ({ slug: c.slug }));
  const aliases = Object.keys(slugAliases).map((slug) => ({ slug }));
  return [...canonical, ...aliases];
}
