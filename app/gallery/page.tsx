import Image from "next/image";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
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
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />

      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-beisserGray">Gallery</h1>
        <p className="text-sm text-slate-700 max-w-2xl">
          Project photos, in-store highlights, community involvement, and more.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.slug}
            className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative h-44 bg-slate-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {item.featured ? (
                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-beisserGray shadow-sm">
                  Featured
                </div>
              ) : null}
            </div>

            <div className="p-4 space-y-2">
              <div className="font-semibold text-beisserGray">{item.title}</div>

              {item.caption ? (
                <div className="text-sm text-slate-600">{item.caption}</div>
              ) : null}

              {(item.location || item.date) && (
                <div className="text-xs text-slate-500">
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
                      className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-600"
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
