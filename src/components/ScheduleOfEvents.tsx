import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { FallingPetals } from './FallingPetals';

import haldiImg from '../assets/images/haldi_event_illustration_1784879492930.jpg';
import mehendiImg from '../assets/images/mehendi_event_illustration_1784879517179.jpg';
import marriageImg from '../assets/images/marriage_event_illustration_1784879535239.jpg';
import receptionImg from '../assets/images/reception_event_illustration_1784879550858.jpg';

export interface EventSlide {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  description: string;
  image: string;
  mapQuery: string;
}

const EVENTS_SLIDES: EventSlide[] = [
  {
    id: 'haldi',
    title: 'Haldi Ceremony',
    date: '7 January 2027',
    time: '10:00 AM IST',
    venue: 'SUNSHINE SEASIDE LAWN',
    address: 'Taj Exotica Resort, Benaulim, South Goa',
    description: 'A vibrant morning of auspicious turmeric paste, marigold blooms, joyful laughter, and traditional music along the golden Goan shores.',
    image: haldiImg,
    mapQuery: 'Taj+Exotica+Resort+Benaulim+South+Goa',
  },
  {
    id: 'mehendi',
    title: 'Mehendi Night',
    date: '8 January 2027',
    time: '6:00 PM IST',
    venue: 'PALM GROVE COURTYARD',
    address: 'Taj Exotica Resort, Benaulim, South Goa',
    description: 'An enchanting evening of intricate henna art, glowing fairy lights, beachside acoustic tunes, and dancing under starry Goan skies.',
    image: mehendiImg,
    mapQuery: 'Taj+Exotica+Resort+Benaulim+South+Goa',
  },
  {
    id: 'marriage',
    title: 'Holy Marriage Ceremony',
    date: '9 January 2027',
    time: '10:30 AM IST',
    venue: 'IMMACULATE CONCEPTION CHURCH',
    address: 'Church Square, Panaji, Goa',
    description: 'The sacred union of Sara and Laksh as they exchange vows and rings in the presence of God, family, and loved ones in historical Goa.',
    image: marriageImg,
    mapQuery: 'Church+of+Our+Lady+of+Immaculate+Conception+Panaji+Goa',
  },
  {
    id: 'reception',
    title: 'Reception Dinner',
    date: '9 January 2027',
    time: '7:30 PM IST',
    venue: 'ROYAL OCEAN BALLROOM',
    address: 'TAJ EXOTICA RESORT & SPA, SOUTH GOA',
    description: 'Celebrate the newlyweds with an elegant oceanfront gala dinner, royal toasts, live Goan music, cake cutting, and joyous dancing.',
    image: receptionImg,
    mapQuery: 'Taj+Exotica+Resort+Benaulim+South+Goa',
  },
];

