import type { FAQItem } from "./types";
import { deckingFAQs } from "./decking";
import { sidingFAQs } from "./siding";
import { windowsFAQs } from "./windows";
import { doorsFAQs } from "./doors";
import { engineeredWoodFAQs } from "./engineered-wood";
import { lumberFAQs } from "./lumber";
import { millworkFAQs } from "./millwork";
import { roofingFAQs } from "./roofing";
import { weatherizationFAQs } from "./weatherization";

export const productFaqsBySlug: Record<string, FAQItem[]> = {
  decking: deckingFAQs,
  siding: sidingFAQs,
  windows: windowsFAQs,
  doors: doorsFAQs,
  "engineered-wood": engineeredWoodFAQs,
  lumber: lumberFAQs,
  millwork: millworkFAQs,
  roofing: roofingFAQs,
  weatherization: weatherizationFAQs,
};
