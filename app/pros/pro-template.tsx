import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

type ProPageProps = {
  h1: string;
  includeQuickAnswers?: boolean;
};

export default function ProAudiencePage({ h1, includeQuickAnswers = false }: ProPageProps) {
  const speakableSchema = {"@context": "https://schema.org", "@type": "WebPage", speakable: {"@type": "SpeakableSpecification", cssSelector: ["h1", ".entity-definition", ".faq-answer"]}};

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">{h1}</h1>
      <p className="entity-definition max-w-3xl text-sm text-slate-700">Beisser Lumber partners with Iowa project teams on material takeoffs, phased deliveries, and branch-level support. Our teams coordinate product availability and quote timing so your crews can keep jobs moving.</p>
      <p className="max-w-3xl text-sm text-slate-700">Tell us your timeline and scope, and we’ll connect you with the right branch contacts for lumber, exterior, doors, windows, and engineered products.</p>

      {includeQuickAnswers ? (
        <section className="rounded-xl border bg-white p-4 text-sm">
          <h2 className="text-lg font-semibold text-beisserGray">Quick Answers</h2>
          <ul className="mt-2 space-y-1">
            <li>✓ Beisser Lumber serves contractors and homeowners across Central and Eastern Iowa</li>
            <li>✓ Four locations: Grimes, Coralville, Fort Dodge, and Birchwood/Johnston</li>
            <li>✓ Job site delivery available across Iowa</li>
            <li>✓ Pro account pricing with net terms for qualified contractors</li>
            <li>✓ Iowa&apos;s largest family-owned lumberyard since 1953</li>
          </ul>
        </section>
      ) : null}

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Relevant Product Paths</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="/products/lumber" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Lumber</Link>
          <Link href="/products/engineered-wood" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Engineered Wood</Link>
          <Link href="/products/windows" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Windows</Link>
          <Link href="/products/doors" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Doors</Link>
          <Link href="/products/decking" className="rounded-md border px-3 py-1.5 text-sm hover:border-[#1B4F8A] hover:text-[#1B4F8A]">Decking</Link>
        </div>
      </section>

      <RelatedLinks links={[{ href: "/products/decking", label: "Decking products", description: "See exterior products relevant to pro projects." }, { href: "/products/siding", label: "Siding systems", description: "Compare siding packages and support options." }, { href: "/products/engineered-wood", label: "Engineered wood products", description: "Explore EWP framing and structural options." }, { href: "/quote", label: "Request a material quote", description: "Start a branch-routed quote for your project." }]} />

      <div className="flex flex-wrap gap-3"><Link href="/quote" className="inline-flex rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#163f6e]">Request a Quote</Link></div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
    </div>
  );
}
