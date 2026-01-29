import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Beisser Internal Dashboard",
    description: "Content management and auditing",
    robots: "noindex, nofollow", // Keep it out of search engines
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`min-h-screen bg-slate-50 ${inter.className} text-slate-900`}>
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-white px-6 shadow-sm">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="text-xl font-bold tracking-tight text-slate-900 hover:text-blue-600">
                        Beisser<span className="text-slate-400">Internal</span>
                    </Link>
                </div>
                <nav className="ml-auto flex items-center gap-6 text-sm font-medium">
                    <Link href="/" className="text-slate-500 hover:text-slate-900">
                        View Live Site
                    </Link>
                    <a
                        href="/admin/"
                        target="_blank"
                        className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
                    >
                        Open CMS Editor
                    </a>
                </nav>
            </header>

            {/* Main Content Area */}
            <main className="mx-auto max-w-7xl p-6 lg:p-10">
                {children}
            </main>
        </div>
    );
}
