/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefinSans: "'Josefin Sans', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

