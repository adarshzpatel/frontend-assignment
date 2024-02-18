import {indigo, neutral } from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:indigo,
        gray:neutral
      },
      fontFamily:{
        sans:'Inter, sans-serif'
      },
      animation:{
        ping0:'ping 1s ease-out infinite',
        ping1:'ping 2s ease-out infinite',
        ping2:'ping 3s ease-out infinite', 
      }
    },
  },
  plugins: [],
}

