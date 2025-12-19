import fs from "fs";
import path from "path";

// Adjust this import path if your folder structure is different
import { brands } from "../app/data/brands";

type Brand = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  categories: string[];
  website: string;
  heroImage: string;
  logo: string;
  bullets: string[];
};

const outDir = path.join(process.cwd(), "content", "brands");

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

function yamlQuote(s: string) {
  // Always quote strings to avoid YAML surprises
  const escaped = s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, "\\n");
  return `"${escaped}"`;
}

function yamlList(items: string[] | undefined) {
  if (!items || items.length === 0) return "[]";
  return "\n" + items.map((i) => `  - ${yamlQuote(String(i))}`).join("\n");
}

function toBrandMarkdown(b: Brand) {
  // We omit slug in frontmatter (filename is the slug)
  // If you WANT slug in frontmatter, add: slug: ...
  const fm = [
    "---",
    `name: ${yamlQuote(b.name ?? "")}`,
    `summary: ${yamlQuote(b.summary ?? "")}`,
    `description: ${yamlQuote(b.description ?? "")}`,
    `website: ${yamlQuote(b.website ?? "")}`,
    `heroImage: ${yamlQuote(b.heroImage ?? "")}`,
    `logo: ${yamlQuote(b.logo ?? "")}`,
    `categories:${yamlList((b.categories ?? []).map(String))}`,
    `bullets:${yamlList((b.bullets ?? []).map(String))}`,
    "---",
    "",
  ].join("\n");

  // Leave body blank for now (editors can add later)
  return fm + "\n";
}

function safeFilename(slug: string) {
  // Basic safety: keep it simple
  return slug.toLowerCase().replace(/[^a-z0-9\-]/g, "-");
}

function main() {
  ensureDir(outDir);

  const seen = new Set<string>();
  let written = 0;

  for (const b of brands as Brand[]) {
    if (!b?.slug) continue;

    const slug = safeFilename(b.slug);
    if (!slug) continue;

    if (seen.has(slug)) {
      console.warn(`Duplicate slug found, skipping: ${slug}`);
      continue;
    }
    seen.add(slug);

    const filePath = path.join(outDir, `${slug}.md`);

    // Don’t overwrite existing files (safer for re-runs)
    if (fs.existsSync(filePath)) {
      console.log(`Exists, skipping: content/brands/${slug}.md`);
      continue;
    }

    fs.writeFileSync(filePath, toBrandMarkdown(b), "utf8");
    written++;
    console.log(`Wrote: content/brands/${slug}.md`);
  }

  console.log(`\nDone. Created ${written} brand files in content/brands.`);
}

main();
