import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  			satoshi: [
  				'var(--font-satoshi)',
  				'sans-serif'
  			],
  			inter: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  		},
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-1": "#414651"
      },
    },
  },
  plugins: [],
} satisfies Config;