export const ScheduleOfEvents: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  const currentEvent = EVENTS_SLIDES[currentIndex];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % EVENTS_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + EVENTS_SLIDES.length) % EVENTS_SLIDES.length);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView, currentIndex, handleNext]);

  const openLocationMap = (mapQuery: string) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`,
      '_blank'
    );
  };

  // Variants for image and text animation transitions
  const imageVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(6px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(6px)',
      transition: { duration: 0.4, ease: 'easeIn' },
    }),
  };

  const contentVariants: Variants = {
    enter: { opacity: 0, y: 20, filter: 'blur(6px)' },
    center: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, delay: 0.1, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, filter: 'blur(6px)', transition: { duration: 0.3 } },
  };

  const renderEventFloatingIcon = (id: string) => {
    switch (id) {
      case 'haldi':
        return (
          <div className="relative flex items-center justify-center p-2 sm:p-2.5 bg-amber-50/90 backdrop-blur-md rounded-2xl border border-amber-300/80 shadow-md">
            {/* Two Floating Yellow Hearts */}
            <div className="relative w-14 sm:w-16 h-10 sm:h-12 flex items-center justify-center">
              {/* Heart 1 - Main Gold/Yellow Heart */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                  rotate: [-6, 6, -6],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute left-1 top-0.5 drop-shadow"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFC107" stroke="#D4AF37" strokeWidth="1.2">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>

              {/* Heart 2 - Smaller Bright Yellow Heart */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [8, -8, 8],
                  scale: [0.9, 1.15, 0.9],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: 0.35,
                  ease: 'easeInOut',
                }}
                className="absolute right-1 bottom-0.5 drop-shadow"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" stroke="#B8860B" strokeWidth="1.2">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>
            </div>
          </div>
        );

      case 'mehendi':
        return (
          <div className="relative flex items-center justify-center p-2 sm:p-2.5 bg-emerald-50/90 backdrop-blur-md rounded-2xl border border-emerald-300/80 shadow-md">
            {/* Mehendi Cone applying on Hand */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-16 sm:w-18 h-10 sm:h-12 flex items-center justify-center"
            >
              {/* Open Hand / Palm */}
              <svg width="34" height="34" viewBox="0 0 48 48" fill="none" className="absolute left-0 bottom-0 drop-shadow">
                {/* Hand outline */}
                <path d="M14 26 C12 20, 14 10, 17 8 C19 6, 21 9, 21 16 C21 8, 24 5, 26 6 C28 7, 28 11, 28 16 C28 8, 31 6, 33 7 C35 8, 35 12, 35 18 C35 11, 38 10, 39 12 C40 14, 39 20, 37 26 C34 33, 28 38, 22 38 C16 38, 14 32, 14 26 Z" fill="#FDE047" opacity="0.45" stroke="#854D0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Henna floral mandala on palm */}
                <circle cx="25" cy="24" r="4" fill="#78350F" />
                <circle cx="25" cy="24" r="6" stroke="#9A3412" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                <path d="M25 18 L25 30 M19 24 L31 24" stroke="#78350F" strokeWidth="1" />
              </svg>

              {/* Floating Animated Mehendi Cone applying henna */}
              <motion.div
                animate={{
                  x: [-1, 3, -1],
                  y: [0, -4, 0],
                  rotate: [-3, 5, -3],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute right-1 top-0 drop-shadow-md"
              >
                <svg width="26" height="28" viewBox="0 0 32 32" fill="none">
                  {/* Cone Body */}
                  <polygon points="28,2 22,24 8,8" fill="url(#coneGrad)" stroke="#B45309" strokeWidth="1.2" />
                  {/* Cone nozzle tip */}
                  <path d="M22 24 L20 28" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
                  {/* Henna droplet at tip */}
                  <motion.circle
                    cx="19"
                    cy="30"
                    r="1.8"
                    fill="#78350F"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                  <defs>
                    <linearGradient id="coneGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#22C55E" />
                      <stop offset="50%" stopColor="#15803D" />
                      <stop offset="100%" stopColor="#78350F" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        );

      case 'marriage':
        return (
          <div className="relative flex items-center justify-center p-2 sm:p-2.5 bg-rose-50/90 backdrop-blur-md rounded-2xl border border-rose-300/80 shadow-md">
            {/* Two Floating Flower Bouquets */}
            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 3.0,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-16 sm:w-18 h-10 sm:h-12 flex items-center justify-center"
            >
              {/* Bouquet 1 (Left - Rose & Gold Bouquet) */}
              <motion.div
                animate={{
                  y: [0, -4, 0],
                  rotate: [-6, 4, -6],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute left-0 top-0 drop-shadow-md"
              >
                <svg width="28" height="36" viewBox="0 0 32 40" fill="none">
                  {/* Stem Wrap / Holder */}
                  <polygon points="12,24 20,24 18,36 14,36" fill="#FDE68A" stroke="#D4AF37" strokeWidth="1" />
                  {/* Ribbon Bow */}
                  <path d="M12 28 C 10 31, 8 30, 10 27 C 12 25, 16 27, 16 27 C 16 27, 20 25, 22 27 C 24 30, 22 31, 20 28" fill="#E11D48" stroke="#BE123C" strokeWidth="0.8" />
                  <path d="M15 27 L13 35 M17 27 L19 35" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Leaves/Greenery */}
                  <path d="M8 20 C 4 16, 6 12, 12 16 Z" fill="#15803D" />
                  <path d="M24 20 C 28 16, 26 12, 20 16 Z" fill="#166534" />
                  <path d="M16 12 C 16 6, 22 8, 18 14 Z" fill="#22C55E" />
                  {/* Roses / Flower Blooms */}
                  <circle cx="11" cy="18" r="5" fill="#E11D48" stroke="#9F1239" strokeWidth="0.8" />
                  <circle cx="11" cy="18" r="2.8" fill="#FB7185" />
                  <circle cx="21" cy="18" r="5" fill="#F43F5E" stroke="#BE123C" strokeWidth="0.8" />
                  <circle cx="21" cy="18" r="2.8" fill="#FECDD3" />
                  <circle cx="16" cy="12" r="6" fill="#E11D48" stroke="#881337" strokeWidth="0.8" />
                  <circle cx="16" cy="12" r="3.5" fill="#FDA4AF" />
                  <circle cx="16" cy="12" r="1.5" fill="#FFF1F2" />
                  <circle cx="11" cy="13" r="3" fill="#FFD700" />
                  <circle cx="21" cy="13" r="3" fill="#FFE4E6" />
                </svg>
              </motion.div>

              {/* Bouquet 2 (Right - Blush & White Bouquet) */}
              <motion.div
                animate={{
                  y: [-3, 3, -3],
                  rotate: [5, -5, 5],
                  scale: [1, 0.92, 1],
                }}
                transition={{
                  duration: 2.8,
                  delay: 0.35,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute right-0 top-0 drop-shadow-md"
              >
                <svg width="28" height="36" viewBox="0 0 32 40" fill="none">
                  {/* Stem Wrap / Holder */}
                  <polygon points="12,24 20,24 18,36 14,36" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1" />
                  {/* Ribbon Bow */}
                  <path d="M12 28 C 10 31, 8 30, 10 27 C 12 25, 16 27, 16 27 C 16 27, 20 25, 22 27 C 24 30, 22 31, 20 28" fill="#FB7185" stroke="#E11D48" strokeWidth="0.8" />
                  <path d="M15 27 L13 35 M17 27 L19 35" stroke="#FB7185" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Leaves/Greenery */}
                  <path d="M8 20 C 4 16, 6 12, 12 16 Z" fill="#166534" />
                  <path d="M24 20 C 28 16, 26 12, 20 16 Z" fill="#15803D" />
                  <path d="M16 12 C 16 6, 10 8, 14 14 Z" fill="#4ADE80" />
                  {/* Lily & Peony Blooms */}
                  <circle cx="11" cy="18" r="4.8" fill="#FFFFFF" stroke="#F43F5E" strokeWidth="0.8" />
                  <circle cx="11" cy="18" r="2.5" fill="#FFE4E6" />
                  <circle cx="21" cy="18" r="4.8" fill="#FDA4AF" stroke="#E11D48" strokeWidth="0.8" />
                  <circle cx="21" cy="18" r="2.5" fill="#FFF1F2" />
                  <circle cx="16" cy="11" r="5.5" fill="#FB7185" stroke="#BE123C" strokeWidth="0.8" />
                  <circle cx="16" cy="11" r="3.2" fill="#FFFFFF" />
                  <circle cx="16" cy="11" r="1.5" fill="#FFD700" />
                  <circle cx="20" cy="12" r="2.5" fill="#FFD700" />
                  <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" stroke="#FB7185" strokeWidth="0.5" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        );

      case 'reception':
        return (
          <div className="relative flex items-center justify-center p-2 sm:p-2.5 bg-indigo-50/90 backdrop-blur-md rounded-2xl border border-indigo-300/80 shadow-md">
            {/* Ring with 2 Floating Clinking Glasses */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-16 sm:w-18 h-10 sm:h-12 flex items-center justify-center"
            >
              {/* Wedding Diamond Ring in center background */}
              <motion.div
                animate={{
                  scale: [0.95, 1.1, 0.95],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute left-1 top-0 drop-shadow"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  {/* Gold Band */}
                  <circle cx="12" cy="14" r="7" stroke="#D4AF37" strokeWidth="2.5" fill="none" />
                  {/* Diamond Sparkle top */}
                  <polygon points="12,2 15,6 12,9 9,6" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
                  <circle cx="12" cy="6" r="1.5" fill="#FFFFFF" />
                </svg>
              </motion.div>

              {/* 2 Champagne / Wine Glasses Clinking */}
              <div className="absolute right-0 bottom-0 flex items-center gap-0.5">
                {/* Glass 1 */}
                <motion.div
                  animate={{
                    rotate: [12, 2, 12],
                    x: [0, 2, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="drop-shadow"
                >
                  <svg width="20" height="28" viewBox="0 0 24 32" fill="none">
                    {/* Glass bowl */}
                    <path d="M5 2 L19 2 L15 16 C14 19, 10 19, 9 16 Z" fill="#FDE68A" opacity="0.85" stroke="#B45309" strokeWidth="1.2" />
                    {/* Champagne bubbles */}
                    <circle cx="11" cy="8" r="1" fill="#FFFFFF" />
                    <circle cx="14" cy="12" r="1" fill="#FFFFFF" />
                    {/* Stem & base */}
                    <line x1="12" y1="18" x2="12" y2="28" stroke="#B45309" strokeWidth="1.5" />
                    <line x1="7" y1="28" x2="17" y2="28" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.div>

                {/* Glass 2 */}
                <motion.div
                  animate={{
                    rotate: [-12, -2, -12],
                    x: [0, -2, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="drop-shadow"
                >
                  <svg width="20" height="28" viewBox="0 0 24 32" fill="none">
                    {/* Glass bowl */}
                    <path d="M5 2 L19 2 L15 16 C14 19, 10 19, 9 16 Z" fill="#FDE68A" opacity="0.85" stroke="#B45309" strokeWidth="1.2" />
                    {/* Champagne bubbles */}
                    <circle cx="12" cy="7" r="1" fill="#FFFFFF" />
                    <circle cx="10" cy="12" r="1" fill="#FFFFFF" />
                    {/* Stem & base */}
                    <line x1="12" y1="18" x2="12" y2="28" stroke="#B45309" strokeWidth="1.5" />
                    <line x1="7" y1="28" x2="17" y2="28" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="schedule" ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 md:px-12 overflow-hidden select-none">
      {/* Background Matching Families Section Theme */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://suraj-libina.invitationmedia.in/assets/families-bg-desktop-CemX6j0X.webp"
          alt="Schedule Watercolor Background"
          className="w-full h-full object-cover object-center scale-[1.01]"
        />
        {/* Subtle Light Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/40 pointer-events-none" />
      </div>

      {/* Delicate Falling Petals */}
      <FallingPetals />

      {/* Main Container */}
      <div className="relative z-20 max-w-6xl w-full mx-auto my-auto">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-[#B8860B] text-xs mb-2"
          >
            <span>✦</span>
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#1B2A4A]">
              JOIN US IN CELEBRATING
            </span>
            <span>✦</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-script text-5xl sm:text-6xl md:text-7xl text-[#1B2A4A] mb-4 font-normal drop-shadow-sm"
          >
            Schedule of Events
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mt-3"
          >
            <div className="h-[1px] w-12 sm:w-24 bg-[#B8860B]/40" />
            <span className="text-[#B8860B] text-xs">♥</span>
            <div className="h-[1px] w-12 sm:w-24 bg-[#B8860B]/40" />
          </motion.div>
        </div>

        {/* Outer Framed Card Container - Exactly Matching Screenshot UI */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white/75 backdrop-blur-md rounded-[2.5rem] p-4 sm:p-8 md:p-10 shadow-2xl border-2 border-[#1B2A4A]/20 ring-1 ring-[#D4AF37]/40"
        >
          {/* Gold & Blue Inner Border Line Frame */}
          <div className="absolute inset-2 sm:inset-3 rounded-[2rem] border border-[#1B2A4A]/30 pointer-events-none" />

          {/* Corner Star Ornaments ✦ */}
          <span className="absolute top-4 left-4 text-[#1B2A4A] text-sm pointer-events-none">✦</span>
          <span className="absolute top-4 right-4 text-[#1B2A4A] text-sm pointer-events-none">✦</span>
          <span className="absolute bottom-4 left-4 text-[#1B2A4A] text-sm pointer-events-none">✦</span>
          <span className="absolute bottom-4 right-4 text-[#1B2A4A] text-sm pointer-events-none">✦</span>

          {/* Subhead Header inside Card with Top Right Floating Animations */}
          <div className="relative z-10 mb-4 sm:mb-6 pl-2 sm:pl-4 pr-2 sm:pr-4 flex items-center justify-between">
            <span className="font-sans font-medium text-sm sm:text-base text-[#1E3A8A] tracking-wide block">
              Sara & Laksh
            </span>

            {/* Floating Top-Right Event Animated Element */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEvent.id}
                initial={{ opacity: 0, scale: 0.8, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 8 }}
                transition={{ duration: 0.4 }}
              >
                {renderEventFloatingIcon(currentEvent.id)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Grid Layout: Left Image Slider + Right Details Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Image Container (5/12 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[3/4] max-h-[500px] mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-[#1B2A4A]/20 bg-[#1B2A4A]/5">

                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={currentEvent.id}
                    src={currentEvent.image}
                    alt={currentEvent.title}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full h-full object-cover object-center select-none"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Bottom Left Navigation Buttons (< and >) */}
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous event"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-[#1B2A4A] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center border border-black/10 cursor-pointer active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next event"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-[#1B2A4A] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center border border-black/10 cursor-pointer active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Bottom Right Pagination Dots */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  {EVENTS_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                        ? 'w-6 bg-[#1B2A4A]'
                        : 'w-2 bg-white/70 hover:bg-white'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>

            {/* Right Details Container (7/12 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentEvent.id}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-6"
                >
                  {/* Event Title */}
                  <h3 className="font-script text-4xl sm:text-5xl md:text-6xl font-normal text-[#1B2A4A] leading-tight tracking-wide">
                    {currentEvent.title}
                  </h3>

                  {/* Meta Details Row (Date, Time, Venue) */}
                  <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm sm:text-base font-sans text-[#2C2825] pt-1">
                    {/* Date */}
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#1E3A8A]" />
                      <span className="font-medium text-[#1B2A4A]">{currentEvent.date}</span>
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#1E3A8A]" />
                      <span className="font-medium text-[#1B2A4A]">{currentEvent.time}</span>
                    </div>

                    {/* Venue */}
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#1E3A8A]" />
                      <span className="font-bold text-[#1B2A4A] uppercase tracking-wider">{currentEvent.venue}</span>
                    </div>
                  </div>

                  {/* Full Address */}
                  <p className="font-sans text-xs uppercase tracking-widest text-[#8B6E14] font-semibold">
                    📍 {currentEvent.address}
                  </p>

                  {/* Description Text */}
                  <p className="font-sans text-base sm:text-lg text-[#334155] leading-relaxed max-w-xl">
                    {currentEvent.description}
                  </p>

                  {/* Action Button: "View Location" */}
                  <div className="pt-2">
                    <button
                      onClick={() => openLocationMap(currentEvent.mapQuery)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1B2A4A] text-white font-sans text-sm font-semibold shadow-md hover:bg-[#15223A] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <span>View Location</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </motion.div>

        {/* Thumbnails Bar for Quick Navigation */}
        <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          {EVENTS_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-semibold transition-all duration-300 border cursor-pointer ${idx === currentIndex
                ? 'bg-[#1B2A4A] text-white border-[#1B2A4A] shadow-md scale-105'
                : 'bg-white/70 text-[#1B2A4A] border-[#1B2A4A]/20 hover:bg-white hover:border-[#1B2A4A]/50'
                }`}
            >
              <div className="w-6 h-6 rounded-lg overflow-hidden shrink-0 border border-white/40">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              </div>
              <span className="font-sans text-xs uppercase tracking-widest font-semibold leading-none">{slide.title}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
