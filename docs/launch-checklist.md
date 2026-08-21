# Beisser Lumber — Launch Checklist

> Live tracking doc for what's still open before the Next.js site can replace the current WordPress + Elementor site. Update this file as items land; don't rely on `HANDOFF_REPORT.md` (March 20 snapshot, some counts stale).
>
> **Verified against repo state as of the most recent commit on `claude/plan-lbm-redesign-adHlP`.**

---

## Legend

- `[ ]` open — blocking launch
- `[~]` open — not blocking (site handles gracefully; ships as polish)
- `[x]` done

Each item names the owner (Aaron / Sales / Dev), the file or system to touch, and how to verify it's done.

---

## 1. Environment variables — HARD BLOCKERS

Owner: **Aaron** (hosting env settings). Source of truth: `ENV_SETUP.md`.

None of these are in the repo (correctly — secrets don't get committed). All must land in the production hosting env before any form on the site works.

- [ ] `RESEND_API_KEY` — get from Resend dashboard. Without it, quote and service-request emails don't send.
- [ ] `RESEND_FROM_EMAIL` — verified sender for outbound.
- [ ] `QUOTE_EMAIL_GRIMES` — inside sales inbox for Grimes.
- [ ] `QUOTE_EMAIL_CORALVILLE` — inside sales inbox for Coralville.
- [ ] `QUOTE_EMAIL_FORT_DODGE` — inside sales inbox for Fort Dodge.
- [ ] `QUOTE_EMAIL_BIRCHWOOD` — inside sales inbox for Birchwood / Johnston.
- [ ] `QUOTE_EMAIL_CC` — central inbox CC'd on every submission.
- [ ] `NEXT_PUBLIC_GA_ID` — GA4 Measurement ID (format `G-XXXXXXXXXX`). Without it, launch day is blind — no traffic, conversion, or referrer data.
- [ ] `NEXT_PUBLIC_SITE_URL` — full production URL (`https://beisserlumber.com`). Needed for absolute URLs in OG tags and sitemap.
- [~] `CONTACT_EMAIL` — general contact form destination (optional).
- [~] `SERVICE_REQUEST_EMAIL` — service request form destination (optional).

**Verify:** submit a test quote from each branch option in the dropdown, confirm the correct branch inbox receives it and `QUOTE_EMAIL_CC` also received. Check GA4 Realtime shows the pageview.

---

## 2. Content the sales team owns

### 2a. FAQ answers — 28 empty across product categories

Owner: **Sales**. Files under `app/data/faqs/`. Empty answers are hidden by `<FAQSection>` and excluded from FAQPage JSON-LD, so the site works — but each empty answer is a missed long-tail SEO query.

- [ ] `decking.ts` — 2 empty
- [ ] `doors.ts` — 1 empty
- [ ] `engineered-wood.ts` — 4 empty
- [ ] `hardwareScrews.ts` — 4 empty
- [ ] `lumber.ts` — 1 empty
- [ ] `millwork.ts` — 3 empty
- [ ] `roofing.ts` — 3 empty
- [ ] `siding.ts` — 1 empty
- [ ] `stairParts.ts` — 4 empty
- [ ] `weatherization.ts` — 3 empty
- [ ] `windows.ts` — 2 empty

**Minimum for launch:** at least 1 answered question per category so every product page shows an FAQ section on day one. Rest can trickle in post-launch.

**Verify:** run `grep -c 'answer: ""' app/data/faqs/*.ts` — target 0 unanswered (or the launch-minimum threshold you're comfortable with).

### 2b. Staff data — all 3 entries are placeholders

Owner: **Sales / Aaron**. File: `app/data/staff.ts`.

- [ ] Replace 3 `PLACEHOLDER` entries with real names, roles, branches, and bios.
- [ ] At least 4 staff cards live on `/team` before launch (per `HANDOFF_REPORT.md` pre-launch checklist).
- [~] Headshot images uploaded to `public/staff/` and referenced from `staff.ts` (bios can ship without photos as a fallback).

**Do NOT invent staff names.** The `/team` page renders whatever is in the data file, placeholders included.

### 2c. Testimonials — all 3 quotes empty

Owner: **Sales**. File: `app/data/testimonials.ts`.

- [ ] At least 1 verified contractor testimonial on the homepage before launch.
- [~] Fill remaining 2 testimonial slots.

`<TestimonialSection>` filters empty quotes, so the block currently doesn't render at all. First real quote unblocks the homepage social-proof section.

### 2d. Brand logos — 7 of 78 brands have PNGs

Owner: **Sales** (delivers files) / **Dev** (drops in + updates MDX frontmatter). Repo has 78 brand markdown files in `content/brands/` and 7 brand PNGs in `public/images/` (`andersen, marvin, masonite, pella, thermatru, timbertech, trex`).

- [ ] `public/images/brands/` directory needs to be created and populated with the remaining ~71 brand PNGs.
- [ ] Update `logo:` frontmatter in each `content/brands/*.md` to point at the delivered PNG (currently falls back to `/images/resources-article.png` per `app/lib/brands.ts:22`, which reads as broken).
- [~] Waves: brand pages for the "wave one" set (`trex, james-hardie, lp-smartside, andersen, weyerhaeuser, gerkin, sierra-pacific` — see `app/brands/[slug]/page.tsx`) are priority.

**Verify:** visit `/brands/andersen`, `/brands/marvin`, `/brands/trex` etc. — logo card should show a real logo, not the placeholder resources image.

### 2e. Showroom gallery photos

Owner: **Sales / Aaron**. Referenced in `content/pages/showroom.mdx` but not delivered.

- [ ] Deliver showroom photography and add to `content/pages/showroom.mdx` gallery block.

---

## 3. Operational tasks Aaron owns

### 3a. Deck visualizer URL

`HANDOFF_REPORT.md` §6. Three placeholders currently point to `/tools/deck-visualizer` (a placeholder page).

- [ ] Confirm final external deck-visualizer URL.
- [ ] Update `app/tools/deck-visualizer/page.tsx`.
- [ ] Update `app/products/[slug]/page.tsx` (line ~38, `internalLinksByCategory`).
- [ ] Update `app/pros/remodelers/page.tsx` (line ~35).

### 3b. Literature PDFs

Owner: **Aaron**. Any confirmed PDFs replace placeholder text in `app/resources/literature/page.tsx`.

- [~] Replace literature-page placeholder text with real PDF links (not blocking launch).

### 3c. WordPress URL audit + redirect confirmation

30+ redirects are already in `next.config.js`. Cannot confirm they're complete without a WP URL inventory.

- [ ] Export a full URL list from the current WordPress site (WP-CLI: `wp post list --post_type=page,post --fields=ID,post_title,post_status,post_name --format=csv`, or crawl with Screaming Frog).
- [ ] For each live WP URL, verify a matching redirect exists in `next.config.js` OR a matching route exists in the new site.
- [ ] 301 spot-check: test 10 critical old URLs in a staging environment — confirm they land on the correct new URL with a 301 status (not 302, not 200 rewrite).

### 3d. Google Search Console

- [ ] Domain verified in GSC.
- [ ] `sitemap.xml` (already auto-generated by `app/sitemap.ts`) submitted.
- [ ] Legacy WP `sitemap.xml` submission removed / superseded.
- [ ] Confirm no crawl errors on the top 20 pages 24-48 hours after cutover.

### 3e. Google Business Profile updates

- [ ] Grimes GBP — new site description + new photos.
- [ ] Coralville GBP — same.
- [ ] Fort Dodge GBP — same.
- [ ] Birchwood / Johnston GBP — same.

### 3f. Schema validation

- [ ] Validate FAQ, BreadcrumbList, HomeAndConstructionBusiness/Organization, LocalBusiness schemas with Google Rich Results Test (https://search.google.com/test/rich-results).

### 3g. PageSpeed

- [ ] Run PageSpeed Insights on the homepage.
- [ ] Confirm LCP green on mobile (< 2.5s). Hero image is the LCP — `priority` prop must stay on the hero `<Image>`.

---

## 4. Production readiness

### 4a. Hosting

- [ ] Production Netlify project created (config already in `netlify.toml`), OR alternative host chosen (Vercel / Cloudflare Pages) and configured.
- [ ] All environment variables from §1 added to production env.
- [ ] Staging / preview environment set to `noindex` (via env var or robots meta).
- [ ] Production explicitly does NOT set noindex.

### 4b. External links / integrations

- [x] AR portal https://pro.beisserlumber.com reachable from utility bar and footer.
- [x] Nuvo Credit App https://www.nuvo.credit/app/beisserlumber reachable.
- [ ] Manually load each external link on staging to confirm it still works and opens in a new tab.

### 4c. Forms

- [ ] Test quote form from each of the 4 branch dropdown options — verify email lands at the right branch inbox.
- [ ] Test service request form — verify routing.
- [ ] Test contact form — verify routing.

---

## 5. Cutover plan (post-checklist)

Not blocking — this is the how-do-we-flip-the-switch decision to make once §1–§4 are green:

- [ ] Decide cutover strategy: (A) full DNS flip on a target date, (B) staging-subdomain soft launch then flip, (C) URL-by-URL edge rewrites via Cloudflare / hosting rewrites while WP stays live for the rest.
- [ ] If option C: draft the rewrite map (which paths hit Next.js, which stay on WP).
- [ ] Communications: notify sales team + branch inside-sales of go-live date and new inbox routing.
- [ ] Backup: full WP export (database + `wp-content/uploads`) taken and stored offsite the day before cutover.

---

## 6. Verified clean (as of March 20 handoff — no re-verification needed unless code changes)

Per `HANDOFF_REPORT.md` §8:

- [x] `robots.txt` — GPTBot, ClaudeBot, PerplexityBot, anthropic-ai all `Allow: /`.
- [x] Broken portal URL (https-pro-beisserlumber) — 0 instances.
- [x] Lorem ipsum — 0 instances.
- [x] Old/wrong product slugs — 0 instances.
- [x] All 10 product category pages live (via `app/products/[slug]/page.tsx`).
- [x] All 5+ brand pages live (via `app/brands/[slug]/page.tsx`).
- [x] All 4 pro audience pages live.
- [x] All 3 doors sub-pages live.
- [x] All 4 real branch addresses in `app/locations/page.tsx`.
- [x] Entity phrase "largest family-owned lumberyard" on homepage / about / layout.
- [x] Social links (Facebook, Instagram, X, LinkedIn) in footer and Organization schema.
- [x] Meta titles — no duplicates or placeholders.
- [x] 30+ redirects in `next.config.js` including `/company/` → `/about`, `/professionals/` → `/pros`, `/literature/` → `/resources/literature`.
- [x] TypeScript clean (`tsc --noEmit`).
- [x] Build clean (`npm run build`).
- [x] `rel="noopener noreferrer"` on external new-tab links.
- [x] FAQ schema filters empty answers before emitting JSON-LD.

Re-run before final launch:
- [ ] `npm run build` clean on the exact commit being deployed.
- [ ] `npx tsc --noEmit` clean on the exact commit being deployed.

---

## Quick status summary

**Hard blockers (site won't work without):** 9 env vars, 4 branch form-routing tests.

**Content blockers (site works but looks empty/broken):** 1+ FAQ answer per category, 1+ testimonial, 4+ real staff cards, ~71 brand logos (or accept placeholder), deck-visualizer URL.

**Operational (needed for a clean cutover):** WP URL audit, redirect spot-check, GSC + sitemap, 4 GBP updates, schema validation, PageSpeed green.

**Not blocking (ships as polish):** literature PDFs, remaining FAQ answers, showroom photos.
