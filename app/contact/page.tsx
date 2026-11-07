import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/app/data/locations";
import { PageHeader } from "@/app/ui/PageHeader";
import { mainPhone } from "@/app/data/navigation";
import { Clock, MapPin, Phone } from "@/app/ui/icons";

export const metadata: Metadata = {
  title: "Contact Beisser Lumber | Beisser Lumber",
  description: "Contact Beisser Lumber for branch support, quotes, service requests, credit applications, and account portal access.",
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://beisserlumber.com/contact" },
    ],
  };

  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Contact Us"
        lead="Reach a Beisser branch for general questions, service requests, or project support. For pricing and takeoffs, use the quote form so we can capture the project details your branch needs."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        actions={
          <>
            <Link href="/quote" className="btn-primary">Request a Quote</Link>
            <a href={mainPhone.href} className="btn-secondary"><Phone size={16} /> {mainPhone.label}</a>
          </>
        }
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
        <ul className="grid gap-6 sm:grid-cols-2">
          {locations.map((location) => (
            <li key={location.slug} className="card p-6 text-ink-3">
              <Link href={`/locations/${location.slug}`} className="text-lg font-semibold text-ink-1 hover:text-brand-500">{location.name}</Link>
              <p className="mt-3 flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-brand-500" />
                <span>{location.addressLine1}<br />{location.city}, {location.state} {location.zip}</span>
              </p>
              <p className="mt-2 flex gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-brand-500" />
                <a href={`tel:${location.phone.replace(/[^\d]/g, "")}`} className="text-link">{location.phone}</a>
              </p>
              <p className="mt-2 flex gap-3 text-sm">
                <Clock size={18} className="mt-0.5 shrink-0 text-brand-500" />
                <span>{location.hoursWeekday}<br />{location.hoursSaturday}<br />{location.hoursSundayNote}</span>
              </p>
            </li>
          ))}
        </ul>

        <aside className="card-muted self-start p-6">
          <h2 className="text-lg font-semibold text-ink-1">Need something else?</h2>
          <ul className="mt-4 space-y-3">
            <li><Link href="/quote" className="text-link">Request a Quote</Link></li>
            <li><Link href="/service-request" className="text-link">Submit a Service Request</Link></li>
            <li><a href="https://www.nuvo.credit/app/beisserlumber" target="_blank" rel="noreferrer" className="text-link">Credit Application</a></li>
            <li><a href="https://pro.beisserlumber.com" target="_blank" rel="noreferrer" className="text-link">Account / AR Portal Sign In</a></li>
          </ul>
        </aside>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
