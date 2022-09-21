/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Arpoador: ['Arpoador'],
        KimMochi: ['KimMochi'],
        ViceCitySans: ['ViceCitySans'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
