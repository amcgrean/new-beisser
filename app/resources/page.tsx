import Link from "next/link";
import Image from "next/image";
import { resources } from "../data/resources";

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-beisserGray">Resources</h1>
        <p className="text-sm text-slate-600 max-w-3xl">
          This section will grow into your hub for articles, guides, and project highlights. The example
          content below is placeholder copy so your team can see the layout and begin drafting real pieces.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-3 text-sm">
        {resources.map((article) => (
          <Link
            key={article.slug}
            href={`/resources/${article.slug}`}
            className="rounded-lg border bg-white hover:border-beisserGreen/70 transition-colors overflow-hidden flex flex-col"
          >
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={220}
              className="w-full h-32 object-cover"
            />
            <div className="p-3 space-y-1 flex-1">
              <div className="text-[11px] uppercase tracking-wide text-slate-400">
                {article.category}
              </div>
              <div className="font-medium text-slate-800">{article.title}</div>
              <p className="text-xs text-slate-500">{article.summary}</p>
              <div className="text-[11px] text-slate-400 mt-1">{article.readTime}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
