"use client";

import { useEffect } from "react";
import BlogHeader from "@/components/BlogComps/BlogHeader";
import BlogCards from "@/components/BlogComps/BlogCards";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function BlogPage() {
  // This useEffect is just to ensure proper hydration
  useEffect(() => {
    // This is intentionally left empty
  }, []);

  const GradientBlobBackground = () => {
    return (
      <>
        {/* Gradient Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-animation opacity-30 blur-3xl transform translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-animation opacity-30 blur-3xl transform -translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-gradient-radial opacity-20 blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Animated Dots Grid */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dotPattern"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="5" cy="5" r="1.5" fill="var(--color-accent-glow)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
      </>
    );
  };

  const BackgroundGradientAnimation = ({ children }: { children: ReactNode }) => {
      return (
        <div className="relative overflow-hidden flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-[#ffffff] to-[#d8ecff]
">
          {/* Light blue to dark blue background gradient */}
    
          {/* Animated gradient blobs */}
          {/* <div className="absolute top-0 left-[50%] w-72 h-72 bg-[#39A4D8]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_20s_infinite]" /> */}
          <div className="absolute top-[15%] -left-50 w-[500px] h-[500px] bg-[#39A4D8]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_20s_infinite]" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-br bg-[#39A4D8]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-65 animate-[blob_25s_infinite] delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#39A4D8]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_30s_infinite] delay-4000" />
          <div className="absolute -bottom-8 right-[50%] w-72 h-72 bg-[#2C3E94]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_35s_infinite] delay-6000" />
    
          {children}
        </div>
      );
    };

  return (
    // <div className="relative w-full h-full">
    //   <GradientBlobBackground />
    //   <div className="relative z-10">
    //   <BlogHeader />
    //   <BlogCards />
    //   </div>
    // </div>

   <section className="w-full min-h-screen relative overflow-hidden ">
      {/* Background image with blue-ish dull effect */}
      
      <BackgroundGradientAnimation>
        {/* Blog Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-30 flex flex-col justify-center items-center w-full px-4 "
        ></motion.div>
      

      {/* Content goes above the background */}
      <div className="relative z-10">
        <BlogHeader />
        <BlogCards />
      </div>
           </BackgroundGradientAnimation>

    </section>
  );
}


// <div className="absolute inset-0 z-0">
//         <img
//           src="/gemini-kids.png"
//           alt="kids"
//           className="w-full h-full object-cover filter brightness-50 contrast-75"
//         />

//         {/* Optional blue tint overlay */}
//         <div className="absolute inset-0 bg-blue-500 opacity-30 mix-blend-multiply"></div>
//       </div>
