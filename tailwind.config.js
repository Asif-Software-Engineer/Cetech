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
        blue2: '#023E7D',
        white: 'white',
        gray: '#9d9e9fe1',
        tgray: 'rgb(127, 127, 127)',
        txt: '#f9f9f9',
        btnblu: '#0466C8',
        borderClr: '#0466C8',
        borderClr2: '#DADADA',
        head: '#5C677D',
      },
      fontSize: {
        25: '25px',
        13: '13px',
        55: '55px',
        45: '45px',
        30: '30px',
        35: '35px',
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