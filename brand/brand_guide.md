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

---

## Brand colors

Primary brand colors reflect the materials and blue-collar mentality:

### Forest Green (Primary)
- RGB: 0 / 104 / 52
- Hex: **#006834**
- Pantone: PMS 349 C

### Brown / Gold (Accent)
- RGB: 158 / 134 / 53
- Hex: **#9E8635**
- Pantone: PMS 7754 C

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

> Website note: If Gotham isn’t licensed/available for web use, choose the closest web-safe substitute
> (Codex should document the chosen substitute and keep it consistent across the site).

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
