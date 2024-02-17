import {indigo } from 'tailwindcss/colors'
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
        "gray-background":"#17171A",
        "gray-foreground":"#26252A"
      },
      fontFamily:{
        sans:'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}

