# Agility / PIP → Website Sync Plan

> How product content on beisserlumber.com gets managed in PIP (the product-information app in the `agility-api` Supabase project, surfaced through LiveEdge / the beisser-api portal) and flows to this Next.js site — instead of being hand-typed into `app/data/*.ts` and `content/**/*.mdx`.
>
> Written 2026-10-23 after reviewing `amcgrean/agility-ai` (workbench projects `item-images`, `stock-millwork-25bw`, `stock-doors-25bw`, `stock-hardware-25bw`, `pip-vendor-docs`) and the live PIP schema. Companion to `docs/launch-checklist.md`.

---

## 1. Why

The website's product content was frozen 2026-03-20. Since then the Agility side has produced, and keeps producing, exactly the assets the site is missing:

| Built in Agility / PIP (Sept–Oct 2026) | Website today |
|---|---|
| 779 stock-item photos on `images.beisser.cloud` (public CDN, verified) | Every category/product hero is an Unsplash stock photo |
| 431-item millwork catalog, 117 profiles, 13 sections, Ferche / L.J. Smith model numbers, species swatches, sizes | `/products/millwork` is three paragraphs of prose |
| 264 vendor documents in PIP (install, spec, warranty, CAD, catalog) — 217 with public vendor URLs | `/resources/literature` is 100% `[PDF link — add when confirmed]` |
| Brand logos for Schlage, Kwikset, Endura, ODL, L.J. Smith | 7 of 78 brand pages have a logo |
| PIP `pip_product_guides` — curated, section-ordered product collections | no concept of a curated product list |

Copying CSVs out of the `agility-ai` repo into this one would work once and rot immediately. The right shape is: **PIP owns which products are on the website, in what order, with which image and documents; the website pulls from PIP and never stores product truth itself.** Sales manages products in one place (PIP / LiveEdge) and the site follows.

---

## 2. What PIP already has (live schema, `agility-api` Supabase project)

Checked 2026-10-23 against project `vyatosniqboeqzadyqmr`:

| Table | Rows | Relevant columns | Notes |
|---|---|---|---|
| `pip_products` | 7,224 (7,112 active; 4,809 `is_stock_item`) | `id, internal_sku, normalized_name, display_name, description, extended_description, category_major, category_minor, category, subcategory, species_or_material, finish, profile, thickness, width, length, branch_scope, is_stock_item, status, keywords, search_text` | `branch_scope` is a comma list (`25BW`, `20GR,40CV,10FD`, …); 2,340 rows NULL. `category_major` has a few scrape-junk values (`ferche` 337, `BayerBuilt` 111) that are all non-stock — filter on `is_stock_item` |
| `pip_product_images` | 3,565 | `product_id, storage_path, image_type, alt_text, sort_order, source` | `storage_path` → `https://images.beisser.cloud/<storage_path>` (`enrichment/...`, `decking/...`, `uploads/products/...`). 3,455 products have ≥1 image; 3,769 have none |
| `pip_vendors` | 156 | `vendor_code, vendor_name, is_active, is_lmc` | vendor_code = Agility supplier code |
| `pip_vendor_product_mappings` | 5,396 | `vendor_id, product_id, vendor_sku, is_primary` | ties a product to its brand |
| `pip_vendor_documents` | 264 | `vendor_id, document_type, title, file_url, source, notes` | types: `install_guide, spec_sheet, cad_drawing, warranty, catalog, brochure, tech_manual, csi_spec, test_report`. 217 are public vendor URLs, 14 local-only |
| `pip_product_documents` | 395 | `product_id, document_type, title, file_url` | per-product docs |
| `pip_item_enrichment` | 6,340 | `item, display_name, canonical_name, category, subcategory, finish, profile, dims, keywords, image_keys` | AI-enriched names / dims per item |
| `pip_product_guides` | 1 | `name, description, status, cover_image_path, section_order` | **a curated collection** — the right primitive for "what's on the website" |
| `pip_product_guide_items` | 2 | `guide_id, product_id, section_name, sort_order, override_description` | section + order per product |
| `pip_image_url_queue` | 865 | `product_id, url, status, storage_path` | poller that fetches external images into the CDN |

Mirror tables `agility_items` (571k), `agility_item_branch` (1.38M), `agility_item_supplier` are also here, so PIP can answer "is this still stocked at branch X" without touching AgilitySQL.

