"use client";

import { useId, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title: string;
  faqs: FAQ[];
  category?: string;
}

export default function FAQSection({ title, faqs, category = "general" }: FAQSectionProps) {
  const visibleFAQs = useMemo(() => faqs.filter((f) => f.answer && f.answer.trim().length > 0), [faqs]);
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(visibleFAQs.length > 0 ? 0 : null);

  if (visibleFAQs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: visibleFAQs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>

      <div className="space-y-2">
        {visibleFAQs.map((faq, index) => {
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;
          const isOpen = openIndex === index;

          return (
            <div key={faq.question} className="overflow-hidden rounded-lg border border-slate-200">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-brand-green"
                  onClick={() => {
                    const next = isOpen ? null : index;
                    setOpenIndex(next);
                    if (next !== null) {
                      trackEvent("faq_expand", { question: faq.question, category });
                    }
                  }}
                >
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="text-base">{isOpen ? "−" : "+"}</span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`${isOpen ? "block" : "hidden"} faq-answer border-t border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-700`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
