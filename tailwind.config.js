/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      borderRadius: {
        'm': '0.313rem'
      },
      gridTemplateColumns: {
        '1-auto-1': '1fr auto 1fr'
      }
    },
  },
  plugins: [],
}

