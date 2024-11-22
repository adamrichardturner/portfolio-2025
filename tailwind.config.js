/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
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
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        lightSecondary: {
          DEFAULT: 'hsl(var(--light-secondary))',
          foreground: 'hsl(var(--light-secondary-foreground))',
        },
        tertiary: '#484848',
        body: '#1E1E1E',
        caption: '#3A3A3A',
        light: '#F3F3F3',
        cream: '#F8F8F8',
        mutedLighter: 'hsl(var(--muted-lighter))',
        altdark: '#1E293B',
        captiontext: '#1E1E1E',
        'form-input': '#F6F6F6',
        'form-border': '#E7E7E7',
        background: 'hsl(var(--background))',
        darkBackground: 'hsl(var(--dark-background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        justWhite: 'hsl(var(--just-white))',
        whitest: 'hsl(var(--whitest))',
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
        center: 'true',
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
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      dropShadow: {
        xl: '0 4px 6px rgba(0, 0, 0, 0.5)',
        '2xl': '0 8px 10px rgba(0, 0, 0, 0.7)',
        md: '0 4px 6px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow'), require('tailwindcss-animate')],
};
