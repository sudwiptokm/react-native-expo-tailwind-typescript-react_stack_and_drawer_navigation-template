// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        primary: "#608819",
      },
    },
  },
  plugins: [],
};
