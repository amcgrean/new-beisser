"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-2xl py-12 text-center">
      <h1 className="page-title">Something went wrong</h1>
      <p className="mt-4 text-ink-3">We hit an unexpected issue loading this page. Please try again.</p>
      <button type="button" onClick={reset} className="btn-primary mt-6">Try again</button>
    </div>
  );
}
