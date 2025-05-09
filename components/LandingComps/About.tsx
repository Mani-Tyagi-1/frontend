"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { JSX, SVGProps } from "react";
// import AnimatedDotsBackground from "./AnimatedDotsBackground"; // Adjust path
// Optional: If you want to use the subtle pattern as a backdrop for this section
// import Image from "next/image"; // (already imported)

// Icon for list items (optional, but nice touch)
const CheckCircleIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
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

const orangeColor = "#F58327";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
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
      className="relative bg-black text-white py-16 md:py-24 overflow-hidden"
      id="about" // Optional ID for navigation
    >
      {/* Subtle dots, perhaps a bit less opaque than the hero */}
      {/* <AnimatedDotsBackground dotOpacity="opacity-[0.05]" /> */}

      {/* Optional: Subtle pattern as a general backdrop for this section if desired
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/subtle-pattern.svg"
          alt="Subtle background pattern"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          objectFit="cover"
          className="opacity-[0.03]"
        />
      </div>
      */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: orangeColor }}
          >
            Who We Are
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Nurturing Potential, Inspiring Futures
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-16 items-center">
          {/* Left Column: Image */}
          <motion.div variants={itemVariants}>
            <div className="aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              {/* Replace with your actual image */}
              <img
                src="https://i.pinimg.com/736x/da/0c/83/da0c83747f596db117ee11efebaf20c6.jpg"
                alt="Children learning and playing"
                style={{ width: "70%", height: "50%", objectFit: "cover" }}
                className=" hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Our Commitment to Quality Childcare & Education
            </h3>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              At Nurture, we believe that every child deserves a bright start.
              Our mission is to provide a supportive and stimulating environment
              where children can explore, learn, and grow at their own pace. We
              combine innovative educational practices with a deep understanding
              of child development to foster a love for learning that lasts a
              lifetime.
            </p>
            <ul className="space-y-3">
              {aboutPoints.map((point, index) => (
                <motion.li
                  key={index}
                  custom={index} // For staggerChildren if used with variants
                  variants={listVariants} // Applying individual item animation
                  className="flex items-start"
                >
                  <CheckCircleIcon
                    className="flex-shrink-0 w-6 h-6 mr-3 mt-0.5"
                    style={{ color: orangeColor }}
                  />
                  <span className="text-neutral-300">{point}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div variants={itemVariants} className="mt-8">
              <Link
                href="/services" // Or your more detailed about page
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm text-black hover:opacity-90 transition transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: orangeColor }}
              >
                Discover Our Programs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
// You'll need to import Link if you use the CTA button
// import Link from "next/link";
