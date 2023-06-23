module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "anti-flash-white": "#edf2f4",
        "space-coast": "#2b2d42",
        "pantone": "#ef233c",
        "crimson": "#D80032",
        "white": "#fff"
      },
    },
  },
  plugins: [],
}

