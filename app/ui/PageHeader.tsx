import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";
import { mainPhone } from "@/app/data/navigation";
import { Phone } from "./icons";

type HeaderImage = { src: string; alt: string; width: number; height: number; className?: string };

/**
 * Top band for inner pages: breadcrumbs, eyebrow, H1, lead and optional
 * actions or photo, on the same light surface as the homepage hero.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  actions,
  image,
  className = "",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
  image?: HeaderImage;
  /** Extra classes on the band, e.g. "entity-definition" for speakable markup. */
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section className={`section-band -mt-8 mb-12 border-b border-line-soft bg-surface-1 py-10 lg:py-14 ${className}`}>
      {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
      <div className={image ? "grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]" : ""}>
        <div className="space-y-4">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="page-title max-w-4xl">{title}</h1>
          {lead ? <div className="lead space-y-3">{lead}</div> : null}
          {children}
          {actions ? <div className="flex flex-wrap gap-3 pt-2">{actions}</div> : null}
        </div>
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            sizes="(min-width: 1024px) 34rem, 100vw"
            className={`aspect-[4/3] w-full rounded-lg object-cover shadow-card ${image.className ?? ""}`}
          />
        ) : null}
      </div>
    </section>
  );
}

/** Figures with a gold rule, matching the homepage stats strip. */
export function StatList({ stats, label }: { stats: { value: string; label: string }[]; label: string }) {
  return (
    <section aria-label={label}>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-l-2 border-gold-500 pl-4">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-3xl font-bold tracking-tight text-ink-1">{stat.value}</dd>
            <dd className="mt-1 text-sm text-ink-4">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/** Closing call to action, matching the homepage's quote band. */
export function CtaBand({
  title = "Ready to price your next project?",
  body = "Send your plans or a material list and the right branch will get back to you with pricing and availability.",
  primary = { href: "/quote", label: "Request a Quote" },
  showPhone = true,
}: {
  title?: string;
  body?: ReactNode;
  primary?: { href: string; label: string };
  showPhone?: boolean;
}) {
  return (
    <section className="mt-16 rounded-lg bg-brand-600 px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <div className="mt-3 text-base text-white/85">{body}</div>
      </div>
      <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
        <Link href={primary.href} className="btn-on-dark">
          {primary.label}
        </Link>
        {showPhone ? (
          <a href={mainPhone.href} className="btn-outline-on-dark">
            <Phone size={16} /> {mainPhone.label}
          </a>
        ) : null}
      </div>
    </section>
  );
}
