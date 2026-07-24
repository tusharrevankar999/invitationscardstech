import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, GlassWater, Heart, Wine, Utensils, Sparkles, Music, MapPin } from 'lucide-react';
import { SCHEDULE_TIMELINE } from '../data/weddingData';

export const ScheduleTimeline: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GlassWater':
        return <GlassWater className="w-5 h-5 text-[#D4AF37]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#C87D60]" />;
      case 'Wine':
        return <Wine className="w-5 h-5 text-[#D4AF37]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-[#8B6E14]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Music':
        return <Music className="w-5 h-5 text-[#C87D60]" />;
      default:
        return <Clock className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#8B6E14] text-xs font-sans uppercase tracking-[0.2em] mb-4"
        >
          <Clock className="w-3.5 h-3.5" />
          <span>The Itinerary</span>
        </motion.div>

        <h2 className="font-serif text-4xl sm:text-5xl text-[#1B2A4A] mb-4">
          Day-of Schedule
        </h2>

        <p className="font-serif italic text-lg text-[#5A524C]">
          Saturday, October 24, 2026 &bull; A celebration from afternoon champagne to midnight sparklers.
        </p>
      </div>

      {/* Schedule Interactive List */}
      <div className="space-y-6">
        {SCHEDULE_TIMELINE.map((item, index) => {
          const isActive = activeItem === index;

          return (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => setActiveItem(isActive ? null : index)}
              className={`rounded-2xl p-6 transition-all duration-300 border cursor-pointer ${
                isActive
                  ? 'bg-[#FAF7F2] border-[#D4AF37] shadow-xl gold-glow'
                  : 'bg-[#FAF7F2]/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#FAF7F2]'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border ${
                      isActive
                        ? 'bg-[#D4AF37]/20 border-[#D4AF37]'
                        : 'bg-[#E8E2D5]/50 border-[#D4AF37]/20'
                    }`}
                  >
                    {getIcon(item.iconName)}
                  </div>

                  <div>
                    <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#8B6E14]">
                      {item.time}
                    </span>
                    <h3 className="font-script text-2xl sm:text-3xl font-normal text-[#2C2825]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-sans text-[#8A7E76] sm:text-right">
                  <MapPin className="w-3.5 h-3.5 text-[#C87D60]" />
                  <span>{item.subtitle}</span>
                </div>
              </div>

              {/* Expandable Details */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-[#E8E2D5] font-sans text-sm text-[#5A524C] leading-relaxed"
                >
                  <p className="mb-2">{item.description}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#E8E2D5]/60 text-[11px] font-medium text-[#8B6E14]">
                    📍 Location: {item.location}
                  </span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
