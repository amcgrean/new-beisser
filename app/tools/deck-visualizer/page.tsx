import type { Metadata } from "next";
import { PageHeader } from "@/app/ui/PageHeader";

export const metadata: Metadata = {
  title: "Deck Visualizer | Beisser Lumber",
  description: "Placeholder deck visualizer landing page for Beisser Lumber. Aaron: replace with the confirmed visualizer destination before launch.",
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
        Aaron: replace this placeholder page with the confirmed visualizer link or embed before launch.
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
