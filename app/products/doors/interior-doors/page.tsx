import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Interior Doors — Iowa Contractors & Homeowners | Beisser Lumber",
  description: "Interior doors from Beisser Lumber featuring Lynden, JELD-WEN, Masonite, Wood Port, Bayer Built, and custom door-shop support in Iowa.",
};

export default function InteriorDoorsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://beisserlumber.com/products" },
      { "@type": "ListItem", position: 3, name: "Doors", item: "https://beisserlumber.com/products/doors" },
      { "@type": "ListItem", position: 4, name: "Interior Doors", item: "https://beisserlumber.com/products/doors/interior-doors" },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Interior Doors",
    brand: ["Lynden Doors", "JELD-WEN", "Masonite", "Wood Port", "Bayer Built"],
    category: "Doors",
    description: "Interior door packages from Beisser Lumber for new construction and remodel projects across Iowa.",
    url: "https://beisserlumber.com/products/doors/interior-doors",
  };

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Doors", href: "/products/doors" }, { label: "Interior Doors" }]} />
      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-beisserGray">Interior Doors</h1>
        <p className="max-w-3xl text-sm text-slate-700">Beisser Lumber helps Iowa builders and remodelers compare molded, stile-and-rail, wood, and specialty interior door lines with package coordination from slab through hardware prep.</p>
      </header>
      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 space-y-3">
        <h2 className="text-xl font-semibold text-beisserGray">Interior brands we support</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Lynden Doors for interior door programs.</li>
          <li>JELD-WEN and Masonite for broad style, panel, and budget coverage.</li>
          <li>Wood Port and Bayer Built / True Style for upgraded interior selections.</li>
          <li>Custom machining and pre-hung package coordination through the Grimes door shop.</li>
        </ul>
      </section>
      <Link href="/quote?category=doors" className="inline-flex rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#163f6e]">Request an Interior Door Quote</Link>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </div>
  );
}
