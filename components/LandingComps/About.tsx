"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { JSX, SVGProps } from "react";

// Icon for list items
const CheckCircleIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const listVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  const aboutPoints = [
    "Innovative learning environments designed to inspire curiosity.",
    "Dedicated educators passionate about early childhood development.",
    "A holistic approach focusing on cognitive, social, and emotional growth.",
    "Safe, secure, and welcoming spaces for every child.",
  ];

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-20 md:py-14 px-40 overflow-hidden"
      id="about"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-purple-100 opacity-80 z-0"></div>

        {/* Large gradient circle */}
        <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/3 rounded-full bg-gradient-radial opacity-10 z-0"></div>

        {/* Small floating gradients */}
        <motion.div
          className="absolute top-1/4 left-10 w-24 h-24 rounded-full z-0"
          style={{
            background: `linear-gradient(45deg, var(--gradient-purple-start), var(--gradient-blue-end))`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        ></motion.div>

        <motion.div
          className="absolute bottom-1/4 right-20 w-16 h-16 rounded-full z-0"
          style={{
            background: `linear-gradient(135deg, var(--gradient-blue-start), var(--gradient-purple-end))`,
          }}
          animate={{
            y: [0, 20, 0],
            opacity: [0.07, 0.1, 0.07],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Wavy shapes */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-5 z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="var(--color-accent-glow)"
            fillOpacity="0.7"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,202.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 md:mb-20"
        >
          <h2
            className="text-lg mb-4 font-semibold uppercase tracking-wider"
            style={{ color: "var(--color-accent-glow)" }}
          >
            Who We Are
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl md:text-5xl relative">
            <span className="text-gradient py-2 mb-4">Nurturing Potential,</span>
            <br />
            <span className="relative">
              Inspiring Futures
              <motion.span
                className="absolute -bottom-2 left-1/2 h-1 bg-gradient-animation rounded-full"
                style={{ width: "80px", marginLeft: "-40px" }}
                animate={{
                  width: ["60px", "100px", "60px"],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.span>
            </span>
          </p>
        </motion.div>

        <div className="flex gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className=" w-[70rem]  relative rounded-2xl overflow-hidden shadow-xl shadow-indigo-100"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-blue-500/30 mix-blend-overlay z-10"></div>
            <img
              src="https://i.pinimg.com/736x/da/0c/83/da0c83747f596db117ee11efebaf20c6.jpg"
              alt="Children learning and playing"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-2xl"></div>
          </motion.div>

          {/* Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3
              className="text-3xl md:text-3xl font-semibold mb-4"
              style={{ color: "var(--color-text-strong)" }}
            >
              Our Commitment to Quality
              <span className="text-gradient pl-2"> Childcare & Education</span>
            </h3>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              At Nurture, we believe that every child deserves a bright start.
              Our mission is to provide a supportive and stimulating environment
              where children can explore, learn, and grow at their own pace. We
              combine innovative educational practices with a deep understanding
              of child development to foster a love for learning that lasts a
              lifetime.
            </p>
            <ul className="space-y-4">
              {aboutPoints.map((point, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={listVariants}
                  className="flex items-start group"
                >
                  <CheckCircleIcon
                    className="flex-shrink-0 w-6 h-6 mr-3 mt-0.5 group-hover:scale-110 transition-transform"
                    style={{ color: "var(--color-accent-glow)" }}
                  />
                  <span
                    style={{ color: "var(--color-text-muted)" }}
                    className="group-hover:text-indigo-900 transition-colors"
                  >
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
            <motion.div variants={itemVariants} className="mt-8 pt-4">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 rounded-full font-semibold text-sm transition transform hover:scale-105 shadow-glow"
                style={{
                  background:
                    "linear-gradient(to right, var(--gradient-purple-start), var(--gradient-blue-end))",
                  color: "var(--color-white)",
                }}
              >
                <span>Discover Our Programs</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
