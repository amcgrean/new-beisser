# Beisser Lumber — Brand & Logo Guide (Repo Source of Truth)

This file is the implementation-friendly version of the official Beisser Logo Style Guide.
It exists so humans + Codex can apply consistent branding across the website UI.

Source: `brand/Logo Style Guide.pdf`

---

## Codex instructions (IMPORTANT)

When making any UI changes (Header, navigation menus, dropdowns, buttons, links, cards, footers):

1) **Do not hardcode random colors** (no ad-hoc hex values sprinkled in components).
2) Use the brand colors defined below (Primary Green + Brown Accent + Black/White).
3) Prefer Tailwind theme tokens (recommended) or shared constants, so the styling is consistent site-wide.
4) Logos used by the website should live in `/public/...` for runtime usage.
   - `/brand` is for **reference/master assets** and rules.

---

## Logo system

### Primary logo
- The Beisser logo is constructed of two main elements:
  1) the **“B” symbol**
  2) the **company name**
- The company name should **always** be combined with the “B” symbol when using the primary logo.

### Secondary logo (symbol only)
- The “B” symbol **may** be used on its own as a **secondary logo**.

### Alternate logo versions (one-color)
Use when the full-color primary logo is not appropriate:
- **1 Color Green**
- **1 Color Black**
- **Reversed White**

---

## Minimum size & clear space

### Minimum size
- Do **not** use the logo at a size where the **height is less than 0.375 in (3/8")**.

### Clear space
- Maintain clear space around the logo on all sides (“keep this space clear”).
- Do not crowd the logo with other elements (text, borders, photos, patterns).

---

## Incorrect logo usage (do NOT)

- Do **NOT** change the colors in the logo.
- Do **NOT** change the angle of the logo.
- Do **NOT** change proportions or distort the logo.
- Do **NOT** place the logo on a busy background pattern/texture.
- Do **NOT** apply drop shadows or other shading treatments.
- Do **NOT** rearrange the logo elements from the intended layout.

## Off-brand colors (do NOT use)

The following hex values have appeared in the codebase as de-facto "primary"
colors. They are **not brand colors** and must not be reintroduced:

- `#1B4F8A` — navy blue
- `#163f6e` — darker navy (was used as hover for the above)
- `#D6E4F0` — pale blue

Use the Forest Green / Forest Green Dark / Brown-Gold / neutrals palette only.

---

## Brand colors

Primary brand colors reflect the materials and blue-collar mentality:

### Forest Green (Primary)
- RGB: 0 / 104 / 52
- Hex: **#006834**
- Pantone: PMS 349 C
- Tailwind token: `brand-green`

### Forest Green Dark (Primary hover/pressed)
- Hex: **#00522a**
- Tailwind token: `brand-greenDark`
- Usage: hover/pressed state for primary green buttons and links. Do NOT use `brand-accent` (brown) as a hover state for primary green — that reads as a bug, not feedback.

### Brown / Gold (Accent)
- RGB: 158 / 134 / 53
- Hex: **#9E8635**
- Pantone: PMS 7754 C
- Tailwind token: `brand-accent`
- Usage: secondary accents and small decorative highlights only. Sparingly.

> Note: Use Green as the primary UI identity color (header accents, buttons, links).
> Use Brown as a secondary accent (highlights, secondary button, small decorative accents).
> Keep backgrounds clean so the logo and typography remain legible.

---

## Typography

### Logo font
- The logo uses **Gotham**
- Logo variants referenced: **Gotham Black** and **Gotham Medium**
- The full **Gotham family** is acceptable within brand materials:
  - Gotham Book
  - Gotham Regular
  - Gotham Medium
  - Gotham Black

### Website typeface — Gotham substitute

Gotham is not licensed for web use on this property, so the website uses
**Montserrat** (SIL OFL, free for commercial use) as the documented substitute.
Rationale:

- Geometric sans-serif with similar proportions and x-height to Gotham —
  closer visual match than Inter or DM Sans for headline weight and feel.
- Well-supported across browsers, ships via `next/font/local` from
  self-hosted `.woff2` files in `/public/fonts/`. This keeps the build
  hermetic (no network access required) and avoids the `next/font/google`
  path.
- Weights loaded: **400 / 500 / 600 / 700**. Use 700 for hero headlines,
  600 for section heads, 500 for secondary emphasis, 400 for body copy.

Implementation:

- Loader: `app/fonts.ts` (`next/font/local`, exposes `--font-montserrat`).
- Tailwind: `fontFamily.sans` in `tailwind.config.js` resolves to the
  CSS variable, so `font-sans` and the default browser stack both pick up
  Montserrat.
- Applied on `<html>` / `<body>` in `app/layout.tsx`.

### Type scale (website)

Use Tailwind utilities — do not introduce arbitrary pixel sizes.

| Role            | Class                        | Notes                                      |
|-----------------|------------------------------|--------------------------------------------|
| Hero H1         | `text-4xl sm:text-5xl` + `font-bold`       | Used once per page.            |
| Section H2      | `text-2xl sm:text-3xl` + `font-semibold`   | Section heads.                 |
| Sub H3 / card   | `text-lg` or `text-base` + `font-semibold` | Card titles, sub-sections.     |
| Body            | `text-base` or `text-sm` + `text-slate-700`| Paragraphs and card body copy. |
| Eyebrow         | `text-xs font-semibold uppercase tracking-[0.18em] text-brand-green` | Above H1 / section heads. |
| Small / meta    | `text-xs text-slate-500/600` | Timestamps, footnotes.                     |

Headings apply slightly tight letter-spacing (`-0.01em`; `-0.02em` on H1)
via `app/globals.css` to keep Montserrat feeling closer to Gotham's
geometric rhythm at display sizes.

---

## Practical website UI rules (apply to menus, buttons, nav)

### Navigation / Menus
- Keep the header/nav visually clean.
- Use Forest Green (#006834) for primary emphasis (active nav, hover states, key UI accents).
- Ensure sufficient contrast (especially on green backgrounds: use white text).

### Buttons & Links
- Primary button: Forest Green background with white text.
- Secondary accents: Brown (#9E8635) sparingly (e.g., secondary button outline/accent).
- Avoid heavy effects: no drop shadows on logos; keep UI effects subtle.

### Backgrounds
- Avoid busy textures/patterns behind the logo.
- Prefer solid or subtle neutral backgrounds so branding reads clearly.

---

## Where assets live in this repo

- Master/reference assets: `/brand`
- Website runtime assets: `/public` (example `/public/images/logos/...`)

Recommended:
- Put the preferred website logo(s) in `/public/images/logos/`
- Keep originals (PDF, high-res) in `/brand/`
