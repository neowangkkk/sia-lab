/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#2c2420',
        paper: '#faf6f0',
        muted: '#8a7e74',
        rule: '#e8e0d6',
        accent: '#b56a3a',
        'accent-light': '#f3e8dd',
        warm: '#f5ede4',
      },
      maxWidth: {
        prose: '68ch',
      },
      borderRadius: {
        soft: '0.75rem',
      },
      boxShadow: {
        gentle: '0 2px 20px rgba(44, 36, 32, 0.06)',
        hover: '0 4px 30px rgba(44, 36, 32, 0.10)',
      },
    },
  },
  plugins: [],
};
