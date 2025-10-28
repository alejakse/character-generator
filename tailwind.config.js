/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary": "#D97706",
        "background-light": "#f8f7f6",
        "background-dark": "#1A120B",
        "amber": {
          "400": "#FBBF24"
        }
      },
      fontFamily: {
        "display": ["Newsreader", "serif"],
        "heading": ["Uncial Antiqua", "cursive"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
