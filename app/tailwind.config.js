import { transform } from 'typescript';

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
        'sm': '14px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        'blur': '0 0 25px rgba(2, 132, 199, 0.6)',
        'blur-hover': '0 0 25px rgba(56, 189, 248, 0.6)'
      },
      keyframes: {
        'ping-blink': {
          from: {
            opacity: 0.6,
            color: 'rgb(2, 132, 199)'
          },
          to: {
            opacity: 1,
            transform: 'scale(1.25)',
            color: 'rgb(56, 189, 248)'
          }
        }
      },
      animation: {
        'ping-blink': 'ping-blink 2s linear infinite alternate',
      }
    },
  },
  plugins: [],
}

