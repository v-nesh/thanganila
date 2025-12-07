/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fed7aa', // orange-200
          DEFAULT: '#f97316', // orange-500
          dark: '#c2410c', // orange-700
        },
        secondary: {
          light: '#bfdbfe', // blue-200
          DEFAULT: '#3b82f6', // blue-500
          dark: '#1d4ed8', // blue-700
        }
      }
    },
  },
  plugins: [],
}
