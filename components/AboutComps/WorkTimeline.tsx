import React from "react";
import { CardStack } from "../ui/card-stack";

export default function WorkTimeline() {

  const CARDS = [
  {
    id: 0,
   
    content: (
      <p>
        These cards are amazing,I want to use them in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        deleting it right away because yolo. Instead, I
        would like to call it X.com so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    
    content: (
      <p>
        The first rule of
        Fight Club is that you do not talk about fight
        club. The second rule of
        Fight club is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
 

  return (
    // how we work and pur 4 stages coming from the component
    <div className="relative flex flex-col items-center p-1">
        <h2 className="text-2xl mb-4 uppercase tracking-wider text-black/70 font-bold">
          inside look
        </h2>
        <div className="text-center">
          <h1 className="font-bold tracking-wide mb-2 uppercase text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            our work flow
          </h1>

          <div className="lg:flex lg:justify-start lg:items-start w-40 h-1 max-lg:w-24 bg-gradient-animation rounded-full mx-auto m-5 "></div>

          
    

        </div>
        <div className=" m-10 w-">
      <CardStack items={CARDS}  />
      </div>

        
      </div>
    
  );
}
