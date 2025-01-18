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
        foreground: "var(--foreground)",
        customOffWhite:"rgb(240, 242, 243)",
        customGreen:"rgb(2, 159, 174)",
         customPurple:"rgb(124, 78, 228)"
      },
    },
  },
  plugins: [],
};
export default config;
