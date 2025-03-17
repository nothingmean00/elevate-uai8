"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CaseStudy {
  id: number;
  name: string;
  description: string;
  excerpt: string;
  image?: string;
}

interface TestimonialRotatorProps {
  caseStudies: CaseStudy[];
}

export default function TestimonialRotator({ caseStudies }: TestimonialRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = caseStudies.length;

  // Auto-play: cycle through slides every 5 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Framer Motion variants for slide transitions.
  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="relative w-full max-w-md mx-auto overflow-visible">
      {/* Left Arrow (line-based) */}
      <motion.button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute top-1/2 -translate-y-1/2 -left-[3rem] p-2 text-[#5E3CB3] hover:scale-110 transition-transform z-10"
        whileHover={{ color: "rgba(94,60,179,0.7)" }}
      >
        <ChevronLeft size={28} />
      </motion.button>

      {/* Right Arrow (line-based) */}
      <motion.button
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute top-1/2 -translate-y-1/2 -right-[3rem] p-2 text-[#5E3CB3] hover:scale-110 transition-transform z-10"
        whileHover={{ color: "rgba(94,60,179,0.7)" }}
      >
        <ChevronRight size={28} />
      </motion.button>

      {/* Slide Container */}
      <div className="relative h-auto min-h-[260px] px-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={caseStudies[currentIndex].id}
            className="bg-gradient-to-tr from-white to-[#F9F7FE] dark:bg-gray-800 rounded-3xl shadow-xl shadow-[#5E3CB3]/10 p-8"
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            whileHover={{
              backgroundColor: "rgba(94,60,179,0.15)",
              scale: 1.01,
              transition: { duration: 0.3 },
            }}
          >
            <motion.h4
              className="text-3xl font-semibold mb-4 text-[#2A2D43]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {caseStudies[currentIndex].name}
            </motion.h4>
            <motion.p
              className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {caseStudies[currentIndex].description}
            </motion.p>
            <motion.p
              className="text-sm italic text-gray-500 dark:text-gray-400 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {caseStudies[currentIndex].excerpt}
            </motion.p>
            <motion.a
              href="#"
              className="inline-block mt-4 text-[#5E3CB3] font-medium hover:underline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Read More &rarr;
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {caseStudies.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors focus:outline-none ${
              index === currentIndex ? "bg-[#5E3CB3]" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
          ></motion.button>
        ))}
      </div>
    </div>
  );
}
