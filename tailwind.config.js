/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        /*Brand Colors*/
        "primary-color": "#6962f7",
        "secondary-color": "#7000ff",
        "primary-accent": "#0a2540",
        "primary-button-hover": "#6d7a88",
        "primary-blue": "#00d4ff",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
