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
        text: 'var(--text)',
        accent:'var(--accent)',
        error: 'var(--error)',
        warning: 'var(--warning)',
        info: 'var(--info)',
        success: 'var(--success)',
        
        },
        fontFamily:{
          robot:'var(--rob)',
          robotital:'var(--robit)',
        }  
    },
  },
  plugins: [],
}