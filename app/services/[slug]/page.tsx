import { notFound } from "next/navigation";
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

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const entry = getServiceBySlug(params.slug);

    if (!entry) {
        notFound();
    }

    const { frontmatter, content } = entry;

    return (
        <article className="max-w-4xl mx-auto py-8">
            <header className="mb-8 border-b pb-8">
                <div className="text-sm font-medium text-slate-500 mb-2">Services</div>
                <h1 className="text-4xl font-bold text-slate-900">{frontmatter.title}</h1>
                {frontmatter.summary && (
                    <p className="mt-4 text-xl text-slate-600 leading-relaxed">
                        {frontmatter.summary}
                    </p>
                )}
            </header>

            {frontmatter.image && (
                <div className="mb-8 w-full max-h-[400px] overflow-hidden rounded-xl bg-slate-100">
                    <img
                        src={frontmatter.image}
                        alt={frontmatter.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            <div className="prose prose-slate max-w-none lg:prose-lg">
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
