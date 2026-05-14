# Beisser Lumber — LBM Redesign Handoff Prompt for Claude Design

> **Audience:** Claude Code / Claude design agent doing a full visual + structural rebuild of the marketing site on branch `claude/plan-lbm-redesign-adHlP`.
>
> **Read this entire document before opening a file.** Then read `brand/brand_guide.md`, `codex.md`, `HANDOFF_REPORT.md`, and the existing `docs/design-pass-brief.md`. Treat this file as the source of truth where it conflicts with the older `design-pass-brief.md` (which described the *first* pass; this is the second, larger pass).
>
> **Scope:** visual and structural rebuild only. Content, copy, FAQ answers, redirects, SEO metadata, schema, and route shapes are launch-locked. You may move where things render and how they look. You may not change what they say.

---

## 0. TL;DR — What you're being asked to do

Build a **clean, professional, pro-builder-first LBM (Lumber & Building Materials) website** for Beisser Lumber Company, replacing the current generic-feeling page templates with a coherent visual system. Stand up:

1. A formal design-system layer in `app/ui/` (Section, Eyebrow, Button, Card, StatRow, QuoteCTA variants, redesigned Breadcrumbs) — all token-driven, no hex literals.
2. A redesigned **Header** (mega-menu for Products & Services, refined utility bar, accessible mobile sheet) and **Footer** (tighter rhythm, icon row, location callouts).
3. A reworked **Homepage** with a real hero, a single primary CTA, photo-forward sections, alternating section bands, and proper H1 hierarchy.
4. Restyled templates for every page family: Products index + detail, Brands index + detail, Services index + detail, Pros hub + 4 audience pages, Locations index + detail, About, Resources / Blog, Quote, Contact, Service Request, Thank-you, 404/Error.
5. Verified accessibility (WCAG AA contrast, keyboard nav, focus rings, reduced motion).
6. Validation: clean `npm run build`, clean `npx tsc --noEmit`, zero off-brand hex hits, hand-spot-check on mobile + desktop.

Ship the work on branch `claude/plan-lbm-redesign-adHlP` (or a child branch off it), with a PR that explains the new component model, homepage hierarchy decisions, and any content gaps you surfaced.

---

## 1. About Beisser Lumber

**Beisser Lumber Company** — Iowa's largest family-owned lumberyard, established 1953 in Fort Dodge, Iowa. Four locations across Central and Eastern Iowa:

- **Grimes (Main Yard)** — 3705 SE Beisser Drive, Grimes, IA 50111 — (515) 986-4422. Main yard, custom door shop, EWP department.
- **Coralville** — 415 Westcor Drive, Coralville, IA 52241 — (319) 545-7120.
- **Fort Dodge** — 1920 Central Avenue, Fort Dodge, IA 50501 — (515) 573-4166. Original 1953 founding location.
- **Birchwood / Johnston (Showroom)** — 7901 Birchwood Court, Johnston, IA 50131 — (515) 986-4422. Windows & doors showroom, design consultation.

Capabilities the site needs to communicate clearly:

