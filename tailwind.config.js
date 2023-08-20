/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // enable dark mode
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        neoMiddleBlue: '#2EB2EC',
        neoBackground: '#E9EDF0',
        neoLightBlue: '#0ECDD8',
        neoDarkBlue: '#4B99FE',
        neoGrey: '#898C91',
        eBlue: '#008AD8',
        pPink: '#FF00E3',
        pBlue: '#00B4D6',
        pWhite: '#FDFEFF',
        pText: '#D7EAF4',
        pDark: '#212224',
        pSemi: '#35363A',
      },
    },
  },
  plugins: [],
};
