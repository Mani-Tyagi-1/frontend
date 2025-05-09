"use client";

import { JSX, SetStateAction, SVGProps, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedDotsBackground from "./AnimatedBg"; // Adjust path if necessary

const faqData = [
  {
    id: 1,
    question: "What is SEO and why is it important?",
    answer:
      "SEO stands for Search Engine Optimization. It's the practice of increasing the quantity and quality of traffic to your website through organic search engine results. It's crucial because it helps potential customers find your business when they're actively searching for products or services like yours, leading to higher visibility, credibility, and conversions.",
  },
  {
    id: 2,
    question: "How long does it take to see results from SEO?",
    answer:
      "The timeline for SEO results can vary significantly based on factors like website authority, competition, the scope of SEO efforts, and industry. Generally, you might start seeing noticeable improvements within 3-6 months. However, for substantial and lasting impact, SEO is a long-term strategy often requiring 6-12 months or more to achieve significant outcomes.",
  },
  {
    id: 3,
    question: "What are the key factors that influence SEO rankings?",
    answer:
      "Key factors include: high-quality, relevant content; keyword research and optimization; website speed and mobile-friendliness; user experience (UX) signals like bounce rate and time on page; quality backlinks from authoritative sites; technical SEO aspects like site architecture and crawlability; and local SEO signals for businesses targeting specific geographic areas.",
  },
  {
    id: 4,
    question: "Do I need to hire an SEO agency, or can I do SEO myself?",
    answer:
      "While it's possible to learn and implement basic SEO yourself, especially for small projects, effective SEO can be complex and time-consuming. An SEO agency brings specialized expertise, advanced tools, and a dedicated team to manage and optimize your strategy. Consider an agency if you lack the time, resources, or in-depth knowledge to achieve your desired SEO goals, particularly in competitive markets.",
  },
];

const ChevronDownIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3} // Bolder stroke
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

interface AccordionItemProps {
  item: {
    id: number;
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ item, isOpen, onToggle }: AccordionItemProps) => {
  const orangeColor = "#F58327";

  return (
    <div className="border-b border-neutral-700 last:border-b-0 my-4">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-5 px-6 text-left bg-neutral-800 hover:bg-neutral-700/70 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        style={{ "--tw-ring-color": orangeColor } as React.CSSProperties}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className="text-lg font-medium text-white">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4 p-2 rounded-md"
          style={{ backgroundColor: orangeColor }}
        >
          <ChevronDownIcon className="w-5 h-5 text-black" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden bg-neutral-800"
          >
            <div className="px-6 pb-5 pt-2 text-neutral-300 text-base leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null); // Store ID of open item

  const handleToggle = (id: number) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-black text-white py-16 md:py-24 overflow-hidden">
      <AnimatedDotsBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-neutral-800 rounded-xl shadow-2xl overflow-hidden"
        >
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openAccordionId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
