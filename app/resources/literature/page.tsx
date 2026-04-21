import type { Metadata } from "next";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Product Literature & Spec Sheets | Beisser Lumber",
  description: "Download product brochures, spec sheets, installation guides, and warranty references for brands carried by Beisser Lumber.",
};

const sections = [
  { category: "Windows & Patio Doors", items: [
    ["Gerkin Windows", "Vinyl Window Brochure", "[PDF link — add when confirmed]"],
    ["Gerkin Windows", "Vinyl Patio Door Brochure", "[PDF link — add when confirmed]"],
    ["Gerkin Windows", "Aluminum Window Brochure", "[PDF link — add when confirmed]"],
    ["Gerkin Windows", "Storm Door Brochure", "[PDF link — add when confirmed]"],
    ["Andersen Windows", "100 Series Window & Patio Brochure", "[PDF link — add when confirmed]"],
    ["Andersen Windows", "200 Series Window Brochure", "[PDF link — add when confirmed]"],
    ["Andersen Windows", "A Series Window Brochure", "[PDF link — add when confirmed]"],
    ["Sierra Pacific", "Brand Guide", "[PDF link — add when confirmed]"],
    ["Sierra Pacific", "Vinyl Window & Patio Door Brochure", "[PDF link — add when confirmed]"],
    ["Sierra Pacific", "H3 Window Brochure", "[PDF link — add when confirmed]"],
  ]},
  { category: "Doors", items: [["JELD-WEN", "Door Collection Overview", "[PDF link — add when confirmed]"], ["Therma-Tru", "Entry Door Catalog", "[PDF link — add when confirmed]"], ["Schlage", "Residential Lockset Catalog", "[PDF link — add when confirmed]"]] },
  { category: "Decking & Railing", items: [["Trex", "Decking Brochure", "[PDF link — add when confirmed]"], ["TimberTech", "Decking Guide", "[PDF link — add when confirmed]"], ["Deckorators", "Railing Catalog", "[PDF link — add when confirmed]"]] },
  { category: "Siding", items: [["LP SmartSide", "Product Catalog (lpcorp.com)", "https://lpcorp.com/resources/product-literature"], ["James Hardie", "Product Catalog", "[PDF link — add when confirmed]"], ["Rollex", "Soffit & Trim Guide", "[PDF link — add when confirmed]"]] },
  { category: "Lumber & Panels", items: [["Weyerhaeuser", "OSB and Panel Information", "[PDF link — add when confirmed]"], ["Weyerhaeuser", "Framing Lumber & Sheathing Guide", "[PDF link — add when confirmed]"]] },
  { category: "Engineered Wood Products", items: [["Weyerhaeuser", "LVL / LSL / PSL Guide", "[PDF link — add when confirmed]"], ["Weyerhaeuser", "Floor System Guide", "[PDF link — add when confirmed]"]] },
  { category: "Building Envelope & Accessories", items: [["DuPont Tyvek", "Housewrap & Flashing Guide", "[PDF link — add when confirmed]"], ["ZIP System", "Sheathing & Tape Guide", "[PDF link — add when confirmed]"], ["Dow", "BlueBoard Insulation Literature", "[PDF link — add when confirmed]"]] },
  { category: "Hardware & Screws", items: [["Simpson Strong-Tie", "Connector Catalog", "[PDF link — add when confirmed]"], ["FastenMaster", "Structural Fastener Guide", "[PDF link — add when confirmed]"]] },
  { category: "Millwork", items: [["Empire Moulding & Millwork", "Millwork Catalog", "[PDF link — add when confirmed]"], ["Ferche", "Interior Door & Millwork Guide", "[PDF link — add when confirmed]"]] },
  { category: "Stair Parts", items: [["L.J. Smith", "Stair Parts Catalog", "[PDF link — add when confirmed]"], ["Coffman", "Stair Systems Guide", "[PDF link — add when confirmed]"]] },
];

export default function LiteraturePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://beisserlumber.com/resources" },
      { "@type": "ListItem", position: 3, name: "Product Literature & Spec Sheets", item: "https://beisserlumber.com/resources/literature" },
    ],
  };

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Product Literature & Spec Sheets" }]} />
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-beisserGray">Product Literature &amp; Spec Sheets</h1>
        <p className="max-w-3xl text-sm text-slate-700">Download brochures, spec sheets, and installation guides for the products we carry.</p>
      </header>

      <section className="rounded-xl border bg-brand-green/10 p-5 text-sm text-slate-800">
        <p>Looking for a specific document? Call your branch — we can email any current spec sheet or brochure directly.</p>
      </section>

      <div className="space-y-5">
        {sections.map((section) => (
          <section key={section.category} className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-beisserGray">{section.category}</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-slate-500">
                    <th className="py-2 pr-4">Brand</th>
                    <th className="py-2 pr-4">Document Type</th>
                    <th className="py-2">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {section.items.map(([brand, document, href]) => (
                    <tr key={`${section.category}-${brand}-${document}`} className="border-b last:border-b-0">
                      <td className="py-2 pr-4 font-medium text-slate-800">{brand}</td>
                      <td className="py-2 pr-4 text-slate-700">{document}</td>
                      <td className="py-2 text-slate-700">
                        {href.startsWith("http") ? <a href={href} target="_blank" rel="noreferrer" className="text-brand-green underline">Open link</a> : href}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
