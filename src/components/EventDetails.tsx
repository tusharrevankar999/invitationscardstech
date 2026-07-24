import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Navigation, Sun, Calendar, Sparkles, Phone, Compass } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

export const EventDetails: React.FC = () => {
  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${WEDDING_DETAILS.venue.mapQuery}`,
      '_blank'
    );
  };

  return (
    <section id="details" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
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
            THE LOCATION & VENUE
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
          Where & When
        </motion.h2>

        <p className="font-serif italic text-base sm:text-lg text-[#5A524C]">
          Nested along the golden sands of South Goa, framed by swaying palms and ocean sunsets.
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

      {/* Dual Venue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Card 1: Ceremony */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FAF7F2] rounded-3xl p-8 shadow-xl border border-[#D4AF37]/30 glass-card relative overflow-hidden group flex flex-col justify-between"
        >
          <div>
            <div className="relative h-52 rounded-2xl overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop"
                alt="Ceremony Area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#8B6E14] font-cinzel text-xs font-semibold uppercase tracking-wider">
                The Ceremony
              </div>
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#2C2825] mb-2">
              {WEDDING_DETAILS.venue.ceremonyArea}
            </h3>

            <p className="font-sans text-xs uppercase tracking-widest text-[#C87D60] font-semibold mb-4">
              {WEDDING_DETAILS.venue.name}
            </p>

            <div className="space-y-3 font-sans text-sm text-[#5A524C] mb-6">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>3:00 PM PST &bull; Guest Arrival at 2:30 PM</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{WEDDING_DETAILS.venue.address}</span>
              </div>
            </div>

            <p className="font-serif text-sm italic text-[#8A7E76] mb-6">
              Beachfront lawn under swaying palm trees. Soft acoustic violin melodies as you arrive.
            </p>
          </div>

          <button
            onClick={openGoogleMaps}
            className="w-full py-3 px-5 rounded-xl border border-[#D4AF37] text-[#8B6E14] hover:bg-[#D4AF37] hover:text-white transition-all font-sans text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 cursor-pointer"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions (Google Maps)</span>
          </button>
        </motion.div>

        {/* Card 2: Reception */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#FAF7F2] rounded-3xl p-8 shadow-xl border border-[#D4AF37]/30 glass-card relative overflow-hidden group flex flex-col justify-between"
        >
          <div>
            <div className="relative h-52 rounded-2xl overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1000&auto=format&fit=crop"
                alt="Reception Area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#8B6E14] font-cinzel text-xs font-semibold uppercase tracking-wider">
                The Reception
              </div>
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#2C2825] mb-2">
              {WEDDING_DETAILS.venue.receptionArea}
            </h3>

            <p className="font-sans text-xs uppercase tracking-widest text-[#C87D60] font-semibold mb-4">
              {WEDDING_DETAILS.venue.name}
            </p>

            <div className="space-y-3 font-sans text-sm text-[#5A524C] mb-6">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>7:30 PM IST &bull; Cocktails, Dinner & Dancing</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{WEDDING_DETAILS.venue.address}</span>
              </div>
            </div>

            <p className="font-serif text-sm italic text-[#8A7E76] mb-6">
              Candlelit seaside dining, coastal Goan cuisine, live band, and late-night lounge.
            </p>
          </div>

          <button
            onClick={openGoogleMaps}
            className="w-full py-3 px-5 rounded-xl border border-[#D4AF37] text-[#8B6E14] hover:bg-[#D4AF37] hover:text-white transition-all font-sans text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 cursor-pointer"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions (Google Maps)</span>
          </button>
        </motion.div>
      </div>

      {/* Weather Forecast Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#8B6E14]/10 via-[#D4AF37]/15 to-[#8B6E14]/10 rounded-2xl p-6 border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#B8860B] shrink-0">
            <Sun className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-[#2C2825]">
              Goa Coastal Weather Outlook &bull; Jan 09
            </h4>
            <p className="font-sans text-xs text-[#5A524C]">
              Expected 84°F (29°C) High / 70°F (21°C) Low. Clear golden skies with refreshing Arabian Sea breezes.
            </p>
          </div>
        </div>

        <div className="shrink-0 text-center sm:text-right font-cinzel text-xl font-bold text-[#8B6E14]">
          84°F / Sunny
        </div>
      </motion.div>
    </section>
  );
};
