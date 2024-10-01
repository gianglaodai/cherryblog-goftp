/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./web/views/pages/**/*.{html,js}",
    "./web/views/layouts/**/*.{html,js}",
    "./web/views/partials/**/*.{html,js}",
    "./internal/**/*.go",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
