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
        'expbtn': '550px',
        'xmd': '850px',
      },
      fontFamily: {
        'lalezar': ['Lalezar', 'sans-serif']
      },
      backgroundImage: {
        'landingPage': "url('./img/landing_image.png')"
      }
    },
  },
  plugins: [],
}