/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta espacial oscura con dorado MÁS SUTIL
        space: {
          50: '#f5f5dc',    // Crema muy sutil
          100: '#d4af37',   // Dorado suave
          200: '#daa520',   // Dorado clásico
          300: '#bc9a6a',   // Dorado apagado
          400: '#b8860b',   // Dorado oscuro
          500: '#8b7355',   // Dorado muy oscuro
          600: '#999999',   // Gris medio
          700: '#666666',   // Gris oscuro
          800: '#333333',   // Gris muy oscuro
          900: '#1a1a1a',   // Negro suave
          950: '#000000',   // Negro absoluto
        },
        primary: {
          50: '#f5f5dc',
          100: '#d4af37',
          200: '#daa520',
          300: '#bc9a6a',
          400: '#b8860b',
          500: '#8b7355',
          600: '#999999',
          700: '#666666',
          800: '#333333',
          900: '#1a1a1a',
        },
        stellar: {
          bright: '#d4af37',
          glow: '#daa520',
          warm: '#bc9a6a',
          deep: '#b8860b',
          muted: '#8b7355',
          void: '#000000',
          dark: '#1a1a1a',
          gray: '#666666',
        },
        dark: {
          100: '#333333',
          200: '#2d2d2d',
          300: '#1a1a1a',
          400: '#000000',
        }
      },
      fontFamily: {
        'mono': ['Roboto Mono', 'monospace'],
        'display': ['Roboto Mono', 'monospace'],
        'body': ['Roboto Mono', 'monospace'],
      },
      animation: {
        'dark-galaxy-flow': 'dark-galaxy-flow 25s ease infinite',
        'golden-text-subtle': 'golden-text-subtle 5s ease infinite',
        'float-stellar': 'float-stellar 6s ease-in-out infinite',
        'pulse-stellar-subtle': 'pulse-stellar-subtle 4s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'twinkle-subtle': 'twinkle-subtle 6s linear infinite',
        'stellar-sweep': 'stellar-sweep 2s infinite',
      },
      keyframes: {
        'dark-galaxy-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '100% 50%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
        },
        'golden-text-subtle': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float-stellar': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.3'
          },
          '33%': { 
            transform: 'translateY(-15px) rotate(120deg)',
            opacity: '0.5'
          },
          '66%': { 
            transform: 'translateY(-5px) rotate(240deg)',
            opacity: '0.4'
          },
        },
        'pulse-stellar-subtle': {
          '0%, 100%': { 
            boxShadow: '0 0 8px rgba(212, 175, 55, 0.2)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)',
            transform: 'scale(1.03)'
          },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
        },
        'twinkle-subtle': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.35' },
        },
        'stellar-sweep': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      boxShadow: {
        'stellar': '0 0 15px rgba(212, 175, 55, 0.2), 0 0 25px rgba(212, 175, 55, 0.1)',
        'stellar-lg': '0 0 20px rgba(212, 175, 55, 0.25), 0 0 40px rgba(212, 175, 55, 0.15)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.2)',
        'glow-lg': '0 0 25px rgba(212, 175, 55, 0.25)',
        'dark': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'dark-lg': '0 12px 48px rgba(0, 0, 0, 0.6)',
      },
      backdropBlur: {
        'stellar': '16px',
      }
    },
  },
  plugins: [],
}