/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0b0d10',
        ink: '#12141a',
        panel: '#161920',
        glow: '#d4af37',
        glowSoft: '#f1d675',
        bone: '#e2e8f0',
        ash: '#8ba0b8',
        blood: '#e74c3c'
      },
      fontFamily: {
        pixel: ['var(--font-cairo)', 'Segoe UI', 'Tahoma', 'sans-serif'],
        sans: ['var(--font-cairo)', 'Segoe UI', 'Tahoma', 'sans-serif']
      },
      screens: { xs: '400px' }
    }
  },
  plugins: []
};
