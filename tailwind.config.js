// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Indica a Tailwind que analice estos archivos
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
