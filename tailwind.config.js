/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'text': ['Poppins', 'sans-serif']
      },
      colors:{
        'rgba': '#BB99DD14',
      }
    },
  },
  plugins: [],
}

