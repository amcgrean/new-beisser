import Image from "next/image";
import { jobs } from "@/app/data/jobs";

export default function CareersPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-beisserGray">Work at Beisser Lumber</h1>
        <p className="text-sm text-slate-600">
          Beisser Lumber is a family-owned Iowa company with more than 70 years of history serving contractors and homeowners. Our teams support four locations, a custom door shop, a Components Division, and the day-to-day work that keeps Iowa jobs moving.
        </p>
      </header>

      <div className="rounded-lg border bg-white overflow-hidden shadow-sm">
        <Image src="/images/careers-team.png" alt="Beisser team" width={800} height={450} className="w-full h-56 object-cover" />
        <div className="p-4 space-y-3 text-sm text-slate-700">
          <p>
            If you want to build a long-term career with a family-owned company that continues to invest in Iowa communities, Beisser offers opportunities across branches, operations, delivery, sales, estimating, showroom support, and manufacturing.
          </p>
        </div>
      </div>

      <section className="rounded-lg border bg-white p-5 shadow-sm text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-beisserGray mb-3">Current Openings</h2>
        {jobs.length === 0 ? (
          <p>No openings are published yet. Aaron can add roles in <code>data/jobs.ts</code> when hiring is active.</p>
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
            <li>70+ years serving Iowa builders and homeowners</li>
            <li>Family-owned culture with long-term leadership continuity</li>
            <li>Growth opportunities across operations, sales, service, and manufacturing</li>
            <li>Four locations across Central and Eastern Iowa</li>
          </ul>
        </div>
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-beisserGray mb-2">Apply</h2>
          <p className="text-slate-700">Send your resume to <a href="mailto:CONTACT_EMAIL" className="text-[#1B4F8A] underline">CONTACT_EMAIL</a> or replace this placeholder with the team&apos;s preferred hiring workflow.</p>
          <p className="mt-2 text-xs text-slate-500">{/* JobPosting schema stub ready to activate once real openings are added. */}</p>
        </div>
      </section>
    </div>
  );
}
