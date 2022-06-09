module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans", "sans-serif"'],
      },
      screens: {
        sm: { max: '375px' },
      },
    },
  },
  plugins: [],
};
