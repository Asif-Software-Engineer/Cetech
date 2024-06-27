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
        blue2: "blue",
        white: 'white',
        gray: '#9d9e9fe1',
      },
    },
  },
  plugins: [],
}