"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function BrandViewTracker({ brandName }: { brandName: string }) {
  useEffect(() => {
    trackEvent("brand_page_view", { brand_name: brandName });
  }, [brandName]);

  return null;
}
