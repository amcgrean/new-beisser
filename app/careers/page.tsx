import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/app/ui/PageHeader";
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
    <div>
      <PageHeader
        eyebrow="Careers"
        title="Work at Beisser Lumber"
        lead="Beisser Lumber is a family-owned Iowa company with more than 70 years of history serving contractors and homeowners. Our teams support four locations, a custom door shop, a Components Division, and the day-to-day work that keeps Iowa jobs moving."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        image={{ src: "/images/company/grand-opening-team.jpg", alt: "Three Beisser Lumber team members in company shirts at the Johnston grand opening", width: 2000, height: 1600, className: "object-cover object-[center_30%]" }}
        actions={<a href="#openings" className="btn-primary">See current openings</a>}
      />

      <div className="space-y-20">
        <section className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-title">Why Beisser</h2>
            <p className="mt-4 text-ink-3">
              If you want to build a long-term career with a family-owned company that continues to invest in Iowa communities, Beisser offers opportunities across branches, operations, delivery, sales, estimating, showroom support, and manufacturing.
            </p>
            <ul className="bullets mt-4 text-ink-3">
              <li>Serving Iowa builders and homeowners since 1953</li>
              <li>A team of 165 people across four locations</li>
              <li>Family-owned culture with long-term leadership continuity</li>
              <li>Growth opportunities across operations, sales, service, and manufacturing</li>
              <li>Four locations across Central and Eastern Iowa</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 self-start">
            <Image src="/images/company/habitat-team.jpg" alt="Beisser Lumber volunteers at a Dallas County Habitat for Humanity build" width={611} height={406} className="aspect-[4/3] w-full rounded-lg object-cover" />
            <Image src="/images/company/beisser-bowl-concession-counter.jpg" alt="Beisser Lumber team members running the concession stand at the Beisser Bowl" width={640} height={480} className="aspect-[4/3] w-full rounded-lg object-cover" />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="section-title">What&apos;s important to us</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <li key={value.title} className="border-l-2 border-gold-500 pl-4">
                <div className="font-semibold text-ink-1">{value.title}</div>
                {value.text ? <p className="mt-1 text-sm text-ink-3">{value.text}</p> : null}
              </li>
            ))}
          </ul>
        </section>

        <section id="openings" className="scroll-mt-32 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="card p-6 text-ink-3">
            <h2 className="section-title">Current openings</h2>
            {jobs.length === 0 ? (
              <p className="mt-4">
                No openings are posted right now. We are always glad to hear from people who want to build a career in the lumber and building materials business, so{" "}
                <Link href="/contact" className="text-link">get in touch</Link> or stop by any of our locations.
              </p>
            ) : (
              <ul className="mt-4 divide-y divide-line">
                {jobs.map((job) => (
                  <li key={job.id} className="py-4">
                    <div className="font-semibold text-ink-1">{job.title}</div>
                    <div className="text-sm text-ink-4">{job.location} · {job.type}</div>
                    <p className="mt-1">{job.summary}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="card-muted p-6">
            <h2 className="text-lg font-semibold text-ink-1">How to apply</h2>
            <p className="mt-3 text-ink-3">
              Reach out through our <Link href="/contact" className="text-link">contact page</Link> or call the location nearest you, and let us know what kind of work interests you.
            </p>
            {/* JobPosting schema stub ready to activate once real openings are added. */}
          </div>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
