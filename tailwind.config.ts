import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(#013E0A,#007205)",
      },
      colors: {
        primary: {
          700: "#0F0F0F",
        },
        secondary: {
          700: "#1FC04D",
          300: "#175611",
        },
        grey: {
          300: "#D9D9D9",
          200: "#787676",
          100: "#373737",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
