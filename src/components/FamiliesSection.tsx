import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FAMILIES_DETAILS } from '../data/weddingData';
import { FallingPetals } from './FallingPetals';
import { BirdsAnimation } from './BirdsAnimation';

export const FamiliesSection: React.FC = () => {
  const [monogramLoaded, setMonogramLoaded] = useState(true);

  return (
    <section id="families" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 md:px-12 overflow-hidden select-none">
      {/* Background Arch & Balcony Watercolor Landscape */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://suraj-libina.invitationmedia.in/assets/families-bg-desktop-CemX6j0X.webp"
          alt="Families Watercolor Background"
          className="w-full h-full object-cover object-center scale-[1.01]"
        />
        {/* Soft Vignette Overlay for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/50 pointer-events-none" />
      </div>

      {/* Dynamic Floating Birds in Sky */}
      <BirdsAnimation />

      {/* Falling Flowers & Petals */}
      <FallingPetals />

      {/* Main Container */}
      <div className="relative z-20 max-w-5xl w-full mx-auto text-center my-auto">
        
        {/* Top Header Block */}
        <div className="mb-10 sm:mb-14">
          {/* Top Bird Silhouette Icon */}
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-2"
          >
            <svg viewBox="0 0 100 50" className="w-8 h-5 text-[#B8860B] fill-current opacity-80">
              <path d="M 0,20 Q 25,0 50,20 Q 75,0 100,20 Q 75,12 50,28 Q 25,12 0,20 Z" />
            </svg>
          </motion.div>

          {/* Subtitle: "TWO FAMILIES. ONE PROMISE." */}
          <motion.p
            initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#1B2A4A] mb-2"
          >
            {FAMILIES_DETAILS.subtitle}
          </motion.p>

          {/* Floral Heart Ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center justify-center gap-2 text-[#B8860B] text-xs mb-3"
          >
            <span>❧</span>
            <span className="text-sm">♥</span>
            <span>☙</span>
          </motion.div>

          {/* Main Title: "INTRODUCING the families" */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.94, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-1"
          >
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1B2A4A] mb-2">
              {FAMILIES_DETAILS.title}
            </h2>
            <p className="font-script text-5xl sm:text-7xl md:text-8xl text-[#B8860B] -mt-3 sm:-mt-5 leading-none drop-shadow-sm">
              {FAMILIES_DETAILS.subtitleScript}
            </p>
          </motion.div>

          {/* Divider Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex items-center justify-center gap-3 mt-4"
          >
            <div className="h-[1px] w-12 sm:w-20 bg-[#B8860B]/40" />
            <span className="text-[#B8860B] text-xs">❦</span>
            <div className="h-[1px] w-12 sm:w-20 bg-[#B8860B]/40" />
          </motion.div>
        </div>

        {/* Middle Families Content (2 Columns with Vertical Gold Divider & Floating SL Monogram) */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center my-8">
          
          {/* Vertical Center Gold Line for Desktop */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/60 to-transparent -translate-x-1/2 origin-top"
          />

          {/* Center SL Monogram Crest with Dynamic Floating Effect */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 1.0, delay: 0.7 },
                scale: { duration: 1.0, delay: 0.7 },
                y: { duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }
              }}
              className="w-24 h-24 lg:w-28 lg:h-28 bg-white/80 backdrop-blur-md rounded-full border-2 border-[#D4AF37] p-2 shadow-xl flex items-center justify-center"
            >
              {monogramLoaded ? (
                <img
                  src="https://suraj-libina.invitationmedia.in/assets/monogram-DluBM9hV.webp"
                  alt="S | L Crest"
                  className="w-full h-full object-contain filter drop-shadow"
                  onError={() => setMonogramLoaded(false)}
                />
              ) : (
                <span className="font-serif font-bold text-xl text-[#1B2A4A]">S | L</span>
              )}
            </motion.div>
          </div>

          {/* Left Column: Groom's Family */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-[#D4AF37]/20 shadow-lg hover:bg-white/60 transition-all duration-500"
          >
            {/* Groom Name */}
            <h3 className="font-script text-5xl sm:text-7xl text-[#1B2A4A] drop-shadow-sm mb-1">
              {FAMILIES_DETAILS.groomFamily.name}
            </h3>

            {/* S/O Relation */}
            <p className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[#8B6E14] mb-1">
              {FAMILIES_DETAILS.groomFamily.relationLabel}
            </p>

            {/* Parents Names */}
            <p className="font-sans font-bold text-sm sm:text-base tracking-[0.15em] text-[#1B2A4A] uppercase mb-4">
              {FAMILIES_DETAILS.groomFamily.parents}
            </p>

            {/* Siblings Relation */}
            <p className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#B8860B] mb-1">
              {FAMILIES_DETAILS.groomFamily.siblingsLabel}
            </p>

            {/* Siblings Names */}
            <div className="font-sans text-xs sm:text-sm font-semibold tracking-[0.15em] text-[#1B2A4A] uppercase space-y-0.5">
              {FAMILIES_DETAILS.groomFamily.siblings.map((sibling, idx) => (
                <p key={idx}>{sibling}</p>
              ))}
            </div>

            {/* Small Bottom Ornament */}
            <div className="flex items-center gap-2 mt-4 text-[#B8860B]/60 text-xs">
              <span>─</span>
              <span>❦</span>
              <span>─</span>
            </div>
          </motion.div>

          {/* Mobile SL Crest between columns */}
          <div className="md:hidden flex justify-center my-2">
            <div className="w-20 h-20 bg-white/80 backdrop-blur-md rounded-full border-2 border-[#D4AF37] p-2 shadow-lg flex items-center justify-center">
              <img
                src="https://suraj-libina.invitationmedia.in/assets/monogram-DluBM9hV.webp"
                alt="S | L Crest"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column: Bride's Family */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-[#D4AF37]/20 shadow-lg hover:bg-white/60 transition-all duration-500"
          >
            {/* Bride Name */}
            <h3 className="font-script text-5xl sm:text-7xl text-[#1B2A4A] drop-shadow-sm mb-1">
              {FAMILIES_DETAILS.brideFamily.name}
            </h3>

            {/* D/O Relation */}
            <p className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[#8B6E14] mb-1">
              {FAMILIES_DETAILS.brideFamily.relationLabel}
            </p>

            {/* Parents Names */}
            <p className="font-sans font-bold text-sm sm:text-base tracking-[0.15em] text-[#1B2A4A] uppercase mb-4">
              {FAMILIES_DETAILS.brideFamily.parents}
            </p>

            {/* Siblings Relation */}
            <p className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#B8860B] mb-1">
              {FAMILIES_DETAILS.brideFamily.siblingsLabel}
            </p>

            {/* Siblings Names */}
            <div className="font-sans text-xs sm:text-sm font-semibold tracking-[0.15em] text-[#1B2A4A] uppercase space-y-0.5">
              {FAMILIES_DETAILS.brideFamily.siblings.map((sibling, idx) => (
                <p key={idx}>{sibling}</p>
              ))}
            </div>

            {/* Small Bottom Ornament */}
            <div className="flex items-center gap-2 mt-4 text-[#B8860B]/60 text-xs">
              <span>─</span>
              <span>❦</span>
              <span>─</span>
            </div>
          </motion.div>

        </div>

        {/* Bottom Tagline Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-16 text-center space-y-1"
        >
          <p className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#1B2A4A]">
            {FAMILIES_DETAILS.footerTagline1}
          </p>
          <p className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#1B2A4A]">
            {FAMILIES_DETAILS.footerTagline2}
          </p>
          <p className="font-script text-4xl sm:text-6xl text-[#B8860B] drop-shadow-sm pt-1">
            {FAMILIES_DETAILS.footerTaglineScript}
          </p>

          {/* Heart Icon */}
          <div className="pt-2 flex justify-center text-[#B8860B]">
            <span className="animate-pulse text-sm">♥</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
