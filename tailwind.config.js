/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ColorPrincipal: "#015ae2",
      },
      fontFamily: {
        PerformanceMark: ["permanentMarker", "sans-serif"],
        pragmatica: [ "pragmatica", "sans-serif"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "10rem",
        "12xl": "11rem",
        "13xl": ["12rem", { lineHeight: ".8" }],
        "14xl": "13rem",
        "15xl": "14rem",
        "16xl": "15rem",
      },
      screens: {
        "mac": { min: '1440px', max: '1799px' }
      }
    },
  },
  plugins: [],
};
