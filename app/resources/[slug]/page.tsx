import { notFound } from "next/navigation";
import Image from "next/image";
import { resources } from "../../data/resources";

type Params = { slug: string };

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
        <div className="text-xs text-slate-500">{article.readTime} · Placeholder article</div>
      </header>
      <Image
        src={article.image}
        alt={article.title}
        width={800}
        height={450}
        className="w-full h-64 object-cover rounded-lg border bg-slate-100"
      />
      <div className="space-y-3 text-sm text-slate-700">
        <p>
          This is placeholder article content to show how a longer resource will read on the page. Your team
          can replace these paragraphs with real guidance, tips, or product information for builders and
          remodelers.
        </p>
        <p>
          Consider using this space for evergreen topics that come up again and again in conversations with
          customers—jobsite prep, product comparisons, seasonal planning, and how to work effectively with
          your Beisser branch.
        </p>
        <p>
          At the bottom of an article, you can add links to related products, branches, or a simple call to
          action like requesting a quote or contacting your local sales rep.
        </p>
      </div>
    </div>
  );
}
