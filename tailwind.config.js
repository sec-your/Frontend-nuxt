/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    container: false,
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1200px'},

      'xl': {'max': '1075px'},

      'lg': {'max': '980px'},

      'md': {'max': '780px'},

      'sm': {'max': '680px'},

      'xs': {'max': '560px'},
    },
    extend: {
      borderRadius: {
        'm': '0.313rem'
      },
      padding: {
        '1.25': '0.313rem'
      },
      colors: {
        'light-primary': 'rgb(36, 45, 52, var(--tw-bg-opacity, 1))'
      },
      gridTemplateColumns: {
        '1-auto-1': '1fr auto 1fr',
        'auto-auto': 'repeat(2, auto)',
      }
    }
  },
  plugins: [],
}

