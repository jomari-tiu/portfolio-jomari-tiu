import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "body-bg": "url('/images/background-building.jpg')",
      },
      // add colors then call it to globals
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        primaryTransparent: "var(--primaryTransparent)",
        customRed: "#dd0000",
      },
      fontFamily: {
        header: "var(--header)",
        paragraph: "var(--paragraph)",
      },
      screens: {
        xl: { max: "1550px" },
        lg: { max: "1366px" },
        md: { max: "1024px" },
        s: { max: "640px" },
        xs: { max: "390px" },
      },
    },
  },
  plugins: [],
};
export default config;
