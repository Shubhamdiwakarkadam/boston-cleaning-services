/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#102B4E',
          'navy-dark': '#0B1E37',
          'navy-light': '#183C6C',
          royal: '#1769AA',
          'royal-hover': '#13568C',
          cyan: '#20C4D8',
          'cyan-hover': '#17AFC2',
          'cyan-light': '#EBFBFD',
          'cyan-soft': '#D3F5F9',
          white: '#FFFFFF',
          bg: '#F4F8FC',
          'bg-alt': '#EAF2F9',
          dark: '#172536',
          muted: '#5A6E85',
          border: '#D8E5F0',
        }
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(16, 43, 78, 0.08)',
        'soft-lg': '0 10px 30px -4px rgba(16, 43, 78, 0.12)',
        'card': '0 2px 12px 0 rgba(16, 43, 78, 0.06)',
      }
    },
  },
  plugins: [],
}
