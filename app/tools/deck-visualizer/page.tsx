import type { Metadata } from "next";
import { PageHeader } from "@/app/ui/PageHeader";

export const metadata: Metadata = {
  title: "Deck Visualizer | Beisser Lumber",
  description: "Preview composite decking colors and styles on a home before you buy, with help from Beisser Lumber.",
  // Placeholder until the final visualizer URL is confirmed (docs/launch-checklist.md 3a).
  robots: { index: false },
};

export default function DeckVisualizerPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Deck Visualizer", item: "https://beisserlumber.com/tools/deck-visualizer" },
    ],
  };

  return (
    <div>
      <PageHeader
        eyebrow="Tools"
        title="Deck Visualizer"
        lead="Not sure what composite decking will look like on your home? Use our deck visualizer to try different colors and styles before you buy."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Deck Visualizer" }]}
      />
      <div className="card p-5 text-ink-3">
        The online visualizer is being set up. Until it is ready, your branch can show you color samples and help you compare decking and railing options.
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
