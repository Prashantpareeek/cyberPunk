/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
      },
      colors: {
        'cyber-blue': '#00ffff',
        'cyber-pink': '#ff00ff',
        'cyber-yellow': '#ffff00',
        'cyber-green': '#00ff00',
      },
      animation: {
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'cyber-pulse': 'cyber-pulse 2s infinite',
        'glitch': 'glitch 2s infinite',
      }
    },
  },
  plugins: [],
}

