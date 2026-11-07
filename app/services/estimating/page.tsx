import type { Metadata } from "next";
import { PageHeader, CtaBand } from "@/app/ui/PageHeader";
import FAQSection from "@/components/FAQSection";

const faqs = [
  { question: "Does Beisser provide full takeoff services?", answer: "" },
  { question: "Can Beisser estimate both commercial and residential projects?", answer: "" },
  { question: "Can my project be routed to a dedicated sales rep?", answer: "" },
];

export const metadata: Metadata = {
  title: "Estimating & Takeoffs | Beisser Lumber",
  description: "Commercial and residential takeoffs from Beisser Lumber, with dedicated sales-rep and specialist support.",
};

export default function EstimatingServicePage() {
  const schema = {"@context": "https://schema.org", "@type": "Service", name: "Estimating", provider: {"@type": "Organization", name: "Beisser Lumber"}};
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Estimating"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Estimating" }]}
        lead={<p>Beisser offers commercial and residential estimating backed by full takeoff services. That includes practical support for builders who need one team to help organize lumber, windows, decking, siding, and engineered wood into a quote-ready package.</p>}
      />

      <div className="space-y-16">
        <div className="prose-beisser">
          <p>Customers are paired with a dedicated sales representative and support team, with product-line specialists available in windows, decking, engineered wood products, and other major categories. That coordination helps reduce missed scope items and makes it easier to compare alternates before a project is released.</p>
          <p>Whether you are bidding a house, an addition, or a larger commercial package, Beisser's estimating team focuses on clear takeoffs, practical substitutions, and package planning tied to real-world branch support.</p>
          <p>Beisser's Components Division adds panelized wall production to the estimating and supply chain. With 15+ years of wall-panel experience, the division builds panels in a climate-controlled environment, custom-designed for any application from interior walls to finished exterior assemblies. The turnkey product arrives ready to install, reducing framing time and coordination overhead on commercial and residential projects alike.</p>
        </div>
        <FAQSection title="Estimating FAQs" faqs={faqs} category="estimating" />
      </div>

      <CtaBand title="Need a takeoff or material package?" body="Send your plans or project details and our estimating team will route the request to the right Beisser branch." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
