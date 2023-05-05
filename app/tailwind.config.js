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
        top: {
          '0%': {
            transform: 'translateY(50px)',
            opacity: 0
          }
        },
        rigth: {
          '0%': {
            transform: 'translateX(-100px)',
            opacity: 0
          },
        },
        bottom: {
          '0%': {
            transform: 'translateY(-50px)',
            opacity: 0
          }
        },
        left: {
          '0%': {
            transform: 'translateX(100px)',
            opacity: 0
          }
        },
        found: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
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
        top: 'top 450ms ease-in-out',
        rigth: 'rigth 750ms ease-in-out',
        bottom: 'bottom 450ms ease-in-out',
        left: 'left 750ms ease-in-out',
        'found-short': 'found 1500ms ease-in-out forwards',
        'found-medium': 'found 1500ms ease-in-out 1s forwards',
        'found-long': 'found 1500ms ease-in-out 2s forwards',
        'ping-blink': 'ping-blink 2s linear infinite alternate',
      }
    },
  },
  plugins: [],
}

