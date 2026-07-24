import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Music, Volume2, Mail, Heart, CheckCircle2 } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

interface EnvelopeModalProps {
  isOpen: boolean;
  onOpenInvitation: () => void;
  musicPlaying: boolean;
  setMusicPlaying: (playing: boolean) => void;
}

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({
  isOpen,
  onOpenInvitation,
  musicPlaying,
  setMusicPlaying,
}) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setMusicPlaying(true);
    setTimeout(() => {
      onOpenInvitation();
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1A18]/90 backdrop-blur-xl paper-texture overflow-y-auto"
      >
        {/* Background Subtle Floating Petals */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: -50,
                rotate: 0,
                scale: 0.6 + Math.random() * 0.8,
              }}
              animate={{
                y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
                x: `calc(${Math.random() * 100}px + ${i % 2 === 0 ? '50px' : '-50px'})`,
                rotate: 360,
              }}
              transition={{
                duration: 8 + Math.random() * 7,
                repeat: Infinity,
                delay: i * 0.6,
                ease: 'linear',
              }}
              className="absolute text-[#D4AF37]"
            >
              ❀
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-lg w-full my-auto text-center">
          {/* Header Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>You are cordially invited</span>
          </motion.div>

          {/* 3D Envelope Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-[#FAF7F2] rounded-2xl p-8 sm:p-10 shadow-2xl border border-[#D4AF37]/30 gold-glow text-[#2C2825]"
          >
            {/* Fine Ornamental Corners */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/60" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/60" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/60" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/60" />

            {/* Monogram Monolith */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FAF7F2] to-[#E8E2D5] border-2 border-[#D4AF37] flex items-center justify-center shadow-inner relative group">
              <span className="font-serif text-2xl font-bold text-[#8B6E14] tracking-wider">
                {WEDDING_DETAILS.couple.initials}
              </span>

              {/* Wax Seal Ribbon Look */}
              <motion.div
                animate={isOpening ? { scale: [1, 1.4, 0], opacity: [1, 1, 0] } : {}}
                className="absolute inset-0 rounded-full border border-[#D4AF37] animate-ping opacity-20 pointer-events-none"
              />
            </div>

            <p className="font-cinzel text-xs tracking-[0.25em] text-[#8B6E14] uppercase mb-2">
              Save The Date
            </p>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2825] mb-3 leading-tight">
              {WEDDING_DETAILS.couple.groom}
              <span className="block font-script font-normal text-3xl sm:text-4xl text-[#C87D60] my-1">
                &
              </span>
              {WEDDING_DETAILS.couple.bride}
            </h1>

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-4" />

            <p className="font-serif italic text-lg text-[#5A524C] mb-6">
              {WEDDING_DETAILS.date.display}
              <span className="block text-sm font-sans font-normal tracking-wide text-[#8A7E76] mt-1">
                {WEDDING_DETAILS.venue.cityState}
              </span>
            </p>

            {/* Interactive Open Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleOpen}
              disabled={isOpening}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#AA771C] text-white font-medium text-sm tracking-widest uppercase shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group cursor-pointer"
            >
              <motion.span
                animate={isOpening ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Open Digital Invitation</span>
              </motion.span>

              {isOpening && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-[#8B6E14] text-white font-medium gap-2"
                >
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>Unveiling Experience...</span>
                </motion.span>
              )}
            </motion.button>

            {/* Music Hint */}
            <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#8A7E76]">
              <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Includes interactive background ambient soundscape</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
