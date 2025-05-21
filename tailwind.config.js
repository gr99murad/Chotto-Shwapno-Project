/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_primary: "#C24C2E", // now you can use bg-primary, text-primary, border-primary, etc.
        'primary-8': '#C24C2E14',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
