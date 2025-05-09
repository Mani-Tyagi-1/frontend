"use client";

import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const GlassPlayButton = () => {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Outer glass circle */}
      <div className="absolute w-32 h-32 rounded-full backdrop-blur-md bg-white/10 shadow-lg border border-white/20" />

      {/* Inner grey circle */}
      <div className="absolute w-24 h-24 rounded-full bg-gray-700/80 shadow-inner border border-gray-600/50" />

      {/* Orange play button */}
      <motion.button
        className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
        initial={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)" }}
        whileHover={{
          boxShadow: "0 10px 25px -3px rgba(245, 131, 39, 0.4)",
        }}
      >
        <FaPlay className="text-white text-xl ml-1" />
      </motion.button>

      {/* Subtle reflection effect */}
      <div className="absolute z-20 top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/50 blur-[1px]" />
    </motion.div>
  );
};

export default GlassPlayButton;
