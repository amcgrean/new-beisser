import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import { locations } from "@/app/data/locations";

export const metadata: Metadata = {
  title: "About Beisser Lumber — Iowa's Largest Family-Owned Lumberyard Since 1953",
  description: "Learn about Beisser Lumber, Iowa's largest family-owned lumberyard since 1953, with four locations, a custom door shop, and statewide contractor support.",
};

const history = [
  "Founded in 1953 in Fort Dodge, Iowa, with $2,500 and one employee.",
  "Expanded to Des Moines in 1979.",
  "Moved the Des Moines location to Grimes in December 1999, when the city was still a fraction of its current size.",
  "Added a millwork warehouse in 2003.",
  "Opened the custom door shop in Grimes in January 2004 in a 26,500-square-foot facility that now produces thousands of doors monthly.",
  "Expanded to Coralville in 2005.",
  "Added Engineered Wood Products in partnership with Weyerhaeuser in 2017, which has become one of Beisser's most extensive service lines.",
  "Kim Beisser passed the presidency to his son-in-law Dave Ling just before the company's 70th anniversary.",
];

const stats = [
  { value: "1953", label: "Founded in Fort Dodge, Iowa" },
  { value: "4", label: "Iowa locations" },
  { value: "165", label: "Employees" },
  { value: "Top 100", label: "LBM Journal dealer, 2025" },
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
    numberOfEmployees: { "@type": "QuantitativeValue", value: 165 },
    award: "LBM Journal 100 Top Dealer (2025)",
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

      <section aria-label="Beisser Lumber by the numbers" className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border bg-white p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-beisserGreen">{stat.value}</div>
            <div className="mt-1 text-xs text-slate-600">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700">
          <h2 className="text-xl font-semibold text-beisserGray">Our vision</h2>
          <p className="mt-2">Provide building solutions that allow our customers to develop great communities.</p>
        </div>
        <div className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700">
          <h2 className="text-xl font-semibold text-beisserGray">Our mission</h2>
          <p className="mt-2">
            To develop and maintain long-lasting relationships by delivering quality building materials and services. Beisser Lumber achieves customer satisfaction through the dedication of our valued employees to promote mutual growth and success.
          </p>
        </div>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700">
        <div className="flex flex-col gap-5 md:flex-row md:items-start">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-beisserGray">Company history</h2>
            <ul className="mt-3 list-inside list-disc space-y-2">
              {history.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/company/about-founders-medallion.jpg"
            alt="Beisser Lumber founders medallion, established 1953"
            width={228}
            height={242}
            className="mx-auto h-auto w-40 shrink-0 md:mx-0"
          />
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <figure>
            <Image src="/locations/fort-dodge.jpg" alt="Beisser Lumber Co. building and crew in Fort Dodge, Iowa" width={1100} height={825} className="h-56 w-full rounded-lg object-cover" />
            <figcaption className="mt-1 text-xs text-slate-500">Fort Dodge, where Beisser started in 1953.</figcaption>
          </figure>
          <figure>
            <Image src="/images/company/about-heritage-pickup.jpg" alt="Two men standing beside an early Beisser Lumber Co. pickup truck" width={632} height={449} className="h-56 w-full rounded-lg object-cover" />
            <figcaption className="mt-1 text-xs text-slate-500">From the Beisser archives.</figcaption>
          </figure>
        </div>
      </section>

      <section className="flex flex-col items-center gap-5 rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 sm:flex-row">
        <Image src="/images/company/award-lbm-100-2025.jpg" alt="LBM Journal 100, 2025 Top Dealer" width={541} height={429} className="h-auto w-40 shrink-0 rounded-md" />
        <div>
          <h2 className="text-xl font-semibold text-beisserGray">Recognized as a top 100 dealer</h2>
          <p className="mt-2">
            LBM Journal named Beisser Lumber one of the top 100 lumber and building material dealers in the country for 2025.
          </p>
        </div>
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
