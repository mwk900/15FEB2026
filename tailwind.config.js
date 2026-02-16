/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        secondaryAccent: 'var(--color-secondary-accent)',
        bgPrimary: 'var(--color-bg-primary)',
        bgSecondary: 'var(--color-bg-secondary)',
        textPrimary: 'var(--color-text-primary)',
        textSecondary: 'var(--color-text-secondary)',
        borderColor: 'var(--color-border)'
      },
      boxShadow: {
        elevated: '0 10px 30px rgba(0, 0, 0, 0.22)'
      }
    }
  },
  plugins: []
};
