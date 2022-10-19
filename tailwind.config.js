/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../public/assets/kingher.png')",
        'paralax': "url('../public/assets/paralax.png')",
       
      }
    },
  },
  plugins: [],
}