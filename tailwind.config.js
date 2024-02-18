import { neutral } from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          50: 'color-mix(in srgb, var(--primary-color) 5%, white)',
          100: 'color-mix(in srgb, var(--primary-color) 10%, white)',
          200: 'color-mix(in srgb, var(--primary-color) 30%, white)',
          300: 'color-mix(in srgb, var(--primary-color) 50%, white)',
          400: 'color-mix(in srgb, var(--primary-color) 70%, white)',
          500: 'var(--primary-color)',
          600: 'color-mix(in srgb, var(--primary-color), black 10%)',
          700: 'color-mix(in srgb, var(--primary-color), black 30%)',
          800: 'color-mix(in srgb, var(--primary-color), black 50%)',
          900: 'color-mix(in srgb, var(--primary-color), black 70%)',
      },
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

