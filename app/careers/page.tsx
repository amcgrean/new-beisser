import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { jobs } from "@/app/data/jobs";

const values: { title: string; text?: string }[] = [
  { title: "A good attitude", text: "This is where it all starts." },
  { title: "Your safety" },
  { title: "Teamwork", text: "It takes everyone. We show respect to our teammates at all times." },
  { title: "Taking care of our customers", text: "We can't be successful if they're not successful." },
  { title: "On-Time and In-Full", text: "Take pride in your work and put your name on it." },
  { title: "Doing the right thing" },
  { title: "Having fun" },
];

export const metadata: Metadata = {
  title: "Careers at Beisser Lumber | Beisser Lumber",
  description: "Explore careers at Beisser Lumber across operations, sales, delivery, estimating, showroom support, and manufacturing in Iowa.",
};

export default function CareersPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://beisserlumber.com/careers" },
    ],
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Careers" }]} />
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-beisserGray">Work at Beisser Lumber</h1>
        <p className="text-sm text-slate-600">
          Beisser Lumber is a family-owned Iowa company with more than 70 years of history serving contractors and homeowners. Our teams support four locations, a custom door shop, a Components Division, and the day-to-day work that keeps Iowa jobs moving.
        </p>
      </header>

      <div className="rounded-lg border bg-white overflow-hidden shadow-sm">
        <Image src="/images/company/grand-opening-team.jpg" alt="Three Beisser Lumber team members in company shirts at the Johnston grand opening" width={2000} height={1600} sizes="(max-width: 896px) 100vw, 896px" className="w-full h-64 object-cover object-[center_30%]" />
        <div className="p-4 space-y-3 text-sm text-slate-700">
          <p>
            If you want to build a long-term career with a family-owned company that continues to invest in Iowa communities, Beisser offers opportunities across branches, operations, delivery, sales, estimating, showroom support, and manufacturing.
          </p>
        </div>
      </div>

      <section className="rounded-lg border bg-white p-5 shadow-sm text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-beisserGray mb-3">Current Openings</h2>
        {jobs.length === 0 ? (
          <p>
            No openings are posted right now. We are always glad to hear from people who want to build a career in the lumber and building materials business, so{" "}
            <Link href="/contact" className="text-beisserGreen underline">get in touch</Link> or stop by any of our locations.
          </p>
        ) : (
          <ul className="space-y-3">
            {jobs.map((job) => (
              <li key={job.id} className="rounded-md border bg-slate-50 p-3">
                <div className="font-semibold">{job.title}</div>
                <div>{job.location} · {job.type}</div>
                <p className="mt-1">{job.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="grid gap-6 md:grid-cols-2 text-sm">
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-beisserGray mb-2">Why Beisser</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Serving Iowa builders and homeowners since 1953</li>
            <li>A team of 165 people across four locations</li>
            <li>Family-owned culture with long-term leadership continuity</li>
            <li>Growth opportunities across operations, sales, service, and manufacturing</li>
            <li>Four locations across Central and Eastern Iowa</li>
          </ul>
        </div>
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-beisserGray mb-2">How to Apply</h2>
          <p className="text-slate-700">
            Reach out through our <Link href="/contact" className="text-beisserGreen underline">contact page</Link> or call the location nearest you, and let us know what kind of work interests you.
          </p>
          {/* JobPosting schema stub ready to activate once real openings are added. */}
        </div>
      </section>

      <section className="rounded-lg border bg-white p-5 shadow-sm text-sm">
        <h2 className="text-lg font-semibold text-beisserGray">What&apos;s Important to Us</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {values.map((value) => (
            <li key={value.title} className="rounded-md border bg-slate-50 p-3">
              <div className="font-semibold text-beisserGray">{value.title}</div>
              {value.text ? <p className="mt-1 text-slate-700">{value.text}</p> : null}
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <Image src="/images/company/habitat-team.jpg" alt="Beisser Lumber volunteers at a Dallas County Habitat for Humanity build" width={611} height={406} className="w-full h-52 rounded-lg object-cover" />
        <Image src="/images/company/beisser-bowl-concession-counter.jpg" alt="Beisser Lumber team members running the concession stand at the Beisser Bowl" width={640} height={480} className="w-full h-52 rounded-lg object-cover" />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
