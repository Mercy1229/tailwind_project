/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'body-image': "url('./assets/bg1.jpeg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'dancing':["Dancing Script", "cursive"],
        'mathalin' :["Lobster", "sans-serif"]
      }

    },
  },
  plugins: [],
}

