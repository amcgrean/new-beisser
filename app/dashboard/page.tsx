import { getDashboardData } from "@/app/lib/dashboard";
import Link from "next/link";

export const dynamic = "force-dynamic"; // Ensure we always see fresh data

export default async function DashboardPage() {
    const { items, stats } = await getDashboardData();

    // Filter for items that need attention (less than 100% complete)
    const todoItems = items.filter(i => i.completeness < 100);
    const completeItems = items.filter(i => i.completeness === 100);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Content Mission Control</h1>
                <p className="mt-2 text-slate-500">
                    Overview of website content health and outstanding tasks.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="col-span-full lg:col-span-1 rounded-xl border bg-white p-6 shadow-sm">
                    <div className="text-sm font-medium text-slate-500">Content Health</div>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-3xl font-bold">{stats.averageCompleteness}%</span>
                        <span className="text-sm text-slate-400">avg. completion</span>
                    </div>
                    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                        <div
                            className="h-full bg-green-500 transition-all duration-500"
                            style={{ width: `${stats.averageCompleteness}%` }}
                        />
                    </div>
                </div>

                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <div className="text-sm font-medium text-slate-500">Brands & Categories</div>
                    <div className="mt-2 text-3xl font-bold">{stats.totalBrands + stats.totalCategories}</div>
                    <div className="mt-1 flex gap-2 text-xs text-slate-400">
                        <span>{stats.totalBrands} brands</span>
                        <span>•</span>
                        <span>{stats.totalCategories} cats</span>
                    </div>
                </div>

                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <div className="text-sm font-medium text-slate-500">Community & Gallery</div>
                    <div className="mt-2 text-3xl font-bold">{stats.totalCommunity + stats.totalGallery}</div>
                    <div className="mt-1 flex gap-2 text-xs text-slate-400">
                        <span>{stats.totalCommunity} events</span>
                        <span>•</span>
                        <span>{stats.totalGallery} photos</span>
                    </div>
                </div>

                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <div className="text-sm font-medium text-slate-500">Static Pages</div>
                    <div className="mt-2 text-3xl font-bold">{stats.totalPages}</div>
                    <div className="mt-1 text-xs text-slate-400">
                        About, Showroom, etc.
                    </div>
                </div>
            </div>

            {/* To-Do List */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b px-6 py-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Priority Actions ({todoItems.length})</h2>
                    <span className="text-xs font-mono text-slate-400 uppercase">Sorted by Urgency</span>
                </div>
                <div className="divide-y">
                    {todoItems.length === 0 ? (
                        <div className="p-8 text-center text-slate-500">
                            🎉 All content looks great! Nothing to do.
                        </div>
                    ) : (
                        todoItems.map((item) => (
                            <div key={item.id} className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between hover:bg-slate-50 transition-colors">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${item.type === "Brand" ? "bg-blue-100 text-blue-800" :
                                                item.type === "Category" ? "bg-purple-100 text-purple-800" :
                                                    item.type === "Community" ? "bg-green-100 text-green-800" :
                                                        "bg-gray-100 text-gray-800"
                                            }`}>
                                            {item.type}
                                        </span>
                                        <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {item.missingFields.map(field => (
                                            <span key={field} className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                                Missing: {field}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-slate-900">{item.completeness}%</div>
                                        <div className="text-xs text-slate-500">Complete</div>
                                    </div>
                                    <a
                                        href={item.cmsLink}
                                        target="_blank"
                                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
                                    >
                                        Edit in CMS &rarr;
                                    </a>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Recently Completed (Optional / Bottom) */}
            {completeItems.length > 0 && (
                <div className="rounded-xl border bg-slate-50/50 p-6">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Recently Completed</h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                        {completeItems.slice(0, 10).map(item => (
                            <div key={item.id} className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                {item.title}
                            </div>
                        ))}
                        {completeItems.length > 10 && (
                            <span className="text-sm text-slate-400 self-center">+{completeItems.length - 10} more</span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
