module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px',
    },
    fontFamily: {
      'space-mono': ['Space Mono', 'system-ui'],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      bold: '700',
    },
    extend: {
      colors: {
        primary: 'hsl(172, 67%, 45%)',
        'neutral-100': 'hsl(189, 41%, 97%)',
        'neutral-200': 'hsl(185, 41%, 84%)',
        'neutral-300': 'hsl(184, 14%, 56%)',
        'neutral-400': 'hsl(186, 14%, 43%)',
        'neutral-500': 'hsl(183, 100%, 15%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
