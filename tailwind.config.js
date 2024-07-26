/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        bgColor : '#6FC650',
        darkGreen : '#184638'
      },
      boxShadow: {
        'inner-md': 'inset 0 4px 6px rgba(0, 0, 0, 0.1)',
        'inner-lg': 'inset 0 10px 15px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}