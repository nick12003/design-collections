const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */

const myUtilities = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-0': {
      transform: 'rotateY(0deg)',
    },
    '.rotate-y-360': {
      transform: 'rotateY(360deg)',
    },
    '.-rotate-y-50%': {
      transform: 'rotateY(-50%)',
    },
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
        ButtonRippleEffect_scale: {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
          '100%': { transform: 'translate(-50%, -50%) scale(3)', opacity: 0 },
        },
      },
      animation: {
        ShowMenu: 'ShowMenu 0.5s ease-in-out forwards',
        HideMenu: 'HideMenu 0.5s ease-in-out forwards',
        ButtonRippleEffect_scale: 'ButtonRippleEffect_scale 0.5s ease-out',
      },
    },
  },
  plugins: [myUtilities],
};
