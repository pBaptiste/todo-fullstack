import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
   darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'mobile-light': "url('/images/bg-mobile-light.jpg')",
        'mobile-dark': "url('/images/bg-mobile-dark.jpg')",
        'desktop-light': "url('/images/bg-desktop-light.jpg')",
        'desktop-dark': "url('/images/bg-desktop-dark.jpg')",
      },
      colors: {
        'dark-bg' : '#25273D',
        'light-primary': '#494C6B',
        'dark-primary': '#C8CBE7',
        'light-secondary': '#9495A5',
        'dark-secondary': '#5B5E7E',
      },
      boxShadow: {
        'input-shadow-light': '0px 35px 50px -15px rgba(214, 194, 194, 0.5)',
        'input-shadow-dark': '0px 35px 50px -15px rgba(0, 0, 0, 0.50)',
        'list-shadow-light': '0px 35px 50px -15px rgba(194, 195, 214, 0.50)',
        'scroll-shadow' : '0px -17px 25px -10px rgba(194, 195, 214, 0.50)',
        'scroll-shadow-dark' : '0px -17px 25px -10px rgba(0, 0, 0, 0.50)',
      },
    },
  },
  plugins: [],
}
export default config
