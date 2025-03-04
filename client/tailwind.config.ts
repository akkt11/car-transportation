import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        "theme-black": "#000",
        "theme-white": "#fff",

        "theme-primary-100": "#1572d3",
        "theme-primary-200": "#051c34",
        "theme-primary-300": "#ecf5ff",
        "theme-primary-400": "#F7FBFF",

        "theme-grey-100": "#484848",
        "theme-grey-150": "#d6d6d6",
        "theme-grey-200": "#b6b6b6",
        "theme-grey-300": "#959595",
      },
      animation: {
        car: "moveCar 0.8s ease-out forwards",
        text: "moveText 0.6s ease-out forwards",
      },
      keyframes: {
        moveCar: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        moveText: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
};
export default config;
