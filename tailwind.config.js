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
        "spin-slow-glow":
          "spin 6s linear infinite, pulseGlow 2.5s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            boxShadow:
              "0 0 10px rgba(0, 191, 255, 0.6), 0 0 20px rgba(30, 144, 255, 0.6)",
          },
          "50%": {
            boxShadow:
              "0 0 20px rgba(0, 191, 255, 0.8), 0 0 40px rgba(30, 144, 255, 0.8)",
          },
        },
      },
    },
  },
};
