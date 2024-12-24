/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customBackground: '#ffffff', // Change custom background color to white
        customFont: '#000000', // Change custom font color to black
      },
    },
  },
  plugins: [],
};
