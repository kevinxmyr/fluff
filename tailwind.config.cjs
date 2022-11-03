/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    screens: {
      'iPhone': '375px',
      'iPad': '768px',
      'laptop': '1200px'
    },
    extend: {
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
        rufina: "Rufina"
      },
      backgroundImage: {
        'its-menu': "url(/src/assets/its-menu-5.jpeg)",
        'heroImg': "url(/src/assets/hero2.jpg)"
      },
      backgroundColor: {
        'navbar': '#181E21'
      },
      padding: {
        'index-margin': '0 8.5rem'
      },
      colors: {
        beige: '#DAD8D3'
      }
    }
  },
  plugins: [],
}
