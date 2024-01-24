/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./extra/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '0 0 5px #22c55e, 0 0 5px #22c55e',
      }
    }
  },
  variants: {
    extend: {
      textShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}