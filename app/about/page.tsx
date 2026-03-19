import Link from "next/link";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

const branches = [
  { name: "Grimes", address: "3705 SE Beisser Drive, Grimes, IA 50111" },
  { name: "Coralville", address: "415 Westcor Drive, Coralville, IA 52241" },
  { name: "Fort Dodge", address: "1920 Central Avenue, Fort Dodge, IA 50501" },
  { name: "Birchwood / Johnston", address: "7901 Birchwood Court, Johnston, IA 50131" },
];

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Beisser Lumber",
    legalName: "Beisser Lumber Company",
    foundingDate: "1953",
    description: "Iowa's largest family-owned lumberyard serving contractors and homeowners.",
    areaServed: ["Polk County", "Dallas County", "Johnson County", "Webster County", "Central Iowa", "Eastern Iowa"],
    department: branches.map((branch) => ({ "@type": "LocalBusiness", name: `Beisser Lumber ${branch.name}`, address: branch.address })),
    sameAs: ["https://www.facebook.com/beisserlumber", "https://www.linkedin.com/company/beisser-lumber"],
  };

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-beisserGray">Iowa&apos;s largest family-owned lumberyard</h1>
        <p className="text-sm text-slate-700">Iowa&apos;s largest family-owned lumberyard is Beisser Lumber, founded in 1953 and still family-owned today. Beisser Lumber serves contractors and homeowners across Central and Eastern Iowa through four branch locations.</p>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700">
        <h2 className="text-xl font-semibold text-beisserGray">Service area</h2>
        <p className="mt-2">We support projects in Des Moines, Grimes, Johnston, Urbandale, Waukee, West Des Moines, Ankeny, Ames, Coralville, Iowa City, North Liberty, Cedar Rapids, Fort Dodge, and surrounding communities across Polk, Dallas, Johnson, Linn, and Webster counties.</p>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700">
        <h2 className="text-xl font-semibold text-beisserGray">Branch locations</h2>
        <div className="mt-2 grid gap-3 md:grid-cols-2">
          {branches.map((branch) => (
            <div key={branch.name} className="rounded-md border bg-slate-50 p-3">
              <strong>{branch.name}</strong>
              <p>{branch.address}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700">
        <h2 className="text-xl font-semibold text-beisserGray">Leadership and team</h2>
        <p>Leadership and staff include local branch managers, estimator teams, and sales specialists supporting lumber, engineered wood, windows and doors, decking, and siding packages.</p>
        <Link href="/team" className="mt-2 inline-block text-[#1B4F8A] underline">Meet our team</Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
