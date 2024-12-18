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
      screens: {
        "mac": { min: '1440px', max: '1799px' },
        "ipad": { min: '820px', max: '1180px' }
      }
    },
  },
  plugins: [],
};
