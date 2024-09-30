import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/client/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Background Colors
      backgroundColor: {
        brand: {
          DEFAULT: '#2c2c2c',
          secondary: '#e6e6e6',
          tertiary: '#f5f5f5',
          hover: {
            DEFAULT: '#1e1e1e',
            secondary: '#d9d9d9',
            tertiary: '#e6e6e6',
          },
        },
        danger: {
          DEFAULT: '#ec221f',
          secondary: '#fdd3d0',
        },
        disabled: {
          DEFAULT: '#d9d9d9',
        },
        positive: {
          secondary: '#cff7d3',
        },
      },

      // Border Colors
      borderColor: {
        DEFAULT: '#d9d9d9',
        disabled: '#d3d3d3',
        hover: '#777777',
      },

      outlineColor: {
        DEFAULT: '#d9d9d9',
        disabled: '#d3d3d3',
        hover: '#777777',
      },

      // Global Colors
      colors: {
        link: '#0c63ce',
      },

      // Text Colors
      textColor: {
        brand: {
          DEFAULT: '#2c2c2c',
          secondary: '#444444',
          tertiary: '#757575',
          quaternary: '#b3b3b3',
        },
        danger: {
          DEFAULT: '#900b09',
          secondary: '#c00f0c',
          tertiary: '#ec221f',
        },
        disabled: {
          DEFAULT: '#b3b3b3',
        },
        positive: {
          DEFAULT: '#02542d',
          secondary: '#009951',
          tertiary: '#14ae5c',
        },
        warning: {
          DEFAULT: '#522504',
          secondary: '#975102',
          tertiary: '#bf6a02',
        },
        on: {
          brand: {
            DEFAULT: '#f5f5f5',
            secondary: '#1e1e1e',
            tertiary: '#2c2c2c',
          },
          danger: {
            DEFAULT: '#fee9e7',
            secondary: '#900b09',
            tertiary: '#900b09',
          },
          positive: {
            DEFAULT: '#ebffee',
            secondary: '#02542d',
            tertiary: '#02542d',
          },
          warning: {
            DEFAULT: '#401b01',
            secondary: '#682d03',
            tertiary: '#522504',
          },
        },
      },

      // Font Families
      fontFamily: {
        sans: ['var(--font-inter)'],
      },

      // Font Sizes
      fontSize: {
        title: [
          '4rem',
          {
            fontWeight: 700,
            letterSpacing: '-2%',
            lineHeight: '1.2',
          },
        ],
        subtitle: [
          '2rem',
          {
            lineHeight: '1.2',
          },
        ],
        heading: [
          '1.5rem',
          {
            fontWeight: 600,
            lineHeight: '1.2',
          },
        ],
        subheading: [
          '1.25rem',
          {
            lineHeight: '1.2',
          },
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.4',
          },
        ],
        small: [
          '0.875rem',
          {
            lineHeight: '1.4',
          },
        ],
        tiny: [
          '0.75rem',
          {
            lineHeight: '1',
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
