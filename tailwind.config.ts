import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 5px 20px rgba(0, 0, 0, 0.1)',
      },
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
        "dark-1": "#414651",
        "dark-2": "#081735",
        "dark-3": "#181d27"
      },
    },
  },
  plugins: [],
} satisfies Config;
