import Link from "next/link";

export type RelatedLinkItem = {
  href: string;
  label: string;
  description: string;
};

export default function RelatedLinks({ links }: { links: RelatedLinkItem[] }) {
  if (links.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="section-title">You might also be interested in</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={`${link.href}-${link.label}`}
            href={link.href}
            className="card p-4 transition hover:border-brand-200 hover:shadow-lift"
          >
            <div className="font-semibold text-brand-500">{link.label}</div>
            <p className="mt-1 text-sm text-ink-4">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
