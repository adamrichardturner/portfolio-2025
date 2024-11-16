/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'var(--font-inter)',
        league: 'var(--font-league)',
      },
      colors: {
        primary: '#0C121C', // old: #2F38D9
        secondary: '#42684F', // #2A9DF4 #FFC436
        tertiary: '#484848',
        body: '#1E1E1E',
        caption: '#3A3A3A',
        light: '#F3F3F3',
        cream: '#F8F8F8',
        altdark: '#1E293B',
        captiontext: '#1E1E1E',
        'form-input': '#F6F6F6',
        'form-border': '#E7E7E7',
      },
      fontSize: {
        xxs: '0.6rem',
        xs: '0.75rem',
        sm: '0.8rem',
        base: '1rem',
        lg: '2rem',
        xl: '1.25rem',
        xxl: '2.75rem',
        xxxl: '3.5rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '4rem',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '640px',
          lg: '1024px',
          xl: '1024px',
          '2xl': '1024px',
        },
      },
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1536px',
      },
      boxShadow: {
        md: `0px 6px 16px 0px rgba(0, 0, 0, 0.06)`,
      },
      textShadow: {
        md: '0 0 8px rgb(74, 222, 128)',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
