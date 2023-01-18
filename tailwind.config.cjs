/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelYellow : "#FFFBAC",
        pastelOrange : "#FAAB78",
        pastelGreen : "#D7E9B9",
        dimWhite: "rgba(255,255,255,0.7)",
        dimBlack: "rgba(0,0,0,0.7)",
      },
      fontFamily : {
        roboto:["Roboto", "san-serif"],
        robotoSlab : ["Roboto Slab", "serif"],
      }
    },
  },
  plugins: [],
}