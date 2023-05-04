/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontSize: {
        '2xl': '28px',
        'xl': '24px',
        'lg': '20px',
        'md': '16px',
        'sm': '12px',
      },
      fontFamily: {
        sans: ['Inter', sans-serif]
      }
    },
  },
  plugins: [],
}

