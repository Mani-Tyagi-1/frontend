"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedDotsBackground from "./AnimatedBg"; // Adjust path if necessary
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-black overflow-hidden">
      {/* Animated dots background */}
      {/* <AnimatedDotsBackground /> */}
      <ShootingStars />
      <StarsBackground />

      {/* Removed the original background effect line: */}
      {/* <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 z-0" /> */}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-white z-10 text-center leading-tight"
      >
        NURTURE
        <span className="relative inline-block ml-8">
          <span className="absolute -top-2 -left-2 rotate-2 px-2 py-1 bg-[#F58327] text-black font-bold z-0">
            CHILDCARE
          </span>
          <span className="invisible">Digital</span>{" "}
          {/* This was likely for spacing, keeping it */}
        </span>{" "}
        <br />
        AND EDUCATION SERVICES.
        {/* <span className="inline-flex items-center justify-center">
          Agency.
          <span className="ml-3 bg-orange-500 rounded-full p-2">
            <Image
              src="/megaphone.png"
              alt="Megaphone"
              width={24}
              height={24}
            />
          </span>
        </span> */}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="mt-6 text-gray-300 text-lg z-10 max-w-xl"
      >
        A Community of Passionate Family Day Care Educators and Learners
      </motion.p>

      <motion.a
        href="/template"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.5 }}
        className="mt-10 inline-block px-8 py-3 rounded-full bg-[#F58327] text-black font-semibold text-lg hover:bg-orange-500 transition transform hover:scale-105 shadow-lg"
      >
        Explore ↗
      </motion.a>
    </section>
  );
}
