# Agility / PIP → Website Sync Plan

> How product content on beisserlumber.com gets managed in PIP (the product-information app in the `agility-api` Supabase project, surfaced through LiveEdge / the beisser-api portal) and flows to this Next.js site: instead of being hand-typed into `app/data/*.ts` and `content/**/*.mdx`.
>
> Written 2026-10-23 after reviewing `amcgrean/agility-ai` (workbench projects `item-images`, `stock-millwork-25bw`, `stock-doors-25bw`, `stock-hardware-25bw`, `pip-vendor-docs`) and the live PIP schema. Companion to `docs/launch-checklist.md`.

---

## 1. Why

The website's product content was frozen 2026-03-20. Since then the Agility side has produced, and keeps producing, exactly the assets the site is missing:

| Built in Agility / PIP (Sept–Oct 2026) | Website today |
|---|---|
| 779 stock-item photos on `images.beisser.cloud` (public CDN, verified) | Every category/product hero is an Unsplash stock photo |
| 431-item millwork catalog, 117 profiles, 13 sections, Ferche / L.J. Smith model numbers, species swatches, sizes | `/products/millwork` is three paragraphs of prose |
| 264 vendor documents in PIP (install, spec, warranty, CAD, catalog): 217 with public vendor URLs | `/resources/literature` is 100% `[PDF link: add when confirmed]` |
| Brand logos for Schlage, Kwikset, Endura, ODL, L.J. Smith | 7 of 78 brand pages have a logo |
| PIP `pip_product_guides`: curated, section-ordered product collections | no concept of a curated product list |

Copying CSVs out of the `agility-ai` repo into this one would work once and rot immediately. The right shape is: **PIP owns which products are on the website, in what order, with which image and documents; the website pulls from PIP and never stores product truth itself.** Sales manages products in one place (PIP / LiveEdge) and the site follows.

---

## 2. What PIP already has (live schema, `agility-api` Supabase project)

Checked 2026-10-23 against project `vyatosniqboeqzadyqmr`:

| Table | Rows | Relevant columns | Notes |
|---|---|---|---|
| `pip_products` | 7,224 (7,112 active; 4,809 `is_stock_item`) | `id, internal_sku, normalized_name, display_name, description, extended_description, category_major, category_minor, category, subcategory, species_or_material, finish, profile, thickness, width, length, branch_scope, is_stock_item, status, keywords, search_text` | `branch_scope` is a comma list (`25BW`, `20GR,40CV,10FD`, …); 2,340 rows NULL. `category_major` has a few scrape-junk values (`ferche` 337, `BayerBuilt` 111) that are all non-stock: filter on `is_stock_item` |
| `pip_product_images` | 3,565 | `product_id, storage_path, image_type, alt_text, sort_order, source` | `storage_path` → `https://images.beisser.cloud/<storage_path>` (`enrichment/...`, `decking/...`, `uploads/products/...`). 3,455 products have ≥1 image; 3,769 have none |
| `pip_vendors` | 156 | `vendor_code, vendor_name, is_active, is_lmc` | vendor_code = Agility supplier code |
| `pip_vendor_product_mappings` | 5,396 | `vendor_id, product_id, vendor_sku, is_primary` | ties a product to its brand |
| `pip_vendor_documents` | 264 | `vendor_id, document_type, title, file_url, source, notes` | types: `install_guide, spec_sheet, cad_drawing, warranty, catalog, brochure, tech_manual, csi_spec, test_report`. 217 are public vendor URLs, 14 local-only |
| `pip_product_documents` | 395 | `product_id, document_type, title, file_url` | per-product docs |
| `pip_item_enrichment` | 6,340 | `item, display_name, canonical_name, category, subcategory, finish, profile, dims, keywords, image_keys` | AI-enriched names / dims per item |
| `pip_product_guides` | 1 | `name, description, status, cover_image_path, section_order` | **a curated collection**: the right primitive for "what's on the website" |
| `pip_product_guide_items` | 2 | `guide_id, product_id, section_name, sort_order, override_description` | section + order per product |
| `pip_image_url_queue` | 865 | `product_id, url, status, storage_path` | poller that fetches external images into the CDN |

Mirror tables `agility_items` (571k), `agility_item_branch` (1.38M), `agility_item_supplier` are also here, so PIP can answer "is this still stocked at branch X" without touching AgilitySQL.

