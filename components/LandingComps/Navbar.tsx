"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "MEMBERS", href: "/projects" },
  { name: "EDUCATORS", href: "/reviews" },
  { name: "GUIDE", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("HOME");

  return (
    <nav className="w-full px-6 py-4 fixed top-0 z-50 flex justify-between items-center backdrop-blur-lg bg-black/30 rounded-b-xl shadow-lg">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* <img src="/logo.png" alt="Logo" className="h-8" /> */}
        <span className="text-white font-bold text-3xl">NC & ES</span>
      </div>

      {/* Nav Links */}
      <div className="flex items-center space-x-6 px-6 py-2 bg-black/40 backdrop-blur-md rounded-full shadow-inner">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setActive(link.name)}
            className={`relative text-sm font-semibold transition duration-300 ease-in-out px-3 py-2 rounded-full 
              ${
                active === link.name
                  ? "text-[#F58327] bg-white/10"
                  : "text-white hover:text-orange-400 hover:bg-white/5"
              }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Template Button */}
      <a
        href="/template"
        className="ml-4 text-xl px-5 py-2 rounded-full bg-[#F58327] font-semibold text-black transition duration-300 ease-in-out hover:scale-105 hover:bg-orange-400 shadow-md"
      >
        LOGIN / SIGNUP ↗
      </a>
    </nav>
  );
}
