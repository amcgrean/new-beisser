import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Beisser Lumber",
  description: "Your request has been submitted.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-2xl py-12 text-center">
      <p className="eyebrow">Request received</p>
      <h1 className="page-title mt-3">Thank You</h1>
      <p className="mt-4 text-ink-3">Your quote request has been submitted. A Beisser Lumber team member will follow up shortly.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/products" className="btn-primary">Back to Products</Link>
        <Link href="/" className="btn-secondary">Home</Link>
      </div>
    </div>
  );
}
