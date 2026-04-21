import Link from "next/link";
import { Metadata } from "next";
import { getBlogEntries } from "@/app/lib/content";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Building Resources & Guides | Beisser Lumber",
  description: "Articles and guides for Iowa builders and homeowners from the Beisser Lumber team.",
};

const categories = ["All", "Decking", "Siding", "General"];

export default function BlogIndexPage({ searchParams }: { searchParams?: { category?: string } }) {
  const selected = searchParams?.category || "All";
  const entries = getBlogEntries();
  const filtered = selected === "All" ? entries : entries.filter((e) => e.frontmatter.category === selected);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://beisserlumber.com/blog" },
    ],
  };

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-beisserGray">Building resources and guides</h1>
        <p className="text-sm text-slate-700">Insights from the Beisser team for projects across Iowa.</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link key={category} href={category === "All" ? "/blog" : `/blog?category=${encodeURIComponent(category)}`} className={`rounded-full border px-3 py-1 text-xs ${selected === category ? "bg-brand-green text-white" : "bg-white"}`}>
            {category}
          </Link>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <article key={article.slug} className="rounded-lg border bg-white p-4 shadow-sm">
            <p className="text-[11px] uppercase tracking-wide text-slate-500">{article.frontmatter.category}</p>
            <h2 className="mt-1 text-base font-semibold text-beisserGray">{article.frontmatter.title}</h2>
            <p className="mt-1 text-xs text-slate-500">{article.frontmatter.date}</p>
            <p className="mt-2 text-sm text-slate-700">{article.frontmatter.excerpt}</p>
            <Link href={`/blog/${article.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand-green hover:underline">Read more →</Link>
          </article>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
