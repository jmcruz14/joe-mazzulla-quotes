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
    }
  },
  plugins: [
    daisyui,
    "@tailwindcss/typography"
  ],
  daisyui: {
    themes: ["dark", "light", "forest"]
  }
}

