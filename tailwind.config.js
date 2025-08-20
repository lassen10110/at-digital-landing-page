/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], 
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        brand: {
          primary: "#4F46E5",
          secondary: "#F28D35",
          ana1: "#6A44F2",
          ana2: "#1CBDDD",
          triadic: "#52378C",
          darkc1: "#78BF91",
          darkc2: "#4DCA79",
          textD: "#2F2F2F",
          textL: "#545A75",
          textS: "#9C9991",
          accent1: "#E2F2FE",
          accent2: "#FFF8E0",
          error: "#FF0335",
          success: "#5EB30B"
        },
      },
    },
    screens: {
      sm: "375px",   // mobile
      md: "768px",   // tablet
      xl: "1200px",  // small desktop
      "2xl": "1440px" // large desktop
    },
  },
  plugins: [],
};
