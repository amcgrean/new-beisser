/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Canonical brand tokens (use these going forward)
        brand: {
          green: "#006834", // official Forest Green (PMS 349 C)
          accent: "#9E8635", // official Brown/Gold (PMS 7754 C)

          // Useful neutrals for UI (keep consistent)
          ink: "#111827", // near-black for text
          slate: "#1F2933", // your current beisserGray
          paper: "#FFFFFF",
          mist: "#F8FAFC", // light background
        },

        // Optional: backward-compatible aliases so nothing breaks immediately
        beisserGreen: "#006834",
        beisserGold: "#9E8635",
        beisserGray: "#1F2933",
      },
    },
  },
  plugins: [],
};
