module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Baloo: '"Baloo 2", cursive',
        Cookie: '"Cookie", cursive',
        Poppins: '"Poppins", sans-serif',
        Lobster: "'Lobster', cursive",
        Lobster2: "'Lobster Two', cursive"
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
        }
      },
      animation: {
        highlight: 'highlight 0.5s ease-in-out forwards'
      }
    }
  },
  plugins: []
};
