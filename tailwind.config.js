/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#4C1D95',
          600: '#7C3AED',
          100: '#EDE9FE',
        },
        secondary: {
          900: '#2A4E51',
        },
        neutral: {
          900: '#111827',
          700: '#374151',
        },
        accent: {
          1: '#C1E5C0',
        },
      },
      fontSize: {
        xl: [
          '3.75rem',
          {
            lineHeight: '4.5rem',
            letterSpacing: '-1.8px',
          },
        ],
        lg: [
          '3rem',
          {
            lineHeight: '3.75rem',
            letterSpacing: '-1.2px',
          },
        ],
        md: [
          '2.25rem',
          {
            lineHeight: '2.8125rem',
            letterSpacing: '-0.9px',
          },
        ],
        sm: [
          '1.875rem',
          {
            lineHeight: '2.5rem',
            letterSpacing: 'normal',
          },
        ],
        xs: [
          '1.5rem',
          {
            lineHeight: '2rem',
            letterSpacing: 'normal',
          },
        ],
        'body-lg': [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: 'normal',
          },
        ],
        'body-md': [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: 'normal',
          },
        ],
        'body-sm': [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            letterSpacing: 'normal',
          },
        ],
        'body-xs': [
          '0.75rem',
          {
            lineHeight: '1rem',
            letterSpacing: 'normal',
          },
        ],
      },
      screens: {
        phone: '375px',
        tablet: '768px',
        laptop: '1280px',
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(17, 24, 39, 0.05)',
        sm: '0px 1px 2px 0px rgba(17, 24, 39, 0.06), 0px 1px 3px 0px rgba(17, 24, 39, 0.10)',
        md: '0px 2px 4px -2px rgba(17, 24, 39, 0.06), 0px 4px 8px -2px rgba(17, 24, 39, 0.10)',
        lg: '0px 4px 6px -2px rgba(17, 24, 39, 0.05), 0px 12px 16px -4px rgba(17, 24, 39, 0.10)',
        xl: '0px 8px 8px -4px rgba(17, 24, 39, 0.04), 0px 20px 24px -4px rgba(17, 24, 39, 0.10)',
        '2xl': '0px 24px 48px -12px rgba(17, 24, 39, 0.25)',
      },
    },
  },
  plugins: [],
}