- Full LBM line: framing lumber, panels, EWP (Weyerhaeuser partnership since 2017 — LVL/LSL/PSL, trusses, OSB, wall panels), decking & railing, siding, windows, patio doors, interior/exterior doors (with their own Grimes custom door shop producing thousands of doors monthly in a 26,500 sq ft facility), millwork, stair parts, hardware & screws, building envelope.
- Services: design (25+ years in-house), estimating (commercial + residential takeoffs), installation/installed sales, window service & warranty, jobsite delivery & coordination, special orders, Components Division wall-panel manufacturing (climate-controlled).
- Pro infrastructure: AR portal (https://pro.beisserlumber.com), Nuvo credit application (https://www.nuvo.credit/app/beisserlumber), branch-routed quotes, dedicated sales reps.
- Audiences: residential builders, remodelers, commercial/multifamily teams, specialty trades, homeowners (mostly through their contractor).
- 70+ years family-owned. Kim Beisser handed presidency to son-in-law Dave Ling just before the 70th anniversary.

### Target audiences, in priority order

1. **Pro builders & remodelers** — primary revenue. They want capability proof (EWP, panels, door shop, estimating), AR portal access, a fast quote path, and rep contact.
2. **Commercial / multifamily teams & specialty trades** — need confidence the yard scales.
3. **Homeowners** — usually referred by their contractor. Mostly for the Johnston showroom, deck/door visualizers, and brand pages.

### Design feel (reference points)

- **Yes:** Marvin.com, JamesHardie.com pro pages, BuildersFirstSource.com, 84Lumber.com pro portal, ABCSupply.com — material-forward, confident, photo-heavy, fast to scan.
- **No:** Wix small-business templates, agency portfolio sites, food/lifestyle aesthetics, illustrated/playful brands, gradient-blob hero pages, neon, neumorphism.

The voice is **"we've built Iowa for 70 years."** Forest green + brown-gold accent + clean neutrals + good photography is enough. Confidence over cleverness.

---

## 2. Stack, conventions, and hard constraints

### Stack

- **Next.js 14.1.0** App Router, TypeScript, React 18.
- **Tailwind 3.4.3**, configured in `tailwind.config.js` with brand tokens.
- **Fonts:** Montserrat via `next/font/local` (`app/fonts.ts`), exposed as `--font-montserrat`. Files live at `public/fonts/montserrat-v30-latin-{400,500,600,700}.woff2`. Tailwind's `font-sans` maps to it.
- **Content:** MDX in `content/` (categories, brands, services, pages, blog, gallery, community, for-pros) parsed via `gray-matter` + rendered with `react-markdown` + `remark-gfm` + `rehype-raw`.
- **Forms:** Netlify Forms wired into `<QuoteForm />` and `<ServiceRequestForm />`. Don't change the underlying form mechanism.
- **Analytics:** `lib/analytics.ts` `trackEvent()` for events; GA4 loaded via `next/script` in `app/layout.tsx` when `NEXT_PUBLIC_GA_ID` is set.
- **Build environment has no outbound network.** Anything that needs Google Fonts / external CDN fonts / external API at build time will fail. `next/font/google` is banned in this repo — see `app/dashboard/layout.tsx` for prior fix precedent.

### Hard constraints (do not violate)

1. **No new hex literals in components.** Every color must come from a Tailwind token defined in `tailwind.config.js → theme.extend.colors`. Need a new shade? Add it to the config first.
2. **Never reintroduce off-brand colors:** `#1B4F8A` (navy), `#163F6E` (dark navy), `#D6E4F0` (pale blue). These were scrubbed in a prior pass.
3. **No new dependencies** unless absolutely required. Ask before installing.
4. **No motion libraries** (Framer Motion, GSAP, Auto-Animate, etc.). Use Tailwind `transition-*` utilities only. Subtle hover/focus states.
5. **No icon libraries** (lucide, heroicons-react, react-icons). Inline SVGs only, kept simple — one or two strokes, currentColor.
6. **No carousel libraries beyond what `<HomeCarousel />` already does** (which is a vanilla `useState` + `setInterval`).
7. **No CSS-in-JS.** Tailwind classes only. The single `globals.css` keeps `@layer` rules.
8. **Do not edit MDX content, FAQ answers, location data, staff data, or testimonials data.** Those are owned by the sales team and are launch-locked. You may change *how* they render. (Specifically, do not touch: `content/**/*.{md,mdx}`, `app/data/faqs/*.ts`, `app/data/staff.ts`, `app/data/testimonials.ts`, `app/data/locations.ts`, `app/data/categories.ts`, `app/data/products.ts`, `app/data/jobs.ts`.)
9. **Do not edit `next.config.js` redirects, `app/sitemap.ts`, `public/robots.txt`, or any `generateMetadata` / schema injection.** Those are SEO-locked.
10. **No drop shadows on the logo.** No busy textures behind the logo. (Brand guide rule.)
11. **One `<h1>` per page.** No skipped heading levels.
12. **Logo never recolored, rotated, distorted, or shadowed.** Use the existing files in `/public/images/logos/`.

### Brand tokens (already wired in `tailwind.config.js`)

| Tailwind class | Hex | Role |
|---|---|---|
| `bg-brand-green` / `text-brand-green` / `border-brand-green` | `#006834` (PMS 349 C) | Primary identity: filled buttons, active nav, key accents, eyebrows |
| `bg-brand-greenDark` / `hover:bg-brand-greenDark` | `#00522a` | Hover/pressed for primary green only. **Never** flip green → brown on hover. |
| `text-brand-accent` / `bg-brand-accent` | `#9E8635` (PMS 7754 C) | Secondary accent. Use sparingly: footer link hover, eyebrow accent on dark, small decorative highlight ribbons. **Not** a primary CTA color. |
| `text-brand-ink` / `bg-brand-ink` | `#111827` | Near-black for headlines and dark backgrounds (footer, image-overlay sections) |
| `text-brand-slate` | `#1F2933` | Secondary text on light surfaces |
| `bg-brand-mist` | `#F8FAFC` | Tinted section bands |
| `bg-brand-paper` | `#FFFFFF` | Card / panel surfaces |

Legacy aliases also exist (`beisserGreen`, `beisserGold`, `beisserGray`) — do not introduce new uses; prefer the `brand-*` tokens going forward. If you encounter `text-beisserGray`, replace with `text-brand-ink` for headings or `text-slate-700` for body, depending on context.

### Type scale (already documented in `brand/brand_guide.md`)

| Role | Class string | Notes |
|---|---|---|
| Hero H1 | `text-4xl sm:text-5xl font-bold leading-tight text-brand-ink` | Exactly once per page |
| Section H2 | `text-2xl sm:text-3xl font-semibold text-brand-ink` | Section heads |
| Sub H3 / card title | `text-lg font-semibold text-brand-ink` | Card titles, sub-sections |
| Body | `text-base text-slate-700` | Paragraphs |
| Small body | `text-sm text-slate-700` | Card body, sidebar copy |
| Eyebrow | `text-xs font-semibold uppercase tracking-[0.18em] text-brand-green` | Above H1/H2 |
| Meta | `text-xs text-slate-500` | Timestamps, footnotes |

Heading letter-spacing (`-0.01em`; `-0.02em` on H1) is set globally in `app/globals.css` — leave it alone.

### Spacing rhythm (pick a scale and stick to it)

- Sections: `py-16 md:py-24` (vertical breathing room). Mist or ink-band sections may use `py-12 md:py-16` if visually denser.
- Card padding: `p-6` standard, `p-5` compact, `p-8` on hero cards.
- Inter-section gap inside a stacked page: parent `space-y-16 md:space-y-24`.
- Inter-element gap inside a section: `space-y-4` (compact), `space-y-6` (normal), `space-y-8` (loose).
- Grid gaps: `gap-6` standard for card grids, `gap-4` for tight chip rows, `gap-8` for two-column hero splits.

Don't sprinkle ad-hoc `py-3 mt-7 mb-5` values. If a one-off arises, codify it into a component.

---

## 3. Current state inventory

This is what's already in the repo. **Read these files before redesigning anything.**

### Pages (App Router routes under `app/`)

- `/` — `app/page.tsx` (homepage)
- `/about` — `app/about/page.tsx`
- `/contact` — `app/contact/page.tsx`
- `/products` and `/products/[slug]` — index + 10 category dynamic pages. Aliases handled in `app/products/[slug]/page.tsx` `slugAliases` (do not change).
- `/products/doors/{interior-doors,exterior-doors,door-hardware}` — three door sub-pages.
- `/brands` and `/brands/[slug]` — index plus brand detail dynamic page. The index currently emits a `BreadcrumbList` JSON-LD script; preserve it during the restyle.
- `/services` and `/services/[slug]` — index plus detail pages for `design`, `estimating`, `installation`, `delivery`, `jobsite-coordination`, `special-orders`.
- `/pros` and 4 audience pages: `commercial-multifamily`, `residential-builders`, `remodelers`, `trades-specialty` — all using `app/pros/pro-template.tsx`.
- `/locations` and `/locations/[slug]` — index plus 4 branch detail pages.
- `/blog` and `/blog/[slug]`.
- `/resources`, `/resources/[slug]`, `/resources/literature`.
- `/quote`, `/request-quote`, `/service-request`, `/thank-you`.
- `/careers`, `/community`, `/gallery`, `/showroom`, `/team`, `/search`, `/for-pros`, `/dashboard` (CMS), `/admin` (DecapCMS).
- `/privacy`, `/privacy-policy`.
- `/tools/deck-visualizer` (placeholder — Aaron supplies final URL; see `HANDOFF_REPORT.md` §6).
- `/not-found.tsx`, `/error.tsx`, `/sitemap.ts`.

### UI components (`app/ui/`)

- `Header.tsx` — sticky two-row header with green utility bar, logo, 7-item primary nav, mobile sheet with `headerHeight` ref math. **Will be replaced** by mega-menu version below.
- `Footer.tsx` — 4-column dark footer (`bg-brand-ink`). Tighten rhythm; add icon row.
- `HomeCarousel.tsx` — vanilla autoplay carousel with 3 slides, prev/next, dots. Keep mechanism; restyle.
- `Breadcrumbs.tsx` — server component, hits legacy `hover:text-beisserGreen`. Update to `hover:text-brand-green`.
- `MdxContent.tsx` — wraps `react-markdown` rendering.
- `ProductCategoryGrid.tsx` — exists; verify it's still used or remove if dead.

### Shared components (`components/`)

- `FAQSection.tsx` — accessible accordion. Already filters empty answers (so locked content remains intact). Restyle, don't replace.
- `QuoteCTA.tsx` — needs variant prop (`default | inline | band`).
- `QuoteForm.tsx` — Netlify form. Restyle, do not change field names or submission behavior.
- `ServiceRequestForm.tsx` — same rule.
- `RelatedLinks.tsx`, `TestimonialSection.tsx`, `SocialShareButtons.tsx`, `ArticleReadTracker.tsx`, `BrandViewTracker.tsx`, `PhoneLink.tsx`.

### Data sources

- `app/data/categories.ts` — 10 product categories with slugs, names, summaries, descriptions, `heroImage` (currently Unsplash URLs; OK to keep as fallback while waiting for branded photos), bullets. **Do not edit values.**
- `app/data/locations.ts` — 4 branches.
- `app/data/products.ts`, `app/data/staff.ts` (placeholders), `app/data/jobs.ts`, `app/data/testimonials.ts` (placeholders), `app/data/resources.ts`.
- `app/data/faqs/` — 10 product-area FAQ files + `index.ts` + `types.ts`. Sales team owns answers.

### MDX content

- `content/categories/*.mdx` — long-form category content rendered into the product detail page.
- `content/brands/*.md` — 60+ brand markdown files with frontmatter (`name`, `summary`, `description`, `categories`, `website`, `heroImage`, `logo`, `bullets`).
- `content/services/*.mdx` — 7 service descriptions.
- `content/pages/{about,community,showroom}.mdx`, `content/blog/*`, `content/gallery/*`, `content/community/*`, `content/for-pros/*`.

### Images (`public/images/`)

- `hero-yard.png`, `careers-team.png`, `resources-article.png`.
- Brand logos: `brand-andersen.png`, `brand-marvin.png`, `brand-masonite.png`, `brand-pella.png`, `brand-thermatru.png`, `brand-timbertech.png`, `brand-trex.png`.
- Product hero placeholders: `products-decking.png`, `products-lumber.png`, `products-windows.png`.
- `logos/beisser-logo-full.png` — primary logo for header.
- `public/locations/{grimes,coralville,fort-dodge,birchwood}.jpg` — branch photos (verify they exist; placeholders OK).
- `public/uploads/` — DecapCMS uploads.
- `public/og-default.svg` — Open Graph image.

The sales team is still delivering final brand logo PNGs (`HANDOFF_REPORT.md` §5). When a brand logo is missing, fall back to `/images/resources-article.png` (current placeholder behavior in `app/lib/brands.ts:22`).

---

## 4. Design system to build

Create these under `app/ui/` as TypeScript React components. Each gets a JSDoc block with prop types and one usage example. Each is token-driven — **no hex literals.**

### 4.1 `<Section />`

Standardizes vertical rhythm and surface variants. Replaces the ad-hoc `<section className="space-y-6">` scattered across pages.

```tsx
type SectionProps = {
  variant?: "default" | "mist" | "ink" | "image";
  imageSrc?: string; // required when variant === "image"
  imageAlt?: string;
  overlayOpacity?: "light" | "medium" | "heavy"; // for image variant
  padded?: boolean; // default true; false for hero sections that handle their own padding
  className?: string;
  children: React.ReactNode;
};
```

Behavior:

- `default`: `bg-white text-brand-ink py-16 md:py-24`.
- `mist`: `bg-brand-mist text-brand-ink py-16 md:py-24`. Use the existing `.section-band` full-bleed pattern from `globals.css` so the tint extends edge-to-edge.
- `ink`: `bg-brand-ink text-white py-16 md:py-24`. Section-band full-bleed.
- `image`: full-bleed, behind absolute-positioned `<Image fill>`, gradient ink overlay (`from-brand-ink/85 via-brand-ink/60 to-brand-ink/20` for `medium`, adjust by prop), white text. The current homepage "Built for builders" band is the prototype — generalize it.

Always wrap inner content in a centered `<div className="main-container">` (defined in `globals.css`) so content aligns with the rest of the page.

### 4.2 `<Eyebrow />`

```tsx
type EyebrowProps = { children: React.ReactNode; onDark?: boolean; className?: string };
```

Renders `<p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">` by default. When `onDark`, uses `text-white/80` or `text-brand-accent` per visual weight (pick one and stick to it — recommend `text-white/80` for ink-bg, `text-brand-accent` for image-bg with darker overlay).

### 4.3 `<Button />` (and `<ButtonLink />`)

```tsx
type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary" | "ghostDark";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  asChild?: boolean; // when true, applies classes to passed child (useful for next/link)
  // ...native button or <a>/Link props
};
```

Variants:

- `primary` — `bg-brand-green text-white hover:bg-brand-greenDark`, slight `shadow-sm`.
- `secondary` — `border border-brand-green text-brand-green hover:bg-brand-green hover:text-white`.
- `tertiary` — text only with `text-brand-green font-semibold` and right-arrow that translates 0.5 → 1 unit on hover; `hover:underline underline-offset-4`.
- `ghostDark` — used on image/ink backgrounds: `border border-white/70 text-white hover:bg-white/10`.

Sizes:

- `sm` — `px-3 py-2 text-xs`.
- `md` — `px-4 py-2.5 text-sm`.
- `lg` — `px-5 py-3 text-sm`.

Every variant gets `inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2`.

Provide a `<ButtonLink>` that wraps Next.js `<Link>` with the same variants — every CTA in the site should go through this.

### 4.4 `<Card />`

```tsx
type CardProps = {
  variant?: "default" | "image" | "feature";
  href?: string; // when present, renders as <Link> with hover lift
  className?: string;
  children: React.ReactNode;
};
```

Variants:

- `default` — `rounded-lg border border-slate-200 bg-white shadow-sm p-6`.
- `image` — adds image header slot at top (`relative h-44 sm:h-56 overflow-hidden`). Children render in `p-6` below.
- `feature` — larger padding (`p-8`), thicker border (`border-2 border-brand-green/10`), used for primary callouts.

Hover (when `href` present): `transition hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md`. Image children get `transition-transform duration-500 group-hover:scale-105`.

### 4.5 `<StatRow />`

```tsx
type StatItem = { value: string; label: string; sub?: string };
type StatRowProps = { items: StatItem[]; onDark?: boolean };
```

Renders a 2- or 4-up grid. Value uses `text-4xl font-bold text-brand-green` (or `text-white` on dark). Label uses `text-xs font-semibold uppercase tracking-[0.18em] text-slate-500`. Use on Home and About for: "1953" / "4 locations" / "26,500 sq ft door shop" / "70+ years family-owned."

### 4.6 `<QuoteBand />`

Refactored from `components/QuoteCTA.tsx`. A bold conversion band, not a small slate-50 box.

```tsx
type QuoteBandProps = {
  variant?: "ink" | "mist" | "inline";
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};
```

`ink` (default for page-end CTAs) — full-bleed ink section, white text, primary CTA + ghost-dark secondary.
`mist` — full-bleed mist section, brand-ink text, primary CTA + secondary outline.
`inline` — small bordered box (current `QuoteCTA` look), only inside long-form bodies.

### 4.7 Updated `<Breadcrumbs />`

Already exists at `app/ui/Breadcrumbs.tsx`. Fix:

- `hover:text-beisserGreen` → `hover:text-brand-green`.
- Increase visibility: `text-sm text-slate-500` (from `text-xs`).
- Use `<svg>` chevron separators in place of `/`.

### 4.8 `<MegaMenu />` (used inside Header)

New client component. Pure CSS+state — no library. Used for the Products and Services flyouts on desktop. Behavior:

- Triggered by hover or focus on the top-level nav item; closes on `Escape`, on outside click, on focus leaving the panel.
- Panel: `absolute left-1/2 -translate-x-1/2 mt-2 w-[min(1100px,calc(100vw-3rem))] rounded-lg border border-slate-200 bg-white shadow-lg p-6 grid grid-cols-4 gap-4`.
- For Products: each item is a small card with the category thumbnail (use `data.categories[].heroImage`), name, 1-line summary. Plus a "View all products →" tertiary link in the bottom-right.
- For Services: same idea — list `design, estimating, installation, delivery, jobsite-coordination, special-orders` from service slug catalog.
- On mobile, the same data renders inside the mobile sheet as a collapsed accordion group.
- Keyboard: Arrow Down / Right / Left to move between items; Tab cycles out; Enter activates the link.

### 4.9 `<MobileSheet />` (used inside Header)

Replaces the current `top-[headerHeight]` overlay. Behavior:

- Slides in from the right (`transform transition-transform duration-200 translate-x-0` open; `translate-x-full` closed).
- Full height (`h-dvh`), `bg-white`, `shadow-xl`, `w-[88%] max-w-sm`.
- Sticky close button at the top.
- Focus is trapped while open and restored to the trigger on close.
- Backdrop: `fixed inset-0 bg-black/30` with click-to-close.
- Sections inside, in order:
  1. Primary CTAs row: "Request a Quote" (filled) + "Service Request" (outline).
  2. Utility links (Credit App, AR Portal, Pay Invoice, Upload Plans, Contact Your Rep).
  3. Primary nav (Products, Services, Pros, Resources, Locations, About, Contact).
  4. Collapsed accordion: "Products by category" expanding to the 10 category slugs.
  5. Collapsed accordion: "Services" expanding to the 6 service slugs.
  6. Phone numbers for all 4 branches as `tel:` links at the bottom.

### 4.10 Icons

Inline SVGs only. Place a small library under `app/ui/icons/` exporting named components (`ArrowRight`, `ChevronDown`, `MapPin`, `Phone`, `Mail`, `Facebook`, `Instagram`, `Twitter`, `LinkedIn`, `Ruler`, `Calculator`, `Hammer`, `Truck`, `Clipboard`). One-stroke, `currentColor`, sized via `width`/`height` props defaulting to `1em`.

---

## 5. Page-by-page redesign brief

For each page below: **keep the route, all schema injection, all metadata, all data sources, all form mechanics.** Restyle structure using the new design system.

### 5.1 Homepage (`app/page.tsx`)

Current state: about callout → carousel → quick answers → category grid → image band → brand partners → services → locations → testimonials. The H1 is buried inside a non-hero section; there are four equal-weight CTAs in the hero area.

**New top-to-bottom structure:**

1. **Hero `<Section variant="image">`** with `imageSrc="/images/hero-yard.png"`, medium overlay.
   - Eyebrow: "Beisser Lumber Company · Est. 1953" (white-on-dark variant).
   - H1: "Iowa's Largest Family-Owned Lumberyard Since 1953" — `text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white`.
   - Supporting paragraph (existing entity-definition copy, kept verbatim): `mt-6 max-w-2xl text-base text-white/90 lg:text-lg`.
   - Primary CTA: `<ButtonLink variant="primary" size="lg" href="/quote">Request a Quote</ButtonLink>`.
   - Secondary CTA: `<ButtonLink variant="ghostDark" size="lg" href="/products">Browse Products</ButtonLink>`.
   - Tertiary text-link row beneath (small, white/80, no bullets): "Estimating", "Service Request", "Visit a location."
   - Padding: `py-24 md:py-32`.
   - Keep the existing `id="about"` anchor and the `.entity-definition` class on the supporting paragraph — those are SEO-locked.
2. **`<Section variant="mist">` Quick Answers strip.**
   - Eyebrow: "Why Beisser."
   - 5 checklist items from the current "Quick answers" section, kept verbatim. Render as a 5-column row at `lg`, stacked at `sm`. Each item: brand-green check icon + body. Keep `itemProp` attributes.
3. **`<HomeCarousel />`** — keep as-is, restyle the slide overlay to use brand-ink gradient instead of pure black. Round corners reduced to `rounded-lg` (matches the rest of the system). Re-position so it sits under the proof strip, framed.
4. **`<Section>` Product categories.**
   - Section header: H2 "Product categories" + supporting copy ("Lumber, engineered wood, windows, doors, decking, siding, millwork, stair parts, and hardware...") + `<ButtonLink variant="tertiary" href="/products">View all categories</ButtonLink>` aligned right at `sm:`.
   - Grid: 10 `<Card variant="image" href>` items from `getCategoryEntries()`. `lg:grid-cols-3 md:grid-cols-2`. Image height `h-44`; on hover, image scales 1.05 and card lifts.
   - Card body: `h-full flex flex-col`. Title `text-lg font-semibold`. Summary `text-sm text-slate-600 line-clamp-2`. Bottom-aligned tertiary "Explore →".
5. **`<Section variant="image">` "From takeoff to truck."**
   - Reuse the existing "Built for builders" band copy verbatim. Use a yard / delivery truck photo (placeholder = `/images/hero-yard.png` until a delivery photo is supplied).
   - Eyebrow on dark, white H2 "From takeoff to truck: one partner, one crew, one schedule." (kept verbatim).
   - Body paragraph (kept verbatim).
   - CTAs: `<ButtonLink variant="primary" size="lg">Explore services</ButtonLink>` (white-on-dark variant — make the primary use a white pill on this band) and `<ButtonLink variant="ghostDark">For pros</ButtonLink>`.
6. **`<Section>` Services row, 3-up.**
   - Eyebrow + H2 "Services for builders."
   - Three `<Card variant="default" href>` cards: Design (`Ruler` icon), Estimating (`Calculator` icon), Installation (`Hammer` icon). Each card: icon (24×24, `text-brand-green`) + title + 2-line summary + tertiary "Learn more →".
   - Right-aligned tertiary link: "View all services →".
7. **`<Section variant="mist">` Capability proof.**
   - `<StatRow>` 4-up: "1953 — Founded in Fort Dodge", "4 — Iowa locations", "26,500 sq ft — Custom door shop in Grimes", "70+ years — Family-owned & operated."
   - Below the stats, a 2-up split:
     - Left: image (placeholder OK) + H3 "Custom door shop" + 2-sentence summary (pulled from `app/about/page.tsx` "What sets Beisser apart" copy — keep verbatim) + tertiary link to `/products/doors`.
     - Right: image (placeholder OK) + H3 "Components Division wall panels" + summary (verbatim) + tertiary link to `/pros/commercial-multifamily`.
8. **`<Section>` Brand partners.**
   - Eyebrow + H2 "Brands we stock."
   - Logo grid: use the existing 8 brand PNGs in `/public/images/` at consistent height (`h-12` object-contain), wrapped in `<Link href={`/brands/${slug}`}>` tiles. Greyscale by default (`grayscale opacity-70`), full color on hover (`hover:grayscale-0 hover:opacity-100 transition`). When a logo file doesn't exist for a partnerBrand, fall back to a text tile with the brand name in `text-brand-green font-semibold`.
   - Below the grid: `<ButtonLink variant="tertiary" href="/brands">View all brands</ButtonLink>`.
9. **`<Section>` Locations.**
   - H2 "Visit a Beisser location."
   - 4 location cards in `md:grid-cols-2 lg:grid-cols-4`. Each card: branch name (H3) + address + `tel:` phone + weekday hours + Saturday hours + small `<ButtonLink variant="tertiary" href={`/locations/${slug}`}>Branch details →</ButtonLink>` + external map link if `mapUrl` present.
   - Highlight Grimes with a small brand-accent ribbon "Main yard · Custom door shop" at the top-right of the card (small chip, `text-xs`).
10. **`<TestimonialSection />` (existing component).** Restyle so visible quotes (when `app/data/testimonials.ts` is filled) render as: one large featured quote (left) + 2 smaller secondary quotes (right) on `lg:`. Stacked on mobile. Use `text-brand-green` open-quote glyph at large size as a visual flourish.
11. **`<QuoteBand variant="ink" />` final CTA.**
    - Eyebrow on dark + H2 "Ready to price your next project?"
    - Body line.
    - Primary CTA "Request a Quote" + secondary "Talk to your rep" → `/contact`.

Keep the `speakableSchema` JSON-LD `<script>` at the bottom of the page unchanged.

### 5.2 Products index (`app/products/page.tsx`)

- Breadcrumbs at top (already correct: Home → Products).
- Header block:
  - Eyebrow "Products."
  - H1 "Building materials for Iowa builders."
  - Supporting paragraph (verbatim).
  - Primary CTA "Request a Quote" + Secondary "View Services."
- `<Section>` Category grid using `<Card variant="image" href>`, `lg:grid-cols-3 md:grid-cols-2`. Image `h-56`. 2-line description from `cat.description || cat.summary`.
- `<Section variant="mist">` "Shop by audience" — 3-up cards linking to `/pros/residential-builders`, `/pros/remodelers`, `/pros/commercial-multifamily`. Each: short label, 1-line value-prop, "Explore →".
- `<QuoteBand variant="ink" />` close.
- Keep `breadcrumbSchema` JSON-LD intact.

### 5.3 Product category detail (`app/products/[slug]/page.tsx`)

- Breadcrumbs.
- **Two-column hero** at `lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`:
  - Left: eyebrow "Products" + H1 "{Category} at Beisser Lumber" + description + subcategory bullet list (if `category.subcategories`) + primary CTA pre-populated `?category={slug}`.
  - Right: `<Image>` with `category.heroImage` at `h-80 lg:h-96`, `rounded-lg`, `priority`.
- **"What we carry"** — render MDX content from `getCategoryMdx(category.slug)` inside `<Section>`. Wrap MDX output in a `prose prose-slate max-w-none lg:prose-lg` container; override heading colors via prose customizations or a small CSS file.
- **Relevant Brands** section — keep the chip grid, but upgrade chips to small logo tiles when `brand.logo` is non-placeholder. Logo tiles: `border border-slate-200 rounded-md p-3 flex items-center justify-center h-16 bg-white hover:border-brand-green`. Fall back to text chips when no logo.
- **`<RelatedLinks />`** — already wired.
- **`<FAQSection />`** — restyle the accordion. Replace the `+`/`−` text with a smooth-rotating chevron SVG. Open accordion uses `bg-brand-mist` for the answer. Maintain accessibility (`aria-expanded`, `aria-controls`, `role="region"`, focus ring on the button).
- **Sticky quote rail at `lg:` and up** — `lg:sticky lg:top-24 lg:self-start` panel docked to the right column. Contains category name, branch selector hint ("Routes to nearest branch"), big "Request a Quote" CTA with `?category={slug}`, small "Talk to your rep" tertiary link. On mobile, drop the rail and rely on the existing in-page CTAs + a sticky bottom CTA bar (`fixed bottom-0 inset-x-0 bg-white border-t p-3 lg:hidden`) with one "Request a Quote" button.
- Keep both JSON-LD scripts at the bottom unchanged.

### 5.4 Doors sub-pages (`app/products/doors/{interior-doors,exterior-doors,door-hardware}/page.tsx`)

Audit these three pages. Apply the same hero pattern as the category detail (eyebrow + H1 + image right) and use shared cards for the door-style/hardware-line listings. Keep all copy and schema as-is.

### 5.5 Brands index (`app/brands/page.tsx`)

This route already exists. **Restyle in place — keep the existing `metadata`, the `BreadcrumbList` JSON-LD script at the bottom, and the data flow through `getBrandEntries()` + `productCategories` cross-link.** Do not delete or reshape the schema.

- Breadcrumbs (Home → Brands) — already wired.
- Header block: eyebrow "Brands" + H1 (keep existing "Brands We Carry" copy) + supporting paragraph (keep existing copy verbatim).
- Filter strip (no JS dependency — pure anchor-based): tabs that filter to a category (`#all`, `#decking-railing`, `#siding`, `#windows-patio-doors`, `#doors`, `#engineered-wood-products`, etc.) by rendering separate grouped lists. Or render all brands in one alphabetical grid and let the user `Cmd+F`. Pick the simpler version unless there's a strong reason — the brand list is 60+ items. Recommended: alphabetical grid with a sticky letter-jump A–Z header at top.
- Grid: 4-up at `lg:`, 2-up at `md:`. Each tile = brand logo (with text fallback) + brand name + `<Link>` to `/brands/{slug}`. `h-32` tiles, logos `h-12 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100`. Keep the "Common Categories" cross-link sub-block from the current implementation; restyle it inside the tile rather than removing it.
- **Preserve the `breadcrumbSchema` JSON-LD `<script>` injection at the bottom of the page** — it's currently emitted and is schema-locked per §2 hard constraints.

### 5.6 Brand detail (`app/brands/[slug]/page.tsx`)

- Breadcrumbs.
- Hero, two-column:
  - Left: retailer label eyebrow (use the existing `retailerLabel` map — "Official Andersen Retailer" etc.) + H1 "{Brand} at Beisser Lumber" + description + primary CTA "Request a {Brand} Quote" (`?brand={slug}`) + secondary "Find a Location."
  - Right: brand logo card (`bg-white border rounded-lg h-64 flex items-center justify-center p-8`) with `<Image src={brand.logo}>`; falls back to a brand-color initial monogram when logo is placeholder.
- **"Products We Carry"** — list from `brand.bullets`. Keep current bullet rendering.
- **Cross-link cards** — show `categoryLink` and `locationLink` from the existing maps as two large feature cards in a `md:grid-cols-2` ("View related products in {Category}", "Visit our nearest showroom — {Location}").
- **`<RelatedLinks />`** — already wired.
- **`<FAQSection />`** — same restyle as product category.
- Keep `<BrandViewTracker>` and `breadcrumbSchema` JSON-LD intact.

### 5.7 Services index (`app/services/page.tsx`)

- Breadcrumbs (add — currently missing).
- Header block: eyebrow + H1 "Services for builders" + supporting paragraph (verbatim).
- **Primary services row, 3-up** — Design, Estimating, Installation. Use `<Card variant="feature">`. Each card: brand-green icon, title, summary, tertiary "Learn more →".
- **Secondary services row, 3-up** — Delivery, Jobsite Coordination, Special Orders. Use `<Card variant="default">`. Smaller treatment.
- **`<Section variant="mist">`** with the current "Need a quick next step?" copy, redesigned as a 2-column layout (text left, two CTAs right).
- `<QuoteBand variant="ink" />` close.

### 5.8 Service detail (`app/services/[slug]/page.tsx`)

Currently renders raw `<ReactMarkdown>` with no shared chrome. Redesign:

- Breadcrumbs (Home → Services → {Service}).
- Hero: eyebrow "Services" + H1 (from frontmatter) + summary (from frontmatter) + primary "Request a Quote" + secondary "Service Request."
- Image band beneath hero using `frontmatter.image` if present (existing field).
- MDX content inside `prose prose-slate max-w-none lg:prose-lg`.
- "Who this is for" cross-link row at the bottom: links to the 4 `/pros/*` audience pages.
- `<RelatedLinks />` with the 3 most relevant adjacent services or product categories.
- `<QuoteBand variant="mist" />` close.

Optional (only if MDX frontmatter supports it): numbered process timeline. Don't fabricate steps — only render if the MDX file has a `process: ["step 1...", "step 2..."]` array.

### 5.9 Pros hub (`app/pros/page.tsx`)

- Breadcrumbs.
- Header block: eyebrow "For pros" + H1 "Pros at Beisser Lumber" + supporting paragraph (verbatim).
- 2x2 grid of large audience cards using `<Card variant="image" href>` with `h-56` representative jobsite photos (placeholder OK), audience title (H3), 1-line value prop, tertiary "Explore →".
- `<Section variant="mist">` Pro tools strip — 3-up cards/links to: AR Portal (external), Credit Application (external), Upload Plans (`/quote#plans`).
- `<QuoteBand variant="ink" />` close.

### 5.10 Pro audience pages (`app/pros/{4-slugs}/page.tsx` via `pro-template.tsx`)

Redesign the shared `pro-template.tsx`:

- Breadcrumbs.
- Hero: eyebrow "For pros · {Audience}" + H1 (from props) + intro paragraph + primary CTA.
- "How we support {audience}" — 3-up of capability cards (use the `highlights` array, pair each with an icon).
- "Body" paragraphs rendered in a clean prose column inside `<Section variant="mist">`.
- "Relevant product paths" pill row — keep the existing 5 pills, restyle as `<Link>` chips with brand-green hover.
- `extraSection` slot — keep prop and render position.
- "Your Beisser rep" card — placeholder block linking to `/contact`.
- `<RelatedLinks />` keep.
- `<QuoteBand variant="ink" />` close.

### 5.11 Locations index (`app/locations/page.tsx`)

- Breadcrumbs.
- Header: eyebrow + H1 + supporting paragraph (verbatim).
- 2x2 location cards using `<Card variant="image" href>` (image = `location.image`, fall back to a static map illustration). Card body: name, address, phone (`tel:`), weekday + Saturday + Sunday-note hours, optional notes bullet list, two CTAs ("Get directions" external + "Branch details" internal).
- Highlight Grimes with brand-accent ribbon "Main yard · Custom door shop."
- Mist-band "Service area" note: keep the existing all-addresses list ("All branch addresses"); restyle as a 2-column reference block, smaller font.
- `<QuoteBand variant="mist" />` close.

### 5.12 Location detail (`app/locations/[slug]/page.tsx`)

- Breadcrumbs (Home → Locations → {Branch}).
- Hero with branch photo + H1 (branch name) + address + phone + weekday/Saturday/Sunday hours + "Get directions" CTA.
- "What's at this branch" — render `location.notes` as a 3-up of small icon+label cards (door shop, EWP department, etc.).
- "Departments & services here" — cross-link cards to the 3-6 most relevant `/services/*` and `/products/*` slugs (start with: Design, Estimating, Quote — every branch).
- "Meet the team at {branch}" — placeholder cards driven by `app/data/staff.ts` when filled. If empty, render a single "Talk to your rep" CTA instead. **Do not invent staff entries.**
- `<QuoteBand variant="ink" />` close.

### 5.13 About (`app/about/page.tsx`)

- Breadcrumbs.
- Hero: eyebrow "About Beisser" + H1 "Iowa's Largest Family-Owned Lumberyard Since 1953" + entity-definition paragraph (kept verbatim, with `.entity-definition` class).
- "Our story since 1953" — convert the existing `history` array into a **vertical timeline component**. Single column. Each entry: year badge (brand-green pill) on the left + label + 1-line detail. A `border-l-2 border-brand-green/30` runs down the middle, with each year as a node on it.
- `<StatRow />` 4-up: 1953 / 4 Iowa locations / 26,500 sq ft door shop / 70+ years family-owned.
- "What sets Beisser apart" — 2-up using the existing copy on custom door shop and Components Division.
- "Locations across Iowa" — 2x2 mini-cards (existing copy, restyled).
- "Leadership and next chapter" — keep current Kim Beisser → Dave Ling paragraph verbatim. Treat as a single paragraph with a portrait image slot (placeholder OK).
- `<QuoteBand variant="mist" />` close.

Keep both JSON-LD scripts.

### 5.14 Resources / Blog (`app/blog/*`, `app/resources/*`)

- Blog index: featured post (left, big image) + 3-column grid of recent posts. Card: image header, category tag pill (brand-green bg, white text), title, date, 2-line excerpt.
- Blog detail: clean long-form. Hero (cover image full width OR aside layout, prefer aside). Article meta strip (date, est. reading time from `<ArticleReadTracker />`). Body in `prose prose-slate prose-lg max-w-prose mx-auto`. `<SocialShareButtons />` at end. `<RelatedLinks />` if available.
- Resources index, Resources detail, and `/resources/literature` — same prose template + breadcrumb-aware page chrome.

### 5.15 Quote (`app/quote/page.tsx`)

- Breadcrumbs.
- Two-column layout at `lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]`:
  - Left: `<QuoteForm />` restyled — larger inputs (`py-3`), labels above fields (not floating), brand-green focus ring (`focus:ring-2 focus:ring-brand-green focus:border-brand-green`), errors `text-red-700 text-sm mt-1`. Keep all field names and the Netlify form attributes intact.
  - Right: sticky info panel at `lg:`. Sections inside:
    - "What happens next" — 3-step numbered list.
    - "Branch contacts" — small list of 4 branches with `tel:` phones.
    - "Have plans ready?" — points to the file upload field.
- Mobile: form first, info panel collapsed beneath as a single accordion.

### 5.16 Service Request (`app/service-request/page.tsx`)

Same two-column pattern as Quote, with `<ServiceRequestForm />` left and a "What we cover" info panel right.

### 5.17 Contact (`app/contact/page.tsx`)

- Hero with breadcrumbs + eyebrow + H1.
- 2-up: contact info (4 branches, each as a card with address + phone + email if available) | contact form (simple — name, email, branch, message).
- Map placeholder (do not embed third-party iframe by default — render a static SVG illustration or a link to Google Maps with `mapUrl`).

### 5.18 Thank-you (`app/thank-you/page.tsx`)

Friendly confirmation + 3 next-step links + "Return home" CTA. Keep tracking/analytics calls intact.

### 5.19 404 / Error (`app/not-found.tsx`, `app/error.tsx`)

Branded centered layout: logo, large heading "We couldn't find that page" (404) or "Something went wrong" (error.tsx), brief message, primary "Back to home" + secondary "Browse products" + tertiary "Contact us." `min-h-[60vh] flex flex-col items-center justify-center text-center max-w-md mx-auto`.

### 5.20 Smaller pages

- **Careers (`app/careers/page.tsx`)** — page hero + values block + jobs list (from `app/data/jobs.ts`). Each job card: title, location chip, summary, "Apply" CTA (`mailto:` or external link from data).
- **Team (`app/team/page.tsx`)** — placeholder grid of staff cards (driven by `app/data/staff.ts`). If only placeholder data is present, render a fallback "Meet our team at any of our four branches" with location CTAs.
- **Showroom (`app/showroom/page.tsx`)** — photo-heavy. Render `content/pages/showroom.mdx` inside the prose container, surrounded by a gallery grid (CSS columns masonry — no JS).
- **Gallery (`app/gallery/page.tsx`)** — same masonry pattern, project-photo focused.
- **Community (`app/community/page.tsx`)** — render `content/community/*` entries as a clean card grid (event/recognition style).
- **For-Pros hub (`app/for-pros/page.tsx`)** — overlap with `/pros` hub. Treat as a quick-link page to AR Portal, Credit App, Quote, Service Request. Use a 4-tile grid of large action cards.
- **Search (`app/search/page.tsx`)** — clean search input + result list. If functionality isn't wired, keep the placeholder readable.
- **Dashboard (`app/dashboard/`)** and **admin** routes — internal/CMS. Don't touch the visual chrome aggressively; keep them functional.

---

## 6. Header redesign — detailed spec

Replace `app/ui/Header.tsx` with the spec below. Keep the file path; clients import `<Header />` from there.

### Structure (desktop)

Two rows:

**Row 1 — utility bar** (`bg-brand-green text-white text-xs font-semibold`):

- Left cluster: nothing (or a 1-line "Iowa's Largest Family-Owned Lumberyard Since 1953" small tagline at `xl:` only — verify visual balance).
- Right cluster (in order, separated by a small vertical divider `border-l border-white/30 pl-4`): "Credit Application" (external), "AR Portal" (external), "Pay Invoice" (external), "Upload Plans" (`/quote#plans`), "Contact Rep" (`/contact`), phone link to Grimes main yard (`tel:5159864422`).
- Each link: `text-white hover:underline focus:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ring-offset-2 ring-offset-brand-green`.
- Min height `h-9`. Container `main-container flex items-center justify-end gap-5 py-1.5`.

**Row 2 — primary nav** (`bg-white border-b border-slate-200`):

- Left: logo (`<Link href="/" aria-label="Beisser Lumber Company home">` + `<Image src="/images/logos/beisser-logo-full.png">`). Width `w-[210px] md:w-[230px]`, height `h-10` (object-contain).
- Center / right: primary nav `<nav>` with items: Products, Services, Pros, Resources (`/blog`), Locations, About, Contact. Hidden below `md:`.
  - Each item is a `<MegaMenuTrigger>` (for Products & Services) or a plain `<Link>` (for the rest).
  - Each link: `text-sm font-medium text-slate-700 hover:text-brand-green transition-colors py-3` (the vertical padding ensures the hover/focus area extends to the row).
  - Active route gets a `border-b-2 border-brand-green -mb-px` indicator. Determine active via `usePathname()` from `next/navigation`.
- Right cluster:
  - `<ButtonLink variant="secondary" size="md" href="/service-request" className="hidden lg:inline-flex">Service Request</ButtonLink>`
  - `<ButtonLink variant="primary" size="md" href="/quote">Request a Quote</ButtonLink>`
  - Mobile hamburger button below `md:` opens the `<MobileSheet>`.

### Mega-menu content

**Products** (4-column grid of category mini-cards, sourced from `getCategoryEntries()` — match the 10 categories):

```
[Lumber & Panels]     [EWP]              [Doors]              [Decking & Railing]
[Siding]              [Windows & Patio]   [Millwork]           [Hardware & Screws]
[Stair Parts]         [Building Envelope]
                                                          → View all categories
```

Each tile: 56px square thumbnail (use `category.heroImage`) + name (`text-sm font-semibold`) + 1-line summary (`text-xs text-slate-600 line-clamp-2`). `hover:bg-brand-mist rounded-md p-3`.

**Services** (single-column list of 6, with description):

- Design
- Estimating
- Installation
- Delivery
- Jobsite Coordination
- Special Orders
- → View all services

### Mobile

`<MobileSheet>` (spec in §4.9). Trigger button: text "Menu" on the right, animates to "Close" when open. Aria-expanded reflects state.

### Behavior

- Sticky: `sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200`.
- Scroll behavior: optional — at scroll > 100px, hide the utility bar with `transition-all duration-200 -translate-y-full` to recover vertical real estate. Keep it visible on hover near the top. Skip this if it complicates focus management — primary brief is correctness, not slick scroll behavior.

### Analytics

Maintain the existing `trackEvent(link.eventName)` calls for `credit_application_click` and `portal_click`. Add an event for any new prominent external link (e.g. `phone_call_click` on the header `tel:` link).

---

## 7. Footer redesign — detailed spec

Replace `app/ui/Footer.tsx`:

- `bg-brand-ink text-slate-200 mt-24 border-t border-slate-800`.
- Top band — 4 columns at `md:`, single column on mobile, container `main-container py-16`:
  1. **Brand column** — logo (white-on-dark variant — if a reversed-white logo isn't in `/public/images/logos/`, render the wordmark in white text at `text-xl font-bold` as a fallback) + tagline + a small "Visit a yard" list of 4 branches, each: short name (bold), 2-line address, `tel:` phone link.
  2. **Products** column — 10 category links (matches current content, just restyle).
  3. **Services** column — 6 service links + quote/credit-app/AR portal externals.
  4. **Company** column — About, Pros, Careers, Contact, Privacy Policy, Literature.
- Mid band — single row with social icons (use the new SVG icons: Facebook, Instagram, Twitter/X, LinkedIn) at `h-5 w-5` each, `text-slate-400 hover:text-brand-accent transition-colors`. Center-aligned at `md:`, left-aligned on mobile.
- Bottom strip — `border-t border-slate-800 py-4 text-xs text-slate-500`:
  - Left: `© {year} Beisser Lumber Company. All rights reserved.`
  - Center (hidden on mobile): "Iowa's Largest Family-Owned Lumberyard Since 1953"
  - Right: `Privacy Policy · Sitemap (/sitemap.xml)` links.
- Link hover style across the footer: `transition-colors hover:text-brand-accent` (the secondary-accent color is reserved exactly for these footer hover states — that's its primary documented use).

---

## 8. Accessibility checklist

Every page must satisfy these by the time you mark complete:

- **One `<h1>` per page.** No skipped heading levels.
- **WCAG AA contrast.** Verify white-on-`brand-green` body text passes at 600 weight (`bg-brand-green` is borderline against white at 400 weight — bump weight to `font-semibold` for small text on green). `brand-accent` on white fails small-text AA — restrict to large text or icon strokes ≥ 24px.
- **Focus visible** on every interactive element: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2`. On dark surfaces switch to `focus-visible:ring-white/80 ring-offset-brand-ink`.
- **Keyboard nav:** mega-menus open on focus, close on `Escape`, traps focus inside while open. Tab/Shift+Tab cycles through. Arrow keys navigate within the panel.
- **Mobile sheet** traps focus while open, restores focus to the trigger on close, prevents body scroll (`document.body.style.overflow = 'hidden'` — pattern already in place).
- **Reduced motion:** wrap optional transitions in `motion-safe:` variants. The hover lift on cards and the image scale on category cards should both be `motion-safe:transition motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-105`.
- **Image alts:** always meaningful for content images, empty string only for decorative backgrounds. The image-overlay sections (`<Section variant="image">`) get `alt=""` since the text on top is the content.
- **Form labels:** every input has a `<label>` (visible, above the field). Inline errors live in elements referenced by `aria-describedby`.
- **`<button>` vs `<a>`:** anything that navigates is an `<a>` / `<Link>`; anything that toggles state is a `<button>`. The carousel prev/next are `<button>`s — keep them.
- **Phone links:** `tel:` numbers must work on mobile. Use `<PhoneLink>` component or `<a href={`tel:${digits}`}>` consistently.
- **Skip-to-content link** at the top of `app/layout.tsx` body, visually hidden until focused, jumps to `<main id="main">`. Add this — it's currently missing.

---

## 9. Validation gates

Before reporting the task complete, all of the below must pass.

```bash
# 1. Build is clean
npm run build

# 2. TypeScript is clean
npx tsc --noEmit

# 3. No off-brand hex literals anywhere in app/ or components/
rg '#[0-9A-Fa-f]{6}' --glob '!brand/**' --glob '!public/og-*.svg' app components

#    Expected: zero hits except documented neutrals (white/black/slate).
#    Brand tokens live in tailwind.config.js, not in component class strings.

# 4. No reintroduced off-brand navy / pale-blue
rg '1B4F8A|163F6E|D6E4F0' app components

#    Expected: zero hits.

# 5. No banned font loaders
rg 'next/font/google' app

#    Expected: zero hits — the build environment has no network access.

# 6. No new top-level dependencies (compare to git diff package.json)
git diff package.json

#    Expected: zero changes unless you confirmed with the user first.
```

### Manual spot-check in `npm run dev`

Walk these routes on a 375px-wide mobile viewport AND a 1280px+ desktop viewport. For each route, confirm:

- The page has exactly one `<h1>`.
- The hierarchy is obvious within 2 seconds (eyebrow → H1 → body → CTA).
- The primary CTA is visible above the fold.
- The header mega-menu opens on hover (desktop) and the mobile sheet opens on tap (mobile).
- Keyboard tabbing through the page reaches every interactive element in a sensible order; focus rings are visible.
- No horizontal scroll on mobile.

Routes to check:

```
/
/products
/products/decking-railing
/products/doors
/products/doors/interior-doors
/brands
/brands/marvin
/brands/trex
/services
/services/estimating
/pros
/pros/remodelers
/locations
/locations/grimes
/about
/blog
/quote
/contact
/thank-you
/some-fake-page  (to hit not-found.tsx)
```

### Lighthouse spot-check

Run Lighthouse on `/` (mobile). Target: LCP green (< 2.5s), CLS < 0.1, no accessibility errors. The hero image is the LCP — keep `priority` on the `<Image>` and set explicit `sizes`.

---

## 10. Deliverables

1. **All changes on branch `claude/plan-lbm-redesign-adHlP`** (or a child branch if scope justifies it).
2. **A `docs/design-system.md`** cataloguing the new shared components in `app/ui/`. For each: a one-paragraph purpose, a TypeScript prop table, and one usage example.
3. **Update `brand/brand_guide.md`** "Practical website UI rules" section to reference the new component model (Section variants, Button variants, MegaMenu, MobileSheet).
4. **PR description** including:
   - A short executive summary (3-5 sentences).
   - "Homepage hierarchy decisions" — what moved where and why.
   - "New shared components" — list with file paths.
   - "Content gaps surfaced" — anywhere the redesign exposed missing copy/photography/data. Flag for the sales team; **do not invent content to fill gaps.**
   - Lighthouse score screenshot (or pasted summary) for `/` mobile.
   - Notes on any place you intentionally deviated from this brief and why.

---

## 11. Non-goals (do not do)

- Do not touch copy in MDX files (`content/**`), FAQ data (`app/data/faqs/*`), staff data, testimonials, location data, or category data.
- Do not touch `next.config.js` redirects, `app/sitemap.ts`, `public/robots.txt`, or any `generateMetadata`/JSON-LD schema injection.
- Do not add new color tokens unless absolutely required (add to `tailwind.config.js` first, then use — never inline a hex).
- Do not install new packages without confirming first.
- Do not introduce motion libraries, carousel libraries (beyond what `<HomeCarousel />` already does), icon libraries, CSS-in-JS, or component libraries (no shadcn, no Headless UI — write the primitives by hand).
- Do not reintroduce `#1B4F8A`, `#163F6E`, `#D6E4F0`, or any ad-hoc hex literal.
- Do not switch fonts or load fonts from Google (build env is offline).
- Do not fabricate testimonials, staff names, FAQ answers, or other content. If a section would render empty, hide the section behind a `length > 0` check (`<TestimonialSection>` and `<FAQSection>` already do this — follow the pattern).
- Do not change the logo (no recoloring, rotation, distortion, drop shadow).
- Do not change form field names or submission attributes on `<QuoteForm>` / `<ServiceRequestForm>` — Netlify Forms relies on stable `name=` attributes.
- Do not change route paths or add new top-level routes other than the new `/brands` index. Verify `next.config.js` redirects still work end-to-end after the rebuild.

---

## 12. If you're unsure

- If a design decision isn't explicit here, default to **the simpler, more conservative LBM-pro-dealer choice.** Reference points: Marvin.com, JamesHardie.com pro pages, BuildersFirstSource.com pro section. Avoid playful, decorative, or trend-chasing patterns.
- If content for a section doesn't exist (no testimonials, no staff data, no specific photography), **hide the section behind a length check** rather than inventing placeholder text. Flag the gap in the PR description.
- If you need a new shared component to keep duplication down, build it in `app/ui/` and document it in `docs/design-system.md`. Don't proliferate one-off divs.
- If you find a real bug while doing the design pass (broken link, typo in a route, missing `priority` on an LCP image, missing alt text), fix it in the same PR and note it in the PR description. Do not fix copy typos in MDX content — flag them.

---

## 13. Appendix — exact data and file paths

### Brand colors (canonical)

| Token | Hex | Pantone | Tailwind class |
|---|---|---|---|
| Forest Green (primary) | `#006834` | PMS 349 C | `brand-green` |
| Forest Green Dark (hover) | `#00522a` | — | `brand-greenDark` |
| Brown / Gold (accent) | `#9E8635` | PMS 7754 C | `brand-accent` |
| Ink | `#111827` | — | `brand-ink` |
| Slate | `#1F2933` | — | `brand-slate` |
| Mist | `#F8FAFC` | — | `brand-mist` |
| Paper | `#FFFFFF` | — | `brand-paper` |

### Logo files

- Master: `brand/beisser_logo_full_color_RGB.pdf`, `brand/beisser_logo_full_color_RGB.png` (do not modify).
- Runtime: `public/images/logos/beisser-logo-full.png`.
- One-color and reversed-white variants do not exist in the repo yet; if the design needs them, render the wordmark in CSS as a stopgap and flag the missing assets in the PR.

### Font files

- `public/fonts/montserrat-v30-latin-regular.woff2` (400)
- `public/fonts/montserrat-v30-latin-500.woff2` (500)
- `public/fonts/montserrat-v30-latin-600.woff2` (600)
- `public/fonts/montserrat-v30-latin-700.woff2` (700)

Loaded via `app/fonts.ts` — do not modify the loader.

### Category slugs (from `app/data/categories.ts`)

```
decking-railing
doors
engineered-wood-products
building-envelope-accessories
lumber-panels
siding
stair-parts
millwork
windows-patio-doors
hardware-screws
```

### Service slugs (from `content/services/`)

```
design (via app/services/design/page.tsx)
estimating
installation
delivery
jobsite-coordination
special-orders
```

### Pro audience slugs

```
commercial-multifamily
residential-builders
remodelers
trades-specialty
```

### Location slugs (from `app/data/locations.ts`)

```
grimes (main yard, custom door shop, EWP department)
coralville
fort-dodge (original 1953 location)
birchwood-johnston (windows & doors showroom)
```

### External URLs to wire correctly

- AR Portal: `https://pro.beisserlumber.com` (open in new tab, `rel="noopener noreferrer"`).
- Credit Application: `https://www.nuvo.credit/app/beisserlumber` (same).
- Social: `facebook.com/beisserlumber`, `instagram.com/beisserlumber`, `twitter.com/beisserlumber`, `linkedin.com/company/beisser-lumber-co.`.
- Deck visualizer at `/tools/deck-visualizer` is a placeholder until Aaron supplies the final URL (`HANDOFF_REPORT.md` §6).

### Key existing files to read before editing

- `app/layout.tsx` — root layout, JSON-LD org schema, GA4 setup.
- `app/globals.css` — `.main-container`, `.section-band`, heading letter-spacing.
- `app/fonts.ts` — Montserrat loader.
- `tailwind.config.js` — brand tokens, fontFamily.
- `app/ui/Header.tsx`, `app/ui/Footer.tsx`, `app/ui/HomeCarousel.tsx`, `app/ui/Breadcrumbs.tsx`, `app/ui/MdxContent.tsx`.
- `components/QuoteForm.tsx`, `components/ServiceRequestForm.tsx`, `components/FAQSection.tsx`, `components/TestimonialSection.tsx`, `components/RelatedLinks.tsx`, `components/QuoteCTA.tsx`.
- `app/lib/content.ts`, `app/lib/brands.ts`, `app/lib/seo.ts`.
- `brand/brand_guide.md`, `codex.md`, `HANDOFF_REPORT.md`, `docs/design-pass-brief.md`.

---

End of brief. When you start, post a one-paragraph plan in chat first (what order you're tackling components, pages, and validation), then begin work. If a question genuinely can't be answered from this document, the codebase, or the brand guide, ask before guessing.
