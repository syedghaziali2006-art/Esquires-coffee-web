/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Cacao Truffle & Espresso Palette (Bakery & Coffee sanctuary)
        cacao: {
          950: '#120A07',
          900: '#1A0F0B',
          800: '#281711',
          700: '#3D241B',
          600: '#543225',
          DEFAULT: '#1A0F0B',
        },
        // Backwards-compatible aliases for existing plum classes to inherit the rich cacao truffle warmth
        plum: {
          950: '#120A07',
          DEFAULT: '#1A0F0B',
          900: '#1A0F0B',
          800: '#281711',
          700: '#3D241B',
          600: '#543225',
        },
        espresso: {
          DEFAULT: '#140E0C',
          950: '#0C0806',
          900: '#140E0C',
          800: '#1F1613',
          700: '#30231E',
        },
        // Warm Honey Caramel, Brioche Gold & Sweet Amber
        amber: {
          DEFAULT: '#E59539',
          glow: '#F5A844',
          deep: '#C2781E',
          btn: '#D77D18',
          rose: '#E26A7A', // Sweet macaron / raspberry glaze accent
        },
        // Tangerine / Caramel alias for buttons & badges
        tangerine: {
          DEFAULT: '#E59539',
          hover: '#F5A844',
          active: '#C2781E',
          glow: 'rgba(229, 149, 57, 0.45)',
          muted: 'rgba(229, 149, 57, 0.15)',
          deep: '#C2781E',
          btn: '#D77D18',
        },
        // Ultra-soft Vanilla Cream & Porcelain
        porcelain: {
          DEFAULT: '#FAF7F2',
          light: '#FFFDF9',
          dark: '#F2E9DE',
          border: '#E8DCCF',
        },
        // Delicate warm vanilla lavender
        lavender: {
          DEFAULT: '#E2D7CC',
          light: '#F4ECE4',
          dark: '#C8BAAB',
          muted: 'rgba(226, 215, 204, 0.18)',
        },
        mocha: {
          DEFAULT: '#6B4C3D',
          light: '#85604E',
          dark: '#4D362B',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'DM Sans', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        editorial: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        'glow-tangerine': '0 0 40px -8px rgba(229, 149, 57, 0.5)',
        'glow-caramel': '0 12px 35px -6px rgba(229, 149, 57, 0.45)',
        'glow-plum': '0 20px 50px -10px rgba(18, 10, 7, 0.75)',
        'glass-btn': 'inset 0 1px 2px rgba(255, 255, 255, 0.55), 0 10px 25px -4px rgba(229, 149, 57, 0.45)',
        'glass-btn-hover': 'inset 0 1px 3px rgba(255, 255, 255, 0.75), 0 16px 35px -4px rgba(229, 149, 57, 0.65)',
        'glass-card': '0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
        'luxury': '0 25px 50px -12px rgba(18, 10, 7, 0.35)',
      },
      letterSpacing: {
        'widest-editorial': '0.22em',
        'loose-editorial': '0.14em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
