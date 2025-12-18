/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        beisserGreen: "#006C4F",
        beisserGold: "#F5B700",
        beisserGray: "#1F2933"
      }
    }
  },
  plugins: []
};
