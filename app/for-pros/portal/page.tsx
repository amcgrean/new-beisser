import type { Metadata } from "next";
import { PageHeader } from "@/app/ui/PageHeader";
export const metadata: Metadata = {
  title: "Customer Portal | Beisser Lumber",
  description: "Use Beisser's online portal to review invoices, pay bills, check balances and keep your account activity in one place.",
};

export default function PortalPage() {
  return (
    <div>
      <PageHeader
        eyebrow="For pros"
        title="Customer Portal"
        lead="Use Beisser's online portal to review invoices, pay bills, check balances, and keep your account activity in one place."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "For Pros", href: "/for-pros" }, { label: "Customer Portal" }]}
        actions={
          <a href="https://pro.beisserlumber.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Open Customer Portal
          </a>
        }
      />
    </div>
  );
}
