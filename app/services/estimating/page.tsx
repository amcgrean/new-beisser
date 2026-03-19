import QuoteCTA from "@/components/QuoteCTA";
import FAQSection from "@/components/FAQSection";

const faqs = [
  { question: "Does Beisser provide full takeoff services?", answer: "" },
  { question: "Can Beisser estimate both commercial and residential projects?", answer: "" },
  { question: "Can my project be routed to a dedicated sales rep?", answer: "" },
];

export default function EstimatingServicePage() {
  const schema = {"@context": "https://schema.org", "@type": "Service", name: "Estimating", provider: {"@type": "Organization", name: "Beisser Lumber"}};
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Estimating</h1>
      <div className="space-y-4 rounded-xl border bg-white p-5 text-sm text-slate-700 shadow-sm">
        <p>Beisser offers commercial and residential estimating backed by full takeoff services. That includes practical support for builders who need one team to help organize lumber, windows, decking, siding, and engineered wood into a quote-ready package.</p>
        <p>Customers are paired with a dedicated sales representative and support team, with product-line specialists available in windows, decking, engineered wood products, and other major categories. That coordination helps reduce missed scope items and makes it easier to compare alternates before a project is released.</p>
        <p>Whether you are bidding a house, an addition, or a larger commercial package, Beisser's estimating team focuses on clear takeoffs, practical substitutions, and package planning tied to real-world branch support.</p>
      </div>
      <FAQSection title="Estimating FAQs" faqs={faqs} category="estimating" />
      <QuoteCTA title="Need a takeoff or material package?" body="Send your plans or project details and our estimating team will route the request to the right Beisser branch." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
