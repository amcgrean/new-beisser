import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/app/ui/PageHeader";
import { ArrowRight } from "@/app/ui/icons";
import { getCommunityEntries } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Community Involvement | Beisser Lumber",
  description: "Beisser Lumber supports Iowa communities through youth sports, trades education, Habitat for Humanity and child wellness initiatives.",
};

export default function CommunityPage() {
  const entries = getCommunityEntries().sort((a, b) => {
    const at = (a.frontmatter.title as string) ?? "";
    const bt = (b.frontmatter.title as string) ?? "";
    return at.localeCompare(bt);
  });

  return (
    <div>
      <PageHeader
        eyebrow="Community"
        title="Community Involvement"
        lead="Beisser Lumber is committed to supporting the communities we serve across Iowa. From youth sports and trades education to Habitat for Humanity and child wellness initiatives, we believe in showing up, pitching in, and doing what is right for our neighbors."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Community" }]}
        image={{ src: "/images/company/habitat-framing.jpg", alt: "Beisser Lumber volunteers framing a Habitat for Humanity home", width: 914, height: 636 }}
      />

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <li key={entry.slug}>
            <Link
              href={`/community/${entry.slug}`}
              className="group card flex h-full flex-col p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift"
            >
              <h2 className="text-lg font-semibold text-ink-1 group-hover:text-brand-500">
                {entry.frontmatter.title ?? "Community Story"}
              </h2>
              {entry.frontmatter.summary && (
                <p className="mt-2 line-clamp-3 text-sm text-ink-4">
                  {entry.frontmatter.summary as string}
                </p>
              )}
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-500">
                Read the story <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
