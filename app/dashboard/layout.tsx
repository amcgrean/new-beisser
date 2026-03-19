import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Beisser Internal Dashboard",
    description: "Content management and implementation workflow dashboard",
    robots: "noindex, nofollow",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`min-h-screen bg-slate-50 ${inter.className} text-slate-900`}>
            <header className="sticky top-0 z-30 border-b bg-white shadow-sm">
                <div className="mx-auto flex h-16 max-w-7xl items-center px-6 lg:px-10">
                    <Link href="/dashboard" className="text-xl font-bold tracking-tight text-slate-900 hover:text-blue-600">
                        Beisser<span className="text-slate-400">Internal</span>
                    </Link>
                    <nav className="ml-8 hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
                        <a href="#overview" title="Quick implementation playbook and KPIs.">Overview</a>
                        <a href="#reviews" title="Page and section review queue with status and comments.">Review Queue</a>
                        <a href="#todo" title="Approved pages with no outstanding tasks.">Approved</a>
                    </nav>
                    <div className="ml-auto flex items-center gap-3 text-sm font-medium">
                        <Link href="/" className="text-slate-500 hover:text-slate-900" title="Open public site in a new tab to QA updates.">
                            View Live Site
                        </Link>
                        <a
                            href="/admin/"
                            target="_blank"
                            className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
                            title="Open Netlify CMS for editing content, workflow comments, and tasks."
                        >
                            Open CMS Editor
                        </a>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-7xl p-6 lg:p-10">{children}</main>
        </div>
    );
}
