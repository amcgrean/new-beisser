import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/app/ui/PageHeader";
import { getProResourceEntry } from "@/app/lib/content";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// We don't necessarily need generateStaticParams here if we assume fallback dynamic behavior,
// but it's good practice given we have known files.
// For now, simple dynamic lookup is fine for internal/pro pages.

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const entry = getProResourceEntry(params.slug);
    if (!entry) return {};
    const fm = entry.frontmatter;
    return { title: `${String(fm.title)} | Beisser Lumber`, description: fm.summary ? String(fm.summary) : undefined };
}

export default function ProResourcePage({ params }: { params: { slug: string } }) {
    const entry = getProResourceEntry(params.slug);

    if (!entry) {
        notFound();
    }

    const { frontmatter, content } = entry;

    return (
        <div>
            <PageHeader
                eyebrow="For pros"
                title={frontmatter.title}
                lead={frontmatter.summary || undefined}
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "For Pros", href: "/for-pros" }, { label: String(frontmatter.title) }]}
            />

            <div className="prose-beisser">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
        </div>
    );
}
