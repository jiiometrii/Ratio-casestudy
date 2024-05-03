/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{js,jsx,ts,tsx}",
    "./screens/*.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zilla: ['zilla'],
        outfit: ['outfit'],
        'outfit-bold': ['outfit-bold'],
        'outfit-semibold': ['outfit-semibold'],
        'outfit-light': ['outfit-light'],
        'zilla-bold': ['zilla-bold'],
        'zilla-semibold': ['zilla-semibold'],
        'zilla-light': ['zilla-light'],
      },
    },
  },
  plugins: [],
}

