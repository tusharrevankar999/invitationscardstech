import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Heart, Check, MapPin } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';
import { CountdownTimer } from './CountdownTimer';
import { FallingPetals } from './FallingPetals';
import { BirdsAnimation } from './BirdsAnimation';

interface HeroSectionProps {
  onOpenRsvp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRsvp }) => {
  const [calendarAdded, setCalendarAdded] = useState(false);
  const [monogramLoaded, setMonogramLoaded] = useState(true);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Sara  & Lakshy's Wedding");
    const details = encodeURIComponent("Taj Exotica Resort & Spa, South Goa, India");
    const location = encodeURIComponent(WEDDING_DETAILS.venue.address);
    const startIso = "20270109T050000Z";
    const endIso = "20270109T140000Z";

    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;

    window.open(googleCalUrl, '_blank');
    setCalendarAdded(true);
    setTimeout(() => setCalendarAdded(false), 4000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 sm:px-6 overflow-hidden select-none">
      {/* Background Archway Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://suraj-libina.invitationmedia.in/assets/hero-bg-desktop-DVXVxfCH.webp"
          alt="Sara & Laksh Wedding Background"
          className="w-full h-full object-cover object-center scale-[1.01]"
        />
        {/* Gentle Vignette Gradient for Content Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40 pointer-events-none" />
      </div>

      {/* Dynamic Moving Birds in Sky Background */}
      <BirdsAnimation />

      {/* Dynamic Falling Flowers and Petals Shower */}
      <FallingPetals />

      {/* Main Content Container framed by the Arch */}
      <div className="relative z-20 max-w-3xl w-full mx-auto text-center mt-6 sm:mt-10">

        {/* SL Monogram Crest with Entrance Scale & Dynamic Continuous Float Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -40, filter: 'blur(10px)' }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            filter: { duration: 1.0 },
            y: {
              duration: 3.6,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: 1.2, // Start floating smoothly after entrance
            },
          }}
          className="relative mx-auto mb-4 w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center cursor-pointer"
        >
          {monogramLoaded ? (
            <img
              src="https://suraj-libina.invitationmedia.in/assets/monogram-DluBM9hV.webp"
              alt="S | L Monogram Crest"
              className="w-full h-full object-contain filter drop-shadow-lg hover:scale-110 transition-transform duration-500"
              onError={() => setMonogramLoaded(false)}
            />
          ) : (
            /* Elegant SVG Monogram Crest Fallback */
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-[#D4AF37] flex flex-col items-center justify-center bg-white/80 backdrop-blur-md shadow-lg p-2">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#B8860B] fill-current">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M50 10 Q60 25 50 40 Q40 25 50 10 Z" fill="#D4AF37" opacity="0.6" />
                <text x="50" y="58" textAnchor="middle" className="font-serif font-semibold text-2xl fill-[#1B2A4A]">S | L</text>
              </svg>
            </div>
          )}
        </motion.div>

        {/* Names Heading: "Sara weds Laksh" with Staggered Character/Word Reveal & Blur Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.92, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-[#1B2A4A] tracking-tight leading-tight drop-shadow-sm flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="inline-block hover:scale-105 transition-transform duration-300">Sara</span>
            <span className="font-serif italic font-normal text-3xl sm:text-5xl text-[#B8860B] px-1 sm:px-2">
              weds
            </span>
            <span className="inline-block hover:scale-105 transition-transform duration-300">Laksh</span>
          </h1>
        </motion.div>

        {/* Heart Divider Subtitle: "WE ARE GETTING MARRIED" */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 my-3"
        >
          <span className="text-[#B8860B] text-xs animate-pulse">♥</span>
          <div className="h-[1px] w-8 sm:w-16 bg-[#B8860B]/40" />
          <p className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#1B2A4A]">
            WE ARE GETTING MARRIED
          </p>
          <div className="h-[1px] w-8 sm:w-16 bg-[#B8860B]/40" />
          <span className="text-[#B8860B] text-xs animate-pulse">♥</span>
        </motion.div>

        {/* Save The Date Card with Soft Scale-Up & Backdrop Glass Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 35, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="my-6 max-w-lg mx-auto bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-[#D4AF37]/35 relative group hover:bg-white/80 transition-all duration-500"
        >
          <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.35em] text-[#B8860B] mb-1">
            SAVE THE DATE
          </p>
          <p className="font-script text-4xl sm:text-6xl text-[#1B2A4A] my-2 drop-shadow-sm">
            9th January 2027
          </p>
          <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#1B2A4A]/80 flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>SOUTH GOA, GOA</span>
          </p>
        </motion.div>

        {/* Countdown Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 mb-6"
        >
          <p className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.35em] text-[#B8860B] font-semibold mb-2">
            — THE COUNTDOWN BEGINS —
          </p>
          <div className="w-2 h-2 rounded-full bg-[#B8860B] mx-auto opacity-80 animate-ping" />
        </motion.div>

        {/* Countdown Timer Component Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.93, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <CountdownTimer />
        </motion.div>

        {/* Tagline: "❦ Until our forever begins ❦" */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.0, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="font-script text-3xl sm:text-5xl text-[#1B2A4A] font-medium drop-shadow-sm">
            ❦ Until our forever begins ❦
          </p>
        </motion.div>

        {/* Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            onClick={onOpenRsvp}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1B2A4A] hover:bg-[#121C33] text-white font-sans text-xs uppercase tracking-widest font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]/50"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Join us</span>
          </button>

          <button
            onClick={handleAddToCalendar}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#D4AF37] bg-white/80 hover:bg-white text-[#1B2A4A] font-sans text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            {calendarAdded ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Added To Calendar</span>
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4 text-[#B8860B]" />
                <span>Save To Calendar</span>
              </>
            )}
          </button>
        </motion.div>

      </div>
    </section>
  );
};