**What's missing:** nothing structural. There is no `publish_to_web` flag, but `pip_product_guides` already models "a named, sectioned, ordered list of products with an optional cover image and per-item description override" — which is a website collection.

---

## 3. Target architecture

```
 PIP / LiveEdge (beisser-api)          agility-api Supabase            new-beisser (this repo)
 ───────────────────────────           ────────────────────            ───────────────────────
 Sales curates "web:*" guides   ──►   pip_product_guides        ──►   scripts/sync-pip.ts
 toggles images, adds docs            pip_product_guide_items          (GitHub Action, nightly
                                      pip_products                     + manual dispatch)
                                      pip_product_images                     │
                                      pip_vendor_documents                   ▼
                                      ─────────────────────           app/data/pip/*.json
                                      view: web_catalog_v1             (committed snapshot)
                                                                             │
                                                                             ▼
                                                                      /products/<cat>/catalog
                                                                      /resources/literature
                                                                      category + brand heroes
```

### 3.1 Contract: `web:*` guides + one read-only view

- A product is on the website **iff** it is an item of a `pip_product_guides` row whose `name` starts with `web:` and whose `status = 'published'`.
  - `web:millwork` → sections = Base, Casing, Shoe/Crown/Cove, Stops & Jambs, Trim Mouldings, Boards & Shiplap, Stair Parts – Handrails, Stair Parts – Brackets/Treads/Fittings, Newel Posts, Balusters, Baluster Shoes & Hardware, Panels & Shelving (the 13 packet sections, minus "at a glance")
  - `web:doors-interior`, `web:doors-exterior`, `web:door-hardware`, `web:decking`, `web:siding`, … added as sales is ready
  - `web:hero` → one item per website category whose primary image becomes that category's hero (replaces the Unsplash URLs in `app/data/categories.ts`)
- `section_name` = the heading on the website; `sort_order` = position; `override_description` = optional public-facing blurb (otherwise `display_name`/`normalized_name`).
- **Item numbers never leave PIP.** The view exposes `profile` (the Ferche / L.J. Smith model), species, size, display name, image URL, brand — not `internal_sku`. This is Aaron's packet rule (2026-10-09) applied to the public site.

Add one Postgres view in `agility-api` (owned by beisser-api, not this repo) so the website's dependency is a stable, narrow surface:

```sql
create view web_catalog_v1 as
select g.name                               as guide,
       gi.section_name,
       gi.sort_order,
       coalesce(gi.override_description, p.display_name, p.normalized_name) as title,
       p.profile, p.species_or_material, p.finish,
       p.thickness, p.width, p.length,
       p.category_major, p.category_minor,
       v.vendor_name                        as brand,
       'https://images.beisser.cloud/' || img.storage_path as image_url,
       img.alt_text,
       p.branch_scope,
       p.updated_at
from pip_product_guides g
join pip_product_guide_items gi on gi.guide_id = g.id
join pip_products p on p.id = gi.product_id and p.status = 'active'
left join lateral (select storage_path, alt_text from pip_product_images i
                   where i.product_id = p.id order by sort_order, id limit 1) img on true
left join pip_vendor_product_mappings m on m.product_id = p.id and m.is_primary
left join pip_vendors v on v.id = m.vendor_id
where g.name like 'web:%' and g.status = 'published';
```

and `web_literature_v1` over `pip_vendor_documents` ⨝ `pip_vendors` where `file_url like 'http%'` (public only), with a `website_category` mapped from vendor → site category (small lookup table or a `web_category` column on `pip_vendors`).

Grant `select` on both views to a dedicated low-privilege role; the sync script uses that key only. Nothing else in Supabase is reachable from the website pipeline.

### 3.2 Sync: committed JSON snapshot, not runtime fetch

`scripts/sync-pip.ts` (run with `tsx`, already a devDependency):

1. `select * from web_catalog_v1` and `web_literature_v1` via `@supabase/supabase-js` with the read-only key.
2. Write `app/data/pip/catalog.json` (grouped guide → section → items) and `app/data/pip/literature.json`.
3. Download nothing — images stay on `images.beisser.cloud`; `next.config.js` gets `images.remotePatterns` for that host.
4. Fail loudly if a guide has zero items or an image URL returns non-200 (so a broken publish never ships).

Run it from a GitHub Action (`.github/workflows/sync-pip.yml`) nightly and on `workflow_dispatch`; the Action opens or updates a `chore/pip-sync` PR when the JSON changed. Netlify deploys on merge.

