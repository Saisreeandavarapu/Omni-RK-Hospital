/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef2ff',
          100: '#dde6ff',
          200: '#b8c8ff',
          300: '#85a0ff',
          400: '#5b77ff',
          500: '#3451f5',
          600: '#1a30e8',
          700: '#1221c0',
          800: '#121c8a',
          900: '#0e1763',
          950: '#080c38',
        },
        gold: {
          50:  '#fffdf0',
          100: '#fff9d6',
          200: '#fff0a3',
          300: '#ffe066',
          400: '#ffd033',
          500: '#f5bc00',
          600: '#d49900',
          700: '#a87700',
          800: '#7d5a00',
          900: '#523b00',
        },
        medical: {
          50:  '#f0f9ff',
          100: '#daf2ff',
          200: '#ace4ff',
          300: '#6dceff',
          400: '#22b0ff',
          500: '#0090e8',
          600: '#0070c4',
          700: '#005799',
          800: '#003f6e',
          900: '#002847',
          950: '#00162b',
        },
        accent: {
          50: '#fff8f0',
          100: '#ffecd6',
          200: '#ffd4a8',
          300: '#ffb36b',
          400: '#ff8c33',
          500: '#f5690a',
          600: '#d44d00',
          700: '#a33900',
          800: '#782900',
          900: '#4f1b00',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #080c38 0%, #0e1763 40%, #003f6e 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #d49900, #ffe066, #d49900)',
        'card-glass': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245,188,0,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(245,188,0,0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'gold': '0 4px 32px rgba(245,188,0,0.25)',
        'navy': '0 4px 32px rgba(8,12,56,0.4)',
        'medical': '0 4px 32px rgba(0,144,232,0.2)',
        'glass': '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
    },
  },
  plugins: [],
}

