import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        xs: '1rem',
      },
    },
    screens: {
      xs: '320px',
      sm: '601px',
      'lxs-sm': { min: '410px', max: '601px' },
      'xs-md': { min: '320px', max: '767px' },
      'sm-md': { min: '450px', max: '767px' },
      'xs-xl': { min: '320px', max: '1366px' },
      md: '768px',
      lg: '1024px',
      xl: '1366px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        'brand-purple': '#250e47',
        'brand-dark-purple': '#190a2f',
        'brand-pink': '#d05094',
        'brand-light-pink': '#d973a9',
        'brand-dark': '#110722',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
export default config;
