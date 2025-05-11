"use client"

import { ThreeDMarquee } from "../ui/3d-marquee";


export default function Hero() {
  const images = [
    "/bg-pic01.jpeg",
    "/bg-pic02.jpeg",
    "/bg-pic03.jpeg",
    "/bg-pic01.jpeg",
    "/bg-pic02.jpeg",
    "/bg-pic03.jpeg",
    "/bg-pic01.jpeg",
    "/bg-pic02.jpeg",
    "/bg-pic03.jpeg",
    "/bg-pic01.jpeg",
    "/bg-pic02.jpeg",
    "/bg-pic03.jpeg",
    "/bg-pic01.jpeg",
    "/bg-pic02.jpeg",
    "/bg-pic03.jpeg",
    "/bg-pic01.jpeg",
    "/bg-pic02.jpeg",
    "/bg-pic03.jpeg",
    "/bg-pic01.jpeg",
    "/bg-pic02.jpeg",
    "/bg-pic03.jpeg",
    "/bg-pic01.jpeg",
    "/bg-pic02.jpeg",
    "/bg-pic03.jpeg",
    "/bg-pic01.jpeg",
    "/bg-pic02.jpeg",
    "/bg-pic03.jpeg",
    "/bg-pic01.jpeg",
    "/bg-pic02.jpeg",
    "/bg-pic03.jpeg",
    "/bg-pic01.jpeg",
    "/bg-pic02.jpeg",
    "/bg-pic03.jpeg",
    "/bg-pic01.jpeg",
    "/bg-pic02.jpeg",
    "/bg-pic03.jpeg",
  ]
    
 return (
  <div className="z-10 inset-0 mx-auto my-10 max-w-7xl  bg-black/80 p-2 ring-1 ring-neutral-700/10 dark:bg-black/40 opacity-100">
    {/* 3D Marquee */}
    <ThreeDMarquee className="pointer-events-none absolute inset-0 h-full w-full my-3.5 bg-blue-50/70 top-10 opacity-65" images={images} />

   <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
  <div className="bg-black/70 backdrop-blur-md p-10 rounded-xl max-w-6xl ">
    <h2 className="text-3xl font-bold md:text-5xl">
      Hey There!! Welcome to Community of Passionate Care Educators.
    </h2>
    <p className="mt-4 text-base md:text-lg text-neutral-200">
      A creative world where children grow, play, and thrive.
    </p>
    
  </div>
</div>

  </div>
);


}