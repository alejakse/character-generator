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
        "neutral": {
          "200": "#e5e5e5",
          "300": "#d4d4d4",
          "400": "#a3a3a3",
          "600": "#525252",
          "700": "#404040",
          "800": "#262626",
          "900": "#171717"
        },
        "stone": {
          "700": "#44403c",
          "800": "#292524"
        }
      },
      fontFamily: {
        "display": ["Newsreader", "serif"],
        "heading": ["Cinzel Decorative", "cursive"],
      },
      borderRadius: {
        "lg": "0.5rem",
      },
    },
  },
  plugins: [],
}
