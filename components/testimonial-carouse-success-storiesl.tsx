"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Steve",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
    quote: "ElevateU transformed my career with its personalized guidance!",
  },
  {
    id: 2,
    name: "Maria",
    videoUrl: "https://www.w3schools.com/html/movie.mp4", // Example video URL
    quote: "I landed my dream internship thanks to ElevateU's support!",
  },
  {
    id: 3,
    name: "Jason",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
    quote: "From community college to FinTech – ElevateU made it possible!",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <video
              controls
              className="w-full h-auto"
              src={currentTestimonial.videoUrl}
            >
              Your browser does not support the video tag.
            </video>
            <div className="p-4 bg-white">
              <p className="text-lg text-[#2A2D43]">
                {currentTestimonial.quote}
              </p>
              <p className="text-sm text-[#4A4A4A]">
                - {currentTestimonial.name}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={prevTestimonial}
          aria-label="Previous Testimonial"
          className="p-2 rounded-full bg-[#5E3CB3] text-white hover:bg-[#48309A]"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextTestimonial}
          aria-label="Next Testimonial"
          className="p-2 rounded-full bg-[#5E3CB3] text-white hover:bg-[#48309A]"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
