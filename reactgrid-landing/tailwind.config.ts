import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["var(--font-dm-sans)"],
      },
      colors: {
        green: {
          primary: "#107C41",
          secondary: "#0D6334",
        },
        white: "#ffffff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        "40px": "40px",
      },
    },
    fontSize: {
      xs: "16px",
      sm: "20px",
      md: "24px",
      xl: "30px",
      "2xl": "56px",
      "3xl": "88px",
    },
    gridTemplateColumns: {
      header: "repeat(12, 0.5fr)",
    },
    gridTemplateRows: {
      header: "repeat(9, 96px)",
    },
  },
  plugins: [require("daisyui")],
};

export default config;
