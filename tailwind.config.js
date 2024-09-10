/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: "class",
  theme: {
    extend: {
      scale: {
        '-100': '-1',
      },
      zIndex: {
        '-1': '-1',
        '50': '50',
        '60': '60',
        '80': '80',
        '100': '100'
      }
    },
  },
  plugins: [],
}