"use client";

import { FormEvent, useState } from "react";

const branchPhones: Record<string, string> = {
  grimes: "(515) 986-4422",
  coralville: "(319) 545-7120",
  "fort-dodge": "(515) 573-4166",
  "birchwood-johnston": "(515) 986-4422",
};

export default function ServiceRequestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [branch, setBranch] = useState("grimes");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    const res = await fetch("/api/service-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("success");
      event.currentTarget.reset();
      setBranch("grimes");
      return;
    }

    setStatus("error");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border bg-white p-5 shadow-sm">
      <div className="grid gap-3 md:grid-cols-2">
        <label className="text-sm">Name *<input required name="name" type="text" className="mt-1 w-full rounded-md border px-3 py-2" /></label>
        <label className="text-sm">Company<input name="company" type="text" className="mt-1 w-full rounded-md border px-3 py-2" /></label>
        <label className="text-sm">Email *<input required name="email" type="email" className="mt-1 w-full rounded-md border px-3 py-2" /></label>
        <label className="text-sm">Phone<input name="phone" type="tel" className="mt-1 w-full rounded-md border px-3 py-2" /></label>
        <label className="text-sm">Branch
          <select name="branch" value={branch} onChange={(e) => setBranch(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2">
            <option value="grimes">Grimes (Main Yard)</option>
            <option value="coralville">Coralville</option>
            <option value="fort-dodge">Fort Dodge</option>
            <option value="birchwood-johnston">Birchwood / Johnston (Showroom)</option>
          </select>
        </label>
        <label className="text-sm">Service Type
          <select name="service_type" className="mt-1 w-full rounded-md border px-3 py-2">
            <option>Design</option>
            <option>Estimating</option>
            <option>Installation</option>
            <option>Window Service</option>
          </select>
        </label>
      </div>
      <label className="block text-sm">Preferred Contact Method
        <select name="contact_method" className="mt-1 w-full rounded-md border px-3 py-2">
          <option>Email</option>
          <option>Phone</option>
        </select>
      </label>
      <label className="block text-sm">Description *<textarea required name="description" className="mt-1 min-h-[140px] w-full rounded-md border px-3 py-2" /></label>
      <button type="submit" disabled={status === "submitting"} className="rounded-md bg-[#1B4F8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#163f6e]">{status === "submitting" ? "Submitting..." : "Submit Service Request"}</button>
      {status === "success" ? <p className="rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-700">Your request has been sent. If you need immediate help, call {branchPhones[branch]}.</p> : null}
      {status === "error" ? <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">We could not submit your service request. Please call {branchPhones[branch]}.</p> : null}
    </form>
  );
}
