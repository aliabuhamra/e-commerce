module.exports = {
  content: [
    './src/**/*.{html,js,jsx}', './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        'gray': 'hsla(0, 0%, 20%, 1)',
        'white': '#fff',
        'gray-100': 'hsla(0, 0%, 38%, 1)',
        'gray-200': 'hsla(0, 0%, 28%, 1)',
        'gray-300': 'hsla(0, 0%, 22%, 1)',
        'gray-400': 'hsla(0, 0%, 20%, 1)',
        'black': '#000',
        'cta': '#e5e5e5'
      },
    },
  },
  plugins: [],
}