import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        "main-color-1": "var(--main-color-1)",
        "main-color-2": "var(--main-color-2)",
        "main-color-3": "var(--main-color-3)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },

  plugins: [nextui()],
};
export default config;
