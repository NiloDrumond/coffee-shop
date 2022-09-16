const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'yellow-dark': '#C47F17',
      'yellow': '#DBAC2C',
      'yellow-light': '#F1E9C9',
      'purple-dark': '#4B2995',
      'purple': '#8047F8',
      'purple-light': '#EBE5F9',

      'title': '#272221',
      'subtitle': '#403937',
      'text': '#574F4D',
      'label': '#8D8686',
      'hover': '#E6E5E5',
      'input': '#EDEDED',
      'card': '#F3F2F2',
      'background': '#FAFAFA',
    },
    fontFamily: {
      title: ['Baloo 2', 'cursive'],
      sans: ['Roboto', 'sans']
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        title: ['"Baloo 2"', 'cursive'],
      },
      backgroundImage:  {
        'hero-pattern': "url('/src/assets/Background.svg')"
      }
    },
  },
  plugins: [],
}
