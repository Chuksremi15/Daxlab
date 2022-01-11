module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        hover: {
          DEFAULT: "#ffffff25",
        },
      },
      fontFamily: {
        headline: "Quicksand, sans-serif", //font-headline
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
