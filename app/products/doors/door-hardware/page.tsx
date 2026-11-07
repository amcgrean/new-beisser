import type { Metadata } from "next";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";

export const metadata: Metadata = {
  title: "Door Hardware for Iowa Contractors & Homeowners | Beisser Lumber",
  description: "Door hardware, locksets, and keying services from Beisser Lumber, including preferred Schlage dealer support for Iowa builders and homeowners.",
};

export default function DoorHardwarePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://beisserlumber.com/products" },
      { "@type": "ListItem", position: 3, name: "Doors", item: "https://beisserlumber.com/products/doors" },
      { "@type": "ListItem", position: 4, name: "Door Hardware", item: "https://beisserlumber.com/products/doors/door-hardware" },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Door Hardware",
    brand: ["Schlage", "Kwikset", "Emtek", "Trilennium", "Andersen Hardware"],
    category: "Doors",
    description: "Door hardware and locksets from Beisser Lumber with keying support and package coordination.",
    url: "https://beisserlumber.com/products/doors/door-hardware",
  };

  return (
    <div>
      <PageHeader
        eyebrow="Doors"
        title="Door Hardware"
        lead="Beisser Lumber is a preferred Schlage dealer and supports complete lockset, handle, and hardware packages for production, remodel, and custom door schedules. We also key locks before release."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Doors", href: "/products/doors" }, { label: "Door Hardware" }]}
      />
      <div className="space-y-10">
      <section className="max-w-3xl space-y-4 text-ink-3">
        <h2 className="section-title">Hardware support</h2>
        <ul className="bullets">
          <li>Preferred Schlage dealer support with residential and commercial lockset options.</li>
          <li>We key locks before the order leaves the shop.</li>
          <li>Additional options include Kwikset, Emtek, Trilennium multi-point, and Andersen hardware packages.</li>
        </ul>
      </section>
      </div>
      <CtaBand primary={{ href: "/quote?category=doors", label: "Request Door Hardware Pricing" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </div>
  );
}