Why a snapshot and not ISR / runtime Supabase calls:
- The site stays a static export — no Supabase key in the Netlify runtime, no RLS surface on a public site, nothing to rate-limit.
- Builds stay hermetic. This repo's Claude Code sessions have **no outbound network at build time**; a runtime fetch would break every local `npm run build`.
- The diff in the PR is the audit trail of what sales changed.
- Latency is "next morning", which matches how often stock lists change.

### 3.3 Website consumers

| Surface | Reads | Replaces |
|---|---|---|
| `app/products/[slug]/page.tsx` → new `<ProductCatalog guide="web:<slug>">` section below the MDX prose | `catalog.json` | nothing (MDX prose stays, sales-locked) |
| `app/data/categories.ts` `heroImage` | `web:hero` guide | Unsplash URLs |
| `app/data/products.ts` `image` | first item image per category | Unsplash URLs |
| `app/resources/literature/page.tsx` | `literature.json` | the hard-coded `sections` array |
| `content/brands/*.md` `logo:` | `pip_vendors` + a `logo_path` column (to add) | manual PNG drops |

The catalog component reuses the design-system cards from `docs/lbm-redesign-handoff.md` (§4.4 `Card variant="image"`): profile number + title, species chip, size, brand, image; section headers from `section_name`. No prices, no item numbers, no QOH.

---

## 4. Phases

### Phase 0 — ship the assets we already have (this repo only, ~1 day)

No schema work. Unblocks launch-checklist items 2d (logos), 3b (literature) and removes the stock photos.

- [ ] `next.config.js`: add `images.remotePatterns` for `images.beisser.cloud`.
- [ ] Replace the 10 category `heroImage` URLs in `app/data/categories.ts` and the 16 `image` URLs in `app/data/products.ts` with `images.beisser.cloud` photos chosen from `stock_25bw_images9.18.26.csv` (Aaron to pick or approve; a proposed mapping goes in the PR).
- [ ] Rebuild `/resources/literature` from `agility-ai/workbench/projects/pip-vendor-docs/vendor_documents.csv` (217 public rows) as a one-time `app/data/literature.json`; group by website category; drop the `[PDF link — add when confirmed]` placeholders where a real doc now exists.
- [ ] Copy the 5 hardware logos (`schlage, kwikset, endura, odl, ljsmith` — flat PNG variants) into `public/images/brands/` and set `logo:` in the matching `content/brands/*.md` (`schlage.md, kwikset.md, odl-glass.md, lj-smith-stair-parts.md`; add `endura.md` is a sales call).
- [ ] Flag content drift to sales (do not edit): millwork MDX lists "Pine, Oak, Maple, Poplar, MDF" and "Chair Rail, Rosettes" and features Metrie; stock is Poplar 127 / Red Oak 81 / Maple 68 / Primed FJ Pine 26 / Hickory 21 / White Oak 19, no chair rail or rosettes stocked, and the stocked brands are Ferche and L.J. Smith.

### Phase 1 — PIP becomes the source of truth (beisser-api + this repo, ~1 week)

- [ ] **beisser-api:** create `web_catalog_v1` and `web_literature_v1` views; read-only role + key; add `logo_path` and `web_category` to `pip_vendors`.
- [ ] **beisser-api / PIP UI:** a "Website" screen — list of `web:*` guides, add/remove products, drag to order, set section, pick primary image, publish/unpublish. (The guide tables exist; this is UI.)
- [ ] **PIP data:** seed `web:millwork` from `stock_millwork_25bw.csv` (431 rows → `pip_product_guide_items`, section from `category`, order from the packet). `build_millwork_listing.py` already resolves every row to a `pip_products.id`.
- [ ] **this repo:** `scripts/sync-pip.ts`, `.github/workflows/sync-pip.yml`, `app/data/pip/*.json`, `<ProductCatalog>` component, literature page driven by JSON, remove the Phase 0 one-time JSON in favour of the synced one.
- [ ] Validation: `npm run build` offline still passes (JSON is committed); `rg internal_sku app components` returns nothing; every `image_url` in the snapshot returns 200.

### Phase 2 — the rest of the catalog (sales-paced)

