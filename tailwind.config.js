// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        "scroll-right": "scrollRight 20s linear infinite",
      },
      keyframes: {
        scrollRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
