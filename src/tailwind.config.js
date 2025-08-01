/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aloevera: ['"Aloevera Display"', 'sans-serif'],
        akira: ['"Akira Expanded"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};