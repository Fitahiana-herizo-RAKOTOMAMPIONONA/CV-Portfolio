/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 5s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
}
