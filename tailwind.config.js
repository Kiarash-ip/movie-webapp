/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      secondary: "#EA9610",
      main: "#202735",
      "main-light": "#686281",
      "bg-light": "#ffffff33",
    },
    fontFamily: {
      normal: ["IRANSans", "Arial"],
      medium: ["IRANSans_Medium", "Arial"],
      bold: ["IRANSans_Bold", "Arial"],
    },
  },
  plugins: [],
};
