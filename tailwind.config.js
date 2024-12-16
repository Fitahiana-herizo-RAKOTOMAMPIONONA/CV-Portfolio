/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    extend: {
      animation:  "marquee 5s linera infinite",
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(100%)"
          },
          to:{
            transform: "translateX(-100%)"
          }
        }
      }
    }
  },
  plugins: [],
}

