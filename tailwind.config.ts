import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0f172a",
          800: "#1a2332",
          700: "#243044",
          600: "#2e3d56",
        },
        charcoal: {
          900: "#111827",
          800: "#1f2937",
          700: "#374151",
        },
        offwhite: "#f0f0f0",
        teal: {
          DEFAULT: "#2d8a8a",
          dark: "#1f6b6b",
          light: "#3aabab",
        },
        slate: {
          blue: "#4a6fa5",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
