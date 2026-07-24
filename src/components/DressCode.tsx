import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, Check, Info } from 'lucide-react';
import { DRESS_CODE_SWATCHES, WEDDING_DETAILS } from '../data/weddingData';

export const DressCode: React.FC = () => {
  const [selectedSwatch, setSelectedSwatch] = useState(0);

  return (
    <section id="dress-code" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-[#B8860B] text-xs mb-2"
        >
          <span>✦</span>
          <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#1B2A4A]">
            STYLE INSPIRATION
          </span>
          <span>✦</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-4xl sm:text-5xl text-[#1B2A4A] mb-4"
        >
          Dress Code & Color Palette
        </motion.h2>

        <p className="font-serif italic text-base sm:text-lg text-[#5A524C]">
          {WEDDING_DETAILS.theme.title}
        </p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mt-4"
        >
          <div className="h-[1px] w-12 sm:w-24 bg-[#B8860B]/40" />
          <span className="text-[#B8860B] text-xs">♥</span>
          <div className="h-[1px] w-12 sm:w-24 bg-[#B8860B]/40" />
        </motion.div>
      </div>

      {/* Main Container */}
      <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 shadow-xl border border-[#D4AF37]/30 glass-card">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="font-sans text-sm text-[#5A524C] leading-relaxed mb-4">
            We kindly ask our guests to dress in formal ethnic or black-tie optional attire. To complement our South Goa coastal resort setting, we encourage rich ocean tones, emerald greens, gold accents, and pastel sunset shades.
          </p>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8E2D5] text-xs font-sans text-[#8B6E14] font-medium">
            Tap a color swatch below to see outfit suggestions
          </span>
        </div>

        {/* Color Palette Swatches */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          {DRESS_CODE_SWATCHES.map((swatch, idx) => {
            const isSelected = selectedSwatch === idx;

            return (
              <button
                key={swatch.name}
                onClick={() => setSelectedSwatch(idx)}
                className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all cursor-pointer border ${
                  isSelected
                    ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 scale-105 shadow-md bg-white'
                    : 'border-transparent hover:border-[#D4AF37]/30 bg-white/50'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full ${swatch.bgClass} shadow-inner border border-black/10 flex items-center justify-center`}
                >
                  {isSelected && <Check className="w-5 h-5 text-white drop-shadow-md" />}
                </div>

                <span className="font-serif text-sm font-bold text-[#2C2825] text-center leading-tight">
                  {swatch.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Swatch Description Box */}
        <motion.div
          key={selectedSwatch}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 border border-[#D4AF37]/20 flex items-start gap-4"
        >
          <div className="p-3 rounded-xl bg-[#FAF7F2] text-[#8B6E14] shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-[#2C2825] mb-1">
              {DRESS_CODE_SWATCHES[selectedSwatch].name} Palette Guidance
            </h4>
            <p className="font-sans text-sm text-[#5A524C]">
              {DRESS_CODE_SWATCHES[selectedSwatch].description}
            </p>
          </div>
        </motion.div>

        {/* General Tips */}
        <div className="mt-8 pt-8 border-t border-[#E8E2D5] grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans text-xs text-[#5A524C]">
          <div>
            <h5 className="font-serif text-sm font-bold text-[#2C2825] uppercase tracking-wider mb-2">
              Gentlemen
            </h5>
            <p>
              Tuxedos, dark suits (black, charcoal, navy), or tailored linen jacket with formal trousers. Bowties or neckties welcomed.
            </p>
          </div>

          <div>
            <h5 className="font-serif text-sm font-bold text-[#2C2825] uppercase tracking-wider mb-2">
              Ladies
            </h5>
            <p>
              Floor-length gowns, elegant cocktail dresses, or dressy pant suits. Block heels or wedges recommended for the olive grove lawn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
