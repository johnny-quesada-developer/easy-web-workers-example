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
            overflow: "hidden",
          },
          "100%": {
            width: "0",
            padding: "0",
            opacity: 0,
            pointerEvents: "none",
            overflow: "hidden",
          },
        },
        "collapse-to-top": {
          "0%": {
            overflow: "hidden",
          },
          "100%": {
            height: "0",
            padding: "0",
            pointerEvents: "none",
            backgroundColor: "red",
            overflow: "hidden",
          },
        },
        "expand-from-left": {
          "0%": {
            width: "0",
            opacity: 0,
          },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out",
        "collapse-to-left": "collapse-to-left 0.5s ease-out",
        "expand-from-left": "expand-from-left 0.5s ease-in",
        "collapse-to-top": "collapse-to-top 1s ease-in",
      },
    },
  },
  plugins: [],
};
