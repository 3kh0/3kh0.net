/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./extra/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'outline': '0 0 10px #3b82f6',
      }
    }
  },
  plugins: [],
}