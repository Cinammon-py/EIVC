import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 relative z-10"
      >
        <h1 className="text-4xl md:text-8xl font-heading font-bold mb-4">
          Building Rwanda’s Future
        </h1>
        <p className="text-lg md:text-3xl mb-6 max-w-2xl mx-auto">
          Innovative & sustainable construction solutions for a greener tomorrow.
        </p>
        <div className="space-x-7 mt-20">
          <a
            href="#services"
            className="border border-transparent bg-amber text-charcoal px-7 py-4 rounded-lg font-medium hover:border-white transition"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="border border-white px-7 py-4 rounded-lg hover:bg-white hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about">
          <div className="animate-bounce">
            <div className="w-4 sm:w-6 h-8 sm:h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
