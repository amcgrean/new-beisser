"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-2xl space-y-4 rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-slate-900">Something went wrong</h1>
      <p className="text-sm text-slate-700">We hit an unexpected issue loading this page. Please try again.</p>
      <button type="button" onClick={reset} className="rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white">Try again</button>
    </div>
  );
}
