/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '8rem',
        '11xl': '9rem',
        '12xl': '10rem',
        'vw-10': '10vw',
        'vw-15': '15vw',
        'vw-20': '20vw',
      },
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fill, minmax(200px, .5fr))',
      }
    },
  },
  plugins: [],
}

