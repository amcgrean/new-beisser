import Link from "next/link";
import { Metadata } from "next";
import { getBlogEntries } from "@/app/lib/content";
import { PageHeader } from "@/app/ui/PageHeader";
import { ArrowRight } from "@/app/ui/icons";

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
    <div>
      <PageHeader
        eyebrow="Resources"
        title="Building resources and guides"
        lead="Insights from the Beisser team for projects across Iowa."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <nav aria-label="Article categories" className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={category === "All" ? "/blog" : `/blog?category=${encodeURIComponent(category)}`}
            aria-current={selected === category ? "page" : undefined}
            className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${selected === category ? "border-brand-500 bg-brand-500 text-white" : "border-line-strong bg-canvas text-ink-2 hover:border-brand-500 hover:text-brand-500"}`}
          >
            {category}
          </Link>
        ))}
      </nav>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <li key={article.slug}>
            <article className="group card relative flex h-full flex-col p-6 transition hover:border-brand-200 hover:shadow-lift">
              <p className="eyebrow">{article.frontmatter.category}</p>
              <h2 className="mt-2 text-lg font-semibold leading-snug text-ink-1 group-hover:text-brand-500">
                <Link href={`/blog/${article.slug}`} className="after:absolute after:inset-0">{article.frontmatter.title}</Link>
              </h2>
              <p className="mt-1 text-sm text-ink-5">{article.frontmatter.date}</p>
              <p className="mt-3 line-clamp-4 text-sm text-ink-3">{article.frontmatter.excerpt}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-500">
                Read more <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </article>
          </li>
        ))}
      </ul>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
