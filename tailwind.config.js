// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "scroll-left": "scrollLeft 15s linear infinite",
      },
    },
  },
};
