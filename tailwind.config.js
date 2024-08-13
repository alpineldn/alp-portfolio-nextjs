/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '100px',
      },
    },

    fontSize: {
      xxl: [
        '7rem',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: '1.2' },
      ],
      xl: [
        '3.9rem',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: '1.2' },
      ],
      l: [
        '2.8rem',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: '1.2' },
      ],
      m: [
        '1.9rem',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: '1.4' },
      ],
      'm-medium': [
        '1.4rem',
        {
          letterSpacing: '0.02em',
          fontWeight: 400,
          lineHeight: '1.4',
          textTransform: 'uppercase',
        },
      ],
      's-spaced': [
        '1.2rem',
        { letterSpacing: '0.03em', fontWeight: 400, lineHeight: 'normal' },
      ],
      'text-link': [
        '1.2rem',
        { letterSpacing: '0.03em', fontWeight: 400, lineHeight: '1' },
      ],
      'brand-text-link': [
        '1.2rem',
        { letterSpacing: '0.1em', fontWeight: 400, lineHeight: '1' },
      ],
      'section-subtitle': [
        '1.2rem',
        { letterSpacing: '0.1em', fontWeight: 300, lineHeight: '1', textTransform: 'uppercase' },
      ],
      'project-meta': [
        '1.6rem',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: '1.2' },
      ],
      xs: [
        '1rem',
        { letterSpacing: '0.02em', fontWeight: 400, lineHeight: '1.4' },
      ],
    },

    extend: {
      spacing: {
        'section-xxl': '216px',
        'section-xl': '186px',
        'section-lg': '144px',
        'section-md': '113px',
        section: '96px',
        sm: '65px',
        xs: '32px',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        13: 'repeat(13, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
        'span-15': 'span 15 / span 15',
        'span-14': 'span 14 / span 14',
        'span-13': 'span 13 / span 13',
      },

      colors: {
        primary: '#D12245',
        white: '#FFFFFF',
        dark: '#222222',
        gray: '#707070',
        black: '#000000',
        lightGray: '#9A9898',
        darkGray: '#1D1D1D',

        // dark: '#141516',
        // light: '#f5f5f5',
      },
      animation: {
        marquee: 'marquee 2s linear infinite',
      },
      keyframes: {
        marquee: {
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      fontFamily: {
        ppneuemontreal: ['var(--font-ppneuemontreal)'],
      },
      transitionTimingFunction: {
        'smooth-curve': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
