"use client";

import { useId, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { ChevronDown } from "@/app/ui/icons";

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
    <section className="space-y-6">
      <h2 className="section-title">{title}</h2>

      <div className="divide-y divide-line border-y border-line">
        {visibleFAQs.map((faq, index) => {
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;
          const isOpen = openIndex === index;

          return (
            <div key={faq.question}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-ink-1 transition-colors hover:text-brand-500"
                  onClick={() => {
                    const next = isOpen ? null : index;
                    setOpenIndex(next);
                    if (next !== null) {
                      trackEvent("faq_expand", { question: faq.question, category });
                    }
                  }}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={20} aria-hidden className={`shrink-0 text-brand-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`${isOpen ? "block" : "hidden"} faq-answer max-w-prose pb-5 text-ink-3`}
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
