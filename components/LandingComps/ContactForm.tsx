"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedDotsBackground from "./AnimatedBg"; // Assuming it's in the same folder or adjust path

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate API call
    try {
      // Replace with your actual API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Network response was not ok.');
      // const result = await response.json();

      console.log("Form data submitted:", formData); // For demo
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Orange color from your Hero section
  const orangeColor = "#F58327";

  return (
    <section className="relative w-full bg-black text-white py-16 md:py-24 overflow-hidden">
      <AnimatedDotsBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Text */}
          <div className="relative text-center md:text-left">
            {/* Subtle background pattern for the text area */}
            {/* <div className="absolute inset-0 opacity-50 z-0">
              <Image
                src="/subtle-pattern.svg"
                alt="Subtle background pattern"
                layout="fill"
                objectFit="cover"
                className="opacity-10" // Further reduce opacity if needed
              />
            </div> */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative z-10" // Ensure text is above its pattern
            >
              <h2 className="text-[12vw]  font-bold leading-tight">
                Let's
                <br />
                <span style={{ color: orangeColor }}>Talk!</span>
              </h2>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-neutral-800 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-400 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  required
                  className="w-full bg-neutral-700 border-neutral-600 text-neutral-200 placeholder-neutral-500 rounded-lg p-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:outline-none transition duration-150 ease-in-out"
                  style={
                    { "--tw-ring-color": orangeColor } as React.CSSProperties
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-400 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@framer.com"
                  required
                  className="w-full bg-neutral-700 border-neutral-600 text-neutral-200 placeholder-neutral-500 rounded-lg p-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:outline-none transition duration-150 ease-in-out"
                  style={
                    { "--tw-ring-color": orangeColor } as React.CSSProperties
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  required
                  className="w-full bg-neutral-700 border-neutral-600 text-neutral-200 placeholder-neutral-500 rounded-lg p-3 resize-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:outline-none transition duration-150 ease-in-out"
                  style={
                    { "--tw-ring-color": orangeColor } as React.CSSProperties
                  }
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-black font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 disabled:opacity-70"
                  style={{
                    backgroundColor: orangeColor,
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
              {submitMessage && (
                <p
                  className={`text-sm text-center ${
                    submitMessage.includes("successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
