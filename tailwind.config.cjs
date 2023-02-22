/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
        AnimatedCountdown_Hide: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)' },
          '100%': { transform: 'translate(-50%, -50%) scale(0)' },
        },
        AnimatedCountdown_Show: {
          '0%': { transform: 'translate(-50%, -50%) scale(0)' },
          '35%': { transform: 'translate(-50%, -50%) scale(1.4)' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)' },
        },
        AnimatedCountdown_goIn: {
          '0%': { transform: 'translate(-50%, -50%) rotate(120deg)' },
          '30%': { transform: 'translate(-50%, -50%) rotate(-20deg)' },
          '60%': { transform: 'translate(-50%, -50%) rotate(10deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
        },
        AnimatedCountdown_goOut: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '60%': { transform: 'translate(-50%, -50%) rotate(20deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(-120deg)' },
        },
      },
      animation: {
        ShowMenu: 'ShowMenu 0.5s ease-in-out forwards',
        HideMenu: 'HideMenu 0.5s ease-in-out forwards',
        AnimatedCountdown_Hide: 'AnimatedCountdown_Hide 0.2s ease-out',
        AnimatedCountdown_Show: 'AnimatedCountdown_Show 0.2s ease-out',
        AnimatedCountdown_goIn: 'AnimatedCountdown_goIn 0.5s ease-out',
        AnimatedCountdown_goOut: 'AnimatedCountdown_goOut 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
