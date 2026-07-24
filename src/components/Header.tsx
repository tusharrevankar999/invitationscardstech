import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, Mail, Heart, Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

interface HeaderProps {
  musicPlaying: boolean;
  setMusicPlaying: (playing: boolean) => void;
  onReopenEnvelope: () => void;
  onOpenRsvp: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  musicPlaying,
  setMusicPlaying,
  onReopenEnvelope,
  onOpenRsvp,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Families', href: '#families' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Our Story', href: '#story' },
    { name: 'Details', href: '#details' },
    { name: 'Guestbook', href: '#guestbook' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/917972722490', '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-[#D4AF37]/20 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FAF7F2] to-[#E8E2D5] border border-[#D4AF37] flex items-center justify-center shadow-sm group-hover:border-[#B8860B] transition-colors">
            <span className="font-serif text-sm font-bold text-[#8B6E14] tracking-wider">
              {WEDDING_DETAILS.couple.initials}
            </span>
          </div>
          <div className="hidden sm:block">
            <span className="font-serif font-bold text-base text-[#1B2A4A] tracking-wide block leading-none">
              Sara & Laksh
            </span>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8B6E14] block mt-0.5">
              January 9, 2027
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-sans text-xs uppercase tracking-widest text-[#5A524C] hover:text-[#B8860B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Audio Music Toggle */}
          <button
            onClick={() => setMusicPlaying(!musicPlaying)}
            title={musicPlaying ? 'Mute Music' : 'Play Music'}
            className="p-2 rounded-full border border-[#D4AF37]/30 bg-[#FAF7F2] hover:bg-[#E8E2D5]/50 text-[#8B6E14] transition-all flex items-center gap-1.5 text-xs font-sans"
          >
            {musicPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-[#B8860B] animate-pulse" />
                <span className="hidden xl:inline text-[10px] uppercase tracking-wider text-[#8B6E14]">Music On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-[#8A7E76]" />
                <span className="hidden xl:inline text-[10px] uppercase tracking-wider text-[#8A7E76]">Music Off</span>
              </>
            )}
          </button>

          {/* Re-Open Envelope Button */}
          <button
            onClick={onReopenEnvelope}
            title="Re-open Virtual Envelope"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#D4AF37]/30 bg-[#FAF7F2] hover:bg-[#E8E2D5]/50 text-[#8B6E14] text-xs font-sans tracking-wide transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-wider">Envelope</span>
          </button>

          {/* WhatsApp Button - Added Here - Commented out as requested */}
          {/*
          <button
            onClick={openWhatsApp}
            title="Chat on WhatsApp"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#25D366]/30 bg-[#FAF7F2] hover:bg-[#E8F5E9]/70 text-[#25D366] text-xs font-sans tracking-wide transition-colors hover:border-[#25D366]/50"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-wider">WhatsApp</span>
          </button>
          */}

          {/* Primary RSVP Button - Changed to Build My Wedding Memory CTA with smooth pulse/glow animation */}
          <motion.button
            onClick={openWhatsApp}
            animate={{
              scale: [1, 1.04, 1],
              boxShadow: [
                '0 4px 6px -1px rgba(184, 134, 11, 0.2), 0 2px 4px -1px rgba(184, 134, 11, 0.1)',
                '0 10px 15px -3px rgba(212, 175, 55, 0.5), 0 4px 6px -2px rgba(212, 175, 55, 0.3)',
                '0 4px 6px -1px rgba(184, 134, 11, 0.2), 0 2px 4px -1px rgba(184, 134, 11, 0.1)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs font-sans font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="shrink-0 flex items-center justify-center"
            >
              <Sparkles className="w-3.5 h-3.5 fill-white text-white" />
            </motion.div>
            <span>Build My Wedding Memory</span>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#2C2825] hover:bg-[#E8E2D5]/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer - Optionally add WhatsApp here too */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#FAF7F2] border-b border-[#D4AF37]/20 px-6 py-6 shadow-xl"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-serif text-lg text-[#2C2825] hover:text-[#B8860B] transition-colors py-1 border-b border-[#E8E2D5]"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReopenEnvelope();
                }}
                className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#8B6E14]"
              >
                <Mail className="w-4 h-4" />
                <span>Re-open Envelope</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#25D366]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};