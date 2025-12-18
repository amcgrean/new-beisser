import Link from "next/link";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { getCommunityEntries } from "@/app/lib/content";

export default function CommunityPage() {
  const entries = getCommunityEntries().sort((a, b) => {
    const at = (a.frontmatter.title as string) ?? "";
    const bt = (b.frontmatter.title as string) ?? "";
    return at.localeCompare(bt);
  });

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Community", href: "/community" },
        ]}
      />

      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-beisserGray">Community Involvement</h1>
        <p className="max-w-2xl text-sm text-slate-700">
          Beisser Lumber is committed to supporting the communities we serve across Iowa.
          From youth sports and trades education to Habitat for Humanity and child wellness
          initiatives, we believe in showing up, pitching in, and doing what is right for
          our neighbors.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/community/${entry.slug}`}
            className="flex flex-col justify-between rounded-lg border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-beisserGray">
                {entry.frontmatter.title ?? "Community Story"}
              </h2>
              {entry.frontmatter.summary && (
                <p className="text-xs text-slate-700 line-clamp-3">
                  {entry.frontmatter.summary as string}
                </p>
              )}
            </div>
            <div className="mt-3 text-[11px] font-medium uppercase tracking-wide text-beisserGreen">
              Learn more
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
