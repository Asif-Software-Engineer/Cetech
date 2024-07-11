/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'kanit': ['Kanit', 'sans-serif'],
    },
    extend: {
      colors:{
        blue: '#001845',
        blue2: '#3f5888',
        white: 'white',
        gray: '#9d9e9fe1',
        tgray: 'rgb(92, 103, 125)',
        txt: 'rgb(127, 127, 127)',
        btnblu: '#0466C8',
      },
      fontSize: {
        25: '25px',
        13: '13px',
        55: '55px',
        45: '45px',
        30: '30px',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(150%)' },
          '150%': { transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        'slide-up': 'slide-up 1s ease-out',
        'slide-in': 'slide-in 1s ease-out',
      }
    },
  },
  plugins: [],
}