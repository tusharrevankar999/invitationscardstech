import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Hotel, Copy, Check, ExternalLink, Plane, Bus, Star } from 'lucide-react';
import { HOTELS } from '../data/weddingData';

export const TravelInfo: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <section id="travel" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
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
            ACCOMMODATIONS & TRAVEL
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
          Where To Stay
        </motion.h2>

        <p className="font-serif italic text-base sm:text-lg text-[#5A524C]">
          We have arranged reserved room blocks and special group rates at these luxury Goa resorts.
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

      {/* Hotel Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {HOTELS.map((hotel, index) => (
          <motion.div
            key={hotel.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="bg-[#FAF7F2] rounded-3xl p-6 shadow-xl border border-[#D4AF37]/30 glass-card flex flex-col justify-between group hover:border-[#D4AF37] transition-all"
          >
            <div>
              <div className="relative h-48 rounded-2xl overflow-hidden mb-5">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#8B6E14] text-xs font-bold font-sans">
                  {hotel.rate}
                </div>
              </div>

              <div className="flex items-center gap-1 text-[#D4AF37] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#2C2825] mb-1">
                {hotel.name}
              </h3>

              <p className="font-sans text-xs text-[#C87D60] font-medium mb-3">
                📍 {hotel.distance}
              </p>

              <p className="font-sans text-xs text-[#5A524C] leading-relaxed mb-6">
                {hotel.description}
              </p>

              {/* Promo Code Box */}
              <div className="bg-[#E8E2D5]/50 rounded-xl p-3 mb-6 flex items-center justify-between border border-[#D4AF37]/20">
                <div>
                  <span className="block text-[10px] uppercase font-sans tracking-widest text-[#8A7E76]">
                    Group Promo Code
                  </span>
                  <span className="font-cinzel text-xs font-bold text-[#8B6E14]">
                    {hotel.discountCode}
                  </span>
                </div>

                <button
                  onClick={() => handleCopy(hotel.discountCode)}
                  className="p-2 rounded-lg bg-[#FAF7F2] text-[#8B6E14] hover:bg-[#D4AF37] hover:text-white transition-colors cursor-pointer"
                  title="Copy Promo Code"
                >
                  {copiedCode === hotel.discountCode ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <a
              href={hotel.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs font-sans uppercase tracking-widest font-medium transition-all flex items-center justify-center gap-2 hover:shadow-lg"
            >
              <span>Book Room</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Airport & Shuttle Info Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#D4AF37]/30 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#8B6E14] shrink-0">
            <Plane className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-[#2C2825] mb-1">
              Nearest Airports
            </h4>
            <p className="font-sans text-xs text-[#5A524C] leading-relaxed">
              &bull; Dabolim Intl Airport (GOI - South Goa) — 28 km (35 mins drive)<br />
              &bull; Manohar Intl Airport (GOX - Mopa North Goa) — 58 km (1 hr drive)<br />
              &bull; Madgaon Railway Station (MAO) — 10 km (18 mins drive)
            </p>
          </div>
        </div>

        <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#D4AF37]/30 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#8B6E14] shrink-0">
            <Bus className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-[#2C2825] mb-1">
              Wedding Day Shuttles
            </h4>
            <p className="font-sans text-xs text-[#5A524C] leading-relaxed">
              Complimentary luxury shuttles will run between partner hotels and Taj Exotica Resort & Spa throughout the days and late evenings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
