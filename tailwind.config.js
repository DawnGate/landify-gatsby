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
        md: [
          '2.25rem',
          {
            lineHeight: '2.8125rem',
            letterSpacing: '-0.9px',
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
    },
  },
  plugins: [],
}
