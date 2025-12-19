import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { getPageMdx } from "@/app/lib/content";
import { MdxContent } from "@/app/ui/MdxContent";
import { getGalleryEntries } from "@/app/lib/content";

type GalleryItem = { src: string; alt: string };
type FeatureItem = { code: string; title: string; text: string };
type HoursItem = { day: string; time: string };

export default function ShowroomPage() {
  const entry = getPageMdx("showroom");
  const fm: any = entry?.frontmatter ?? {};

  const hero = fm.hero as
    | {
        eyebrow?: string;
        heading?: string;
        subheading?: string;
        image?: string;
        primaryCta?: { label?: string; href?: string };
        secondaryCta?: { label?: string; href?: string };
      }
    | undefined;

  const gallery = (fm.gallery as GalleryItem[] | undefined) ?? [];
  const features = (fm.features as FeatureItem[] | undefined) ?? [];
  const visit = fm.visit as
    | {
        addressLine1?: string;
        addressLine2?: string;
        phoneLabel?: string;
        phoneHref?: string;
        directionsHref?: string;
        emailHref?: string;
        mapEmbedSrc?: string;
        hours?: HoursItem[];
      }
    | undefined;

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Showroom & Millwork", href: "/showroom" },
        ]}
      />

      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-beisserGray">
          {fm.title ?? "Showroom & Millwork"}
        </h1>

        {fm.summary && (
          <p className="max-w-2xl text-sm text-slate-700">{fm.summary}</p>
        )}

        {/* HERO */}
        {hero?.image && (
          <div className="relative overflow-hidden rounded-2xl bg-beisserGray text-white">
            <div className="absolute inset-0 opacity-40">
              <img
                src={hero.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative p-8 md:p-12 space-y-3">
              {hero.eyebrow && (
                <div className="text-xs font-bold tracking-widest uppercase text-beisserGold">
                  {hero.eyebrow}
                </div>
              )}
              <h2 className="text-2xl md:text-4xl font-extrabold">
                {hero.heading ?? fm.title}
              </h2>
              {hero.subheading && (
                <p className="max-w-2xl text-white/90">{hero.subheading}</p>
              )}

              <div className="pt-3 flex flex-wrap gap-3">
                {hero.primaryCta?.href && hero.primaryCta?.label && (
                  <a className="btn-primary" href={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                  </a>
                )}
                {hero.secondaryCta?.href && hero.secondaryCta?.label && (
                  <a
                    className="btn-outline bg-white/10 border-white text-white hover:bg-white/20"
                    href={hero.secondaryCta.href}
                  >
                    {hero.secondaryCta.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* BODY MARKDOWN */}
        {entry && <MdxContent content={entry.content} />}
      </section>

      {/* GALLERY */}
      {gallery.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-beisserGray">Gallery</h2>
          <p className="text-sm text-slate-600">
            Swap these placeholders with your best showroom photos.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className="rounded-xl w-full h-40 md:h-48 object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </section>
      )}

      {/* FEATURES */}
      {features.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-beisserGray">
            Featured Categories
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((f, idx) => (
              <div key={idx} className="rounded-xl border bg-white p-5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-beisserGreen text-white font-bold">
                  {f.code}
                </div>
                <div className="mt-3 text-lg font-bold text-beisserGray">
                  {f.title}
                </div>
                <p className="mt-2 text-sm text-slate-700">{f.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* VISIT */}
      {visit && (
        <section id="visit" className="space-y-4">
          <h2 className="text-xl font-bold text-beisserGray">Plan Your Visit</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6 space-y-3">
              <div className="text-sm">
                <div className="font-semibold text-beisserGray">Address</div>
                <div>{visit.addressLine1}</div>
                <div>{visit.addressLine2}</div>
              </div>

              <div className="text-sm">
                <div className="font-semibold text-beisserGray">Phone</div>
                {visit.phoneHref ? (
                  <a className="text-beisserGreen underline" href={visit.phoneHref}>
                    {visit.phoneLabel}
                  </a>
                ) : (
                  <div>{visit.phoneLabel}</div>
                )}
              </div>

              {visit.hours?.length ? (
                <div className="text-sm">
                  <div className="font-semibold text-beisserGray">Hours</div>
                  <div className="mt-2 space-y-1">
                    {visit.hours.map((h, idx) => (
                      <div key={idx} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span className="font-semibold">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="pt-2 flex flex-wrap gap-3">
                {visit.directionsHref && (
                  <a
                    className="btn-primary"
                    href={visit.directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                )}
                {visit.emailHref && (
                  <a className="btn-outline" href={visit.emailHref}>
                    Contact Us
                  </a>
                )}
              </div>
            </div>

            {visit.mapEmbedSrc && (
              <iframe
                className="w-full aspect-[16/11] rounded-2xl border"
                loading="lazy"
                src={visit.mapEmbedSrc}
                title="Map to Beisser Lumber Showroom"
              />
            )}
          </div>
        </section>
      )}
    </div>
  );
}
