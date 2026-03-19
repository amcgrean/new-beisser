import Link from "next/link";

export type RelatedLinkItem = {
  href: string;
  label: string;
  description: string;
};

export default function RelatedLinks({ links }: { links: RelatedLinkItem[] }) {
  if (links.length === 0) return null;

  return (
    <section className="space-y-3 rounded-xl border bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-beisserGray">You might also be interested in</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={`${link.href}-${link.label}`}
            href={link.href}
            className="rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:border-[#1B4F8A] hover:bg-white"
          >
            <div className="text-sm font-semibold text-[#1B4F8A]">{link.label}</div>
            <p className="mt-1 text-xs text-slate-600">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
