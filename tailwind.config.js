/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#D97706",
        "background-light": "#f8f7f6",
        "background-dark": "#1A120B",
        "amber": {
          "400": "#FBBF24"
        },
        "orange": {
          "50": "#fff7ed",
          "100": "#ffedd5"
        },
        "green_neutral": {
          "200": "#dcecdc",
          "300": "#b7d2b7",
          "400": "#7da87d",
          "600": "#5a7f5a",
          "700": "#446244",
          "800": "#2f462f",
          "900": "#1a281a"
        },
        "stone": {
          "700": "#44403c",
          "800": "#292524"
        }
      },
      borderRadius: {
        "lg": "0.5rem",
      },
    },
  },
  plugins: [],
}
