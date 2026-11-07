import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader, StatList, CtaBand } from "@/app/ui/PageHeader";
import { MapPin } from "@/app/ui/icons";
import { locations } from "@/app/data/locations";

export const metadata: Metadata = {
  title: "About Beisser Lumber: Iowa's Largest Family-Owned Lumberyard Since 1953",
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
  "Kim Beisser passed the presidency to his son-in-law Dave Ling just before the company's 70th anniversary. Dave now leads Beisser as CEO.",
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
    <div>
      <PageHeader
        eyebrow="About Beisser"
        title="Iowa's Largest Family-Owned Lumberyard Since 1953"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        image={{ src: "/locations/fort-dodge.jpg", alt: "Beisser Lumber Co. building and crew in Fort Dodge, Iowa, where the company started in 1953", width: 1100, height: 825 }}
        lead={
          <>
            <p className="entity-definition">
              Beisser Lumber is Iowa&apos;s largest family-owned lumberyard, established in 1953 in Fort Dodge, Iowa. We sell lumber, engineered wood, decking, siding, doors, and windows to contractors and homeowners across Central and Eastern Iowa from four locations: Grimes, Coralville, Fort Dodge, and our Birchwood/Johnston showroom.
            </p>
            <p className="text-base">
              What began as a Fort Dodge lumber company has grown into a four-location Iowa operation serving builders, remodelers, specialty trades, and homeowners with material packages, estimating, design help, delivery coordination, and showroom support.
            </p>
          </>
        }
      />

      <div className="space-y-20">
        <StatList stats={stats} label="Beisser Lumber by the numbers" />

        <section className="grid gap-6 md:grid-cols-2">
          <div className="card-muted p-8">
            <p className="eyebrow">Our vision</p>
            <p className="mt-3 text-xl font-semibold leading-snug text-ink-1">Provide building solutions that allow our customers to develop great communities.</p>
          </div>
          <div className="card-muted p-8">
            <p className="eyebrow">Our mission</p>
            <p className="mt-3 text-ink-3">
              To develop and maintain long-lasting relationships by delivering quality building materials and services. Beisser Lumber achieves customer satisfaction through the dedication of our valued employees to promote mutual growth and success.
            </p>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="section-title">Company history</h2>
            <ol className="mt-6 space-y-5 border-l-2 border-line pl-6">
              {history.map((item) => (
                <li key={item} className="relative text-ink-3">
                  <span aria-hidden className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-gold-500 ring-4 ring-canvas" />
                  {item}
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-6">
            <figure>
              <Image src="/images/company/about-heritage-pickup.jpg" alt="Two men standing beside an early Beisser Lumber Co. pickup truck" width={632} height={449} className="w-full rounded-lg object-cover" />
              <figcaption className="mt-2 text-sm text-ink-4">From the Beisser archives.</figcaption>
            </figure>
            <div className="card-muted flex items-center gap-5 p-5">
              <Image src="/images/company/about-founders-medallion.jpg" alt="Beisser Lumber founders medallion, established 1953" width={228} height={242} className="h-auto w-24 shrink-0" />
              <Image src="/images/company/award-lbm-100-2025.jpg" alt="LBM Journal 100, 2025 Top Dealer" width={541} height={429} className="h-auto w-28 shrink-0 rounded-md" />
              <p className="text-sm text-ink-3">
                LBM Journal named Beisser Lumber one of the top 100 lumber and building material dealers in the country for 2025.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-title">What sets Beisser apart</h2>
            <div className="mt-4 space-y-4 text-ink-3">
              <p>
                Beisser is a premier Des Moines Remodelers Council member and continues to invest in operational capabilities that go beyond a standard lumberyard. The Grimes custom door shop produces thousands of doors each month, while the Components Division builds wall panels in a climate-controlled environment for residential and commercial projects.
              </p>
              <p>
                That Components Division can custom-design panelized walls ranging from interior assemblies to finished exterior walls, helping project teams shorten framing timelines and improve consistency before materials ever reach the jobsite.
              </p>
            </div>
            <h2 className="section-title mt-12">Leadership and the next chapter</h2>
            <p className="mt-4 text-ink-3">
              Just before Beisser&apos;s 70th anniversary, Kim Beisser passed the presidency to his son-in-law Dave Ling, continuing the family-owned legacy. Dave now leads the company as CEO, expanding Beisser&apos;s reach across Central and Eastern Iowa.
            </p>
            <Link href="/careers" className="text-link mt-4 inline-flex">
              Explore careers at Beisser Lumber
            </Link>
          </div>

          <div>
            <h2 className="section-title">Locations across Iowa</h2>
            <ul className="mt-4 grid gap-3">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link href={`/locations/${location.slug}`} className="card flex gap-4 p-4 transition hover:border-brand-200 hover:shadow-lift">
                    <MapPin size={20} className="mt-0.5 shrink-0 text-brand-500" />
                    <span className="text-sm text-ink-3">
                      <strong className="block text-base text-ink-1">{location.name}</strong>
                      {location.addressLine1}, {location.city}, {location.state} {location.zip}
                      <span className="block">{location.phone}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <CtaBand />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
