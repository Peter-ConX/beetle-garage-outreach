/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        garage: {
          bg: 'var(--garage-bg)',
          secondary: 'var(--garage-secondary)',
          card: 'var(--garage-card)',
          elevated: 'var(--garage-elevated)',
          yellow: 'var(--garage-yellow)',
          gold: 'var(--garage-gold)',
          text: 'var(--garage-text)',
          muted: 'var(--garage-muted)',
          border: 'var(--garage-border)'
        }
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
