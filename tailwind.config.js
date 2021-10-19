module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'light': '#f5f6fa',
      'primary': '#009FE3',
      'secondary': '#2d3436',
      'purple': '#40407a',
      'danger': '#e3342f',
    },
    backgroundColor: {
      'primary': '#009FE3',
      'secondary': '#A6A5A6',
      'gray': '#1F2937',
      'blue': '#578BD4',
      'lightGray': '#8395a7',
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
