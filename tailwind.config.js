/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        icongrow: {
          '0%': {transform: 'scale(1)'},
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        icongrow: "icongrow 0.3s linear",
      },
    },
  },
  plugins: [],
};
