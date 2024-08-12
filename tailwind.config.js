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
        '144px',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: 'normal' },
      ],
      xl: [
        '70px',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: 'normal' },
      ],
      l: [
        '50px',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: '66px' },
      ],
      m: [
        '36px',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: 'normal' },
      ],
      'm-medium': [
        '36px',
        {
          letterSpacing: '0.02em',
          fontWeight: 500,
          lineHeight: 'normal',
          textTransform: 'uppercase',
        },
      ],
      's-spaced': [
        '24px',
        { letterSpacing: '0.03em', fontWeight: 400, lineHeight: 'normal' },
      ],
      'text-link': [
        '24px',
        { letterSpacing: '0.03em', fontWeight: 400, lineHeight: 'normal' },
      ],
      'section-subtitle': [
        '32px',
        { letterSpacing: '0.1em', fontWeight: 400, lineHeight: 'normal' },
      ],
      'project-meta': [
        '36px',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: '50px' },
      ],
      xs: [
        '18px',
        { letterSpacing: '0.02em', fontWeight: 400, lineHeight: '20px' },
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
