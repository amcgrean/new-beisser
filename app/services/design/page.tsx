import QuoteCTA from "@/components/QuoteCTA";
import FAQSection from "@/components/FAQSection";

const faqs = [
  { question: "Does Beisser offer in-house design services?", answer: "" },
  { question: "Can Beisser help with custom floor plans?", answer: "" },
  { question: "Are visualizer tools available for design selections?", answer: "" },
];

export default function DesignServicePage() {
  const schema = {"@context": "https://schema.org", "@type": "Service", name: "Design", provider: {"@type": "Organization", name: "Beisser Lumber"}};
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Design</h1>
      <div className="space-y-4 rounded-xl border bg-white p-5 text-sm text-slate-700 shadow-sm">
        <p>Beisser&apos;s in-house design team has more than 25 years of experience, with the service dating back to 1989. The team supports everything from stock blueprints to custom home designs and can help organize floor plans for nearly any home style.</p>
        <p>That design support works especially well for builders and remodelers who want one partner to help bridge the gap between concept, quoting, and final product selection. Beisser also offers free product visualizers so homeowners can compare styles before decisions are finalized.</p>
        <p>Whether you are refining an existing plan or starting from scratch, the design team can help move a project from rough idea to a quote-ready direction that fits your site, budget, and product goals.</p>
      </div>
      <FAQSection title="Design FAQs" faqs={faqs} category="design" />
      <QuoteCTA title="Need design help before pricing?" body="Tell us about your project and branch preference. Our team can route your request to design support and the right sales contacts." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
