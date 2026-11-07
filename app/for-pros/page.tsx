import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/app/ui/PageHeader";
import { ArrowRight } from "@/app/ui/icons";

export const metadata: Metadata = {
  title: "For Pros | Beisser Lumber",
  description: "A central hub for builders, remodelers and contractors: the customer portal, estimating, delivery and other Beisser services.",
};

export default function ForProsPage() {
  const items = [
    {
      title: "Customer Portal",
      description: "Secure online access to your account, invoices, and statements through Beisser's online portal.",
      href: "https://pro.beisserlumber.com",
      external: true,
    },
    {
      title: "Contractor Resources",
      description: "Downloadable credit apps, tax forms, span tables, and other essential docs.",
      href: "/for-pros/resources",
    },
    {
      title: "Estimating & Takeoffs",
      description: "Partner with our estimating team for lumber lists, window and door packages, and more.",
      href: "/services/estimating",
    },
    {
      title: "Delivery & Pickup",
      description: "Jobsite delivery, will call, and options for coordinating material flow.",
      href: "/services/delivery",
    },
    {
      title: "Design Consultation",
      description: "Host client selections at our Birchwood/Johnston showroom with product specialists.",
      href: "/services/design-consultation",
    },
  ];

  return (
    <div>
      <PageHeader
        eyebrow="For pros"
        title="For Pros"
        lead="A central hub for builders, remodelers, and contractors. Access your tools and key services below."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "For Pros" }]}
      />
      <ul className="grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="group card flex h-full items-start justify-between gap-4 p-6 transition hover:border-brand-200 hover:shadow-lift"
            >
              <span>
                <span className="block text-lg font-semibold text-ink-1 group-hover:text-brand-500">{item.title}</span>
                <span className="mt-1 block text-sm text-ink-4">{item.description}</span>
              </span>
              <ArrowRight size={20} className="mt-1 shrink-0 text-brand-500 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
