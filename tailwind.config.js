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
        white: 'white',
        gray: '#9d9e9fe1',
        txt: 'rgb(127, 127, 127)',
        btnblu: '#0466C8',
      },
      fontSize: {
        25: '25px',
        13: '13px',
        55: '55px',
        30: '30px',
      },
    },
  },
  plugins: [],
}