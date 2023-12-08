/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_purple: '#911b96',
        custom_gold: '#d39a3d',
        custom_blue: '#4caef1',
      },
    },
  },
  plugins: [],
};
