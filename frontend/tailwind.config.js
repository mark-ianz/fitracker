/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '480px',
      },
      fontFamily: {
        'lalezar': ['Lalezar', 'sans-serif']
      }
    },
  },
  plugins: [],
}