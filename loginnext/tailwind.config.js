/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: 
      { 
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        dark: 'var(--background)',
        success: '#31d0aa',
        text: 'var(--text)',
        accent:'var(--accent)'
        },
        fontFamily:{
          robot:'var(--rob)',
          robotital:'var(--robit)',
        }  
    },
  },
  plugins: [],
}