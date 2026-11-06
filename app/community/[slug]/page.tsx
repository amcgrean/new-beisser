import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageHeader } from "@/app/ui/PageHeader";
import { getCommunityEntry, getCommunitySlugs } from "@/app/lib/content";
import { MdxContent } from "@/app/ui/MdxContent";

type CommunityImage = { src: string; alt: string; width: number; height: number };

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getCommunitySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const entry = getCommunityEntry(params.slug);
  if (!entry) return {};
  const fm = entry.frontmatter;
  return { title: `${String(fm.title ?? "Community Story")} | Beisser Lumber`, description: fm.summary ? String(fm.summary) : undefined };
}

export default function CommunityArticlePage({ params }: PageProps) {
  const entry = getCommunityEntry(params.slug);

  if (!entry) return notFound();

  const { frontmatter, content } = entry;
  const images = (frontmatter.images as CommunityImage[] | undefined) ?? [];

  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Community"
        title={(frontmatter.title as string) ?? "Community Story"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Community", href: "/community" },
          { label: (frontmatter.title as string) ?? "Community Story" },
        ]}
        lead={frontmatter.summary ? (frontmatter.summary as string) : undefined}
      />

      {images.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, idx) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="aspect-[4/3] w-full rounded-lg object-cover"
              priority={idx === 0}
            />
          ))}
        </div>
      )}

      <MdxContent content={content} />
    </div>
  );
}
