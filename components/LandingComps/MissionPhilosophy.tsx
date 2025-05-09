"use client";

import { motion } from "framer-motion";
// import AnimatedDotsBackground from "./AnimatedDotsBackground"; // Adjust path

const orangeColor = "#F58327";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3, // Stagger the animation of child cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function MissionPhilosophySection() {
  const missionContent = {
    title: "Our Mission",
    description:
      "To empower every child with the foundational skills, confidence, and curiosity needed to thrive in a dynamic world. We are committed to providing exceptional care and innovative educational experiences that foster holistic development in a safe, nurturing, and inclusive environment.",
  };

  const philosophyContent = {
    title: "Our Philosophy",
    description:
      "We believe that learning is a joyful journey of discovery. Our play-based, child-centered approach encourages exploration and creativity. We value individuality, cultivate respect, and partner with families to support each child's unique path to success, inspiring a lifelong love for learning.",
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }} // Trigger when 25% of the section is visible
      className="relative bg-black text-white py-16 md:py-24 overflow-hidden"
      id="mission-philosophy" // Optional ID for navigation
    >
      {/* <AnimatedDotsBackground dotOpacity="opacity-[0.05]" /> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Guiding <span style={{ color: orangeColor }}>Principles</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-neutral-400 lg:mx-auto">
            The core values that drive our approach to childcare and education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            className="bg-neutral-800 p-6 md:p-8 rounded-xl shadow-2xl flex flex-col hover:shadow-orange-500/20 transition-shadow duration-300"
          >
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: orangeColor }}
            >
              {missionContent.title}
            </h3>
            <p className="text-neutral-300 leading-relaxed flex-grow">
              {missionContent.description}
            </p>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            variants={cardVariants}
            className="bg-neutral-800 p-6 md:p-8 rounded-xl shadow-2xl flex flex-col hover:shadow-orange-500/20 transition-shadow duration-300"
          >
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: orangeColor }}
            >
              {philosophyContent.title}
            </h3>
            <p className="text-neutral-300 leading-relaxed flex-grow">
              {philosophyContent.description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
