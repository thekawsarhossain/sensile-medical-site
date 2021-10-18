module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'light': '#f5f6fa',
      'primary': '#0984e3',
      'secondary': '#2d3436',
      'purple': '#40407a',
      'danger': '#e3342f',
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
