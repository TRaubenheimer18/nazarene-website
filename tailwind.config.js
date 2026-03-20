/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // navy: '#00384D',
        // teal: '#007A96',
        // 'logo-teal': '#4EA6B3',
        // red: '#C21E26',
        // yellow: '#FDB813',
        // sky: '#82C8E6',

        'fynbos': '#4A5D4E',      // The muted olive green of the mountain scrub
        'protea-pink': '#E89396', // The soft pink of the King Protea petals
        'granite': '#4B4B4B',     // The dark gray of the Table Mountain rock face
        'sand': '#F2E8CF',        // The light, warm cream of Clifton & Camps Bay beaches
        'atlantic': '#005F73',    // The deep, cold blue of the Atlantic Ocean
        'sunset': '#FF8C42',
      },
    },
  },
  plugins: [],
}