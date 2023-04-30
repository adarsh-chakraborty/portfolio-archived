module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bbblurry: "url('https://vipinmishra.dev/assets/bbblurry.svg')"
      },
      fontFamily: {
        Baloo: '"Baloo 2", cursive',
        Cookie: '"Cookie", cursive',
        Poppins: '"Poppins", sans-serif',
        Lobster: "'Lobster', cursive",
        Lobster2: "'Lobster Two', cursive",
        RobotoMono: "'Roboto Mono', monospace",
        Amita: "'Amita', cursive",

        Marck: "'Marck Script', cursive",

        Norican: "'Norican', cursive",

        Oleo: "'Oleo Script Swash Caps', cursive"
      },
      keyframes: {
        highlight: {
          '0%': {
            width: '0%'
          },

          '70%': {
            width: '90%'
          },

          '100%': {
            width: '100%'
          }
        },
        grow: {
          '0%': {
            width: '0%',
            height: '0%'
          },

          '100%': {
            width: '100%',
            height: '100%'
          }
        }
      },
      animation: {
        highlight: 'highlight 0.5s ease-in',
        grow: 'grow 0.3s ease-in-out'
      }
    }
  },
  plugins: []
};