**What's missing:** nothing structural. There is no `publish_to_web` flag, but `pip_product_guides` already models "a named, sectioned, ordered list of products with an optional cover image and per-item description override": which is a website collection.

---

## 3. Architecture (as built, 2026-11-07)

PIP's UI now lives in LiveEdge (`amcgrean/liveedge`, `/sales/products` and `/admin/catalog`), and LiveEdge is the only writer of the `pip_*` tables. So the website does not read Supabase at all: it pulls one token-protected route from LiveEdge and commits what it gets.

```
 LiveEdge (app.beisser.cloud)                                   new-beisser (this repo)
 ───────────────────────────                                    ───────────────────────
 Catalog managers curate guides named                           scripts/sync-pip.mjs
 web:<category>[/<part>] and publish them  ──►  GET /api/pip/web-export  ──►  (GitHub Action, nightly
 Vendors get a web_category                     Bearer WEBSITE_EXPORT_TOKEN      + workflow_dispatch)
                                                                                      │
                                                                                      ▼
                                                                          app/data/pip/catalog.json
                                                                          app/data/pip/literature.json
                                                                          (committed; PR when changed)
                                                                                      │
                                                                                      ▼
                                                                          <ProductCatalog> on /products/<category>
                                                                          /resources/literature
```

LiveEdge side: PR `amcgrean/liveedge#1754` (route `app/api/pip/web-export/route.ts`, logic `src/lib/catalog/web-export.ts`, rules and tests in `web-export-shared.ts`, migration `db/migrations/0194_pip_vendors_web_fields.sql`, applied to prod 2026-11-07).

### 3.1 Contract: `web:*` guides and `pip_vendors.web_category`

- A product is on the website **iff** it is an item of a **published** guide named `web:<category>` or `web:<category>/<part>`, where `<category>` is this site's product-category slug (`millwork`, `doors`, `decking-railing`, ...). `<part>` splits a category across several guides, because one guide holds at most 150 items; parts appear on the site in the order the guides were created. The guides list in LiveEdge shows a Website chip on these.
  - Seeded 2026-11-07 as drafts from the 25BW stock packet (395 of its 431 items are in PIP): `web:millwork/Base & Casing` (112), `web:millwork/Stops, Jambs & Trim` (123), `web:millwork/Stair Parts` (107), `web:millwork/Balusters, Panels & Shelving` (53). Nothing shows until they are published.
  - `web:doors`, `web:door-hardware`, `web:decking-railing`, ... as sales is ready (Phase 2).
- `section_name` = the heading on the website; `sort_order` = position; `override_description` = the public wording for that row (otherwise the catalog display name); the guide's `description` = the note under the catalog heading (today: "Stocked at our Johnston (Birchwood) millwork shop. Other branches order in...").
- **Item numbers never leave PIP.** The export carries the pip id (a stable key), title, pip `profile` (the trim type), species, finish, size, brand, branch scope and a public image URL on `images.beisser.cloud`; never `internal_sku`. This is Aaron's packet rule (2026-10-09) applied to the public site.
- **Literature:** a vendor's public documents reach `/resources/literature` when `pip_vendors.web_category` is set (that value is the page section). `web_brand` is the public name (Novo Building Products shows as L.J. Smith); a vendor with no `web_brand` is a multi-brand distributor whose titles start with the brand (Lockgeniuses: "Kwikset - ...", "Dexter - ...", "Schlage - ..."). 13 vendors are tagged today; a catalog manager can tag more from the vendors tab.

### 3.2 Sync: committed JSON snapshot, not runtime fetch

`scripts/sync-pip.mjs` (plain Node 20, no dependencies):

1. `GET $LIVEEDGE_URL/api/pip/web-export` with `Authorization: Bearer $WEBSITE_EXPORT_TOKEN`.
2. Refuses to write when the export is empty or malformed (a category with no guides, a published guide with no items, a vendor with no documents), so a broken publish never reaches the site. `--check-images` also HEADs every product image.
3. Writes `app/data/pip/catalog.json` (category → guides → sections → items) and `app/data/pip/literature.json` (vendors with brand, category and documents), sorted and stable so a night with no PIP changes is a no-op.
4. Downloads nothing: images stay on `images.beisser.cloud` (`next.config.js` allows that host).

