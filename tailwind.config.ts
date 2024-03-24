import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          700: "#0F0F0F",
        },
        secondary: {
          700: "#1FC04D",
        },
        grey: {
          300: "#D9D9D9",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
