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
          bg: '#F5F5F3',
          text: '#1F2937',
          accent: '#D97706',
          'accent-hover': '#B45309',
          'accent-light': '#FEF3C7',
          dark: '#111827',
          'dark-surface': '#1F2937',
          'dark-border': '#374151',
          muted: '#6B7280',
          light: '#FFFFFF',
          border: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'accent-glow': '0 0 20px -3px rgba(217, 119, 6, 0.25)',
      }
    },
  },
  plugins: [],
}
