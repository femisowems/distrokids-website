/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'electric-blue': 'var(--color-electric-blue)',
        'neon-purple': 'var(--color-neon-purple)',
        'bg-card': 'var(--color-bg-card)',
        'bg-var': 'var(--background)',
        'fg-var': 'var(--foreground)'
      },
      boxShadow: {
        'glow-electric': '0 0 40px rgba(var(--color-electric-blue-rgb), 0.15)'
      }
    }
  },
  plugins: [
    function ({ addVariant }) {
      // `light:` variant that scopes styles under `.light`
      addVariant('light', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.light .${className.split(separator)[1]}`;
        });
      });
    },
  ],
};
