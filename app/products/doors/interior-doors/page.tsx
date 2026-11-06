import type { Metadata } from "next";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";

export const metadata: Metadata = {
  title: "Interior Doors for Iowa Contractors & Homeowners | Beisser Lumber",
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
    <div>
      <PageHeader
        eyebrow="Doors"
        title="Interior Doors"
        lead="Beisser Lumber helps Iowa builders and remodelers compare molded, stile-and-rail, wood, and specialty interior door lines with package coordination from slab through hardware prep."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Doors", href: "/products/doors" }, { label: "Interior Doors" }]}
      />
      <div className="space-y-10">
      <section className="max-w-3xl space-y-4 text-ink-3">
        <h2 className="section-title">Interior brands we support</h2>
        <ul className="bullets">
          <li>Lynden Doors for interior door programs.</li>
          <li>JELD-WEN and Masonite for broad style, panel, and budget coverage.</li>
          <li>Wood Port and Bayer Built / True Style for upgraded interior selections.</li>
          <li>Custom machining and pre-hung package coordination through the Grimes door shop.</li>
        </ul>
      </section>
      </div>
      <CtaBand primary={{ href: "/quote?category=doors", label: "Request an Interior Door Quote" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </div>
  );
}
