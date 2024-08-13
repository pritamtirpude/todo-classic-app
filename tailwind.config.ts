import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        brightBlue: "hsl(220, 98%, 61%)",
        gradientOne: "hsl(192, 100%, 67%)",
        gradientTwo: "hsl(280, 87%, 65%)",
        light: {
          veryGray: "hsl(0, 0%, 98%)",
          veryGrayishBlue: "hsl(236, 33%, 92%)",
          lightGrayishBlue: "hsl(233, 11%, 84%)",
          darkGrayishBlue: "hsl(236, 9%, 61%)",
          veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        },
        dark: {
          veryDarkBlue: "hsl(235, 21%, 11%)",
          veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
          lightGrayishBlue: "hsl(234, 39%, 85%)",
          darkGrayishBlue: "hsl(234, 11%, 52%)",
          veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
          ultraDarkGrayishBlue: "hsl(237, 14%, 26%)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "desktop-dark": `url('../public/assets/images/bg-desktop-dark.jpg')`,
        "desktop-light": `url('../public/assets/images/bg-desktop-light.jpg')`,
        "mobile-dark": `url('../public/assets/images/bg-mobile-dark.jpg')`,
        "mobile-light": `url('../public/assets/images/bg-mobile-light.jpg')`,
      },
    },
  },
  plugins: [],
};
export default config;
