import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Exterior Doors — Iowa Contractors & Homeowners | Beisser Lumber",
  description: "Exterior entry doors from Beisser Lumber featuring Therma-Tru, Masonite, Andersen, Sierra Pacific, JELD-WEN, iron doors, and specialty entry systems.",
};

export default function ExteriorDoorsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://beisserlumber.com/products" },
      { "@type": "ListItem", position: 3, name: "Doors", item: "https://beisserlumber.com/products/doors" },
      { "@type": "ListItem", position: 4, name: "Exterior Doors", item: "https://beisserlumber.com/products/doors/exterior-doors" },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Exterior Doors",
    brand: ["Therma-Tru", "Masonite", "Andersen", "Sierra Pacific", "JELD-WEN", "Stallion", "Midwest Iron Doors"],
    category: "Doors",
    description: "Exterior door packages from Beisser Lumber for Iowa homes and commercial projects.",
    url: "https://beisserlumber.com/products/doors/exterior-doors",
  };

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Doors", href: "/products/doors" }, { label: "Exterior Doors" }]} />
      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-beisserGray">Exterior Doors</h1>
        <p className="max-w-3xl text-sm text-slate-700">From practical fiberglass and steel entries to architectural statement doors, Beisser Lumber builds exterior packages that coordinate slab style, glass, hardware, and weather performance for Iowa conditions.</p>
      </header>
      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 space-y-3">
        <h2 className="text-xl font-semibold text-beisserGray">Exterior door options</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Therma-Tru and Masonite exterior entry systems.</li>
          <li>Andersen and Sierra Pacific entry door options to coordinate with full window packages.</li>
          <li>JELD-WEN pivot and IWP specialty entry selections.</li>
          <li>Stallion, iron doors, and decorative doorglass options for custom projects.</li>
        </ul>
      </section>
      <Link href="/quote?category=doors" className="inline-flex rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-greenDark">Request an Exterior Door Quote</Link>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </div>
  );
}
