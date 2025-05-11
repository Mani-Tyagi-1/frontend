"use client";
import { motion} from "motion/react";
import { FlipWords } from "../ui/flip-words";

export default function Hero() {
 const text = [
  "Innovation",
  "Empathy",
  "Integrity",
  "Transparency",
  "Support",
  "Creativity",
  "Impact",
  "Trust",
  "Purpose",
  "Excellence"
];
    
 return (
    <div className="h-[350px] w-full flex items-center justify-center relative overflow-hidden bg-primary-dark">
         <motion.img
        src="https://media.istockphoto.com/id/494239087/photo/group-of-young-children-running-towards-camera-in-park.jpg?s=612x612&w=0&k=20&c=9IDu7zZtdl38Qq4ntnA1hXkmzwC-SMtV4DfcjsRJjHQ="
        className="h-full w-full object-left absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
         <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
  Built on <FlipWords words={text} className="text-teal-500"/>, <br /> driven by purpose.
</h1>

    </div>
 );}