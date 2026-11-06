import type { Metadata } from "next";
import { staff } from "@/app/data/staff";
import { PageHeader } from "@/app/ui/PageHeader";

export const metadata: Metadata = {
  title: "Our Team | Beisser Lumber",
  description: "Meet the Beisser Lumber team.",
};

export default function TeamPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="Beisser Lumber Team"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Team" }]}
      />
      <div className="grid gap-4 md:grid-cols-3">
        {staff.map((person, idx) => (
          <article key={`${person.name}-${idx}`} className="card p-4">
            <h2 className="font-semibold">{person.name}</h2>
            <p className="text-sm text-ink-4">{person.role} • {person.branch}</p>
            {person.bio ? <p className="mt-2 text-ink-3">{person.bio}</p> : <p className="mt-2 text-sm text-ink-5">Bio coming soon.</p>}
          </article>
        ))}
      </div>
    </div>
  );
}
