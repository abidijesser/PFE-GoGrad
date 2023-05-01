module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mygreen: '#1ccaad',
        mygreen2: '#2aa792'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
