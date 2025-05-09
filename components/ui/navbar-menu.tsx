"use client";
import React from "react";
import { motion } from "motion/react";
// Warm color palette - yellow, orange, and reddish tones
const colors = {
  primary: "#f59e0b", // Amber
  secondary: "#ea580c", // Orange
  accent: "#ef4444", // Red
  highlight: "#fb923c", // Light orange
  background: "#18181b", // Dark background
  textLight: "#fef3c7", // Light amber text
  textDark: "#1c1917", // Dark text
  gradient: "linear-gradient(to right, #f59e0b, #ea580c, #ef4444)",
};
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};
export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-amber-50 hover:text-orange-300 font-medium"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl overflow-hidden border border-red-400/30 shadow-xl shadow-orange-500/20"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4 backdrop-blur-md bg-black/20"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};
export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-orange-500/50 bg-gradient-to-r from-amber-900/90 via-orange-900/90 to-red-900/90 shadow-lg shadow-orange-500/20 flex justify-center space-x-6 px-8 py-6"
    >
      {children}
    </nav>
  );
};
export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2 group">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl border border-red-500/20 group-hover:border-orange-500/50 transition-all duration-300"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-amber-50 group-hover:text-orange-300 transition-colors">
          {title}
        </h4>
        <p className="text-amber-200 text-sm max-w-[10rem]">{description}</p>
      </div>
    </a>
  );
};
export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-amber-200 hover:text-orange-300 transition-colors duration-300"
    >
      {children}
    </a>
  );
};
