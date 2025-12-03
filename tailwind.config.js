/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
        },
        accent: {
          DEFAULT: '#C41E3A',
          light: '#E63946',
          dark: '#8B1525',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E4BC',
          dark: '#B8941F',
        },
        beige: {
          DEFAULT: '#F5F1E8',
          light: '#FAF8F3',
          dark: '#E8E0D0',
        },
        secondary: {
          DEFAULT: '#3A3A3A',
          light: '#4A4A4A',
        },
        highlight: {
          DEFAULT: '#FF6B35',
          light: '#FF8E5E',
        },
        neutral: {
          DEFAULT: '#FAF8F3',
          dark: '#E8E0D0',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'headline': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'headline-sm': ['1.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      borderRadius: {
        'card': '8px',
        'modal': '16px',
        'xl': '24px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'strong': '0 16px 60px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 40px rgba(207, 175, 106, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

