/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        body: ['hind', 'sans-serif'],
        heading: ['montserrat', 'sans-serif']
      },
      colors: {
        primary: {
          300: '#006077',
          400: '#004B5C',
          500: '#00333f',
          600: '#00171C',
        },
        secondary: {
          300: '#FEFEFE',
          500: '#e9f0ef',
          700: '#C3D8D5',
        },
        accent: {
          300: '#FFD98E',
          400: '#F2C160',
          500: '#d9a439',
          600: '#B7831B',
          700: '#916205',
        },

        green: {
          500: '#142620',
          600: '#16322C',
        },
        white: '#FAF7F0',
        beige: '#E5E2D4'
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}
