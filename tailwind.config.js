/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#F8F3EA',
        'bg-secondary': '#F3EBE1',
        'bg-card': '#FCF8F2',
        'mocha': {
          DEFAULT: '#6C4E3A',
          dark: '#523F34',
          light: '#796152',
          muted: '#968070',
        },
        'antique-gold': {
          DEFAULT: '#B79265',
          soft: '#DBC4A2',
          dark: '#99754B',
        },
        ivory: {
          DEFAULT: '#F8F3EA',
          light: '#FCF8F2',
          dark: '#F3EBE1',
        },
        'warm-white': '#FDFAF5',
        champagne: {
          DEFAULT: '#B79265',
          soft: '#DBC4A2',
          light: '#FCF8F2',
          dark: '#99754B',
          border: '#E0D3C1',
        },
        'deep-brown': {
          DEFAULT: '#523F34',
          dark: '#3E2F26',
          light: '#796152',
        },
        'body-text': '#796152',
        sage: {
          DEFAULT: '#9EAA8A',
          light: '#C2CCB3',
          dark: '#758063',
        },
        wedding: {
          gold: '#B79265',
          softgold: '#DBC4A2',
          darkgold: '#99754B',
          cream: '#F8F3EA',
          ivory: '#F8F3EA',
          card: '#FCF8F2',
          secondary: '#F3EBE1',
          warmwhite: '#FDFAF5',
          brown: '#523F34',
          darkbutton: '#6C4E3A',
          text: '#796152',
          muted: '#968070',
          sage: '#9EAA8A',
          border: '#E0D3C1',
          burgundy: '#7A2828',
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
        'wedding-sm': '0 4px 15px -2px rgba(73, 54, 43, 0.06)',
        'wedding': '0 12px 32px -4px rgba(73, 54, 43, 0.09), 0 4px 12px -2px rgba(73, 54, 43, 0.04)',
        'wedding-lg': '0 24px 48px -12px rgba(73, 54, 43, 0.14), 0 8px 24px -4px rgba(73, 54, 43, 0.05)',
        'gold-glow': '0 0 25px rgba(169, 130, 88, 0.3)',
      },
      letterSpacing: {
        'widest-xl': '0.35em',
        'widest-2xl': '0.5em',
      }
    },
  },
  plugins: [],
}