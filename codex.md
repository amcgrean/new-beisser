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
  - tailwind.config.js (theme.extend)
- When editing UI (Header, Footer, buttons, cards, nav, menus), use only tokens/classes from Tailwind theme config.
- Arbitrary Tailwind values like `bg-[#1B4F8A]`, `text-[#1B4F8A]`, `bg-[#D6E4F0]` are BANNED. They were scrubbed from the codebase — do not reintroduce them or any other hex literal in component classes. If you need a color that does not exist, add it to `tailwind.config.js` under `theme.extend.colors.brand` with a name that reflects its role.
- Off-brand blues (`#1B4F8A` navy, `#D6E4F0` pale blue, `#163f6e` dark navy) are NOT brand colors. The brand palette is Forest Green, Brown/Gold, and neutrals only.

## Color tokens
- `brand-green` (#006834) — Primary. Use for primary buttons, active nav, key accents.
- `brand-greenDark` (#00522a) — Hover/pressed state for primary green. Primary buttons MUST hover to `brand-greenDark`, never to `brand-accent` (that was a regression — green should not flip to brown on hover).
- `brand-accent` (#9E8635) — Secondary accent. Use sparingly (footer link hovers, small decorative highlights). Never as a hover state for a primary `brand-green` button.
- `brand-mist`, `brand-slate`, `brand-ink`, `brand-paper` — neutrals for backgrounds/text.

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
