/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,css}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}