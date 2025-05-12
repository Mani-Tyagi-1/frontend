"use client";

import { SparklesCore } from "../ui/sparkles";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function AboutUs() {
  const words = [
    { text: "Nurture", className: "text-gradient" },
    { text: "Care",className: "text-gradient" },
   
  ];


  return (
    <div id="aboutus" className="p-2 flex flex-col max-w-7xl mx-auto  ">
      <div className="relative">
        {/* Sparkles background component */}
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.0}
          maxSize={1.6}
          particleDensity={20}
          className="absolute top-0 left-0 w-full h-full z-0"
          particleColor="#2C3E94"
        />

        {/* Content on top of the Sparkles background */}
        <div className="relative flex flex-col items-center p-1">
          <h2 className="text-2xl mb-4 uppercase tracking-wider text-accent-hover font-bold">
            Who We Are
          </h2>
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-wide mb-2">
              Empowering Growth With
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-5">
  <TypewriterEffect
    words={words}
    className="text-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
    cursorClassName="text-gradient"
  />
</h2>

            <div className="lg:flex lg:justify-start lg:items-start w-40 h-1 max-lg:w-24 bg-gradient-animation rounded-full mx-auto mt-2"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between px-4 py-6 w-[100%]">
        <div className="text-2xl lg:text-3xl my-5 max-sm:ml-3">
          <p className="leading-snug max-sm:font-extralight text-black max-sm:text-sm">
            At Nurture Care, we are dedicated to providing an exceptional start
            for every child. We believe that the early years of a child’s life
            are crucial for building a foundation for lifelong learning, growth,
            and success. Our approach to childcare and education is built on the
            belief that every child deserves to be nurtured in a safe, engaging,
            and stimulating environment. We provide a space where children feel
            valued, secure, and encouraged to explore the world around them. Our
            team of skilled educators works collaboratively to create a
            nurturing environment that supports each child's unique
            developmental journey.
          </p>
        </div>

        {/* features */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-accent-hover mb-5">
          why us ?
        </h2>
     <div className="relative flex flex-col gap-6 items-center w-full px-4">
  <HoverBorderGradient
    containerClassName="rounded-full w-full max-w-2xl"
    as="button"
    className="bg-primary-light text-black px-6 py-3 text-base sm:text-lg font-semibold shadow-md shadow-black/20 hover:shadow-xl hover:shadow-accent-hover transition duration-300 ease-in-out text-left w-full"
  >
    01. Innovative learning environments designed to inspire curiosity.
  </HoverBorderGradient>

  <HoverBorderGradient
    containerClassName="rounded-full w-full max-w-2xl"
    as="button"
    className="bg-primary-light text-black px-6 py-3 text-base sm:text-lg font-semibold shadow-md shadow-black/20 hover:shadow-xl hover:shadow-accent-hover transition duration-300 ease-in-out text-left w-full"
  >
    02. Dedicated educators passionate about early childhood development.
  </HoverBorderGradient>

  <HoverBorderGradient
    containerClassName="rounded-full w-full max-w-2xl"
    as="button"
    className="bg-primary-light text-black px-6 py-3 text-base sm:text-lg font-semibold shadow-md shadow-black/20 hover:shadow-xl hover:shadow-accent-hover transition duration-300 ease-in-out text-left w-full"
  >
    03. A holistic approach focusing on cognitive, social, and emotional growth.
  </HoverBorderGradient>

  <HoverBorderGradient
    containerClassName="rounded-full w-full max-w-2xl"
    as="button"
    className="bg-primary-light text-black px-6 py-3 text-base sm:text-lg font-semibold shadow-md shadow-black/20 hover:shadow-xl hover:shadow-accent-hover transition duration-300 ease-in-out text-left w-full"
  >
    04. Safe, secure, and welcoming spaces for every child.
  </HoverBorderGradient>

  <div className="absolute w-[200px] h-[200px]  rounded-full bottom-100 right-30 bg-gradient-to-br from-blue-300 to-indigo-400 opacity-10 blur-xl  animate-pulse"></div>
  <div className="absolute w-[200px] h-[200px]  rounded-full bottom-30 left-30 bg-gradient-to-br from-blue-300 to-indigo-400 opacity-10 blur-xl  animate-pulse"></div>
  <div className="absolute w-[200px] h-[200px]  rounded-full -bottom-30 right-70 bg-gradient-to-br from-blue-300 to-indigo-400 opacity-10 blur-xl  animate-pulse"></div>
</div>





        
      </div>
    </div>
  );
}
