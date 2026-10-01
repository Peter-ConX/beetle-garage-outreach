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
          bg: '#0D0F10',
          secondary: '#151719',
          card: '#1B1D1F',
          elevated: '#232629',
          yellow: '#F5B82E',
          gold: '#D89B20',
          text: '#F2F2F0',
          muted: '#A8AAAC',
          border: '#34373A'
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
