/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'react-icon-half': "url('/src/assets/images/reactjs-icon-half.png')",
        'react-icon-half-1': "url('/src/assets/images/reactjs-icon-half-1.png')",
        'react-icon-half-2': "url('/src/assets/images/reactjs-icon-half-2.png')",
      },
      backgroundSize: {
        'half-icon': '190px 400px',
        'half-icon-1': '320px 700px',
      },
      screens: {
        'lg-h': { 'raw': '(min-width: 1025px) and (min-height: 662px)' },
        'xl-h': { 'raw': '(min-width: 1441px) and (min-height: 827px)' },
      },
    },
  },
  plugins: [],
}

