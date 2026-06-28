/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          50:  '#fdf2f2',
          100: '#fce4e4',
          200: '#f9c4c4',
          300: '#f09090',
          400: '#e35f5f',
          500: '#c73636',
          600: '#a32222',
          700: '#7c1a1a',
          800: '#5e1414',
          900: '#450e0e',
          DEFAULT: '#7c1a1a',
        },
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          DEFAULT: '#d97706',
        },
        beige: {
          50:  '#fefdf9',
          100: '#fdf8ef',
          200: '#faf0d7',
          300: '#f5e4b8',
          400: '#edd494',
          500: '#e2c070',
          600: '#c9a04e',
          700: '#a07d38',
          800: '#7a5c27',
          900: '#5a421a',
          DEFAULT: '#fdf8ef',
        },
      },
      fontFamily: {
        serif:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:   ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
