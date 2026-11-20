/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          400: '#4ade80',
          500: '#39ff14',
          600: '#22c55e',
          900: '#064e3b',
        },
        dark: {
          800: '#111827',
          900: '#030712',
        }
      }
    }
  },
  plugins: [],
}