/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./layout/*.liquid",
      "./templates/*.liquid",
      "./sections/*.liquid",
      "./snippets/*.liquid",
      "./assets/*.liquid",
      "./templates/customers/*.liquid"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}
