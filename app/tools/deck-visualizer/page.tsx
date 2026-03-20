import type { Metadata } from "next";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

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
    <div className="max-w-3xl space-y-4">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Deck Visualizer" }]} />
      <h1 className="text-3xl font-bold text-beisserGray">Deck Visualizer</h1>
      <p className="text-sm text-slate-700">Not sure what composite decking will look like on your home? Use our deck visualizer to try different colors and styles before you buy.</p>
      <div className="rounded-xl border bg-white p-5 text-sm text-slate-700 shadow-sm">
        Aaron: replace this placeholder page with the confirmed visualizer link or embed before launch.
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
