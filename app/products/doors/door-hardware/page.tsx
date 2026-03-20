import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Door Hardware — Iowa Contractors & Homeowners | Beisser Lumber",
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
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Doors", href: "/products/doors" }, { label: "Door Hardware" }]} />
      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-beisserGray">Door Hardware</h1>
        <p className="max-w-3xl text-sm text-slate-700">Beisser Lumber is a preferred Schlage dealer and supports complete lockset, handle, and hardware packages for production, remodel, and custom door schedules. We also key locks before release.</p>
      </header>
      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 space-y-3">
        <h2 className="text-xl font-semibold text-beisserGray">Hardware support</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Preferred Schlage dealer support with residential and commercial lockset options.</li>
          <li>We key locks before the order leaves the shop.</li>
          <li>Additional options include Kwikset, Emtek, Trilennium multi-point, and Andersen hardware packages.</li>
        </ul>
      </section>
      <Link href="/quote?category=doors" className="inline-flex rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#163f6e]">Request Door Hardware Pricing</Link>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </div>
  );
}
