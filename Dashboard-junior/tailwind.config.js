module.exports = {
  content: ["./views/**/*.ejs"],
  daisyui: {
    themes: ["light", "dark", "corporate"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};