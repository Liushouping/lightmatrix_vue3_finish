/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'se': '376px',
      'xs': '415px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1680px',
    },
    extend: {
      fontFamily: {
          sans: ['ViceCitySans'],
      }
    },
  },
  plugins: [

  ],
}
