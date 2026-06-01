/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        grow: {
          "100%": {
            width: "100%",
          },
        },
        rotation: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        rotationback: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        grow: "grow 0.5s ease-in-out forwards",
        rotation: "rotation 10s linear infinite",
        rotationback: "rotationback 10s linear infinite",
      },
      colors: {
        // Pulse X Colors
        "pulse-x-red": "#F23333",
        "pulse-x-dark-red": "#E32323",
        "pulse-x-card-red": "#D10D10",
        "pulse-x-card-gray": "#989FAC",
        "pulse-x-subtitle-gray": "#DEDEDE",

        // Snackly
        "snackly-blue": "#3A0CA3",
        "snackly-purple": "#7209B7",
        "snackly-dark-purple": "#320451",
        "snackly-card-gray": "#989FAC",

        // Drox360
        "drox360-orange": "#FC641C",
        "drox360-light-gray": "#E5E5E5",
        "drox360-dark-gray": "#989FAC",
        "drox360-input-gray": "#DDDEE3",

        // Cybersky
        "cybersky-red": "#F23333",

        // Globals
        "gray-white": "#E5E5E5",
        "placeholder-color": "#E5E5E5",
      },
      fontFamily: {
        // Default font
        sans: ["Glacial Indifference", "sans-serif"],
        glacial: ["Glacial Indifference", "sans-serif"],
      },
      fontSize: {
        // Titles
        h1: "8rem",
        h2: "6rem",
        h3: "5rem",
        h4: "4rem",
        h5: "3rem",
        h6: "2.25rem",
        h7: "1.5rem",

        // Texts
        t1: "2rem",
        t2: "1.75rem",
        t3: "1.5rem",
        t4: "1.25rem",
        t5: "1rem",
        t6: "0.75rem",
        t7: "0.625rem",

        // Pour rendre la police Bold, il faut utiliser: font-bold
      },
      borderRadius: {
        r1: "1.25rem",
        r2: "0.9375rem",
        r3: "0.625rem",
        r4: "0.3125rem",
        r5: "0.25rem",
      },
      blur: {
        b4: "0.1875rem",
      },
      screens: {
        xs: "28.125rem",
        xsp: "34.375rem",
        mdp: "50rem",
        mdpp: "59.375rem", // 950px
        lgm: "66.5625rem", //1065px
        lgp: "72.5rem", //1160px
        lgpp: "78.125rem", //1250px
        xxl: "82.5rem",
        high: { raw: "(max-aspect-ratio: 1/1)" },
      },
      width: {
        "9/10": "90%",
        "9.5/10": "90%",
      },
    },
  },
  plugins: [],
};
