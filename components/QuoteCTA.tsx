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
    <section className="rounded-xl border bg-slate-50 p-4">
      <h2 className="text-base font-semibold text-beisserGray">{title}</h2>
      <p className="mt-2 text-sm text-slate-700">{body}</p>
      <Link
        href={href}
        className="mt-3 inline-flex rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#163f6e]"
      >
        {ctaLabel}
      </Link>
    </section>
  );
}
