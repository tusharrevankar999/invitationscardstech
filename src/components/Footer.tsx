import React from 'react';
import { motion } from 'motion/react';
import { Heart, ChevronUp, Sparkles, Share2 } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Sara & Laksh's Wedding Invitation",
        text: "You're invited to Sara & Lakshy's Wedding in Goa!",
        url: window.location.href,
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Invitation link copied to clipboard!');
    }
  };

  return (
    <footer className="bg-[#1E1A18] text-[#FAF7F2] pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/30 relative overflow-hidden">
      {/* Decorative Gold Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Monogram */}
        <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
          <span className="font-serif text-xl font-bold text-[#D4AF37] tracking-widest">
            {WEDDING_DETAILS.couple.initials}
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] mb-2">
          Sara & Laksh
        </h2>

        <p className="font-serif italic text-lg text-[#D4AF37] mb-6">
          {WEDDING_DETAILS.date.display} &bull; {WEDDING_DETAILS.venue.cityState}
        </p>

        <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#A89F91] mb-8">
          {WEDDING_DETAILS.couple.hashtag}
        </p>
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#A89F91] mb-8">
          connect at <a href="tel:+917972722490" className="text-white font-bold hover:underline">+91 7972722490</a>
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={handleShare}
            className="px-5 py-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1E1A18] transition-all text-xs font-sans uppercase tracking-widest flex items-center gap-2 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Invitation</span>
          </button>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1E1A18] transition-all cursor-pointer"
            title="Back to Top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

        <div className="w-24 h-[1px] bg-[#D4AF37]/30 mx-auto mb-6" />

        <p className="font-serif italic text-xs text-[#8A7E76] flex items-center justify-center gap-1.5">
          <span>Crafted with love for our dear friends & family</span>
          <Heart className="w-3.5 h-3.5 text-[#C87D60] fill-[#C87D60]" />
        </p>

        <p className="font-sans text-xs text-[#8A7E76] mt-3">
          Developed by{' '}
          <a
            href="https://www.instagram.com/tr_dev.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold hover:underline"
          >
            tr_dev.tech
          </a>
        </p>
      </div>
    </footer>
  );
};
