import Link from "next/link";
import { getServiceEntries } from "../lib/content";

export const dynamic = "force-dynamic";

export default function ServicesPage() {
  const services = getServiceEntries();

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-beisserGray">Services</h1>
        <p className="text-sm text-slate-700 max-w-3xl">
          Support built for professional builders and remodelers. Each service below is tied to a clear
          process and a simple way to request what you need without guessing who to call.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="rounded-lg border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md block"
          >
            {service.frontmatter.image && (
              <div className="mb-3 h-32 w-full overflow-hidden rounded-md bg-slate-100">
                {/* In a real app, use Next/Image here if possible, or just img tag for now */}
                <img
                  src={service.frontmatter.image}
                  alt={service.frontmatter.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="text-base font-semibold text-beisserGray">
              {service.frontmatter.title}
            </div>
            <p className="mt-1 text-slate-600 line-clamp-2">{service.frontmatter.summary}</p>
            <span className="mt-3 inline-flex text-sm font-semibold text-beisserGreen underline-offset-4 hover:underline">
              Learn more &rarr;
            </span>
          </Link>
        ))}
      </div>

      <div className="rounded-xl border bg-slate-50 p-4 text-sm">
        <div className="font-semibold text-beisserGray">Need a quick quote?</div>
        <p className="mt-1 text-slate-700">
          Use our quote request form to summarize your project, upload plans, and tell us how you prefer to
          receive pricing. A branch team member will follow up to confirm details and timelines.
        </p>
        <Link
          href="/request-quote"
          className="mt-3 inline-flex rounded-md bg-brand-green px-3 py-2 text-white font-medium hover:bg-brand-accent"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
