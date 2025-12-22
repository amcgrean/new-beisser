import { notFound } from "next/navigation";
import Image from "next/image";
import { resources } from "../../data/resources";

type Params = { slug: string };

const articleContent: Record<string, string[]> = {
  "how-to-request-a-materials-quote": [
    "Send plans in PDF when possible, including elevations and sections so we can confirm spans, openings, and details that affect quantities.",
    "Include timing—whether you are bidding, ready to order, or value engineering. Let us know who should receive the quote and how you prefer follow-up.",
    "Share preferences for brands or series for windows, doors, decking, or siding. If you are flexible, tell us the performance or budget targets instead.",
  ],
  "lumber-and-building-material-basics": [
    "Dimensional lumber is referenced by nominal sizes (2x4, 2x6) with species and grades that influence strength and appearance.",
    "Panels like OSB and plywood come in different thicknesses, spans, and exposure ratings; pairing them with the right fasteners matters for code and performance.",
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

export default function ResourceDetailPage({ params }: { params: Params }) {
  const article = resources.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <header className="space-y-2">
        <div className="text-[11px] uppercase tracking-wide text-beisserGreen">
          {article.category}
        </div>
        <h1 className="text-2xl font-semibold text-beisserGray">{article.title}</h1>
        <div className="text-xs text-slate-500">{article.readTime}</div>
      </header>
      <Image
        src={article.image}
        alt={article.title}
        width={800}
        height={450}
        className="w-full h-64 object-cover rounded-lg border bg-slate-100"
      />
      <div className="space-y-3 text-sm text-slate-700">
        {(articleContent[article.slug] ?? []).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          Have a project or question related to this topic? Share details through our request form so we can connect
          you with the right specialist.
        </p>
      </div>
    </div>
  );
}
