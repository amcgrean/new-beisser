# Codex Instructions — Beisser Lumber Website

## Brand source of truth
- Brand assets and reference docs live in: /brand
  - Logos: /brand (PDF/PNG)
  - Style guide: /brand/*.pdf
  - Color codes: /brand/*.txt

## Implementation rule
- Do NOT hardcode colors or typography in components.
- Use design tokens defined in:
  - /app/theme/tokens.ts
  - tailwind.config.ts (theme.extend)
- When editing UI (Header, Footer, buttons, cards, nav, menus), use only tokens/classes from Tailwind theme config.

## What to update when implementing branding
1) If a new brand value is needed, add it to /app/theme/tokens.ts.
2) Map tokens into tailwind.config.ts (theme.extend.colors, fontFamily, borderRadius, boxShadow).
3) Use the Tailwind classes that reference those tokens in UI components.

## UI priorities
- Header and nav menus must match the brand style guide.
- Buttons, links, and focus states must be brand-consistent.
- Keep design clean, modern, accessible, and consistent across pages.

## Logo usage
- Use /public/images/logos for site runtime assets.
- Keep master originals in /brand.
- If logo is needed in UI, ensure correct contrast version (light/dark).
