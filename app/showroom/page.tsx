import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader, StatList, CtaBand } from "@/app/ui/PageHeader";
import { Clock, MapPin, Phone } from "@/app/ui/icons";
import { getPageMdx } from "@/app/lib/content";
import { MdxContent } from "@/app/ui/MdxContent";

type GalleryItem = { src: string; alt: string };
type FeatureItem = { code: string; title: string; text: string };
type HoursItem = { day: string; time: string };
type StatItem = { value: string; label: string };

export const metadata: Metadata = {
  title: "Showroom & Millwork in Johnston | Beisser Lumber",
  description:
    "Visit the Beisser Lumber showroom at 7901 Birchwood Court in Johnston to compare windows, doors, decking, railing, stair parts and millwork on full-size displays.",
  alternates: { canonical: "/showroom" },
};

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
  const stats = (fm.stats as StatItem[] | undefined) ?? [];
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
    <div>
      <PageHeader
        eyebrow={hero?.eyebrow ?? "Showroom"}
        title={hero?.heading ?? fm.title ?? "Showroom & Millwork"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Showroom & Millwork" }]}
        lead={
          <>
            {hero?.subheading ? <p>{hero.subheading}</p> : null}
            {fm.summary ? <p className="text-base">{fm.summary}</p> : null}
          </>
        }
        image={hero?.image ? { src: hero.image, alt: "Stair parts and railing display in the Johnston showroom", width: 2000, height: 1500 } : undefined}
        actions={
          <>
            {hero?.primaryCta?.href && hero.primaryCta.label ? (
              <a className="btn-primary" href={hero.primaryCta.href}>
                <Phone size={16} /> {hero.primaryCta.label}
              </a>
            ) : null}
            {hero?.secondaryCta?.href && hero.secondaryCta.label ? (
              <a className="btn-secondary" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            ) : null}
          </>
        }
      />

      <div className="space-y-20">
        {stats.length > 0 && <StatList stats={stats} label="Showroom by the numbers" />}

        {entry && (
          <section className="max-w-3xl">
            <MdxContent content={entry.content} />
          </section>
        )}

        {features.length > 0 && (
          <section className="space-y-6">
            <h2 className="section-title">Featured categories</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((f) => (
                <div key={f.code} className="card p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-sm font-bold text-brand-500">
                    {f.code}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink-1">{f.title}</h3>
                  <p className="mt-2 text-ink-3">{f.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {gallery.length > 0 && (
          <section className="space-y-6">
            <div>
              <h2 className="section-title">Inside the showroom</h2>
              <p className="mt-2 text-ink-4">Our Birchwood / Johnston location, including the grand opening.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {gallery.map((img) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
              ))}
            </div>
          </section>
        )}

        {visit && (
          <section id="visit" className="scroll-mt-32 space-y-6">
            <h2 className="section-title">Plan your visit</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="card space-y-5 p-6 text-ink-3">
                <div className="flex gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-brand-500" />
                  <div>
                    <div className="font-semibold text-ink-1">Address</div>
                    <div>{visit.addressLine1}</div>
                    <div>{visit.addressLine2}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone size={20} className="mt-0.5 shrink-0 text-brand-500" />
                  <div>
                    <div className="font-semibold text-ink-1">Phone</div>
                    {visit.phoneHref ? (
                      <a className="text-link" href={visit.phoneHref}>
                        {visit.phoneLabel}
                      </a>
                    ) : (
                      <div>{visit.phoneLabel}</div>
                    )}
                  </div>
                </div>
                {visit.hours?.length ? (
                  <div className="flex gap-3">
                    <Clock size={20} className="mt-0.5 shrink-0 text-brand-500" />
                    <div className="flex-1">
                      <div className="font-semibold text-ink-1">Hours</div>
                      <dl className="mt-2 space-y-1">
                        {visit.hours.map((h) => (
                          <div key={h.day} className="flex justify-between gap-4">
                            <dt>{h.day}</dt>
                            <dd className="font-medium text-ink-1">{h.time}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                ) : null}
                <div className="flex flex-wrap gap-3 pt-2">
                  {visit.directionsHref && (
                    <a className="btn-primary" href={visit.directionsHref} target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </a>
                  )}
                  {visit.emailHref && (
                    <a className="btn-secondary" href={visit.emailHref}>
                      Contact Us
                    </a>
                  )}
                </div>
              </div>

              {visit.mapEmbedSrc && (
                <iframe
                  className="aspect-[16/11] w-full rounded-lg border border-line"
                  loading="lazy"
                  src={visit.mapEmbedSrc}
                  title="Map to Beisser Lumber Showroom"
                />
              )}
            </div>
          </section>
        )}
      </div>

      <CtaBand />
    </div>
  );
}
