"use client";

import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { Badge } from "../ui/badge";

export default function Brands() {
  
  
 return (
  <div className="w-full h-[300px] relative rounded-md overflow-hidden">
    <BackgroundGradientAnimation>
      {/* Full-height container inside */}
      <div className="absolute inset-0 z-50 flex flex-col justify-center items-center px-4 py-6 text-white text-center 
                      transform hover:scale-105 hover:rotate-3d transition-all duration-500 ease-in-out
                      shadow-xl group">
        
        {/* Title + Badge */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center mb-6">
          <Badge variant="outline" className="text-md sm:text-base text-white/70 font-semibold backdrop-blur-md px-3 py-1 rounded-md">
            Brands
          </Badge>

          <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
            Brands we have worked with
          </h1>
        </div>

        {/* Logos Row */}
        <div className="w-full overflow-hidden flex justify-center items-center">
          <ul className="flex gap-8 flex-wrap justify-center max-w-6xl">
            <li className="flex-shrink-0">logo1</li>
            <li className="flex-shrink-0">logo2</li>
            <li className="flex-shrink-0">logo3</li>
            <li className="flex-shrink-0">logo4</li>
            <li className="flex-shrink-0">logo5</li>
            <li className="flex-shrink-0">logo6</li>
            <li className="flex-shrink-0">logo7</li>
            <li className="flex-shrink-0">logo8</li>
          </ul>
        </div>
      </div>
    </BackgroundGradientAnimation>
  </div>
);

}