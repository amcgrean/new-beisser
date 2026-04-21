import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { locations } from "@/app/data/locations";

export const metadata: Metadata = {
  title: "About Beisser Lumber — Iowa's Largest Family-Owned Lumberyard Since 1953",
  description: "Learn about Beisser Lumber, Iowa's largest family-owned lumberyard since 1953, with four locations, a custom door shop, and statewide contractor support.",
};

const history = [
  "Founded in 1953 in Fort Dodge, Iowa.",
  "Expanded to Des Moines in 1979.",
  "Moved the Des Moines location to Grimes in December 1999, when the city was still a fraction of its current size.",
  "Added a millwork warehouse in 2003.",
  "Opened the custom door shop in Grimes in January 2004 in a 26,500-square-foot facility that now produces thousands of doors monthly.",
  "Expanded to Coralville in 2005.",
  "Added Engineered Wood Products in partnership with Weyerhaeuser in 2017, which has become one of Beisser's most extensive service lines.",
  "Kim Beisser passed the presidency to his son-in-law Dave Ling just before the company's 70th anniversary.",
];

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Beisser Lumber",
    legalName: "Beisser Lumber Company",
    foundingDate: "1953",
    foundingLocation: "Fort Dodge, Iowa",
    description:
      "Iowa's largest family-owned lumberyard, established in 1953. Selling lumber, engineered wood, decking, siding, doors, and windows to contractors and homeowners across Central and Eastern Iowa.",
    slogan: "Iowa's Largest Family-Owned Lumberyard",
    url: "https://beisserlumber.com",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50 },
    areaServed: {
      "@type": "State",
      name: "Iowa",
      description:
        "Central and Eastern Iowa including Des Moines metro, Iowa City/Coralville, Fort Dodge, and surrounding communities",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "3705 SE Beisser Drive",
      addressLocality: "Grimes",
      addressRegion: "IA",
      postalCode: "50111",
      addressCountry: "US",
    },
    telephone: "(515) 986-4422",
    sameAs: [
      "https://www.facebook.com/beisserlumber",
      "https://www.instagram.com/beisserlumber",
      "https://twitter.com/beisserlumber",
      "https://www.linkedin.com/company/beisser-lumber-co.",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://beisserlumber.com/about" },
    ],
  };

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />

      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-beisserGray">Iowa&apos;s Largest Family-Owned Lumberyard Since 1953</h1>
        <p className="entity-definition max-w-4xl text-sm text-slate-700">
          Beisser Lumber is Iowa&apos;s largest family-owned lumberyard, established in 1953 in Fort Dodge, Iowa. We sell lumber, engineered wood, decking, siding, doors, and windows to contractors and homeowners across Central and Eastern Iowa from four locations: Grimes, Coralville, Fort Dodge, and our Birchwood/Johnston showroom.
        </p>
        <p className="max-w-4xl text-sm text-slate-700">
          What began as a Fort Dodge lumber company has grown into a four-location Iowa operation serving builders, remodelers, specialty trades, and homeowners with material packages, estimating, design help, delivery coordination, and showroom support.
        </p>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700">
        <h2 className="text-xl font-semibold text-beisserGray">Company history</h2>
        <ul className="mt-3 list-inside list-disc space-y-2">
          {history.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700">
          <h2 className="text-xl font-semibold text-beisserGray">What sets Beisser apart</h2>
          <div className="mt-3 space-y-3">
            <p>
              Beisser is a premier Des Moines Remodelers Council member and continues to invest in operational capabilities that go beyond a standard lumberyard. The Grimes custom door shop produces thousands of doors each month, while the Components Division builds wall panels in a climate-controlled environment for residential and commercial projects.
            </p>
            <p>
              That Components Division can custom-design panelized walls ranging from interior assemblies to finished exterior walls, helping project teams shorten framing timelines and improve consistency before materials ever reach the jobsite.
            </p>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700">
          <h2 className="text-xl font-semibold text-beisserGray">Locations across Iowa</h2>
          <div className="mt-3 grid gap-3">
            {locations.map((location) => (
              <div key={location.slug} className="rounded-md border bg-slate-50 p-3">
                <strong>{location.name}</strong>
                <p>{location.addressLine1}, {location.city}, {location.state} {location.zip}</p>
                <p>{location.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700">
        <h2 className="text-xl font-semibold text-beisserGray">Leadership transition and next chapter</h2>
        <p className="mt-2">
          Just before Beisser&apos;s 70th anniversary, Kim Beisser passed the presidency to his son-in-law Dave Ling, continuing the family-owned legacy while expanding the company&apos;s reach across Central and Eastern Iowa.
        </p>
        <Link href="/careers" className="mt-3 inline-flex text-brand-green underline">
          Explore careers at Beisser Lumber
        </Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
