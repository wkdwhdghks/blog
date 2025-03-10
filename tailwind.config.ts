import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',

        border: 'var(--border)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        secondary: {
          background: 'var(--secondary-background)',
          foreground: 'var(--secondary-foreground)',
        },

        tertiary: {
          background: 'var(--tertiary-background)',
        },

        accent: {
          foreground: 'var(--accent-foreground)',
          background: 'var(--accent-background)',
        },
      },
      zIndex: {
        header: '50',
      },
    },
  },
  plugins: [animate],
} satisfies Config;
