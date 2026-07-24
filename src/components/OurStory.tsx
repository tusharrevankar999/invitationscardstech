import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { STORY_EVENTS } from '../data/weddingData';
import { FallingPetals } from './FallingPetals';

export const OurStory: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const currentStory = STORY_EVENTS[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % STORY_EVENTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % STORY_EVENTS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + STORY_EVENTS.length) % STORY_EVENTS.length);
  };

  const cardVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(4px)',
      transition: { duration: 0.35, ease: 'easeIn' },
    }),
  };

  return (
    <section id="story" className="relative py-20 px-2 sm:px-6 lg:px-8 w-full max-w-[100vw] overflow-hidden select-none">
      {/* Falling Hearts & Flowers Effect */}
      <FallingPetals variant="heartsAndRoses" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 relative z-10 space-y-2">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.22em] text-[#1B2A4A] uppercase font-light"
        >
          OUR STORY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif italic text-base sm:text-lg text-[#5A524C]"
        >
          Some chapters are written by destiny.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mt-3"
        >
          <div className="h-[1px] w-16 sm:w-28 bg-[#B8860B]/50" />
          <span className="text-[#B8860B] text-sm leading-none">♥</span>
          <div className="h-[1px] w-16 sm:w-28 bg-[#B8860B]/50" />
        </motion.div>
      </div>

      {/* Central Story Card Stage with Glow Effect */}
      <div className="relative max-w-3xl mx-auto px-2 sm:px-12">
        {/* Diagonal Floating Decorative Accents around slider border */}
        {/* Diagonal Top-Left: Heart */}
        <motion.div
          animate={{ y: [-6, 6, -6], rotate: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-5 -left-1 sm:-left-5 z-20 text-[#E05780] pointer-events-none filter drop-shadow-md"
        >
          <Heart className="w-7 h-7 sm:w-9 sm:h-9 fill-[#E05780]" />
        </motion.div>

        {/* Diagonal Top-Right: Light Yellow Flower Bloom */}
        <motion.div
          animate={{ y: [6, -6, 6], rotate: [8, -8, 8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute -top-5 -right-1 sm:-right-5 z-20 pointer-events-none filter drop-shadow-md"
        >
          <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10">
            {/* Green Leaf Accents */}
            <path d="M 25 75 Q 10 90 20 60 Q 35 50 25 75 Z" fill="#3A6B4C" />
            <path d="M 75 75 Q 90 90 80 60 Q 65 50 75 75 Z" fill="#3A6B4C" />
            {/* 5 Distinct Light Yellow Radial Petals */}
            <ellipse cx="50" cy="22" rx="14" ry="20" fill="#FFF275" stroke="#C59B27" strokeWidth="1.5" />
            <ellipse cx="76" cy="40" rx="20" ry="14" fill="#FEF08A" stroke="#C59B27" strokeWidth="1.5" />
            <ellipse cx="66" cy="72" rx="16" ry="20" fill="#FDE047" stroke="#C59B27" strokeWidth="1.5" />
            <ellipse cx="34" cy="72" rx="16" ry="20" fill="#FDE047" stroke="#C59B27" strokeWidth="1.5" />
            <ellipse cx="24" cy="40" rx="20" ry="14" fill="#FEF08A" stroke="#C59B27" strokeWidth="1.5" />
            {/* Flower Center */}
            <circle cx="50" cy="50" r="14" fill="#D4AF37" />
            <circle cx="50" cy="50" r="9" fill="#FFFBEB" stroke="#B8860B" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Diagonal Bottom-Left: Light Yellow Flower Bloom */}
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [-6, 6, -6] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute -bottom-5 -left-1 sm:-left-5 z-20 pointer-events-none filter drop-shadow-md"
        >
          <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10">
            {/* Green Leaf Accents */}
            <path d="M 25 75 Q 10 90 20 60 Q 35 50 25 75 Z" fill="#3A6B4C" />
            <path d="M 75 75 Q 90 90 80 60 Q 65 50 75 75 Z" fill="#3A6B4C" />
            {/* 5 Distinct Light Yellow Radial Petals */}
            <ellipse cx="50" cy="22" rx="14" ry="20" fill="#FEF08A" stroke="#C59B27" strokeWidth="1.5" />
            <ellipse cx="76" cy="40" rx="20" ry="14" fill="#FFF275" stroke="#C59B27" strokeWidth="1.5" />
            <ellipse cx="66" cy="72" rx="16" ry="20" fill="#FDE047" stroke="#C59B27" strokeWidth="1.5" />
            <ellipse cx="34" cy="72" rx="16" ry="20" fill="#FDE047" stroke="#C59B27" strokeWidth="1.5" />
            <ellipse cx="24" cy="40" rx="20" ry="14" fill="#FFF275" stroke="#C59B27" strokeWidth="1.5" />
            {/* Flower Center */}
            <circle cx="50" cy="50" r="14" fill="#D4AF37" />
            <circle cx="50" cy="50" r="9" fill="#FFFBEB" stroke="#B8860B" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Diagonal Bottom-Right: Heart */}
        <motion.div
          animate={{ y: [5, -5, 5], rotate: [6, -6, 6] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="absolute -bottom-5 -right-1 sm:-right-5 z-20 text-[#FF758F] pointer-events-none filter drop-shadow-md"
        >
          <Heart className="w-7 h-7 sm:w-9 sm:h-9 fill-[#FF758F]" />
        </motion.div>
        {/* Glowing Aura backdrop highlighting the couple */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/35 via-[#FF758F]/35 to-[#D4AF37]/35 blur-3xl rounded-full transform scale-110 pointer-events-none animate-pulse" />

        {/* Floating Side Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Story Slide"
          className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 text-[#1B2A4A] shadow-[0_4px_25px_rgba(0,0,0,0.18)] border border-[#D4AF37]/50 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-white active:scale-95 cursor-pointer group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform text-[#1B2A4A]" />
        </button>

        {/* Floating Side Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next Story Slide"
          className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 text-[#1B2A4A] shadow-[0_4px_25px_rgba(0,0,0,0.18)] border border-[#D4AF37]/50 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-white active:scale-95 cursor-pointer group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform text-[#1B2A4A]" />
        </button>

        {/* Main Glowing Polaroid Card */}
        <div className="relative z-20 bg-white/95 p-3.5 sm:p-6 rounded-3xl shadow-[0_0_60px_rgba(212,175,55,0.4),0_20px_45px_rgba(0,0,0,0.15)] border-2 border-[#D4AF37]/45 ring-1 ring-white/80">
          {/* Top Tape Accent */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-7 sm:h-8 bg-[#E6DBCB]/90 backdrop-blur-sm rounded-sm shadow-sm border border-[#D8CBBA]/60 z-20 pointer-events-none" />

          {/* Card Photo Container - Generous Taller Height */}
          <div className="relative rounded-2xl overflow-hidden bg-black/5 min-h-[500px] sm:min-h-[620px] md:min-h-[680px] flex items-center justify-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full flex flex-col items-center justify-center relative"
              >
                {/* Full Uncropped Image Box with Taller Aspect Ratio */}
                <div className="relative w-full h-[460px] sm:h-[580px] md:h-[640px] rounded-xl overflow-hidden shadow-xl border border-[#D4AF37]/30 bg-[#0f0f11] flex items-center justify-center p-2">
                  {/* Subtle Background Glow behind image */}
                  <img
                    src={currentStory.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 select-none pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Full Uncropped Image */}
                  <img
                    src={currentStory.image}
                    alt={currentStory.title}
                    className="relative z-10 w-full h-full object-contain object-center select-none rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Subtitle / Quote below image inside card */}
                <div className="pt-4 pb-1 text-center space-y-1 px-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B2A4A]">
                    {currentStory.title}
                  </h3>
                  {currentStory.quote ? (
                    <p className="font-script text-xl sm:text-2xl text-[#8B6E14]">
                      {currentStory.quote}
                    </p>
                  ) : (
                    <p className="font-script text-xl sm:text-2xl text-[#8B6E14]">
                      “The beginning of our favorite chapter ♡”
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Indicators Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {STORY_EVENTS.map((story, idx) => (
            <button
              key={story.year}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 bg-[#1B2A4A] shadow-md'
                  : 'w-2.5 bg-[#1B2A4A]/25 hover:bg-[#1B2A4A]/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};



