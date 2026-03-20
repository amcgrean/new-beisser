import type { Metadata } from "next";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Beisser Lumber",
  description: "Read Beisser Lumber's privacy policy covering quote form information, website analytics, and privacy questions.",
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beisserlumber.com/" },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://beisserlumber.com/privacy-policy" },
    ],
  };

  return (
    <div className="max-w-3xl space-y-5">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <h1 className="text-3xl font-bold text-beisserGray">Privacy Policy</h1>
      <p className="text-sm text-slate-700">This page explains the basic information Beisser Lumber collects through this website and how we use it to respond to project requests.</p>

      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 space-y-3">
        <h2 className="text-xl font-semibold text-beisserGray">What information we collect</h2>
        <p>When you submit a quote request, service request, or contact form, we may collect your name, email address, phone number, company name, branch preference, and project details you choose to share.</p>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 space-y-3">
        <h2 className="text-xl font-semibold text-beisserGray">How we use your information</h2>
        <p>We use the information you provide to respond to your request, route it to the right Beisser branch or specialist, and follow up about the products or services connected to your project.</p>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 space-y-3">
        <h2 className="text-xl font-semibold text-beisserGray">We do not sell personal information</h2>
        <p>Beisser Lumber does not sell the personal information you submit through this website.</p>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 space-y-3">
        <h2 className="text-xl font-semibold text-beisserGray">Analytics</h2>
        <p>This website may use Google Analytics to understand general site usage patterns. Analytics data is used in aggregate and does not change how branch staff responds to your request.</p>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 space-y-3">
        <h2 className="text-xl font-semibold text-beisserGray">Questions</h2>
        <p>If you have questions about privacy or information submitted through this site, please contact Beisser Lumber at <a className="text-[#1B4F8A] underline" href="tel:5159864422">(515) 986-4422</a>.</p>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
