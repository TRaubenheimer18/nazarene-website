/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#00384D',
        teal: '#007A96',
        'logo-teal': '#4EA6B3',
        red: '#C21E26',
        yellow: '#FDB813',
        sky: '#82C8E6',
      },
    },
  },
  plugins: [],
}