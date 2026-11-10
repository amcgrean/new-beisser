"use client";

import { usePathname } from "next/navigation";

export default function SocialShareButtons({ title }: { title: string }) {
  const encoded = encodeURIComponent(title);
  // Built from the path so the links are complete in the server-rendered HTML.
  const url = encodeURIComponent(`https://beisserlumber.com${usePathname() ?? ""}`);

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => navigator.clipboard.writeText(window.location.href)}
        className="rounded-md border px-3 py-1.5 text-xs font-semibold"
      >
        Copy Link
      </button>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noreferrer" className="rounded-md border px-3 py-1.5 text-xs font-semibold">Facebook</a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${encoded}`} target="_blank" rel="noreferrer" className="rounded-md border px-3 py-1.5 text-xs font-semibold">LinkedIn</a>
    </div>
  );
}