`.github/workflows/sync-pip.yml` runs it nightly at 04:17 Central and on `workflow_dispatch`, and opens or updates a `chore/pip-sync` PR when the JSON changed (`peter-evans/create-pull-request`). Merging deploys. Secret: `WEBSITE_EXPORT_TOKEN` in this repo's Actions secrets, same value as LiveEdge's Vercel env.

Why a snapshot and not ISR / runtime Supabase calls:
- The site stays a static export: no Supabase key in the Netlify runtime, no RLS surface on a public site, nothing to rate-limit.
- Builds stay hermetic. This repo's Claude Code sessions have **no outbound network at build time**; a runtime fetch would break every local `npm run build`.
- The diff in the PR is the audit trail of what sales changed.
- Latency is "next morning", which matches how often stock lists change.

### 3.3 Website consumers

| Surface | Reads | Notes |
|---|---|---|
| `app/products/[slug]/page.tsx` renders `<ProductCatalog category={slug}>` (`app/ui/ProductCatalog.tsx`) between the MDX prose and the related links | `app/data/pip/catalog.json` | Renders nothing for a category with no published guide. Each part is a collapsible card (first open); sections inside; cards show photo, title, species, finish, size, brand. No prices, no item numbers, no stock counts. |
| `app/resources/literature/page.tsx` | `app/data/pip/literature.json` + `app/data/literature-requests.json` | The requests file lists "ask your branch" rows for brands PIP has no public document for yet; delete a brand there once PIP carries it. |
| Category heroes (`content/categories/*.mdx` `heroImage`) | hand-picked in Phase 0 | A `web:hero` guide could drive these later; not built. |
| Brand pages | not yet | Phase 2: `pip_vendor_product_mappings` for "Products we carry", a vendor logo/hero field for the page header. |

---

## 4. Phases

### Phase 0: ship the assets we already have (DONE, PR #77)

- [x] `next.config.js`: `images.remotePatterns` for `images.beisser.cloud`.
- [x] 8 of 10 category heroes swapped to Beisser product photos (`content/categories/*.mdx` `heroImage` only); Windows and EWP kept, PIP has no photos for them. Aaron replaced the stair-parts one with a showroom photo.
- [x] `/resources/literature` rebuilt from PIP's vendor documents (then superseded by the synced file in Phase 1).
- [x] Brand logos: all 78 already resolved on disk (the "7 of 78" count was wrong); nothing to copy.
- [x] Content drift flagged to sales in the PR (millwork species / profile types / Metrie vs Ferche + L.J. Smith). Not edited.

### Phase 1: PIP becomes the source of truth (DONE 2026-11-07, pending two owner steps)

- [x] **LiveEdge** (`amcgrean/liveedge#1754`): `GET /api/pip/web-export`, `verifyWebsiteExportToken`, migration `0194` (`pip_vendors.web_category`, `web_brand`; applied to prod), Website chip on `web:` guides, tests, changelog, CLAUDE.md. The guides editor LiveEdge already has (Phase 2 of the fold-in plan) is the "Website screen": name a guide `web:...`, add products, set sections, publish.
- [x] **PIP data:** four draft `web:millwork/...` guides seeded (395 items) with the packet's sections and order; 13 vendors tagged with a `web_category`.
- [x] **this repo:** `scripts/sync-pip.mjs`, `.github/workflows/sync-pip.yml`, `app/data/pip/{catalog,literature}.json`, `app/ui/ProductCatalog.tsx` on category pages, literature page on the synced file plus `app/data/literature-requests.json`.
- [ ] **Aaron:** set `WEBSITE_EXPORT_TOKEN` in LiveEdge's Vercel env and as a secret in this repo's GitHub Actions; review the four `web:millwork/...` guides in LiveEdge and publish them. Until then the committed `catalog.json` is the seed snapshot taken from the drafts; the first nightly sync after publishing replaces it (and would remove it if they stay drafts).
- [x] Validation: `npm run build` offline passes (JSON is committed); `rg internal_sku app components` returns nothing.

### Phase 2: the rest of the catalog (sales-paced)

