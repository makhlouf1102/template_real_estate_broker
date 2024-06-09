/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");


module.exports = {
  content: ['./src/**/*.{tsx,css}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: [
        'Monaco',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ]
    },
    container: {
      center: true,
      screens: {
        sm: '50rem'
      }
    },
    extend: {
      colors: {
        text: {
          50: '#0c0d0d',
          100: '#181b1b',
          200: '#303636',
          300: '#495050',
          400: '#616b6b',
          500: '#798686',
          600: '#949e9e',
          700: '#afb6b6',
          800: '#c9cfcf',
          900: '#e4e7e7',
          950: '#f2f3f3',
        },
        background: {
          50: '#0d0d0d',
          100: '#1a1a1a',
          200: '#333333',
          300: '#4d4d4d',
          400: '#666666',
          500: '#808080',
          600: '#999999',
          700: '#b3b3b3',
          800: '#cccccc',
          900: '#e6e6e6',
          950: '#f2f2f2',
        },
        primary: {
          50: '#070712',
          100: '#0f0f24',
          200: '#1e1e48',
          300: '#2c2c6d',
          400: '#3b3b91',
          500: '#4a4ab5',
          600: '#6e6ec4',
          700: '#9292d3',
          800: '#b7b7e1',
          900: '#dbdbf0',
          950: '#ededf8',
        },
        secondary: {
          50: '#0d0d0d',
          100: '#1a1a1a',
          200: '#333333',
          300: '#4d4d4d',
          400: '#666666',
          500: '#808080',
          600: '#999999',
          700: '#b3b3b3',
          800: '#cccccc',
          900: '#e6e6e6',
          950: '#f2f2f2',
        },
        accent: {
          50: '#000b1a',
          100: '#001533',
          200: '#002a66',
          300: '#004099',
          400: '#0055cc',
          500: '#006aff',
          600: '#3388ff',
          700: '#66a6ff',
          800: '#99c3ff',
          900: '#cce1ff',
          950: '#e5f0ff',
        },
      },

    }
  },
  darkMode: 'class',
  plugins: [nextui()]
};
