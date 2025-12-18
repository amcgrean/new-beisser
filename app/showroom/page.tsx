import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { getPageMdx } from "@/app/lib/content";
import { MdxContent } from "@/app/ui/MdxContent";

export default function ShowroomPage() {
  const entry = getPageMdx("showroom");

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
          {entry?.frontmatter.title ?? "Showroom & Millwork"}
        </h1>
        {entry?.frontmatter.summary && (
          <p className="max-w-2xl text-sm text-slate-700">
            {entry.frontmatter.summary as string}
          </p>
        )}
        {entry && <MdxContent content={entry.content} />}
      </section>
    </div>
  );
}
