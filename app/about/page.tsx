import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { getPageMdx } from "@/app/lib/content";
import { MdxContent } from "@/app/ui/MdxContent";
import Link from "next/link";

export default function AboutPage() {
  const entry = getPageMdx("about");

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-start">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold text-beisserGray">
            {entry?.frontmatter.title ?? "About Beisser Lumber"}
          </h1>
          {entry?.frontmatter.summary && (
            <p className="max-w-2xl text-sm text-slate-700">
              {entry.frontmatter.summary as string}
            </p>
          )}
          {entry && <MdxContent content={entry.content} />}
        </section>

        <aside className="space-y-4 rounded-xl border bg-white p-4 shadow-sm text-sm">
          <h2 className="text-base font-semibold text-beisserGray">
            Learn More About Beisser
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/community"
                className="flex items-start justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:border-beisserGreen hover:bg-white"
              >
                <div>
                  <div className="font-medium">Community Involvement</div>
                  <div className="text-xs text-slate-600">
                    See how we support schools, nonprofits, and trade education across Iowa.
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/showroom"
                className="flex items-start justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:border-beisserGreen hover:bg-white"
              >
                <div>
                  <div className="font-medium">Showroom &amp; Millwork</div>
                  <div className="text-xs text-slate-600">
                    Explore our Birchwood / Johnston showroom and millwork facility.
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="flex items-start justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:border-beisserGreen hover:bg-white"
              >
                <div>
                  <div className="font-medium">Careers at Beisser</div>
                  <div className="text-xs text-slate-600">
                    Learn about working at Beisser and opportunities to join our team.
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="flex items-start justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:border-beisserGreen hover:bg-white"
              >
                <div>
                  <div className="font-medium">Resources for Pros</div>
                  <div className="text-xs text-slate-600">
                    Access downloads, guides, and tools to support your projects.
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
