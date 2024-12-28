/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["regular", "sans-serif"],
        "poppins-light": ["light", "sans-serif"],
        "poppins-medium": ["medium", "sans-serif"],
        "poppins-semibold": ["semibold", "sans-serif"],
        "poppins-bold": ["bold", "sans-serif"],
        "poppins-extrabold": ["extrabold", "sans-serif"],
      },
      colors: {
        "bg": {
          "400": "#FFDDA3"
        },
        "primary": {
          "50": "#fdf4ef",
          "100": "#fae5da",
          "200": "#f4c7b4",
          "300": "#eca285",
          "400": "#e37050",
          "500": "#dd5032",
          "600": "#cf3a27",
          "700": "#ac2a22",
          "800": "#892423",
          "900": "#6f201f",
          "950": "#3c0e0f"
        }
      }
    },
  },
  plugins: [],
}

