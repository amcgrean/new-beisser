import fs from "fs";
import path from "path";

// adjust if needed:
import { productCategories } from "../app/data/categories";

type ProductCategory = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  heroImage: string;
  bullets: string[];
  tagline?: string;
};

const outDir = path.join(process.cwd(), "content", "categories");

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

function yamlQuote(s: string) {
  const escaped = String(s ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, "\\n");
  return `"${escaped}"`;
}

function yamlList(items: string[] | undefined) {
  if (!items || items.length === 0) return "[]";
  return "\n" + items.map((i) => `  - ${yamlQuote(i)}`).join("\n");
}

function toMdx(cat: ProductCategory) {
  const fm = [
    "---",
    `name: ${yamlQuote(cat.name)}`,
    `summary: ${yamlQuote(cat.summary)}`,
    `description: ${yamlQuote(cat.description)}`,
    `tagline: ${cat.tagline ? yamlQuote(cat.tagline) : '""'}`,
    `heroImage: ${yamlQuote(cat.heroImage)}`,
    `bullets:${yamlList(cat.bullets)}`,
    "---",
    "",
    // body can be edited later in CMS
    "",
  ].join("\n");

  return fm;
}

function safeSlug(slug: string) {
  return slug.toLowerCase().replace(/[^a-z0-9\-]/g, "-");
}

function main() {
  ensureDir(outDir);

  let written = 0;
  for (const cat of productCategories as ProductCategory[]) {
    const slug = safeSlug(cat.slug);
    const filePath = path.join(outDir, `${slug}.mdx`);

    // don’t overwrite existing
    if (fs.existsSync(filePath)) {
      console.log(`Exists, skipping: content/categories/${slug}.mdx`);
      continue;
    }

    fs.writeFileSync(filePath, toMdx(cat), "utf8");
    console.log(`Wrote: content/categories/${slug}.mdx`);
    written++;
  }

  console.log(`\nDone. Created ${written} category files in content/categories.`);
}

main();
