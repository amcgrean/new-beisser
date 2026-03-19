import type { FAQItem } from "./types";
import { deckingFAQs } from "./decking";
import { sidingFAQs } from "./siding";
import { windowsFAQs } from "./windows";
import { doorsFAQs } from "./doors";
import { engineeredWoodFAQs } from "./engineered-wood";
import { lumberFAQs } from "./lumber";
import { millworkFAQs } from "./millwork";
import { weatherizationFAQs } from "./weatherization";
import { stairPartsFAQs } from "./stairParts";
import { hardwareScrewsFAQs } from "./hardwareScrews";

export const productFaqsBySlug: Record<string, FAQItem[]> = {
  "decking-railing": deckingFAQs,
  siding: sidingFAQs,
  "windows-patio-doors": windowsFAQs,
  doors: doorsFAQs,
  "engineered-wood-products": engineeredWoodFAQs,
  "lumber-panels": lumberFAQs,
  millwork: millworkFAQs,
  "building-envelope-accessories": weatherizationFAQs,
  "stair-parts": stairPartsFAQs,
  "hardware-screws": hardwareScrewsFAQs,
};
