const forms = require("@tailwindcss/forms");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  mode: "jit",
  theme: {
    extend: {},
  },

  plugins: [forms],
};

module.exports = config;
