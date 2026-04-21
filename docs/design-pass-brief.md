# Design Pass Brief — Beisser Lumber Website

> Feed this file to an agent as the prompt for a visual-design pass. It assumes
> the first pass (brand color compliance + hover regressions) has already shipped
> on branch `claude/review-website-design-fMHmx`.

---

## Context

You are doing a **visual design pass** on the Beisser Lumber marketing site
(Next.js App Router + Tailwind). Brand tokens are defined in
`tailwind.config.js` under `theme.extend.colors.brand`:

- `brand.green` (#006834) — primary
- `brand.greenDark` (#00522a) — hover/pressed for primary
- `brand.accent` (#9E8635) — secondary highlights only, used sparingly
- `brand.ink`, `brand.slate`, `brand.paper`, `brand.mist` — neutrals

The canonical brand rules live in `brand/brand_guide.md`. Codex guidance lives
in `codex.md`. **Read both before editing.** Do not introduce new hex values.

Off-brand navy (`#1B4F8A`) and its pale companion (`#D6E4F0`) were scrubbed in
a prior pass — do not reintroduce them or any other ad-hoc hex.

---

## What to fix

### 1. Homepage hierarchy (`app/page.tsx`)

- The `<h1>` is currently buried inside a light "about" callout after the
  carousel. Promote it to the primary visual focal point — either above the
  carousel or styled as the hero headline. The entity-definition text can stay
  as supporting copy.
- The primary CTA row has four equally-weighted buttons
  ("Request a Quote", "View Products", "Estimating services", "Service
  request"). Reduce to **one primary + one secondary** in the hero. Move the
  remaining links into a secondary navigation or feature row.
- Add visual contrast between sections — the current layout is ~8 stacked
  `rounded-xl border bg-white` panels and reads as monotonous. Consider
  alternating backgrounds (e.g. `bg-white` ↔ `bg-brand-mist`) and at least one
  full-bleed image band (use existing `/public/images/` assets).

### 2. Typography

- Brand guide specifies **Gotham** (or a documented substitute). No font is
  currently loaded; the site falls back to the system sans stack.
- Pick a well-matched, license-friendly web substitute (Montserrat, Inter, or
  DM Sans are acceptable candidates — Montserrat is closest to Gotham's
  geometric feel). Load it via `next/font/local` or a self-hosted file — the
  build environment has no network access so `next/font/google` will fail
  (see `app/dashboard/layout.tsx` for precedent).
- Apply it in `app/layout.tsx` via `className` on `<body>` or a CSS variable.
- Document the choice and rationale in `brand/brand_guide.md` under the
  "Typography" section.
- Establish a type scale: h1/h2/h3 sizes, body, small. Use Tailwind's
  `text-{size}` utilities — don't introduce arbitrary pixel sizes.

### 3. Visual rhythm across templates

The homogeneous card grid pattern (`rounded-lg border bg-white shadow-sm`) is
used on the homepage, products index, pros hub, services, and locations. Keep
the pattern but introduce:

- One "hero" section per template with stronger typography and imagery.
- Occasional tinted/contrast sections (`bg-brand-mist` or `bg-brand-green/5`)
  to break the rhythm without adding new colors.
- Consistent spacing scale — the current mix of `space-y-12`, `py-8`,
  `p-4`, `p-5` is ad-hoc. Pick a scale (e.g. section `py-16`, card `p-6`)
  and apply it.

### 4. Header polish (`app/ui/Header.tsx`)

- The utility bar is now `bg-brand-green`. Verify legibility of the white
  links against the green; increase contrast or adjust weight if needed.
- The mobile menu drop-down currently offsets with a hardcoded
  `top-[109px]` — compute from header height or use a ref. This breaks when
  the utility bar wraps.

### 5. Footer (`app/ui/Footer.tsx`)

Review for the same issues — read the file first, then align with the rest of
the pass.

---

## Non-goals

- Do **not** touch content, copy, FAQ answers, schema, SEO metadata, or
  redirects. The content team owns those and they are launch-locked.
- Do **not** add new color tokens. Work with the existing `brand.*` palette.
- Do **not** add animations or motion beyond Tailwind's built-in `transition`
  utilities.
- Do **not** install new dependencies unless the typography step requires a
  font package. Confirm before installing.

---

## Validation

Before reporting complete:

1. `npm run build` passes with zero errors.
2. `npx tsc --noEmit` clean.
3. Grep for off-brand hex — should return only `brand/` reference assets and
   the OG SVG (which is already using brand colors):
   ```
   rg '#[0-9A-Fa-f]{6}' --glob '!brand/**' --glob '!public/og-*.svg' app components
   ```
   Any match that is not a documented neutral (white, black, slate greys) is
   a regression.
4. Visit homepage, products index, a product detail page, a brand detail
   page, a pros page, and the locations page in `npm run dev` and spot-check
   that the new hierarchy reads cleanly on mobile + desktop.

---

## Deliverables

- All changes committed on branch `claude/review-website-design-fMHmx`
  (or a child branch off it).
- A short PR description summarizing: typography choice + why, hierarchy
  decisions on the homepage, and any new shared components introduced.
- `brand/brand_guide.md` updated with the typography substitute decision.
