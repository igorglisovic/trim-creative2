/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-gradient': 'linear-gradient(90deg, #9B81BB 0%, #5D4EA0 100%)',
        'circle-gradient': 'linear-gradient(180deg, #9B81BB 0%, #5D4EA0 100%)',
        'footer-gradient': 'linear-gradient(180deg, #9B81BB 0%, #5D4EA0 100%)',
      },
      backgroundColor: {
        arrow: 'rgba(35, 31, 32, 0.23)',
        dark: '#0d1117',
      },
      colors: {
        'light-black': '#231F20',
        'dark-gray': '#231F20',
        'card-black': '#181415',
        dark: '#ffffff',
      },
      fontFamily: {
        main: ['var(--font-akira)'],
        secondary: ['var(--font-gabarito)'],
      },
    },
  },
  plugins: [],
}
