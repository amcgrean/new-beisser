import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";

type ProPageProps = {
  h1: string;
  intro: string;
  body: string[];
  highlights: string[];
  breadcrumbLabel: string;
  path: string;
  extraSection?: React.ReactNode;
  image?: { src: string; alt: string; width: number; height: number };
};

export default function ProAudiencePage({ h1, intro, body, highlights, breadcrumbLabel, path, extraSection, image }: ProPageProps) {
  const speakableSchema = {"@context": "https://schema.org", "@type": "WebPage", speakable: {"@type": "SpeakableSpecification", cssSelector: ["h1", ".entity-definition", ".faq-answer"]}};
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Pros", item: "https://beisserlumber.com/pros" },
      { "@type": "ListItem", position: 3, name: breadcrumbLabel, item: `https://beisserlumber.com${path}` },
    ],
  };

  return (
    <div>
      <PageHeader
        eyebrow="For pros"
        title={h1}
        lead={<p className="entity-definition">{intro}</p>}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pros", href: "/pros" }, { label: breadcrumbLabel }]}
        image={image}
      />

      <div className="space-y-12">
        <section className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-ink-3">
            {body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="card-muted p-6">
            <h2 className="text-lg font-semibold text-ink-1">What you get</h2>
            <ul className="bullets mt-3 text-ink-3">
              {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        </section>

        {extraSection}

        <section className="space-y-4">
          <h2 className="section-title">Relevant product paths</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/products/lumber-panels" className="chip">Lumber &amp; Panels</Link>
            <Link href="/products/engineered-wood-products" className="chip">Engineered Wood Products</Link>
            <Link href="/products/windows-patio-doors" className="chip">Windows &amp; Patio Doors</Link>
            <Link href="/products/doors" className="chip">Doors</Link>
            <Link href="/products/decking-railing" className="chip">Decking &amp; Railing</Link>
          </div>
        </section>

        <RelatedLinks links={[{ href: "/products/decking-railing", label: "Decking & railing products", description: "See exterior products relevant to pro projects." }, { href: "/products/siding", label: "Siding systems", description: "Compare siding packages and support options." }, { href: "/products/engineered-wood-products", label: "Engineered wood products", description: "Explore EWP framing and structural options." }, { href: "/quote", label: "Request a material quote", description: "Start a branch-routed quote for your project." }]} />
      </div>

      <CtaBand />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
