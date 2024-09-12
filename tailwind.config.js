import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Inter']
    },
    colors: {
      celtics: {
        green: '#007A33', // Celtics Green
        white: '#FFFFFF', // White
        gold: '#BA9653',  // Celtics Gold
        black: '#000000', // Black
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'), 
    daisyui,
  ],
  daisyui: {
    themes: ["dark", "light", "forest", {
        celtics: {
          primary: '#007A33', // Celtics Green
          secondary: '#FFFFFF', // White
          accent: '#BA9653', // Celtics Gold
          neutral: '#000000', // Black
          'base-100': '#FFFFFF', // Background white
          info: '#A6D3A0', // Light Green (info color variation)
          success: '#007A33', // Same Celtics Green for success
          warning: '#F2C94C', // Light Gold/Yellow for warning
          error: '#E74C3C', // Red for errors
        },
      },
    ]
  }
}

