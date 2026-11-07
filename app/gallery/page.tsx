import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/app/ui/PageHeader";
import { getGalleryEntries } from "@/app/lib/content";

type GalleryItem = {
  slug: string;
  title: string;
  caption: string;
  image: string;
  location: string;
  featured: boolean;
  date: Date | null;
  tags: string[];
};

export const metadata: Metadata = {
  title: "Gallery | Beisser Lumber",
  description: "Project photos, in-store highlights, community involvement and more from Beisser Lumber.",
};

export default function GalleryPage() {
  const items: GalleryItem[] = getGalleryEntries()
    .map((e) => {
      const fm = e.frontmatter ?? {};
      return {
        slug: e.slug,
        title: (fm.title as string) ?? e.slug,
        caption: (fm.caption as string) ?? "",
        image: (fm.image as string) ?? "/placeholders/gallery.jpg",
        location: (fm.location as string) ?? "",
        featured: Boolean(fm.featured),
        date: fm.date ? new Date(fm.date as string) : null,
        tags: Array.isArray(fm.tags) ? (fm.tags as string[]) : [],
      };
    })
    // Featured first, then newest by date (if present), then title
    .sort((a, b) => {
      const featuredDelta = Number(b.featured) - Number(a.featured);
      if (featuredDelta !== 0) return featuredDelta;

      const aTime = a.date ? a.date.getTime() : 0;
      const bTime = b.date ? b.date.getTime() : 0;
      if (bTime !== aTime) return bTime - aTime;

      return a.title.localeCompare(b.title);
    });

  return (
    <div>
      <PageHeader
        eyebrow="Gallery"
        title="Gallery"
        lead="Project photos, in-store highlights, community involvement, and more."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.slug}
            className="overflow-hidden card transition hover:shadow-lift"
          >
            <div className="relative h-44 bg-surface-2">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {item.featured ? (
                <div className="absolute left-3 top-3 rounded-sm bg-canvas px-2 py-1 text-xs font-semibold text-ink-1">
                  Featured
                </div>
              ) : null}
            </div>

            <div className="p-4 space-y-2">
              <div className="font-semibold text-ink-1">{item.title}</div>

              {item.caption ? (
                <div className="text-sm text-ink-4">{item.caption}</div>
              ) : null}

              {(item.location || item.date) && (
                <div className="text-xs text-ink-5">
                  {[item.location, item.date ? item.date.toLocaleDateString() : ""]
                    .filter(Boolean)
                    .join(" • ")}
                </div>
              )}

              {item.tags.length ? (
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.tags.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="rounded-sm bg-surface-2 px-2 py-0.5 text-xs text-ink-4"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
