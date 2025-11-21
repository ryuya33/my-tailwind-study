import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
      },
    },
  },
  plugins: [typography],
};

export default config;
