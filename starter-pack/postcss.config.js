const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths according to your project structure
    // Add other paths where Tailwind CSS classes are used
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: [
    // Safelist dynamic class names if necessary
    'bg-primary-200',
    'text-white',
    // Use regex for patterns
    /^bg-/,
    /^text-/,
  ],
});

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { '@fullhuman/postcss-purgecss': purgecss } : {}),
  },
};
