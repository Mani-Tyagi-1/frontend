"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Animated Gradient Background */}
      {/* <div className="absolute inset-0 z-0 bg-gradient-radial">
        <div className="absolute inset-0 bg-gradient-animation opacity-80"></div>
      </div> */}

      {/* Star elements on top of gradient */}
      
      {/* <ShootingStars /> */}
      {/* <StarsBackground /> */}

      {/* Content */}
      <motion.div
        className="relative z-10 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-bold z-10 text-center leading-tight text-gradient"
        >
          NURTURE
          <span className="relative inline-block ml-8">
            <span className="absolute -top-2 -left-2 rotate-2 px-2 py-1 font-bold z-0 bg-accent-glow text-white shadow-glow">
              CHILDCARE
            </span>
            <span className="invisible">Digital</span>
          </span>{" "}
          <br />
          <span className="text-gradient">AND EDUCATION SERVICES.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-6 text-3xl z-10  mx-auto text-indigo-500"
        >
          A Community of Passionate Family Day Care Educators and Learners
        </motion.p>

        <motion.a
          href="/template"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "var(--color-accent-hover)",
          }}
          transition={{ duration: 0.3 }}
          className="mt-10 inline-block px-8 py-3 rounded-full font-semibold text-lg shadow-glow"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary-500), var(--color-accent-hover))",
            color: "var(--color-white)",
          }}
        >
          Explore ↗
        </motion.a>
      </motion.div>
    </section>
  );
}
