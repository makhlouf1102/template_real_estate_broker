/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");


module.exports = {
  content: ['./src/**/*.{tsx,jsx,css}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
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
        'text': {
          50: '#050f15',
          100: '#091d2a',
          200: '#133a53',
          300: '#1c587d',
          400: '#2675a6',
          500: '#2f92d0',
          600: '#59a8d9',
          700: '#82bee3',
          800: '#acd3ec',
          900: '#d5e9f6',
          950: '#eaf4fa',
        },
        'background': {
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
        'primary': {
          50: '#050e14',
          100: '#0b1d28',
          200: '#153a51',
          300: '#205779',
          400: '#2b74a1',
          500: '#3691c9',
          600: '#5ea7d4',
          700: '#86bddf',
          800: '#aed3ea',
          900: '#d7e9f4',
          950: '#ebf4fa',
        },
        'secondary': {
          50: '#061113',
          100: '#0d2126',
          200: '#19424d',
          300: '#266373',
          400: '#338599',
          500: '#40a6bf',
          600: '#66b8cc',
          700: '#8cc9d9',
          800: '#b3dbe6',
          900: '#d9edf2',
          950: '#ecf6f9',
        },
        'accent': {
          50: '#050f14',
          100: '#0b1d28',
          200: '#163b50',
          300: '#215878',
          400: '#2c76a0',
          500: '#3793c8',
          600: '#5fa9d3',
          700: '#87bede',
          800: '#afd4e9',
          900: '#d7e9f4',
          950: '#ebf4fa',
        },
       },
       

    }
  },
  darkMode: 'class',
  plugins: [nextui()]
};
