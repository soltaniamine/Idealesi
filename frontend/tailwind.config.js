/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mypurple: '#646FD4',
        mygrey: '#EEEDED',
        mypurple2: '#606FFF',
        mypurple3: '#C6C8DC'
      }
    },
  },
  plugins: [],
}

