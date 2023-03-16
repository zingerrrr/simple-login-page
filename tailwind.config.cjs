const forms = require("@tailwindcss/forms");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  mode: "jit",
  theme: {
    extend: {},
    fontFamily: {
      consolas: ["Consolas", "monospace"],
    }
  },

  plugins: [forms],
};

module.exports = config;
