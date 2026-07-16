/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          gold: '#9E8130',
          darkgold: '#856c25',
          cream: '#FCFAF2',
          burgundy: '#8B0000',
        }
      },
      fontFamily: {
        wedding: ['Wedding', 'serif'],
        allura: ['Allura', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
