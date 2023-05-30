/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  colors: {
    primary: "#236477",
    secondary: "#378BA4",
    tertiary: "#173042",
  },
  keyframes: {
    "open-menu": {
      "0%": { transform: "scaleY(0)" },
      "80%": { transform: "scaleY(1.2)" },
      "100%": { transform: "scaleY(1)" },
    },
  },
  animation: {
    "open-menu": "open-menu 0.5s ease-in-out forwards",
  },
  plugins: [],
};
