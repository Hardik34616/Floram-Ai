/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#d4d4d8', // zinc-300
            maxWidth: '100%',
            strong: {
              color: '#3b82f6', // blue-500
              fontWeight: '800',
            },
            h1: {
              color: '#f4f4f5', // zinc-100
              borderBottom: '1px solid #27272a', // zinc-800
              paddingBottom: '0.5rem',
              fontWeight: '800',
            },
            h2: {
              color: '#f4f4f5',
              borderBottom: '1px solid #27272a',
              paddingBottom: '0.25rem',
              fontWeight: '700',
            },
            h3: {
              color: '#f4f4f5',
              fontWeight: '700',
            },
            'ul > li::before': {
              backgroundColor: '#3b82f6',
            },
            code: {
              color: '#60a5fa', // blue-400
              backgroundColor: '#18181b', // zinc-900
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            blockquote: {
              borderLeftColor: '#3b82f6',
              fontStyle: 'italic',
              background: '#09090b', // zinc-950
              padding: '1rem',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
