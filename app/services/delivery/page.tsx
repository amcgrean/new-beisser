import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader, CtaBand, StatList } from "@/app/ui/PageHeader";

const fleet = [
  { value: "34", label: "Delivery trucks" },
  { value: "35", label: "Forklifts" },
  { value: "15", label: "Piggyback forklifts" },
  { value: "7", label: "Installed sales trucks" },
];

const deliveryTips = [
  "Share gate codes, onsite contacts, and preferred drop locations with your dispatcher.",
  "Mark staging areas for framing, exterior, and trim packages so crews can move faster.",
  "Confirm equipment needs (forklift, boom) for tight lots or multi-level projects.",
  "Send quick photos of the lot if access or weather conditions have changed.",
];

export const metadata: Metadata = {
  title: "Delivery & Pickup | Beisser Lumber",
  description: "Jobsite delivery, will call and sequencing support across Central and Eastern Iowa from Beisser Lumber's fleet.",
};

export default function DeliveryPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Services"
        title="Delivery & Pickup"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Delivery & Pickup" }]}
        lead="Jobsite delivery, will call, and sequencing support to match how your crew builds. Our fleet covers Central and Eastern Iowa with drivers who know the sites, the loads, and the timelines."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Image src="/images/company/delivery-flatbed-home.jpg" alt="Beisser Lumber flatbed truck delivering a material package to a home" width={743} height={423} className="aspect-[16/10] w-full rounded-lg object-cover" priority />
        <Image src="/images/company/delivery-andersen-box-truck.jpg" alt="Beisser Lumber box truck with Andersen windows branding" width={756} height={946} className="aspect-[16/10] w-full rounded-lg object-cover object-[center_40%]" />
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="section-title">Our fleet</h2>
          <p className="mt-3 max-w-prose text-ink-3">
            We handle about 65,000 orders a year, and more than 80% of them are delivered. Our drivers and yard crews work to one standard: On-Time and In-Full.
            Nearly all of our deliveries are in Iowa, and we also ship into neighboring states for larger projects.
          </p>
        </div>
        <StatList stats={fleet} label="Delivery fleet" />
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="card space-y-3 p-6">
          <h2 className="text-lg font-semibold text-ink-1">Who It&apos;s For</h2>
          <ul className="bullets text-ink-3">
            <li>Builders sequencing framing, exterior, and trim loads by phase.</li>
            <li>Remodelers coordinating tight access sites that need specific equipment.</li>
            <li>Crews scheduling will call pickups for fills, repairs, or returns.</li>
          </ul>
        </div>
        <div className="card space-y-3 p-6">
          <h2 className="text-lg font-semibold text-ink-1">How it Works</h2>
          <ul className="bullets text-ink-3">
            <li>Schedule deliveries by phase so framing, exterior, and finish loads arrive when you need them.</li>
            <li>Dedicated dispatch contacts at each branch to confirm dates, windows, and onsite requirements.</li>
            <li>Photos or signatures on delivery to document where materials were placed.</li>
            <li>Will call options for quick pickups and small fills.</li>
          </ul>
        </div>

        <div className="card space-y-3 p-6">
          <h2 className="text-lg font-semibold text-ink-1">What to Include</h2>
          <ul className="bullets text-ink-3">
            <li>Job name and lot number.</li>
            <li>Requested delivery date/time window and onsite contact.</li>
            <li>Any tight access notes, equipment needs, or weather considerations.</li>
            <li>Whether this is a partial fill, full package, or return pickup.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3 card-muted p-6">
        <h2 className="text-lg font-semibold text-ink-1">Jobsite Readiness Tips</h2>
        <ul className="bullets text-ink-3">
          {deliveryTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <CtaBand title="Ready to schedule a delivery or pickup?" body="Send details and our dispatch team will confirm timing." primary={{ href: "/quote", label: "Schedule Delivery" }} />
    </div>
  );
}
