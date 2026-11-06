import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 text-sm text-ink-4"
    >
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-brand-500 transition"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-ink-3" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className="text-ink-5">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
