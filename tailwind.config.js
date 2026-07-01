/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-house': '#42141c', 
        'navy-blue': '#132c43',     
        'sand': '#F2E8CF',        
        'atlantic': '#00384D',    
        'cloud': '#bfccdc',
        'crimson': '#7c2938',
        'light-blue': '#6dacc5',      
      },
    },
  },
  plugins: [],
}