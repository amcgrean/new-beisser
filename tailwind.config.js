/** @type {import('tailwindcss').Config} */

// Colors and radii mirror LiveEdge's design/tokens.json (light theme), so the
// public site and the internal app share one Beisser palette. When a value
// changes there, copy it here. Rules carried over from LiveEdge:
//  - brand-500 is the exact Beisser green, gold-500 the exact Beisser gold.
//  - Green text on white: text-brand-600 or darker. brand-400 is for fills and
//    borders only (about 4.6:1, too light for small text).
//  - Gold text on white: text-accent-ink. gold-500 is about 3.6:1 on white,
//    so use it for rules, dots and large numerals, never small text.
//  - Neutrals come from the semantic ladder (canvas, surface, line, ink), not
//    raw slate or gray utilities.

const brand = {
  50: "#f0faf4",
  100: "#d4f2e2",
  200: "#a3e4c4",
  300: "#5dce9b",
  400: "#1a9248",
  500: "#006834",
  600: "#005229",
  700: "#003d1f",
  800: "#002a15",
  900: "#001a0d",
  950: "#000d07",
};

const gold = {
  50: "#fdf9ec",
  100: "#f9edcc",
  200: "#f1d993",
  300: "#e5bf52",
  400: "#c0a040",
  500: "#9e8635",
  600: "#7d6a2a",
  700: "#5e501f",
  800: "#3e3415",
  900: "#1f1a0a",
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Montserrat is our documented Gotham substitute (brand/brand_guide.md).
        // Loaded via next/font/local in app/fonts.ts, which sets --font-montserrat.
        sans: [
          "var(--font-montserrat)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          ...brand,
          // Older names, kept so existing pages keep working.
          green: brand[500],
          greenDark: brand[600],
          accent: gold[500],
          slate: "#1F2933",
          paper: "#FFFFFF",
          mist: "#F9FAFB",
        },
        gold,

        // Semantic light-theme ladder from LiveEdge tokens.json (tk section).
        canvas: "#ffffff",
        surface: { 1: "#f9fafb", 2: "#f3f4f6", 3: "#e5e7eb" },
        line: { soft: "#eef0f3", DEFAULT: "#e5e7eb", strong: "#d1d5db" },
        ink: {
          1: "#111827", // primary text and headings
          2: "#1f2937", // strong body
          3: "#374151", // body text, data floor
          4: "#556172", // secondary labels
          5: "#667080", // placeholders and faint hints, never content
        },
        "accent-ink": "#655720", // gold text on white (6.6:1)

        // Backward-compatible aliases.
        beisserGreen: brand[500],
        beisserGold: gold[500],
        beisserGray: "#1F2933",
      },
      borderRadius: {
        // LiveEdge radii: --r-sm 4px, --r 6px, --r-lg 10px.
        sm: "4px",
        DEFAULT: "6px",
        md: "6px",
        lg: "10px",
      },
      maxWidth: {
        content: "72rem",
        prose: "65ch",
      },
      boxShadow: {
        card: "0 1px 2px rgb(17 24 39 / 0.04), 0 4px 16px rgb(17 24 39 / 0.06)",
        lift: "0 2px 4px rgb(17 24 39 / 0.06), 0 12px 32px rgb(17 24 39 / 0.10)",
      },
    },
  },
  plugins: [],
};