- [ ] `web:doors-interior` / `web:doors-exterior` / `web:door-hardware` from the stock-doors and stock-hardware packets (images are local-only today → push through `pip_image_url_queue` or upload in PIP first).
- [ ] `web:decking` from the Wolf / Trex / TimberTech items already in PIP (`Decking-Composite` 1,804 rows, almost all non-stock → curate).
- [ ] Brand pages read "Products we carry" from `pip_vendor_product_mappings` instead of hand-typed `bullets:` in `content/brands/*.md`.
- [ ] Multi-branch framing: `branch_scope` on the view lets a card say "Stocked at Johnston showroom" vs "All branches". Until then every catalog page carries a note that stock lists reflect the Birchwood / Johnston millwork shop and other branches order in.

---

## 5. Rules carried over from the Agility work

- **No item numbers on public pages.** Show the manufacturer model (`profile`), species, size, brand. (Aaron, packet review 2026-10-09.)
- **Borrowed pictures only where there is none.** Don't let a sibling-species image replace a real one; `pip_product_image_flags` is where sales marks a wrong picture.
- **L.J. Smith profile drawings** attach to every item of that profile (`pip-vendor-docs` rule): the catalog card can show photo + drawing like the packet does.
- **Never classify by bare code prefix**; use `is_stock_item` + `status` + guide membership, not `internal_sku` patterns.
- **AgilitySQL is read-only** and not in this path at all; the website reads PIP, PIP reads the mirror.

---

## 6. Known gaps the sync will surface (from `PIP_UPDATE_REPORT.md`, 2026-10-09)

- 66 stock items have no picture anywhere (Ferche crowns F6182/F6300/F646, F2854 shoe, F330 jambs, F400E, #231 handrail, shiplap, S4S boards, LJ-8872, Endura multipoint, Safe Lock Athens/Layton). These render as text-only cards or are left out of the guide until a photo lands.
- 33 Novo flyer crops exist only on Aaron's PC: need an upload path into PIP (`pip_product_attachments` or the image queue).
- 14 of 264 vendor documents are local files, not URLs: excluded from the literature page until hosted.
- 17 millwork profile groups still have no manufacturer model number (`missing_model_numbers.pdf`, handed out 2026-10-15): cards fall back to the display name.
- Millwork and door data is 25BW-scoped; other branches are not yet in PIP guides.

---

## 7. Open decisions (need Aaron)

| # | Decision | Recommendation |
|---|---|---|
| 1 | Hot-link `images.beisser.cloud` or copy images into `public/`? | **Hot-link.** It is the CDN PIP already writes to, it's public, and copying means a second place to keep in sync. Add `remotePatterns` and move on. Revisit only if that host is ever locked down. |
| 2 | Millwork catalog as a browsable page for launch, or Phase 0 only (heroes + literature + logos) and the catalog after? | **Phase 0 for launch, Phase 1 immediately after.** Phase 0 is a day and removes every stock photo and placeholder; the catalog needs the PIP UI to be maintainable and shouldn't block the DNS flip. |
| 3 | Who owns the `web:*` guides day to day? | Sales (whoever maintains the packet) in PIP; Aaron approves publish. The website team never edits product data. |
| 4 | Where does the PIP "Website" screen live: PIP app or LiveEdge? | PIP (it already owns products/images/guides). LiveEdge links to it. |
| 5 | Should `branch_scope` drive per-branch catalog pages (`/locations/grimes` → "stocked here")? | Later. Expose it in the view now, use it when a second branch's stock is curated. |

---

## 8. Sources

- `amcgrean/agility-ai`: `knowledge/memory/project_item_images_push.md`, `stock-doors-millwork-packet.md`; `workbench/projects/stock-doors-25bw/README.md`; `workbench/projects/pip-vendor-docs/PIP_UPDATE_REPORT.md`, `vendor_documents.csv`; `workbench/projects/stock-millwork-25bw/stock_millwork_25bw.csv`, `millwork_profiles.py`, `ferche_catalog.json`; `workbench/projects/item-images/stock_25bw_images9.18.26.csv`; `workbench/pgdb.py`.
- `agility-api` Supabase project `vyatosniqboeqzadyqmr`: `information_schema` for the `pip_*` tables and row counts above.
- This repo: `app/data/categories.ts`, `app/data/products.ts`, `content/categories/millwork.mdx`, `content/categories/stair-parts.mdx`, `app/resources/literature/page.tsx`, `app/lib/brands.ts`, `docs/launch-checklist.md`, `docs/lbm-redesign-handoff.md`.
