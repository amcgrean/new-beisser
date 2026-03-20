# Beisser Lumber — Handoff Report
Generated: 2026-03-20

---

## 1. FAQ Answers Still Needed (sales team fills in — empty strings only)

Total empty FAQ answers across all product categories: **57**

| File | Questions awaiting answers |
|------|--------------------------|
| decking.ts | 7 |
| doors.ts | 5 |
| engineered-wood.ts | 5 |
| hardwareScrews.ts | 4 |
| lumber.ts | 5 |
| millwork.ts | 5 |
| roofing.ts | 6 |
| siding.ts | 5 |
| stairParts.ts | 5 |
| weatherization.ts | 5 |
| windows.ts | 5 |

All answers are `""` — sales team populates these in `app/data/faqs/`. No placeholder text was written.

---

## 2. Staff Data Still Needed

`app/data/staff.ts` has **3 placeholder entries**. Sales team or Aaron provides:
- Staff names
- Titles / roles
- Headshots (image paths)
- Bios (optional)

Do not add real names to source code — update via the data file once verified.

---

## 3. Testimonials Still Needed

`app/data/testimonials.ts` has **3 empty fields**. Sales team provides verified contractor testimonials. Do not invent quotes.

---

## 4. Environment Variables Needed Before Launch

See `ENV_SETUP.md` for the full list. Key variables:

- `QUOTE_EMAIL_GRIMES` — branch email for Grimes quote routing
- `QUOTE_EMAIL_CORALVILLE` — branch email for Coralville
- `QUOTE_EMAIL_FORTDODGE` — branch email for Fort Dodge
- `QUOTE_EMAIL_JOHNSTON` — branch email for Johnston showroom
- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 Measurement ID
- `RESEND_API_KEY` — transactional email API key

None of these belong in source code. Add to `.env.local` for local dev and to your hosting provider environment settings for production.

---

## 5. Brand Logo Files Still Needed

All brand pages currently fall back to `/images/resources-article.png` as a logo placeholder (`app/lib/brands.ts` line 22). Sales team delivers final logo PNG files; upload to `/public/images/brands/` and update the `logo` field in each brand's MDX frontmatter under `content/brands/`.

---

## 6. Deck Visualizer URL

The deck visualizer link throughout the site points to `/tools/deck-visualizer` (a placeholder page). Confirm the final external visualizer URL with Aaron and update:
- `app/tools/deck-visualizer/page.tsx`
- `app/products/[slug]/page.tsx` (line ~38 in internalLinksByCategory)
- `app/pros/remodelers/page.tsx` (line ~35)

---

## 7. Literature Page PDF Links

Any PDF links confirmed with Aaron should replace placeholder text in `app/resources/literature/page.tsx`.

---

## 8. Technical Validation Results

| Check | Result |
|-------|--------|
| robots.txt AI crawlers | PASS — GPTBot, ClaudeBot, PerplexityBot, anthropic-ai all Allow: / |
| Broken portal URL (https-pro-beisserlumber) | PASS — 0 instances |
| Lorem ipsum | PASS — 0 instances |
| Old/wrong product slugs | PASS — 0 instances |
| Product pages (10) | PASS — all via /products/[slug]/page.tsx dynamic route |
| Brand pages (5+) | PASS — all via /brands/[slug]/page.tsx dynamic route |
| Audience pages (4) | PASS — commercial-multifamily, residential-builders, remodelers, trades-specialty |
| Doors sub-pages (3) | PASS — interior-doors, exterior-doors, door-hardware |
| Location addresses | PASS — all 4 real addresses in app/locations/page.tsx |
| Entity phrase coverage | PASS — "largest family-owned lumberyard" on homepage, about, layout |
| Social links | PASS — Facebook, Instagram, Twitter/X, LinkedIn in footer and schema |
| Meta titles | PASS — no duplicates or placeholders found |
| Redirect map | PASS — 30+ redirects including /company/ -> /about, /professionals/ -> /pros, /literature/ -> /resources/literature |
| TypeScript errors | PASS — 0 errors (tsc --noEmit clean) |
| Build | PASS — npm run build completes without errors |
| External links noopener | PASS — fixed in dashboard/page.tsx, dashboard/layout.tsx, for-pros/portal/page.tsx |
| FAQ schema empty answers | PASS — FAQSection visibleFAQs filter prevents empty answers from emitting schema |
| Components Division content | PASS — on /pros/commercial-multifamily and /services/estimating |

