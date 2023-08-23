/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // enable dark mode
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1500px",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    extend: {
      colors: {
        water: {
          DEFAULT: "#4B99FE",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#E6F0FF",
          300: "#BFD1FF",
          400: "#99B2FF",
          500: "#4B99FE",
          600: "#2E7DE6",
          700: "#205EBF",
          800: "#134099",
          900: "#0C2A73",
          950: "#0C2A73",
        },
        lightWater: {
          DEFAULT: "#4B99FE",
          100: "#FFFFFF",
          200: "#E6F0FF",
          300: "#BFD1FF",
          400: "#99B2FF",
          500: "#4B99FE",
          600: "#2E7DE6",
          700: "#205EBF",
          800: "#134099",
          900: "#0C2A73",
          950: "#0C2A73",
        },
        steel: {
          DEFAULT: "#4B99FE",
          100: "#FFFFFF",
          200: "#E6F0FF",
          300: "#BFD1FF",
          400: "#99B2FF",
          500: "#4B99FE",
          600: "#2E7DE6",
          700: "#205EBF",
          800: "#134099",
          900: "#0C2A73",
          950: "#0C2A73",
        },
        bgBlueDark: {
          DEFAULT: "#1D1E1E",
        },
        bgBlueLight: {
          DEFAULT: "#E9EDF0",
        },
        darkNeoBackground: "#1D1E1E",
        darkNeoForeground: "#1D1E1E",
        neoMiddleBlue: "#2EB2EC",
        neoBackground: "#E9EDF0",
        neoLightBlue: "#0ECDD8",
        neoDarkBlue: "#4B99FE",
        neoGrey: "#898C91",
        eBlue: "#008AD8",
        pPink: "#FF00E3",
        pBlue: "#00B4D6",
        pWhite: "#FDFEFF",
        pText: "#D7EAF4",
        pDark: "#212224",
        pSemi: "#35363A",
      },
    },
  },
  plugins: [],
};
