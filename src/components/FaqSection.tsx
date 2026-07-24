import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '../data/weddingData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleIdx = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#8B6E14] text-xs font-sans uppercase tracking-[0.2em] mb-4"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Questions & Answers</span>
        </motion.div>

        <h2 className="font-serif text-4xl sm:text-5xl text-[#1B2A4A] mb-4">
          Frequently Asked Questions
        </h2>

        <p className="font-serif italic text-lg text-[#5A524C]">
          Everything you need to know for our Goa wedding celebration.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;

          return (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? 'bg-[#FAF7F2] border-[#D4AF37] shadow-lg'
                  : 'bg-[#FAF7F2]/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
              }`}
            >
              <button
                onClick={() => toggleIdx(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-serif text-xl font-bold text-[#2C2825]">
                  {faq.q}
                </span>

                <div
                  className={`p-2 rounded-full transition-transform duration-300 ${
                    isOpen ? 'bg-[#D4AF37] text-white rotate-180' : 'bg-[#E8E2D5] text-[#8B6E14]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 pt-1 font-sans text-sm text-[#5A524C] leading-relaxed border-t border-[#E8E2D5]"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
