module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    exxtend: {
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        momo: ["var(--font-momo)"],
      },
    },
  },
  Plugins: [],
};
