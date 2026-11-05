import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { getCommunityEntry, getCommunitySlugs } from "@/app/lib/content";
import { MdxContent } from "@/app/ui/MdxContent";

type CommunityImage = { src: string; alt: string; width: number; height: number };

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
  const images = (frontmatter.images as CommunityImage[] | undefined) ?? [];

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
              className="h-56 w-full rounded-xl object-cover"
              priority={idx === 0}
            />
          ))}
        </div>
      )}

      <MdxContent content={content} />
    </div>
  );
}
