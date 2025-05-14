"use client";
import { Accordion } from "@radix-ui/react-accordion";

import { Badge } from "../ui/badge";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function AboutUs() {
  return (
    <div className="p-10 flex flex-col max-w-7xl mx-auto ">
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-5  items-center lg:items-start lg:justify-start sm:flex-col sm:items-center md:items-center  p-2">
        <Badge
          variant="outline"
          className="text-md py-1 sm:text-base text-blue-600 font-semibold"
        >
          Who are we
        </Badge>

        <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
          About our <span className="text-gradient">Company</span>
          <div className="lg:flex lg:justify-start lg:items-start w-40 h-1 max-lg:w-24 bg-gradient-animation rounded-full mx-auto mt-2"></div>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row sm:justify-center md:items-center md:justify-between sm:items-center justify-between gap-6 px-4 py-6  w-[100%]">
        {/* Text content on the left */}
        <div className=" flex justify-center items-start p-5 mx-2 lg:w-[80%] w-[100%]">
          <p className="text-base sm:text-lg text-black max-w-3xl text-left">
            We are a community of passionate care educators dedicated to
            providing the best possible care and education for children. Our
            mission is to create a nurturing and stimulating environment where
            children can grow, learn, and thrive. We believe that every child is
            unique and deserves the opportunity to reach their full potential.
            Our team of experienced educators is committed to fostering a love
            of learning and helping children develop the skills they need to
            succeed in life.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="item-1"
            className="mb-2 rounded-2xl bg-white text-blue-900 border border-blue-100 shadow-md dark:bg-blue-950 dark:text-white dark:border-blue-800 p-2 transition-colors"
          >
            <AccordionTrigger className="font-semibold text-blue-800 dark:text-blue-100">
              01 Our History
            </AccordionTrigger>
            <AccordionContent className="text-sm text-blue-700 dark:text-blue-200">
              We began with a small group of educators committed to making early
              childhood education accessible and meaningful...
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="mb-2 rounded-2xl bg-white text-blue-900 border border-blue-100 shadow-md dark:bg-blue-950 dark:text-white dark:border-blue-800 p-2 transition-colors"
          >
            <AccordionTrigger className="font-semibold text-blue-800 dark:text-blue-100">
              02 Our Mission
            </AccordionTrigger>
            <AccordionContent className="text-sm text-blue-700 dark:text-blue-200">
              Our mission is to nurture every child's growth by offering a safe,
              stimulating, and inclusive learning environment...
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="mb-2 rounded-2xl bg-white text-blue-900 border border-blue-100 shadow-md dark:bg-blue-950 dark:text-white dark:border-blue-800 p-2 transition-colors"
          >
            <AccordionTrigger className="font-semibold text-blue-800 dark:text-blue-100">
              03 Our Vision
            </AccordionTrigger>
            <AccordionContent className="text-sm text-blue-700 dark:text-blue-200">
              We envision a world where every child is empowered to reach their
              full potential through compassionate education...
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
