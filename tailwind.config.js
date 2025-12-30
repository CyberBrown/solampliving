/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        solampliving: {
          primary: '#f59e0b',
          'primary-content': '#ffffff',
          secondary: '#22c55e',
          'secondary-content': '#ffffff',
          accent: '#0ea5e9',
          'accent-content': '#ffffff',
          neutral: '#1f2937',
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-300': '#e5e7eb',
        },
      },
      'light',
      'dark',
    ],
    darkTheme: 'dark',
  },
}
