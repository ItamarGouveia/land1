/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        rosa: '#E2A4A8',
        rosaLight: '#F2C4AF',
        verde: '#7DBEBC',
        accent: '#e53e3e',
      },
      fontFamily: {
        'sour-gummy': ['Sour Gummy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

