import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem"
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        tsg: {
          "primary": "#d10a1b",
          "secondary": "#6C7D47",
          "accent": "#A9B294",
          "neutral": "#d10a1b",
          "base-100": "#FBF8F8",
          "info": "#008af5",
          "success": "#00ff9d",
          "warning": "#e15900",
          "error": "#ff4b61",
        },
      },
    ],
  },
};
export default config;
