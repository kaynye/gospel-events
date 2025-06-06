/** @type {import('tailwindcss').Config} */
export default {
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
        primary: "var(--primary)",
        secondaryText: "var(--secondary-text-color)",
        secondary:{
          DEFAULT: "#6f3c29", // Brown from the original website
          foreground: "#ffffff", // White text on brown
        },
        terciary: "var(--terciary)",
        darkBlue: "var(--dark-blue)",
        lightBlue: "var(--light-blue)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-in-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
