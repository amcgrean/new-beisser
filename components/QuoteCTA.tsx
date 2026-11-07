import Link from "next/link";

export default function QuoteCTA({
  title = "Need materials for your project?",
  body = "Share your plans, branch preference, and timeline. Our team will route your request to the right Beisser location for pricing and material planning.",
  ctaLabel = "Request a Quote",
  href = "/quote",
}: {
  title?: string;
  body?: string;
  ctaLabel?: string;
  href?: string;
}) {
  return (
    <section className="card-muted my-8 p-6">
      <h2 className="text-lg font-semibold text-ink-1">{title}</h2>
      <p className="mt-2 text-ink-3">{body}</p>
      <Link
        href={href}
        className="btn-primary mt-4"
      >
        {ctaLabel}
      </Link>
    </section>
  );
}
