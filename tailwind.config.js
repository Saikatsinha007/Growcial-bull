/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animations: {
          '0%': { backgroundPositionX: 0 },
          '100%': { backgroundPositionX: "100vw" },
        },
      },
      animation: {
        background: 'animations 50s linear infinite'
      }
    },
  },
  plugins: [],
}
