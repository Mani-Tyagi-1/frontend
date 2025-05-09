"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { JSX, SVGProps } from "react";
// import AnimatedDotsBackground from "./AnimatedDotsBackground"; // Adjust path

// --- SVG Icons ---
const EnvelopeIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  </svg>
);

const PhoneIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z"
    />
  </svg>
);

const MapPinIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);
// --- End SVG Icons ---

const contactDetails = [
  {
    icon: EnvelopeIcon,
    text: "agencee@email.com",
    href: "mailto:agencee@email.com",
  },
  { icon: PhoneIcon, text: "+ 54 2541 22 55 66", href: "tel:+542541225566" },
  { icon: MapPinIcon, text: "123 Main Street, Anytown, USA, 2141" },
];

const menuLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Review", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

const serviceLinksData = [
  { name: "SEO", href: "/services/seo" },
  { name: "Content Marketing", href: "/services/content-marketing" },
  { name: "Website Design", href: "/services/website-design" },
  { name: "Social Media Marketing", href: "/services/social-media-marketing" },
];

const otherPageLinksData = [
  { name: "License", href: "/license" },
  { name: "404", href: "/404" },
];

const orangeColor = "#F58327"; // Same orange as other components

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-black text-white pt-16 pb-8 md:pt-24 md:pb-12  overflow-hidden" // Added mt-10 for spacing if needed
    >
      {/* Pass a more subtle opacity for dots in the footer */}
      {/* <AnimatedDotsBackground dotOpacity="opacity-[0.03]" /> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[40%_60%] gap-10 md:gap-16">
          {/* Left Column: Contact Info */}
          <motion.div variants={itemVariants} className="relative">
            {/* Subtle pattern for the background of this column */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/subtle-pattern.svg" // Your pattern from public folder
                alt="Subtle background pattern"
                layout="fill"
                objectFit="cover"
                className="opacity-[0.07] rounded-xl" // Adjust opacity as needed
              />
            </div>
            <div className="space-y-5 relative z-10">
              {contactDetails.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants} // Staggered by parent
                  className="bg-neutral-800 p-5 rounded-xl flex items-center space-x-4 shadow-lg"
                >
                  <item.icon
                    className="w-6 h-6 flex-shrink-0"
                    style={{ color: orangeColor }}
                  />
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <span className="text-neutral-300">{item.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Links */}
          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            <div>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: orangeColor }}
              >
                Menu
              </h3>
              <ul className="space-y-2.5">
                {menuLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: orangeColor }}
              >
                Services
              </h3>
              <ul className="space-y-2.5">
                {serviceLinksData.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: orangeColor }}
              >
                Other Pages
              </h3>
              <ul className="space-y-2.5">
                {otherPageLinksData.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Optional: Copyright or simple separator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="border-t border-neutral-700 mt-12 md:mt-16 pt-6 text-center text-neutral-400 text-sm"
        >
          © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}
