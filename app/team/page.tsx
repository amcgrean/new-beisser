import { staff } from "@/app/data/staff";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Team" }]} />
      <h1 className="text-3xl font-bold text-beisserGray">Beisser Lumber Team</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {staff.map((person, idx) => (
          <article key={`${person.name}-${idx}`} className="rounded-lg border bg-white p-4 shadow-sm">
            <h2 className="font-semibold">{person.name}</h2>
            <p className="text-sm text-slate-600">{person.role} • {person.branch}</p>
            {person.bio ? <p className="mt-2 text-sm text-slate-700">{person.bio}</p> : <p className="mt-2 text-sm text-slate-500">Bio coming soon.</p>}
          </article>
        ))}
      </div>
    </div>
  );
}
