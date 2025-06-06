module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    {
      pattern: /(bg|text|border)-(blue|green|darkblue|gray|red|teal|orange)-(500|600)/,
    },
  ],
   theme: {
    extend: {
      colors: {
        darkblue: {
          700: '#0a2540'
        }
      }
    }
  },
  plugins: [],
};