**Note on hash-based redirects:** `/professionals/#remodelers` and `/professionals/#commercial` cannot be handled as server-side redirects (the fragment is client-side only, never sent to the server). The base path `/professionals/` -> `/pros` covers the critical old-URL redirect. Path-based variants `/professionals/remodelers` and `/professionals/commercial` were added as additional redirects.

---

## 9. Pre-Launch Checklist — Aaron Completes

```
[ ] Branch email addresses added to hosting environment variables
[ ] GA4 Measurement ID added (NEXT_PUBLIC_GA_ID)
[ ] Resend API key added (RESEND_API_KEY)
[ ] Test quote form from each branch option — verify email routing works
[ ] Verify AR portal https://pro.beisserlumber.com loads correctly
[ ] Verify Credit App https://www.nuvo.credit/app/beisserlumber loads correctly
[ ] Google Search Console: domain verified + sitemap.xml submitted
[ ] Deck visualizer URL confirmed — update 3 placeholder locations (see section 6)
[ ] noindex removed from production environment variables
[ ] Staging/preview URL confirmed as noindexed
[ ] 301 redirects spot-checked — test 10 critical old URLs in browser
[ ] PageSpeed Insights run — LCP green on mobile
[ ] Schema validated with Google Rich Results Test (FAQ, BreadcrumbList, Organization)
[ ] All 10 product FAQ files have at least 1 answer filled in by sales team
[ ] At least 1 testimonial live on homepage
[ ] At least 4 staff cards with real names on /team page
[ ] All 4 Google Business Profiles updated with new site description + photo
[ ] Brand logo PNG files delivered and uploaded (see section 5)
[ ] Showroom gallery photos delivered and added to content/pages/showroom.mdx
```

---

## 10. What Was Completed in This Session (Prompt 5)

**Part 1 — Product Page Content:**

- **Millwork** (`content/categories/millwork.mdx`): Full intro rewritten; What We Carry section with species (Pine, Oak, Maple, Poplar, MDF), finishes (Unfinished, Primed, Finger-Jointed Primed, Clay-Coated), profile types (Base, Casing, Crown, Chair Rail, Rosettes), availability note; Metrie brand description added as leading millwork trim supplier; historical profile matching callout added verbatim per brief
- **Stair Parts** (`content/categories/stair-parts.mdx`): Full intro rewritten; What We Carry section with railings, balusters (traditional wood, vertical baluster systems, horizontal tubing for contemporary), treads, posts and newels; historical and modern styles noted; new construction and remodel applications covered
- **Hardware & Screws** (`content/categories/hardware-screws.mdx`): Full intro per brief; Simpson Strong-Tie brand section with joist hangers, post bases, hurricane ties, ledger connectors, structural screws; Schlage door hardware cross-reference with link to /products/doors

**FAQ Questions Updated:**
- `millwork.ts` — 5 new questions per live site brief (species, historical matching, stock vs. special order, MDF trim, lead time)
- `stairParts.ts` — 5 new questions per brief (styles, horizontal tube balusters, historical remodel, baluster vs. newel, design assistance)
- `hardwareScrews.ts` — 4 new questions per brief (Simpson Strong-Tie, fastener types, interior/exterior, deck ledger)

**Part 2 — Services Verification:**
- Design, Estimating, Installation pages verified — all have real content, no stubs
- `app/services/estimating/page.tsx` — Components Division / wall panel section added (15+ years experience, climate-controlled, turnkey, commercial and residential)

**Part 3 — Technical Fixes:**
- `public/robots.txt` — `anthropic-ai` user agent added (4 AI crawlers now explicitly allowed)
- `next.config.js` — Added `/professionals`, `/professionals/remodelers`, `/professionals/commercial` path-based redirects
- `app/dashboard/page.tsx` — `rel="noopener noreferrer"` added to CMS external link
- `app/dashboard/layout.tsx` — `rel="noopener noreferrer"` added to /admin/ new-tab link; removed `next/font/google` (network restriction in build environment)
- `app/for-pros/portal/page.tsx` — Standardized to `rel="noopener noreferrer"`

**Build:** Clean — `npm run build` passes with 0 errors.

---

*Share this file with Aaron before launch. All content requiring team input is intentionally left blank — do not fill FAQ answers, staff data, or testimonials with AI-generated text.*
