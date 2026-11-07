import type { Metadata } from "next";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";

const orderSteps = [
  "Confirm exact specs, finishes, and handedness for windows and doors.",
  "Align brand lead times with your project schedule and framing milestones.",
  "Document approvals before placing the order to minimize changes.",
  "Provide delivery or will call timing once the product ships to our yard.",
];

const whoItServes = [
  "Builders needing non-stock options to match architectural details.",
  "Remodelers replacing units with custom sizes or historic profiles.",
  "Trade partners coordinating accessories, hardware, or trim to finish a project cleanly.",
];

export const metadata: Metadata = {
  title: "Special Orders | Beisser Lumber",
  description: "Non-stock items, custom sizes and brand-specific products from Beisser Lumber, with clear lead times, approvals and jobsite delivery.",
};

export default function SpecialOrdersPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Services"
        title="Special Orders"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Special Orders" }]}
        lead="Access to non-stock items, custom sizes, and brand-specific solutions with clear expectations on lead times, approvals, and jobsite delivery. We coordinate with manufacturers so you have one point of contact."
      />


      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="card space-y-3 p-6">
          <h2 className="text-lg font-semibold text-ink-1">Common Requests</h2>
          <ul className="bullets text-ink-3">
            <li>Custom door sizes, glass options, and hardware configurations.</li>
            <li>Specialty siding profiles, soffit, and trim details.</li>
            <li>Engineered wood substitutions and value-engineered alternates.</li>
            <li>Unique decking colors, railing infill, and accessory kits.</li>
          </ul>
        </div>
        <div className="card space-y-3 p-6">
          <h2 className="text-lg font-semibold text-ink-1">How We Manage It</h2>
          <ul className="bullets text-ink-3">
            {orderSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-3 card-muted p-6">
        <h2 className="text-lg font-semibold text-ink-1">What to Share Up Front</h2>
        <p className="text-ink-3">
          Project name and location, product type, manufacturer preferences, and any deadlines tied to inspections
          or homeowner approvals. If you have submittals or inspiration photos, include them so we can align options
          quickly.
        </p>
      </section>

      <section className="card space-y-3 p-6">
        <h2 className="text-lg font-semibold text-ink-1">Who It&apos;s For</h2>
        <ul className="bullets text-ink-3">
          {whoItServes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <CtaBand title="Need something we don't stock?" body="Start a special order request and we will confirm availability, lead times, and next steps." primary={{ href: "/quote", label: "Start a Request" }} />
    </div>
  );
}
