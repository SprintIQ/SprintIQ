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
          100: "#96C4CE",
        },
        grey: {
          300: "#D9D9D9",
          200: "#787676",
          100: "#373737",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "correct-flash": {
          from: { backgroundColor: "white" },
          to: { backgroundColor: "green" },
        },
        "wrong-flash": {
          from: { backgroundColor: "white" },
          to: { backgroundColor: "red" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "correct-flash": "correct-flash 1s ease-in-out infinite",
        "wrong-flash": "wrong-flash 1s ease-in-out infinite",
      },
      data: {
        correct: 'correct="true"',
        wrong: 'wrong="true"',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
