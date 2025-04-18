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
        custom: ['MyCustomFont', 'sans-serif'], // You can use 'custom' as class
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myred: '#DE0713', // name it whatever you want
        onhover: '#f51307'
      },
    },
  },
  plugins: [],
};
export default config;
