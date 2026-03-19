import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import QuoteCTA from "@/components/QuoteCTA";

type MdxContentProps = {
  content: string;
};

export function MdxContent({ content }: MdxContentProps) {
  const normalized = content.replace(/<QuoteCTA\s*\/>/g, '<div data-quote-cta="true"></div>');

  return (
    <div className="space-y-4 text-sm leading-relaxed text-slate-800">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          div: ({ node, ...props }) => {
            if ((node?.properties as Record<string, unknown> | undefined)?.["data-quote-cta"] === "true") {
              return <QuoteCTA />;
            }

            return <div {...props} />;
          },
        }}
      >
        {normalized}
      </ReactMarkdown>
    </div>
  );
}
