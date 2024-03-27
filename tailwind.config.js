/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Helvetica, Arial, sans-serif",
      },
      colors: {
        primary: "#51a1c2",
        secondary: "#1a5974",
      },
    },
  },
  plugins: [],
};