- [ ] `web:doors-interior` / `web:doors-exterior` / `web:door-hardware` from the stock-doors and stock-hardware packets (images are local-only today → push through `pip_image_url_queue` or upload in PIP first).
- [ ] `web:decking` from the Wolf / Trex / TimberTech items already in PIP (`Decking-Composite` 1,804 rows, almost all non-stock → curate).
- [ ] Brand pages read "Products we carry" from `pip_vendor_product_mappings` instead of hand-typed `bullets:` in `content/brands/*.md`.
- [ ] Multi-branch framing: `branch_scope` on the view lets a card say "Stocked at Johnston showroom" vs "All branches". Until then every catalog page carries a note that stock lists reflect the Birchwood / Johnston millwork shop and other branches order in.

---

## 5. Rules carried over from the Agility work

- **No item numbers on public pages.** Show the manufacturer model (`profile`), species, size, brand. (Aaron, packet review 2026-10-09.)
- **Borrowed pictures only where there is none.** Don't let a sibling-species image replace a real one; `pip_product_image_flags` is where sales marks a wrong picture.
- **L.J. Smith profile drawings** attach to every item of that profile (`pip-vendor-docs` rule) — the catalog card can show photo + drawing like the packet does.
- **Never classify by bare code prefix**; use `is_stock_item` + `status` + guide membership, not `internal_sku` patterns.
- **AgilitySQL is read-only** and not in this path at all; the website reads PIP, PIP reads the mirror.

---

## 6. Known gaps the sync will surface (from `PIP_UPDATE_REPORT.md`, 2026-10-09)

- 66 stock items have no picture anywhere (Ferche crowns F6182/F6300/F646, F2854 shoe, F330 jambs, F400E, #231 handrail, shiplap, S4S boards, LJ-8872, Endura multipoint, Safe Lock Athens/Layton). These render as text-only cards or are left out of the guide until a photo lands.
- 33 Novo flyer crops exist only on Aaron's PC — need an upload path into PIP (`pip_product_attachments` or the image queue).
- 14 of 264 vendor documents are local files, not URLs — excluded from the literature page until hosted.
- 17 millwork profile groups still have no manufacturer model number (`missing_model_numbers.pdf`, handed out 2026-10-15) — cards fall back to the display name.
- Millwork and door data is 25BW-scoped; other branches are not yet in PIP guides.

---

## 7. Open decisions (need Aaron)

| # | Decision | Recommendation |
|---|---|---|
| 1 | Hot-link `images.beisser.cloud` or copy images into `public/`? | **Hot-link.** It is the CDN PIP already writes to, it's public, and copying means a second place to keep in sync. Add `remotePatterns` and move on. Revisit only if that host is ever locked down. |
| 2 | Millwork catalog as a browsable page for launch, or Phase 0 only (heroes + literature + logos) and the catalog after? | **Phase 0 for launch, Phase 1 immediately after.** Phase 0 is a day and removes every stock photo and placeholder; the catalog needs the PIP UI to be maintainable and shouldn't block the DNS flip. |
| 3 | Who owns the `web:*` guides day to day? | Sales (whoever maintains the packet) in PIP; Aaron approves publish. The website team never edits product data. |
| 4 | Where does the PIP "Website" screen live — PIP app or LiveEdge? | PIP (it already owns products/images/guides). LiveEdge links to it. |
| 5 | Should `branch_scope` drive per-branch catalog pages (`/locations/grimes` → "stocked here")? | Later. Expose it in the view now, use it when a second branch's stock is curated. |

---

## 8. Sources

- `amcgrean/agility-ai` — `knowledge/memory/project_item_images_push.md`, `stock-doors-millwork-packet.md`; `workbench/projects/stock-doors-25bw/README.md`; `workbench/projects/pip-vendor-docs/PIP_UPDATE_REPORT.md`, `vendor_documents.csv`; `workbench/projects/stock-millwork-25bw/stock_millwork_25bw.csv`, `millwork_profiles.py`, `ferche_catalog.json`; `workbench/projects/item-images/stock_25bw_images9.18.26.csv`; `workbench/pgdb.py`.
- `agility-api` Supabase project `vyatosniqboeqzadyqmr` — `information_schema` for the `pip_*` tables and row counts above.
- This repo — `app/data/categories.ts`, `app/data/products.ts`, `content/categories/millwork.mdx`, `content/categories/stair-parts.mdx`, `app/resources/literature/page.tsx`, `app/lib/brands.ts`, `docs/launch-checklist.md`, `docs/lbm-redesign-handoff.md`.
