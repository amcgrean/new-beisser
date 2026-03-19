import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogEntries, getBlogEntry } from "@/app/lib/content";
import { MdxContent } from "@/app/ui/MdxContent";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
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
    <article className="space-y-6">
      <ArticleReadTracker articleTitle={String(article.frontmatter.title)} category={String(article.frontmatter.category)} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: String(article.frontmatter.title) }]} />
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.14em] text-[#1B4F8A]">{String(article.frontmatter.category)}</p>
        <h1 className="text-3xl font-bold text-beisserGray">{String(article.frontmatter.title)}</h1>
        <p className="text-sm text-slate-600">{String(article.frontmatter.author)} • {String(article.frontmatter.date)}</p>
      </header>

      <MdxContent content={article.content} />

      <section className="rounded-xl border bg-slate-50 p-4">
        <h2 className="text-base font-semibold">Need materials for your project?</h2>
        <Link href="/quote" className="mt-2 inline-flex rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white">Request a Quote →</Link>
      </section>

      <SocialShareButtons title={String(article.frontmatter.title)} />

      <RelatedLinks links={[{ href: "/products/decking-railing", label: "Explore product categories", description: "Browse Beisser product categories tied to this guide." }, { href: "/quote", label: "Request a material quote", description: "Get branch-routed pricing for your project." }]} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </article>
  );
}
