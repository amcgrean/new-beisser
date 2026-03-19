"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ArticleReadTracker({ articleTitle, category }: { articleTitle: string; category: string }) {
  const sent = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (sent.current) return;
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const progress = scrollTop / docHeight;
      if (progress >= 0.5) {
        sent.current = true;
        trackEvent("article_read", { article_title: articleTitle, category });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [articleTitle, category]);

  return null;
}
