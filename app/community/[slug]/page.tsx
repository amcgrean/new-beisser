import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { getCommunityEntry, getCommunitySlugs } from "@/app/lib/content";
import { MdxContent } from "@/app/ui/MdxContent";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getCommunitySlugs().map((slug) => ({ slug }));
}

export default function CommunityArticlePage({ params }: PageProps) {
  const entry = getCommunityEntry(params.slug);

  if (!entry) return notFound();

  const { frontmatter, content } = entry;

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Community", href: "/community" },
          { label: (frontmatter.title as string) ?? "Community Story" },
        ]}
      />

      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-beisserGray">
          {frontmatter.title ?? "Community Story"}
        </h1>
        {frontmatter.summary && (
          <p className="max-w-2xl text-sm text-slate-700">
            {frontmatter.summary as string}
          </p>
        )}
      </header>

      <MdxContent content={content} />
    </div>
  );
}
