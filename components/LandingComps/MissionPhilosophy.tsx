"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
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
      viewport={{ once: true, amount: 0.25 }}
      className="relative py-20 md:py-28 overflow-hidden"
      id="mission-philosophy"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-indigo-50 to-white opacity-70 z-0"></div>

        {/* Decorative shapes */}
        <svg
          className="absolute right-0 top-0 h-64 w-64 text-purple-100 opacity-25 z-0"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M44.5,-76.4C59.6,-69.9,74.6,-60.8,83.7,-47.1C92.8,-33.5,96,-16.3,94.7,0.1C93.4,16.6,87.5,32.3,77.1,44.5C66.7,56.7,51.9,65.4,36.5,72.4C21.1,79.4,5.2,84.8,-9.2,83.9C-23.6,83,-36.6,75.9,-47.8,66.6C-59,57.4,-68.5,46.1,-74.1,32.6C-79.8,19.1,-81.6,3.3,-79.3,-11.5C-77,-26.4,-70.6,-40.3,-60.2,-48.3C-49.8,-56.4,-35.4,-58.4,-22.4,-64.5C-9.5,-70.6,2.1,-80.9,15.6,-83.1C29.1,-85.3,44.2,-79.3,44.5,-76.4Z"
            transform="translate(100 100)"
            fill="currentColor"
          />
        </svg>

        <svg
          className="absolute left-0 bottom-0 h-64 w-64 text-indigo-100 opacity-20 z-0"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M34.6,-59.5C43.5,-53.5,48.5,-40.9,54.3,-29.1C60.1,-17.3,66.8,-6.3,67.5,5.3C68.2,16.9,62.9,29.1,54.3,38.7C45.7,48.3,33.7,55.2,21.1,60.1C8.5,65,-4.7,67.8,-17.4,65.7C-30.2,63.6,-42.5,56.7,-51.1,46.6C-59.7,36.6,-64.7,23.5,-67.7,9.4C-70.7,-4.6,-71.7,-19.7,-65.7,-30.8C-59.7,-41.9,-46.6,-49.1,-34.1,-54C-21.5,-58.9,-9.4,-61.5,2.2,-65.1C13.9,-68.7,27.8,-73.3,34.6,-59.5Z"
            transform="translate(100 100)"
            fill="currentColor"
          />
        </svg>

        {/* Floating dots */}
        <div className="absolute inset-0 z-0">
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  backgroundColor:
                    i % 2 === 0
                      ? "var(--color-accent-soft)"
                      : "var(--color-primary-light)",
                  width: `${Math.random() * 12 + 4}px`,
                  height: `${Math.random() * 12 + 4}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 30 - 15],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Guiding <span className="text-gradient">Principles</span>
          </h2>
          <p
            className="mt-4 max-w-2xl text-xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            The core values that drive our approach to childcare and education.
          </p>
          <div className="w-24 h-1 bg-gradient-animation rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            className="relative p-8 md:p-10 rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              border: "1px solid rgba(221, 214, 254, 0.3)",
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
          >
            <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-gradient-radial opacity-20"></div>

            <div
              className="mb-6 w-14 h-14 rounded-xl flex items-center justify-center shadow-glow"
              style={{
                background:
                  "linear-gradient(135deg, var(--gradient-blue-start), var(--gradient-purple-end))",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-accent-glow)" }}
            >
              {missionContent.title}
            </h3>

            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {missionContent.description}
            </p>

            <div
              className="w-16 h-1 mt-6 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, var(--gradient-blue-start), var(--gradient-blue-end))",
              }}
            ></div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            variants={cardVariants}
            className="relative p-8 md:p-10 rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              border: "1px solid rgba(221, 214, 254, 0.3)",
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
          >
            <div className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-gradient-radial opacity-20"></div>

            <div
              className="mb-6 w-14 h-14 rounded-xl flex items-center justify-center shadow-glow"
              style={{
                background:
                  "linear-gradient(135deg, var(--gradient-purple-start), var(--gradient-blue-end))",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>

            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-accent-glow)" }}
            >
              {philosophyContent.title}
            </h3>

            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {philosophyContent.description}
            </p>

            <div
              className="w-16 h-1 mt-6 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, var(--gradient-purple-start), var(--gradient-purple-end))",
              }}
            ></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
