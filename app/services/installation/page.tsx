import type { Metadata } from "next";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";
import FAQSection from "@/components/FAQSection";

const faqs = [
  { question: "Does Beisser have an installed sales program?", answer: "" },
  { question: "Can Beisser help with window service and warranty work?", answer: "" },
  { question: "Does wall panel delivery arrive ready to install?", answer: "" },
];

export const metadata: Metadata = {
  title: "Installation Services | Beisser Lumber",
  description: "Installed sales for doors, windows and some decking, window service and warranty support, and wall panels delivered ready to install.",
};

export default function InstallationServicePage() {
  const schema = {"@context": "https://schema.org", "@type": "Service", name: "Installation", provider: {"@type": "Organization", name: "Beisser Lumber"}};
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Installation"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Installation" }]}
        lead={<p>Beisser&apos;s installation-related services include an installed sales program, support for window service and warranty work on existing windows, and coordinated delivery for wall panels that arrive ready to install.</p>}
      />

      <div className="space-y-16">
        <div className="prose-beisser">
          <p>Our installed sales team handles doors, windows, and some decking, with seven trucks dedicated to installed sales.</p>
          <p>That matters for builders and service teams who need support after the initial sale, whether the project involves a service issue, a warranty question, or field coordination tied to a larger package. Instead of leaving customers to navigate the manufacturer alone, Beisser helps route service needs through the right contacts.</p>
          <p>On the structural side, wall panel delivery is designed to make framing more efficient. Panels are coordinated before shipment so crews can receive a turnkey product and keep installation moving once materials land on site.</p>
        </div>
        <FAQSection title="Installation FAQs" faqs={faqs} category="installation" />
      </div>

      <CtaBand title="Need installation support or window service?" body="Use our service request form for post-sale help, or request a quote if you are still pricing a new package." primary={{ href: "/service-request", label: "Submit a Service Request" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
