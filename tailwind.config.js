module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    colors: {
      orange: '#d06c16',
      grey: '#dfe0df',
      light: '#f5f5f5',
      white: '#ffffff',
      black: '#1c1c1c',
    },
    fontFamily: {
      raleway: ['Raleway', 'sans serif'],
      dancing: ['Dancing Script', 'sans serif'],
    },

    extend: {
      transform: ['hover', 'focus'],
    },
  },
  variants: {},
}
