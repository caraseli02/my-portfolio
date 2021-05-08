module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    backdropFilter: {
      none: "none",
      blur: "blur(15px)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-filters")],
};
