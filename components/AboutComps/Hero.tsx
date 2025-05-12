"use client";

import { motion } from "framer-motion";

export default function Hero() {
  // const images = [
  //   "/bg-pic01.jpeg",
  //   "/bg-pic02.jpeg",
  //   "/bg-pic03.jpeg",
  //   "/bg-pic01.jpeg",
  //   "/bg-pic02.jpeg",
  //   "/bg-pic03.jpeg",
  //   "/bg-pic01.jpeg",
  //   "/bg-pic02.jpeg",
  //   "/bg-pic03.jpeg",
  //   "/bg-pic01.jpeg",
  //   "/bg-pic02.jpeg",
  //   "/bg-pic03.jpeg",
  //   "/bg-pic01.jpeg",
  //   "/bg-pic02.jpeg",
  //   "/bg-pic03.jpeg",
  //   "/bg-pic01.jpeg",
  //   "/bg-pic02.jpeg",
  //   "/bg-pic03.jpeg",
  //   "/bg-pic01.jpeg",
  //   "/bg-pic02.jpeg",
  //   "/bg-pic03.jpeg",
  //   "/bg-pic01.jpeg",
  //   "/bg-pic02.jpeg",
  //   "/bg-pic03.jpeg",
  //   "/bg-pic01.jpeg",
  //   "/bg-pic02.jpeg",
  //   "/bg-pic03.jpeg",
  //   "/bg-pic01.jpeg",
  //   "/bg-pic02.jpeg",
  //   "/bg-pic03.jpeg",
  //   "/bg-pic01.jpeg",
  //   "/bg-pic02.jpeg",
  //   "/bg-pic03.jpeg",
  //   "/bg-pic01.jpeg",
  //   "/bg-pic02.jpeg",
  //   "/bg-pic03.jpeg",
  // ];

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

  return (
    
 <motion.section
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="relative w-screen h-screen overflow-hidden px-4 sm:px-10 md:px-20 lg:px-40 flex items-center justify-center"
  id="hero"
>
  {/* Background Elements */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-purple-100 opacity-80"></div>

     {/* Large gradient circle */}
        <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/4 rounded-full bg-gradient-radial opacity-10 z-0"></div>

    <motion.div
      className="absolute top-1/4 left-10 w-24 h-24 rounded-full"
      style={{
        background: `linear-gradient(45deg, var(--gradient-purple-start), var(--gradient-blue-end))`,
      }}
      animate={{ y: [0, -15, 0], opacity: [0.05, 0.08, 0.05] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute bottom-1/4 right-20 w-16 h-16 rounded-full"
      style={{
        background: `linear-gradient(135deg, var(--gradient-blue-start), var(--gradient-purple-end))`,
      }}
      animate={{ y: [0, 20, 0], opacity: [0.07, 0.1, 0.07] }}
      transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
    />

    <svg
      className="absolute bottom-0 left-0 w-full opacity-5"
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

  {/* Foreground Content */}
 <div className="relative z-10 text-center">
    <motion.h1
      variants={itemVariants}
      className="max-w-[90vw] md:max-w-2xl lg:max-w-[80vw] text-[4rem] xs:text-[5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] font-semibold text-gradient bg-clip-text text-transparent select-none"
    >
      Nurture Care
    </motion.h1>

    <motion.p
      variants={itemVariants}
      className="mt-4 text-lg md:text-xl text-black/80 font-semibold "
    >
      A community for passionate care educators
    </motion.p>

    <motion.div
  variants={listVariants}
  className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
>
  {/* Become A Member Button */}
  <a href="/">
  {/* later  here link to add contact form */}
    <button
      className="px-6 py-3 bg-[#39A4D8] text-white rounded-full shadow hover:bg-[#2C3E94] transition"
    >
      Become A Member
    </button>
  </a>

  {/* Explore More Button */}
  <a href="#aboutus">
    <button
      className="px-6 py-3 border border-[#2C3E94] text-[#2C3E94] bg-[#FAFAF8] dark:bg-transparent rounded-full hover:bg-[#E0E0E0] dark:hover:bg-[#2C3E94] dark:hover:text-white transition"
    >
      Explore More
    </button>
  </a>
</motion.div>

  </div>

  <div className="fixed top-1/2 -translate-y-1/2 -left-[90px] max-sm:hidden z-50 -rotate-90 bg-yellow-400 text-black font-semibold px-4 py-1 rounded-md shadow-md">
  nurture_care@gmail.com
</div>

</motion.section>


  );
}
