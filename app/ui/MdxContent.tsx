import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MdxContentProps = {
  content: string;
};

export function MdxContent({ content }: MdxContentProps) {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-slate-800">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
