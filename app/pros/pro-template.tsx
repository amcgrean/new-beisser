import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

type ProPageProps = {
  h1: string;
  intro: string;
  body: string[];
  highlights: string[];
};

export default function ProAudiencePage({ h1, intro, body, highlights }: ProPageProps) {
  const speakableSchema = {"@context": "https://schema.org", "@type": "WebPage", speakable: {"@type": "SpeakableSpecification", cssSelector: ["h1", ".entity-definition", ".faq-answer"]}};

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">{h1}</h1>
      <p className="entity-definition max-w-3xl text-sm text-slate-700">{intro}</p>
      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700">
        <div className="space-y-3">
          {body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ul className="mt-4 list-inside list-disc space-y-1">
          {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Relevant Product Paths</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="/products/lumber-panels" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Lumber &amp; Panels</Link>
          <Link href="/products/engineered-wood-products" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Engineered Wood Products</Link>
          <Link href="/products/windows-patio-doors" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Windows &amp; Patio Doors</Link>
          <Link href="/products/doors" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Doors</Link>
          <Link href="/products/decking-railing" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Decking &amp; Railing</Link>
        </div>
      </section>

      <RelatedLinks links={[{ href: "/products/decking-railing", label: "Decking & railing products", description: "See exterior products relevant to pro projects." }, { href: "/products/siding", label: "Siding systems", description: "Compare siding packages and support options." }, { href: "/products/engineered-wood-products", label: "Engineered wood products", description: "Explore EWP framing and structural options." }, { href: "/quote", label: "Request a material quote", description: "Start a branch-routed quote for your project." }]} />

      <div className="flex flex-wrap gap-3"><Link href="/quote" className="inline-flex rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#163f6e]">Request a Quote</Link></div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
    </div>
  );
}
