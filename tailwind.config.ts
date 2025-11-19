import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"]
      },
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d9f0ff",
          200: "#b5e2ff",
          300: "#80ceff",
          400: "#4ab7ff",
          500: "#1c9dff",
          600: "#007ae6",
          700: "#005fb4",
          800: "#004a8a",
          900: "#003b6d"
        }
      }
    }
  },
  plugins: []
};

export default config;
