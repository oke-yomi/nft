/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      gridTemplateColumns: {
        'complex': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      backgroundColor: {
        primary: 'linear-gradient(to right, #8a2387, #e94057, #f27121);'
      },
    },
  },
  plugins: [],
}
