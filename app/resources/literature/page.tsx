import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Product Literature & Spec Sheets | Beisser Lumber",
  description: "Download product brochures, spec sheets, installation guides, and warranty references for brands carried by Beisser Lumber.",
};

// Rows without a URL are documents the branch can email on request.
// Manufacturer URLs come from the vendor document list in the agility-ai repo
// (workbench/projects/pip-vendor-docs), where every link was checked on 9 Oct 2026.
const REQUEST = "";

const sections: { category: string; items: [string, string, string][] }[] = [
  { category: "Windows & Patio Doors", items: [
    ["Gerkin Windows", "Vinyl Window Brochure", REQUEST],
    ["Gerkin Windows", "Vinyl Patio Door Brochure", REQUEST],
    ["Gerkin Windows", "Aluminum Window Brochure", REQUEST],
    ["Gerkin Windows", "Storm Door Brochure", REQUEST],
    ["Andersen Windows", "100 Series Window & Patio Brochure", REQUEST],
    ["Andersen Windows", "200 Series Window Brochure", REQUEST],
    ["Andersen Windows", "A Series Window Brochure", REQUEST],
    ["Sierra Pacific", "Brand Guide", REQUEST],
    ["Sierra Pacific", "Vinyl Window & Patio Door Brochure", REQUEST],
    ["Sierra Pacific", "H3 Window Brochure", REQUEST],
  ]},
  { category: "Doors", items: [
    ["Lynden Door", "Residential Interior Door Brochure", "https://www.lyndendoor.com/wp-content/uploads/2021/08/LD550-Residential-Brochure-11.22-web.pdf"],
    ["Lynden Door", "Elemental Collection Brochure", "https://www.lyndendoor.com/wp-content/uploads/2021/05/Lynden-Door-Elemental-Collection-1.pdf"],
    ["Lynden Door", "Features and Benefits", "https://www.lyndendoor.com/wp-content/uploads/2023/06/Lynden-Door-Features-and-Benefits-2.pdf"],
    ["Lynden Door", "Standard Construction Limited Warranty", "https://www.lyndendoor.com/wp-content/uploads/2016/01/Lynden-Door-Standard-Construction-Warranty.pdf"],
    ["JELD-WEN", "Interior & Exterior Door Limited Warranty", "https://edge.sitecorecloud.io/jeldwencanada1-jeldwen-p523-e8d9/media/Project/JeldWen/JeldWenCanada/Articles/Documents-Video/Canadian-Warranties/JWIntExtDoorWarrantyEff06-01-19_5.pdf"],
    ["JELD-WEN", "Door Collection Overview", REQUEST],
    ["Therma-Tru", "Entry Door Catalog", REQUEST],
    ["ODL", "Doorglass Limited Warranty", "https://www.odl.com/hubfs/ODL%20Files/213100_ODLDoorglassWarranty.pdf"],
    ["ODL", "Enclosed Blinds (Blinds + Glass) Warranty", "https://www.odl.com/hubfs/2011018-Blink-Warranty-Rev-Nov2020.pdf"],
  ]},
  { category: "Door Hardware", items: [
    ["Schlage", "Residential Warranty", "https://assets.schlage.com/content/dam/us-res-mktg/support-articles/warranty/warranty-schlage-us.pdf"],
    ["Schlage", "Residential Lockset Catalog", REQUEST],
    ["Kwikset", "Product Catalog", "https://s7d2.scene7.com/is/content/Kwikset/Kwikset-Product-Catalog"],
    ["Kwikset", "Limited Warranty", "https://www.kwikset.com/support/warranty"],
    ["Emtek", "Door Hardware Booklet (2025)", "https://www.emtek.com/media/documents/2025_Emtek_Door_Hardware_Booklet.pdf"],
    ["Emtek", "Multi-Point Lock Booklet (2025)", "https://www.emtek.com/media/documents/2025_Emtek_Multi_Point_Pocket_Booklet.pdf"],
    ["Emtek", "Electronic Lock Booklet (2025)", "https://www.emtek.com/media/documents/2025_Emtek_Electronic_Lock_Pocket_Booklet.pdf"],
    ["Emtek", "Limited Lifetime Warranty", "https://www.emtek.com/support/warranty/"],
    ["National Hardware", "Barn Door Hardware Booklet", "https://images.national-hardware.com/is/content/nh/Barn-Door%20POG%20Booklet"],
    ["National Hardware", "Track and Hanger Catalog (2026)", "https://images.national-hardware.com/is/content/nh/Track-Hanger%20Catalog_2026"],
    ["National Hardware", "Limited Warranty", "https://images.national-hardware.com/is/content/nh/NHWarranty"],
  ]},
  { category: "Decking & Railing", items: [["Trex", "Decking Brochure", REQUEST], ["TimberTech", "Decking Guide", REQUEST], ["Deckorators", "Railing Catalog", REQUEST]] },
  { category: "Siding", items: [["LP SmartSide", "Product Catalog (lpcorp.com)", "https://lpcorp.com/resources/product-literature"], ["James Hardie", "Product Catalog", REQUEST], ["Rollex", "Soffit & Trim Guide", REQUEST]] },
  { category: "Lumber & Panels", items: [["Weyerhaeuser", "OSB and Panel Information", REQUEST], ["Weyerhaeuser", "Framing Lumber & Sheathing Guide", REQUEST]] },
  { category: "Engineered Wood Products", items: [["Weyerhaeuser", "LVL / LSL / PSL Guide", REQUEST], ["Weyerhaeuser", "Floor System Guide", REQUEST]] },
  { category: "Building Envelope & Accessories", items: [["DuPont Tyvek", "Housewrap & Flashing Guide", REQUEST], ["ZIP System", "Sheathing & Tape Guide", REQUEST], ["Dow", "BlueBoard Insulation Literature", REQUEST]] },
  { category: "Hardware & Screws", items: [["Simpson Strong-Tie", "Connector Catalog", REQUEST], ["FastenMaster", "Structural Fastener Guide", REQUEST]] },
  { category: "Millwork", items: [
    ["Metrie", "Interior Moulding & Trim Profile Guide (2024)", "https://downloads.ctfassets.net/icm6aedy07oo/5vrh74yMvWcjqrQglb27eg/2cf80cb78809bbad2c3fa161556d0664/2024_Metrie-Chicago_Profile_Guide.pdf"],
    ["Metrie", "Metrie Complete Brochure (Midwest)", "https://assets.ctfassets.net/icm6aedy07oo/4IZZu2OACXcetTm9DsxHs4/5c496286b68b04eb29611ff1c0cf7c2c/Metrie_Complete_Brochure_Midwest_2023.pdf"],
    ["Ferche", "Book of Mouldings", "https://cdn.prod.website-files.com/5df1499861c2beedaba75296/5df95831ca16d0af48a8e6f6_Ferche-Book-of-Mouldings-2014-Web.pdf"],
    ["Ferche", "BOLD Brochure (2024)", "https://cdn.prod.website-files.com/5df1499861c2beedaba75296/66bcce640072040796eeef4c_Ferche-BOLD-2024.pdf"],
    ["Empire Moulding & Millwork", "Millwork Catalog", REQUEST],
  ]},
  { category: "Stair Parts", items: [
    ["L.J. Smith", "Full Line Systems Catalog (2025)", "https://res.cloudinary.com/novobp/image/upload/v1738089916/LJSmith-FullCat_2025_x6yhey.pdf"],
    ["L.J. Smith", "Inner Artistry Brochure", "https://res.cloudinary.com/novobp/image/upload/v1742923040/Inner_Artistry_Brochure_2024_yhnbok.pdf"],
    ["L.J. Smith", "Linear Collection Brochure", "https://res.cloudinary.com/novobp/image/upload/v1742927612/Linear_Collections_Brochure_NEW_2024_ckh3xs.pdf"],
    ["L.J. Smith", "IronPro Brochure", "https://www.ljsmith.com/s/IronPro-Brochure.pdf"],
    ["L.J. Smith", "Limited Warranty", "https://www.ljsmith.com/warranty"],
    ["Coffman", "Stair Systems Guide", REQUEST],
  ]},
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
                        {href ? (
                          <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-green underline">
                            {href.includes(".pdf") || href.includes("/is/content/") || href.includes("cloudinary") ? "Open PDF" : "Open link"}
                          </a>
                        ) : (
                          <Link href="/contact" className="text-slate-600 underline">Request from your branch</Link>
                        )}
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
