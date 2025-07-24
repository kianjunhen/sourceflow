/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: "16px",
      },
      width: {
        inherit: "inherit",
      },
    },
    screens: {
      md: "1200px",
      lg: "1440px", // override or add as needed
      xl: "1920px", // optional
    },
  },
  plugins: [],
};
