import type { Metadata } from "next";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";
import FAQSection from "@/components/FAQSection";

const faqs = [
  { question: "Does Beisser offer in-house design services?", answer: "Yes. Our in-house design team has been helping customers since 1989, from stock blueprints to custom home designs." },
  { question: "Can Beisser help with custom floor plans?", answer: "Yes. The design team can help with floor plans for nearly any home style, starting from scratch or reworking an existing plan." },
  { question: "Are visualizer tools available for design selections?", answer: "" },
];

export const metadata: Metadata = {
  title: "Design Services | Beisser Lumber",
  description: "Beisser's in-house design team supports everything from stock blueprints to custom home designs, with free product visualizers for homeowners.",
};

export default function DesignServicePage() {
  const schema = {"@context": "https://schema.org", "@type": "Service", name: "Design", provider: {"@type": "Organization", name: "Beisser Lumber"}};
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Design"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Design" }]}
        lead={<p>Beisser&apos;s in-house design team has more than 25 years of experience, with the service dating back to 1989. The team supports everything from stock blueprints to custom home designs and can help organize floor plans for nearly any home style.</p>}
      />

      <div className="space-y-16">
        <div className="prose-beisser">
          <p>That design support works especially well for builders and remodelers who want one partner to help bridge the gap between concept, quoting, and final product selection. Beisser also offers free product visualizers so homeowners can compare styles before decisions are finalized.</p>
          <p>Starting from scratch or reworking an existing plan, the design team can take a project from a rough idea to something ready to quote, fitted to your site, budget, and product choices.</p>
        </div>
        <FAQSection title="Design FAQs" faqs={faqs} category="design" />
      </div>

      <CtaBand title="Need design help before pricing?" body="Tell us about your project and branch preference. Our team can route your request to design support and the right sales contacts." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
