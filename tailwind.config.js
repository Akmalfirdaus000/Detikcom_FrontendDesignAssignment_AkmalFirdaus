/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       backgroundImage: {
        'desktop': "url('../src/assets/image/desk.png')",
        'bg2': "url('../src/assets/image/bg-5.jpg')",
      }
    },
  },
  plugins: [],
}

