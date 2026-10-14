/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF7F0',
          light: '#FFFDF9',
          dark: '#F0E9DC',
        },
        'warm-white': '#FFFDF9',
        champagne: {
          DEFAULT: '#C6A66B',
          soft: '#DFCEAA',
          light: '#F5EFE6',
          dark: '#A38448',
          border: '#E8DED0',
        },
        'deep-brown': {
          DEFAULT: '#59463D',
          dark: '#3D2F28',
          light: '#75665D',
        },
        'body-text': '#75665D',
        sage: {
          DEFAULT: '#A7AA93',
          light: '#C5C7B7',
          dark: '#7D8069',
        },
        wedding: {
          gold: '#C6A66B',
          softgold: '#DFCEAA',
          darkgold: '#856c25',
          cream: '#FAF7F0',
          ivory: '#FAF7F0',
          warmwhite: '#FFFDF9',
          brown: '#59463D',
          text: '#75665D',
          sage: '#A7AA93',
          border: '#E8DED0',
          burgundy: '#8B0000',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        wedding: ['"Allura"', 'cursive'],
        allura: ['"Allura"', 'cursive'],
        script: ['"Allura"', 'cursive'],
        sans: ['"Montserrat"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'wedding-sm': '0 4px 15px -2px rgba(89, 70, 61, 0.05)',
        'wedding': '0 12px 32px -4px rgba(89, 70, 61, 0.08), 0 4px 12px -2px rgba(89, 70, 61, 0.03)',
        'wedding-lg': '0 24px 48px -12px rgba(89, 70, 61, 0.12), 0 8px 24px -4px rgba(89, 70, 61, 0.04)',
        'gold-glow': '0 0 25px rgba(198, 166, 107, 0.28)',
      },
      letterSpacing: {
        'widest-xl': '0.35em',
        'widest-2xl': '0.5em',
      }
    },
  },
  plugins: [],
}