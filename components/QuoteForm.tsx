"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { readOrCreateAttribution } from "@/lib/utm";

const branchLabels: Record<string, string> = {
  grimes: "Grimes (Main Yard)",
  coralville: "Coralville",
  "fort-dodge": "Fort Dodge",
  "birchwood-johnston": "Birchwood / Johnston (Showroom)",
};

const branchPhones: Record<string, string> = {
  grimes: "(515) 986-4422",
  coralville: "(319) 545-7120",
  "fort-dodge": "(515) 573-4166",
  "birchwood-johnston": "(515) 986-4422",
};

const productCategories = [
  "Decking & Railing",
  "Doors",
  "Engineered Wood Products",
  "Building Envelope & Accessories",
  "Lumber & Panels",
  "Siding",
  "Stair Parts",
  "Millwork",
  "Windows & Patio Doors",
  "Hardware & Screws",
  "Other",
];

export default function QuoteForm({ source, initialBranch }: { source: string; initialBranch: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [branch, setBranch] = useState(initialBranch in branchPhones ? initialBranch : "grimes");
  const [attribution, setAttribution] = useState({ utm_source: "", utm_medium: "", referrer: "", landing_page: "" });

  useEffect(() => {
    setAttribution(readOrCreateAttribution());
  }, []);

  const branchPhone = useMemo(() => branchPhones[branch] ?? branchPhones.grimes, [branch]);
  const branchLabel = useMemo(() => branchLabels[branch] ?? branchLabels.grimes, [branch]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, ...attribution, source_page: window.location.pathname }),
    });

    if (res.ok) {
      trackEvent("quote_form_submit", { branch: String(payload.branch || ""), project_type: String(payload.project_type || ""), source_page: window.location.pathname });
      setStatus("success");
      event.currentTarget.reset();
      setBranch(initialBranch in branchPhones ? initialBranch : "grimes");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("error");
  };

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-4 rounded-xl border bg-white p-5 shadow-sm">
        <input type="hidden" name="source" value={source} />
        <input type="hidden" name="utm_source" value={attribution.utm_source} />
        <input type="hidden" name="utm_medium" value={attribution.utm_medium} />
        <input type="hidden" name="referrer" value={attribution.referrer} />
        <input type="hidden" name="landing_page" value={attribution.landing_page} />
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">Name *<input required name="name" type="text" className="mt-1 w-full rounded-md border px-3 py-2" /></label>
          <label className="text-sm">Company / Business Name<input name="company" type="text" className="mt-1 w-full rounded-md border px-3 py-2" /></label>
          <label className="text-sm">Email *<input required name="email" type="email" className="mt-1 w-full rounded-md border px-3 py-2" /></label>
          <label className="text-sm">Phone<input name="phone" type="tel" className="mt-1 w-full rounded-md border px-3 py-2" /></label>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">Branch
            <select name="branch" className="mt-1 w-full rounded-md border px-3 py-2" value={branch} onChange={(e) => setBranch(e.target.value)}>
              <option value="grimes">Grimes (Main Yard)</option>
              <option value="coralville">Coralville</option>
              <option value="fort-dodge">Fort Dodge</option>
              <option value="birchwood-johnston">Birchwood / Johnston (Showroom)</option>
            </select>
          </label>
          <label className="text-sm">Project Type
            <select name="project_type" className="mt-1 w-full rounded-md border px-3 py-2"><option>Residential New Construction</option><option>Residential Remodel</option><option>Commercial / Multifamily</option><option>Addition</option><option>Deck Replacement</option><option>Other</option></select>
          </label>
        </div>
        <label className="block text-sm">Product Category
          <select name="product_category" className="mt-1 w-full rounded-md border px-3 py-2">
            {productCategories.map((category) => <option key={category}>{category}</option>)}
          </select>
        </label>
        <label id="plans" className="block text-sm">Project Description<textarea name="project_description" className="mt-1 min-h-[120px] w-full rounded-md border px-3 py-2" /></label>
        <div className="rounded-lg border border-dashed bg-slate-50 p-3 text-sm text-slate-600">
          Upload plans: use the description field to note that plans are attached once form file handling is connected. This anchor preserves the old-site “Upload Plans” path in navigation.
        </div>
        <button type="submit" disabled={status === "submitting"} className="rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-greenDark">{status === "submitting" ? "Submitting..." : "Submit Quote Request"}</button>
        {status === "success" ? <p className="rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-700">Your request has been sent to our {branchLabel} team. We&apos;ll follow up within 1 business day. Need immediate help? Call {branchPhone}.</p> : null}
        {status === "error" ? <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">We could not submit your request right now. Please call {branchPhone} and we can help immediately.</p> : null}
      </form>
      <p className="text-xs text-slate-600">Need immediate help? <Link href="/contact" className="text-brand-green underline">Contact your branch team</Link>.</p>
    </>
  );
}
