import type { Metadata } from "next";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";

const coordinationBullets = [
  "Single point of contact for schedules, substitutions, and field fixes.",
  "Proactive communication when weather or site access changes.",
  "Return pickups and exchanges documented so credits are clear.",
  "Service requests routed to the right product specialists quickly.",
];

const whoServed = [
  "Production and custom builders balancing multiple active jobsites.",
  "Remodelers coordinating deliveries into occupied homes or tight lots.",
  "Superintendents who want weekly updates on material status and service calls.",
];

export const metadata: Metadata = {
  title: "Jobsite Coordination | Beisser Lumber",
  description: "Beisser Lumber aligns delivery schedules, field questions, returns and service calls with your superintendent and crew leads.",
};

export default function JobsiteCoordinationPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Services"
        title="Jobsite Coordination"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Jobsite Coordination" }]}
        lead="Clear communication between your superintendent, crew leads, and our branch teams. We align delivery schedules, handle field questions, and keep returns or service calls organized so crews stay productive."
      />


      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="card space-y-3 p-6">
          <h2 className="text-lg font-semibold text-ink-1">What’s Included</h2>
          <ul className="bullets text-ink-3">
            {coordinationBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card space-y-3 p-6">
          <h2 className="text-lg font-semibold text-ink-1">Who It&apos;s For</h2>
          <ul className="bullets text-ink-3">
            {whoServed.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card space-y-3 p-6">
          <h2 className="text-lg font-semibold text-ink-1">How to Engage Us</h2>
          <ul className="bullets text-ink-3">
            <li>Share weekly schedules and priorities with your account manager or inside sales lead.</li>
            <li>Flag changes to framing, window and door swings, or exterior details before deliveries.</li>
            <li>Provide the best onsite contact for each phase so questions get answered fast.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3 card-muted p-6">
        <h2 className="text-lg font-semibold text-ink-1">Service & Warranty Routing</h2>
        <p className="text-ink-3">
          Window or door service requests go straight to the correct vendor team with photos, job info, and swing
          details included. We help track status so you know when to expect onsite visits or parts.
        </p>
      </section>

      <CtaBand title="Set up jobsite coordination" body="Share your project list and preferred cadence for updates. We will set up a communication plan that fits how your team works." primary={{ href: "/quote", label: "Set Up Coordination" }} />
    </div>
  );
}
