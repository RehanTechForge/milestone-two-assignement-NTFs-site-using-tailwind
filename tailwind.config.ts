import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        textColor: "var(--text)",
        backgroundSecondary: "var(--backgroundSecondary)",
        captionText: "var(--captionText)",
        btnColor: "var(--btnColor)",
        blueColor: "var(--blueColor)",
        redColor: "var(--redColor)",
      },
      fontFamily: {
        "work-sans": ['"Work Sans"', "sans-serif"],
        "space-mono": ['"Space Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
