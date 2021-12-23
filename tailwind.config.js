const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  mode: 'jit',
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans]
    },
    container: {
      center: 'true',
      padding: '1rem'
    },
    extend: {
      height: {
        'screen-1/2': '50vh'
      },
      colors: {
        blue: {
          dark: '#141625',
          DEFAULT: '#1f213a',
          light: '#3d4371'
        }
      }
    }
  },
  plugins: []
}
