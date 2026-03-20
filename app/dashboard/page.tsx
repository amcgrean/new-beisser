import { getDashboardData } from "@/app/lib/dashboard";

export const dynamic = "force-dynamic";

const statusStyles: Record<string, string> = {
    "Not Started": "bg-slate-100 text-slate-700",
    "In Review": "bg-amber-100 text-amber-800",
    Blocked: "bg-rose-100 text-rose-800",
    Approved: "bg-emerald-100 text-emerald-800",
};

export default async function DashboardPage() {
    const { items, stats } = await getDashboardData();

    const todoItems = items.filter((i) => i.completeness < 100 || i.openTasks > 0 || i.reviewStatus !== "Approved");
    const completeItems = items.filter((i) => i.completeness === 100 && i.openTasks === 0 && i.reviewStatus === "Approved");

    return (
        <div className="space-y-8">
            <section id="overview">
                <h1 className="text-3xl font-bold">Website Implementation Command Center</h1>
                <p className="mt-2 max-w-3xl text-slate-600">
                    Use this workspace to coordinate launches, assign page-level tasks, and track manager review comments for every section
                    (Brands, Community, Services, static pages, and more).
                </p>
            </section>

            <section className="rounded-xl border bg-blue-50 p-5 text-sm text-blue-900" aria-label="workflow directions">
                <h2 className="font-semibold">How to run team review</h2>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                    <li>Open an entry in CMS and update <strong>Team Workflow</strong> for owner, status, and due date.</li>
                    <li>Add <strong>Manager Comments</strong> for feedback and <strong>Section Notes</strong> for per-area implementation notes.</li>
                    <li>Track action items in each entry&apos;s <strong>To-Do List</strong>, then resolve before marking Approved.</li>
                </ol>
            </section>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <div className="text-sm font-medium text-slate-500" title="Average content completeness score across all tracked entries.">Content Health</div>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-3xl font-bold">{stats.averageCompleteness}%</span>
                        <span className="text-sm text-slate-400">avg. completion</span>
                    </div>
                </div>

                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <div className="text-sm font-medium text-slate-500" title="Entries currently waiting on a manager or stakeholder pass.">In Review</div>
                    <div className="mt-2 text-3xl font-bold">{stats.itemsInReview}</div>
                </div>

                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <div className="text-sm font-medium text-slate-500" title="Items blocked by missing assets, approvals, or dependencies.">Blocked Items</div>
                    <div className="mt-2 text-3xl font-bold">{stats.blockedItems}</div>
                </div>

                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <div className="text-sm font-medium text-slate-500" title="Open tasks from Team Workflow → To-Do List fields.">Open Team Tasks</div>
                    <div className="mt-2 text-3xl font-bold">{stats.openTasks}</div>
                </div>
            </div>

            <div id="reviews" className="rounded-xl border bg-white shadow-sm">
                <div className="border-b px-6 py-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Review Queue ({todoItems.length})</h2>
                    <span className="text-xs font-mono text-slate-400 uppercase">Prioritized by completeness + open tasks</span>
                </div>
                <div className="divide-y">
                    {todoItems.length === 0 ? (
                        <div className="p-8 text-center text-slate-500">🎉 Everything is approved and task-free.</div>
                    ) : (
                        todoItems.map((item) => (
                            <div key={item.id} className="flex flex-col gap-4 p-6 hover:bg-slate-50">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                                        {item.type}
                                    </span>
                                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[item.reviewStatus]}`}>
                                        {item.reviewStatus}
                                    </span>
                                </div>

                                <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-4">
                                    <p title="Completion score based on required content fields."><strong>{item.completeness}%</strong> content completeness</p>
                                    <p title="Outstanding implementation tasks from this entry."><strong>{item.openTasks}</strong> open tasks</p>
                                    <p title="Manager/stakeholder comments logged in Team Workflow."><strong>{item.managerComments}</strong> comments</p>
                                    <p title="Section-specific implementation notes."><strong>{item.sectionNotes}</strong> section notes</p>
                                </div>

                                {item.missingFields.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {item.missingFields.map((field) => (
                                            <span key={field} className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                                Missing: {field}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="text-xs text-slate-500">Owner: {item.reviewer || "Unassigned"}</span>
                                    <a href={item.cmsLink} target="_blank" rel="noopener noreferrer" className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50">
                                        Open in CMS →
                                    </a>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {completeItems.length > 0 && (
                <div id="todo" className="rounded-xl border bg-slate-50/50 p-6">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Approved and Clear</h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                        {completeItems.slice(0, 12).map((item) => (
                            <div key={item.id} className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
