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
        { letterSpacing: '1%', fontWeight: 400, lineHeight: 'normal' },
      ],
      xl: [
        '70px',
        { letterSpacing: '1%', fontWeight: 400, lineHeight: 'normal' },
      ],
      l: ['50px', { letterSpacing: '1%', fontWeight: 400, lineHeight: '66px' }],
      m: [
        '36px',
        { letterSpacing: '1%', fontWeight: 400, lineHeight: 'normal' },
      ],
      'm-medium': [
        '36px',
        {
          letterSpacing: '2%',
          fontWeight: 500,
          lineHeight: 'normal',
          textTransform: 'uppercase',
        },
      ],
      's-spaced': [
        '24px',
        { letterSpacing: '3%', fontWeight: 400, lineHeight: 'normal' },
      ],
      'text-link': [
        '24px',
        { letterSpacing: '3%', fontWeight: 400, lineHeight: 'normal' },
      ],
      'section-subtitle': [
        '32px',
        { letterSpacing: '10%', fontWeight: 400, lineHeight: 'normal' },
      ],
      'project-meta': [
        '36px',
        { letterSpacing: '1%', fontWeight: 400, lineHeight: '50px' },
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
      fontSize: {
        // h1: ['clamp(3.5rem, 5.5vw + 1rem, 7.5rem)', { lineHeight: '1.2' }],
        // h2: ['clamp(3rem, 5vw + 1rem, 6.5rem)', { lineHeight: '1.25' }],
        // h3: ['1.65rem', { lineHeight: '1.2' }],
        // 'h3-sm': ['1.875rem', { lineHeight: '2.25' }],
        // 'h3-lg': ['2.25rem', { lineHeight: '2.5' }],
        // 'h3-2xl': ['3.75rem', { lineHeight: '1' }],
        // h4: ['1.375rem', { lineHeight: '1.35' }],
        // 'h4-sm': ['1.625rem', { lineHeight: '1.75' }],
        // 'h4-lg': ['2rem', { lineHeight: '2' }],
        // 'h4-2xl': ['2.875rem', { lineHeight: '1.25' }],
        // h5: ['1.25rem', { lineHeight: '1.5' }],
        // 'h5-sm': ['1.5rem', { lineHeight: '1.5' }],
        // 'h5-lg': ['1.875rem', { lineHeight: '1.5' }],
        // 'h5-2xl': ['2.25rem', { lineHeight: '1.5' }],
        // body1: ['1rem', { lineHeight: '1.5' }],
        // 'body1-md': ['1.125rem', { lineHeight: '1.75' }],
        // 'body1-xl': ['1.25rem', { lineHeight: '1.75' }],
        // body2: ['0.75rem', { lineHeight: '1' }],
        // 'body2-md': ['0.875rem', { lineHeight: '1.25' }],
        // bold: ['1rem', { lineHeight: '1.5' }],
        // 'bold-sm': ['0.875rem', { lineHeight: '1.5' }],
        // nav1: ['2.25rem', { lineHeight: '1' }],
        // 'nav1-md': ['3rem', { lineHeight: '1.15' }],
        // 'nav1-xl': ['3.75rem', { lineHeight: '1.25' }],
        // link1: ['1rem', { lineHeight: '1.5' }],
        // 'link1-md': ['1.125rem', { lineHeight: '1.5' }],
        // 'link1-xl': ['1.25rem', { lineHeight: '1.5' }],
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
