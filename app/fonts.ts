import localFont from "next/font/local";

// Montserrat is loaded locally because the build environment is offline
// (next/font/google would fail at build time). Montserrat is the
// documented Gotham substitute — see brand/brand_guide.md.
export const montserrat = localFont({
  src: [
    { path: "../public/fonts/montserrat-v30-latin-regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/montserrat-v30-latin-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/montserrat-v30-latin-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/montserrat-v30-latin-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-montserrat",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});
