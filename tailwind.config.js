/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'menu':"url('./svg/icons8-menu-48.svg')",
        'inicio':"url('./img/food-inicio.jpeg')",
      },
      backgroundColor:{
        'principal':'#161616'
      },
      spacing:{
        '128': '32rem',
        '64rem': '64rem'
      },
      fontFamily:{
        Pacifico:['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
}

