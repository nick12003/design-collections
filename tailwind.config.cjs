const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */

const myUtilities = plugin(function ({ addUtilities }) {
  addUtilities({
    '.scrollbar-hide': {
      /* IE and Edge */
      '-ms-overflow-style': 'none',

      /* Firefox */
      'scrollbar-width': 'none',

      /* Safari and Chrome */
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  });
});

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    extend: {
      keyframes: {
        ShowMenu: {
          '0%': { left: '-100%' },
          '100%': { left: '0%' },
        },
        HideMenu: {
          '0%': { left: '0%' },
          '100%': { left: '-100%' },
        },
      },
      animation: {
        ShowMenu: 'ShowMenu 0.5s ease-in-out forwards',
        HideMenu: 'HideMenu 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [myUtilities],
};
