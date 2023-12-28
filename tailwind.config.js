/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        epologue: ["'Epilogue'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
      },
    },
    container: {
      center: true,
      screens: {
        sm: "540px",
        md: "668px",
        lg: "924px",
        xl: "1180px",
        "2x": "1436px",
      },
    },
  },
  plugins: [],
};
