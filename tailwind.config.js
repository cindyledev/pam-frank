module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        polonaise: ['POLONAISE', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
