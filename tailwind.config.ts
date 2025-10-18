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
        building: "url('/images/background-building.jpg')",
        forest: "url('/images/background-forest.jpg')",
      },
      // add colors then call it to globals
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        primaryTransparent: "var(--primaryTransparent)",
        accent: "#ba9334",
      },
      fontFamily: {
        header: "var(--header)",
        paragraph: "var(--paragraph)",
      },
    },
  },
  plugins: [],
};
export default config;
