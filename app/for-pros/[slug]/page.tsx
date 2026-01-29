import { notFound } from "next/navigation";
import { getProResourceEntry } from "@/app/lib/content";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// We don't necessarily need generateStaticParams here if we assume fallback dynamic behavior,
// but it's good practice given we have known files.
// For now, simple dynamic lookup is fine for internal/pro pages.

export default function ProResourcePage({ params }: { params: { slug: string } }) {
    const entry = getProResourceEntry(params.slug);

    if (!entry) {
        notFound();
    }

    const { frontmatter, content } = entry;

    return (
        <div className="max-w-4xl mx-auto py-8">
            <header className="mb-6 border-b pb-6">
                <div className="text-sm font-medium text-slate-500 mb-2">For Pros</div>
                <h1 className="text-3xl font-semibold text-slate-900">{frontmatter.title}</h1>
                {frontmatter.summary && (
                    <p className="mt-2 text-lg text-slate-600">
                        {frontmatter.summary}
                    </p>
                )}
            </header>

            <div className="prose prose-slate max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
        </div>
    );
}
