/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          light: '#a94442',
          DEFAULT: '#800000',
          dark: '#4b0000',
        },
        background: '#fdf6f6',
      },
    },
  },
  plugins: [],
};
