/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter : ['"Inter"', 'sans-serif']
      },
      letterSpacing: {
        'px-1': '1px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

