/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
        },
        "collapse-to-left": {
          "0%": {
            width: "100%",
            overflow: "hidden",
          },
          "100%": {
            width: "0",
            opacity: 0,
            pointerEvents: "none",
          },
        },
        "expand-from-left": {
          "0%": {
            width: "0",
            opacity: 0,
            overflow: "hidden",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out",
        "collapse-to-left": "collapse-to-left 0.5s ease-out forwards",
        "expand-from-left": "expand-from-left 0.5s ease-in",
      },
    },
  },
  plugins: [],
};
