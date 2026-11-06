import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogEntries, getBlogEntry } from "@/app/lib/content";
import { MdxContent } from "@/app/ui/MdxContent";
import { PageHeader } from "@/app/ui/PageHeader";
import RelatedLinks from "@/components/RelatedLinks";
import ArticleReadTracker from "@/components/ArticleReadTracker";
import SocialShareButtons from "@/components/SocialShareButtons";

export function generateStaticParams() {
  return getBlogEntries().map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getBlogEntry(params.slug);
  if (!article) return {};

  return {
    title: String(article.frontmatter.seoTitle ?? article.frontmatter.title),
    description: String(article.frontmatter.metaDescription ?? article.frontmatter.excerpt ?? ""),
    openGraph: {
      title: String(article.frontmatter.seoTitle ?? article.frontmatter.title),
      description: String(article.frontmatter.metaDescription ?? article.frontmatter.excerpt ?? ""),
      type: "article",
      images: [{ url: "/og-default.svg", width: 1200, height: 630 }],
    },
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = getBlogEntry(params.slug);
  if (!article) return notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.frontmatter.title,
    datePublished: article.frontmatter.date,
    author: { "@type": "Person", name: article.frontmatter.author },
    publisher: { "@type": "Organization", name: "Beisser Lumber" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://beisserlumber.com/blog" },
      { "@type": "ListItem", position: 3, name: article.frontmatter.title, item: `https://beisserlumber.com/blog/${article.slug}` },
    ],
  };

  return (
    <article>
      <ArticleReadTracker articleTitle={String(article.frontmatter.title)} category={String(article.frontmatter.category)} />
      <PageHeader
        eyebrow={String(article.frontmatter.category)}
        title={String(article.frontmatter.title)}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/blog" }, { label: String(article.frontmatter.title) }]}
      >
        <p className="text-sm text-ink-4">{String(article.frontmatter.author)} · {String(article.frontmatter.date)}</p>
      </PageHeader>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="space-y-10">
          <MdxContent content={article.content} />
          <SocialShareButtons title={String(article.frontmatter.title)} />
        </div>
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="card-muted p-6">
            <h2 className="text-base font-semibold text-ink-1">Need materials for your project?</h2>
            <p className="mt-2 text-sm text-ink-3">Send your plans or a material list and the right branch will price it.</p>
            <Link href="/quote" className="btn-primary mt-4 w-full">Request a Quote</Link>
          </div>
        </aside>
      </div>

      <div className="mt-16">
        <RelatedLinks links={[{ href: "/products/decking-railing", label: "Explore product categories", description: "Browse Beisser product categories tied to this guide." }, { href: "/quote", label: "Request a material quote", description: "Get branch-routed pricing for your project." }]} />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </article>
  );
}
