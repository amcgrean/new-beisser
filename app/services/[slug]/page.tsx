import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/app/ui/PageHeader";
import { getServiceBySlug, getServiceEntries } from "@/app/lib/content";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export async function generateStaticParams() {
    const entries = getServiceEntries();
    return entries.map((entry) => ({
        slug: entry.slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const entry = getServiceBySlug(params.slug);
    if (!entry) return {};
    const fm = entry.frontmatter;
    return { title: `${String(fm.title)} | Beisser Lumber`, description: fm.summary ? String(fm.summary) : undefined };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const entry = getServiceBySlug(params.slug);

    if (!entry) {
        notFound();
    }

    const { frontmatter, content } = entry;

    return (
        <article>
            <PageHeader
                eyebrow="Services"
                title={frontmatter.title}
                lead={frontmatter.summary || undefined}
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: String(frontmatter.title) }]}
            />


            <div className="prose-beisser">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </article>
    );
}
