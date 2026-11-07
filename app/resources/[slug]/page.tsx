import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";
import { resources } from "../../data/resources";

type Params = { slug: string };

const articleContent: Record<string, string[]> = {
  "how-to-request-a-materials-quote": [
    "Send plans in PDF when possible, including elevations and sections so we can confirm spans, openings, and details that affect quantities.",
    "Include timing: whether you are bidding, ready to order, or value engineering. Let us know who should receive the quote and how you prefer follow-up.",
    "Share preferences for brands or series for windows, doors, decking, or siding. If you are flexible, tell us the performance or budget targets instead.",
  ],
  "lumber-and-building-material-basics": [
    "Dimensional lumber is referenced by nominal sizes (2x4, 2x6) with species and grades that influence strength and appearance.",
    "Panels like OSB and plywood come in different thicknesses, spans, and exposure ratings; pairing them with the right screws and connectors matters for code and performance.",
    "Engineered wood (LVL, LSL, I-joists) allows longer spans with predictable performance. Layouts should be reviewed alongside HVAC and plumbing to avoid conflicts.",
  ],
  "delivery-expectations-for-iowa-jobsites": [
    "Standard deliveries run Monday through Saturday mornings. Share staging areas, access notes, and onsite contacts to keep things efficient.",
    "Weather can impact yard and site conditions. If mud, snow, or restricted access is expected, tell dispatch so we can plan equipment and timing accordingly.",
    "We provide photos or signatures on delivery when requested. If materials must be tarped or elevated, add that instruction with your order.",
  ],
  "door-and-window-terminology": [
    "Rough opening (RO) is the framed size; unit sizes vary by brand. Confirm swings, handing, and egress requirements early.",
    "Low-E coatings, grids, and hardware finishes affect both performance and aesthetics. Document selections before ordering to avoid changes.",
    "For doors, specify slab material, core type, glass options, and jamb details. For patio doors, note panel configurations and screen preferences.",
  ],
};

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = resources.find((a) => a.slug === params.slug);
  if (!article) return {};
  return { title: `${article.title} | Beisser Lumber`, description: article.summary };
}

export default function ResourceDetailPage({ params }: { params: Params }) {
  const article = resources.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        eyebrow={article.category}
        title={article.title}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: article.title }]}
      >
        <p className="text-sm text-ink-4">{article.readTime}</p>
      </PageHeader>
      <div className="prose-beisser">
        {(articleContent[article.slug] ?? []).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          Have a project or question related to this topic? Share details through our <Link href="/quote">request form</Link> so we can connect
          you with the right specialist.
        </p>
      </div>
      <CtaBand />
    </div>
  );
}
