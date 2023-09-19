/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url(https://cdn.statically.io/img/www.dominicanabroad.com/f=auto%2Cq=90/wp-content/uploads/2022/10/amanera-3-1024x714.jpg)"
      },
      colors: {
        'light-pink': "#FFB5A7"
      }
    },
  },
  plugins: [],
}
