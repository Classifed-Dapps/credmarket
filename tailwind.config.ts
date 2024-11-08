import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
        mansalva: "var(--font-mansalva)",
        manrope: "var(--font-manrope)",
        roboto: "var(--font-roboto)",
        poppins: "var(--font-poppins)",
      },
      colors: {
        secondary: {
          100: "#40e0d0",
          200: " #31d5d1",
          300: "#31d5d1",
          400: "#3093a1",
          500: "#307687",
          600: "#2e5d6f",
          700: "#2a4858",
        },
        orange: "#FF7F50",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
