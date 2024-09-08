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
        'clamp(3.9rem, 6vw, 7rem)',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: '1.2' },
      ],
      'link-xxl': [
        'clamp(2rem, 5vw + 2vh, 7rem)',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: '1.2' },
      ],

      xl: [
        'clamp(2.8rem, 5vw, 3.9rem)',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: '1.2' },
      ],

      l: [
        'clamp(2rem, 4vw, 2.8rem)',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: '1.2' },
      ],

      m: [
        'clamp(1.5rem, 3vw, 1.9rem)',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: '1.4' },
      ],

      'm-medium': [
        'clamp(1.2rem, 2vw, 1.4rem)',
        {
          letterSpacing: '0.02em',
          fontWeight: 500,
          lineHeight: '1.4',
          textTransform: 'uppercase',
        },
      ],

      's-spaced': [
        'clamp(1rem, 1.5vw, 1.2rem)',
        { letterSpacing: '0.03em', fontWeight: 400, lineHeight: 'normal' },
      ],

      link: [
        'clamp(1rem, 1.5vw, 1.2rem)',
        { letterSpacing: '0.03em', fontWeight: 400, lineHeight: '1' },
      ],

      'brand-text-link': [
        'clamp(1.2rem, 2vw, 1.4rem)',
        { letterSpacing: '0.1em', fontWeight: 400, lineHeight: '1' },
      ],

      'section-subtitle': [
        'clamp(1rem, 1.5vw, 1.2rem)',
        {
          letterSpacing: '0.1em',
          fontWeight: 300,
          lineHeight: '1',
          textTransform: 'uppercase',
        },
      ],

      'project-meta': [
        'clamp(1.2rem, 2vw, 1.6rem)',
        { letterSpacing: '0.01em', fontWeight: 400, lineHeight: '1.2' },
      ],

      xs: [
        'clamp(0.875rem, 1vw, 1rem)',
        { letterSpacing: '0.02em', fontWeight: 400, lineHeight: '1.4' },
      ],

      'loading-text': [
        'clamp(2.5rem, 6vw, 3rem)',
        {
          letterSpacing: '0.06em',
          fontWeight: 400,
          lineHeight: '1.2',
          textTransform: 'uppercase',
        },
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
        dark: '#141414',
        gray: '#505050',
        black: '#000000',
        lightGray: '#888888',
        darkGray: '#111111',
        red: '#D12245',

        // dark: '#141516',
        // light: '#f5f5f5',
      },
      animation: {
        marquee: 'marquee 2s linear infinite',
        grain: 'grain 8s steps(10) infinite',
      },
      keyframes: {
        marquee: {
          '100%': { transform: 'translateX(-50%)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, -20%)' },
          '30%': { transform: 'translate(-5%, -10%)' },
          '40%': { transform: 'translate(-15%, -20%)' },
          '50%': { transform: 'translate(-5%, -10%)' },
          '60%': { transform: 'translate(-15%, -20%)' },
          '70%': { transform: 'translate(-5%, -10%)' },
          '80%': { transform: 'translate(-15%, -20%)' },
          '90%': { transform: 'translate(-5%, -10%)' },
        },
      },

      backgroundImage: {
        noise:
          "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')",
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
