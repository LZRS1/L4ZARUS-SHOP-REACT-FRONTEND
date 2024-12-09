/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  backgroundImage: {
      'custom-gradient': 'linear-gradient(90deg, #E92E29, #fcc60e)',
    },
  },
  },
  plugins: [],
}