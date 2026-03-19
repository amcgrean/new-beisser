"use client";

import { trackEvent } from "@/lib/analytics";

export default function PhoneLink({ phone, branch, className }: { phone: string; branch: string; className?: string }) {
  return (
    <a
      href={`tel:${phone.replace(/[^\d]/g, "")}`}
      className={className}
      onClick={() => trackEvent("phone_click", { branch })}
    >
      {phone}
    </a>
  );
}
