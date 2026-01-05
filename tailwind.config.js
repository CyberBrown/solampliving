/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        'forest': {
          DEFAULT: '#042e0d',
          light: '#0a4a18',
          dark: '#021f08',
        },
        'vibrant': {
          DEFAULT: '#56c270',
          light: '#7dd493',
          dark: '#3da557',
        },
        'solamp-blue': {
          DEFAULT: '#5974c3',
          light: '#7a91d4',
          dark: '#4259a3',
        },
        'bronze': {
          DEFAULT: '#c3a859',
          light: '#d4be7a',
          dark: '#a38a3d',
        },
        // Neutral Colors
        'mist': '#f1f1f2',
        'mint': '#b1e1bc',
      },
      fontFamily: {
        headline: ['Barlow', 'system-ui', 'sans-serif'],
        subheading: ['Barlow Semi Condensed', 'system-ui', 'sans-serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'ui-monospace', 'monospace'],
      },
      spacing: {
        // Component-specific spacing
        'section': '4rem',
        'section-sm': '2rem',
        'section-lg': '6rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        solamp: {
          'primary': '#042e0d',           // Forest Green
          'primary-content': '#ffffff',
          'secondary': '#56c270',         // Vibrant Green
          'secondary-content': '#042e0d',
          'accent': '#b1e1bc',            // Soft Mint
          'accent-content': '#042e0d',
          'neutral': '#4a5568',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f1f1f2',          // Pale Mist
          'base-300': '#e2e8f0',
          'base-content': '#042e0d',
          'info': '#5974c3',              // Solamp Blue
          'info-content': '#ffffff',
          'success': '#56c270',           // Vibrant Green
          'success-content': '#042e0d',
          'warning': '#c3a859',           // Bronze
          'warning-content': '#042e0d',
          'error': '#dc2626',
          'error-content': '#ffffff',
        },
      },
      'light',
      'dark',
    ],
    defaultTheme: 'solamp',
  },
}
