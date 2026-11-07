#!/usr/bin/env node
// Pull what PIP publishes for the website and commit it as JSON.
//
//   LIVEEDGE_URL=https://app.beisser.cloud WEBSITE_EXPORT_TOKEN=... node scripts/sync-pip.mjs [--check-images]
//
// Reads GET /api/pip/web-export (LiveEdge, bearer token) and writes
//   app/data/pip/catalog.json     published web:<category> guides, grouped by site category
//   app/data/pip/literature.json  public vendor documents, by website section and brand
// Output is sorted and stable so a night with no PIP changes produces no diff.
// Fails (exit 1) rather than writing when the export is empty or malformed, so a
// broken publish never reaches the site. See docs/agility-sync-plan.md.

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.resolve("app/data/pip");
const base = (process.env.LIVEEDGE_URL || "https://app.beisser.cloud").replace(/\/+$/, "");
const token = process.env.WEBSITE_EXPORT_TOKEN;
const checkImages = process.argv.includes("--check-images");

if (!token) fail("WEBSITE_EXPORT_TOKEN is not set");

const res = await fetch(`${base}/api/pip/web-export`, { headers: { authorization: `Bearer ${token}` } });
if (!res.ok) fail(`GET ${base}/api/pip/web-export -> HTTP ${res.status}`);
const data = await res.json();

const categories = Array.isArray(data?.catalog?.categories) ? data.catalog.categories : null;
const vendors = Array.isArray(data?.literature?.vendors) ? data.literature.vendors : null;
if (!categories || !vendors) fail("export is missing catalog.categories or literature.vendors");

for (const c of categories) {
  if (!/^[a-z0-9-]+$/.test(c.slug)) fail(`bad category slug ${JSON.stringify(c.slug)}`);
  if (!c.guides.length) fail(`category ${c.slug} has no guides`);
  for (const g of c.guides) {
    const n = g.sections.reduce((s, sec) => s + sec.items.length, 0);
    if (!n) fail(`guide ${g.name} (#${g.id}) is published but empty`);
  }
}
for (const v of vendors) if (!v.docs.length) fail(`vendor ${v.vendor} has no documents`);

if (checkImages) {
  const urls = [...new Set(categories.flatMap((c) => c.guides.flatMap((g) => g.sections.flatMap((s) => s.items.map((i) => i.imageUrl).filter(Boolean)))))];
  const bad = [];
  await Promise.all(Array.from({ length: 8 }, async () => {
    for (let u; (u = urls.pop()); ) {
      try {
        const r = await fetch(u, { method: "HEAD" });
        if (!r.ok) bad.push(`${r.status} ${u}`);
      } catch (e) {
        bad.push(`${e?.message ?? e} ${u}`);
      }
    }
  }));
  if (bad.length) fail(`${bad.length} image(s) not reachable:\n  ${bad.slice(0, 20).join("\n  ")}`);
}

const sortBy = (arr, key) => [...arr].sort((a, b) => key(a).localeCompare(key(b)));
const catalog = {
  imageBase: data.imageBase,
  categories: sortBy(categories, (c) => c.slug).map((c) => ({
    slug: c.slug,
    guides: [...c.guides].sort((a, b) => a.id - b.id).map((g) => ({
      id: g.id,
      name: g.name,
      part: g.part,
      description: g.description,
      sections: g.sections.map((s) => ({
        name: s.name,
        items: [...s.items].sort((a, b) => a.sortOrder - b.sortOrder).map(({ sortOrder: _omit, ...item }) => item),
      })),
    })),
  })),
};
const literature = {
  vendors: sortBy(vendors, (v) => `${v.category}\u0000${v.brand}`).map((v) => ({
    ...v,
    docs: sortBy(v.docs, (d) => `${d.type}\u0000${d.title}`),
  })),
};

await mkdir(OUT_DIR, { recursive: true });
await writeFile(path.join(OUT_DIR, "catalog.json"), JSON.stringify(catalog, null, 2) + "\n");
await writeFile(path.join(OUT_DIR, "literature.json"), JSON.stringify(literature, null, 2) + "\n");

const items = catalog.categories.reduce((n, c) => n + c.guides.reduce((m, g) => m + g.sections.reduce((k, s) => k + s.items.length, 0), 0), 0);
const docs = literature.vendors.reduce((n, v) => n + v.docs.length, 0);
console.log(`synced ${data.generatedAt}: ${catalog.categories.length} categories, ${items} items; ${literature.vendors.length} brands, ${docs} documents`);

function fail(msg) {
  console.error(`sync-pip: ${msg}`);
  process.exit(1);
}
