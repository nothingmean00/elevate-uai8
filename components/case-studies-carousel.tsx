"use client";

import React, { useState } from "react";
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import modules from "swiper/modules"
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  EffectCoverflow,
} from "swiper/modules";
// Import the Swiper type for proper typing
import type { Swiper as SwiperInstance } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Define the case study type
interface CaseStudy {
  id: number;
  name: string;
  description: string;
  excerpt: string;
  image?: string; // not used (no images)
}

interface CaseStudiesCarouselProps {
  caseStudies: CaseStudy[];
}

export function CaseStudiesCarousel({ caseStudies }: CaseStudiesCarouselProps) {
  // Modal state for detailed view
  const [modalStudy, setModalStudy] = useState<CaseStudy | null>(null);
  // Swiper instance and current slide index state
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard, EffectCoverflow]}
        spaceBetween={24}
        slidesPerView={1.2}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        keyboard={{ enabled: true }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          type: "progressbar",
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0, // flat cards
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
        className="relative"
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      >
        {caseStudies.map((study) => (
          <SwiperSlide key={study.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="min-w-[320px] sm:min-w-[360px] bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setModalStudy(study)}
              aria-label={`Slide: ${study.name}`}
            >
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2 text-[#2A2D43]">
                  {study.name}
                </h4>
                <p className="text-sm text-[#4A4A4A]">{study.description}</p>
                <p className="mt-2 text-xs italic text-[#4A4A4A]">
                  {study.excerpt}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
        {/* Navigation Arrows as purple icons with bounce on tap */}
        <motion.div
          className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 transition-colors"
          whileTap={{ scale: 0.8 }}
        >
          {/* Updated to purple */}
          <ArrowLeft size={20} className="stroke-[#5E3CB3]" />
        </motion.div>
        <motion.div
          className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 transition-colors"
          whileTap={{ scale: 0.8 }}
        >
          {/* Updated to purple */}
          <ArrowRight size={20} className="stroke-[#5E3CB3]" />
        </motion.div>
      </Swiper>
      <div className="mt-4 text-center">
        <span className="text-sm text-[#5E3CB3]">
          Slide {currentSlide + 1} of {caseStudies.length}
        </span>
      </div>
      {modalStudy && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setModalStudy(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-white rounded-lg p-6 max-w-2xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#2A2D43]">
              {modalStudy.name}
            </h3>
            <p className="text-[#4A4A4A]">{modalStudy.description}</p>
            <button
              onClick={() => setModalStudy(null)}
              className="mt-4 bg-[#5E3CB3] text-white px-4 py-2 rounded hover:bg-[#4D2D9B] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Progress bar styling updated to purple */}
      <style jsx>{`
        .swiper-pagination-progressbar-fill {
          background-color: #5E3CB3 !important;
        }
      `}</style>
    </div>
  );
}
