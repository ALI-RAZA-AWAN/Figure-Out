/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0A0A0A',
          secondary: '#111111',
          card: '#161616',
        },
        accent: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
        },
        border: {
          subtle: '#1F1F1F',
        },
        ink: {
          primary: '#FFFFFF',
          secondary: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) translateX(-15px) scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(245, 158, 11, 0.6)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        floatSlow: 'floatSlow 12s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
