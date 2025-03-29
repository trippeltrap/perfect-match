/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E2A5A', // Lucas donkerblauw
        'lucas-red': '#E63946',
        'lucas-lightblue': '#45B7D1',
        'lucas-orange': '#F7931E',
        'lucas-green': '#8DC63F',
        'lucas-turquoise': '#45B7B1',
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 