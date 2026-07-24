import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/weddingData';
import { GalleryPhoto } from '../types';

export const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'venue', label: 'The Venue' },
    { id: 'candid', label: 'Candids' },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      selectedPhotoIndex === 0 ? filteredPhotos.length - 1 : selectedPhotoIndex - 1
    );
  };

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      selectedPhotoIndex === filteredPhotos.length - 1 ? 0 : selectedPhotoIndex + 1
    );
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-[#B8860B] text-xs mb-2"
        >
          <span>✦</span>
          <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#1B2A4A]">
            CAPTURED MOMENTS
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
          Photo Gallery
        </motion.h2>

        <p className="font-serif italic text-base sm:text-lg text-[#5A524C]">
          A glimpse into our favorite memories leading up to our wedding in Goa.
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

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 rounded-full text-xs font-sans uppercase tracking-widest transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#8B6E14] text-white shadow-md'
                : 'bg-[#FAF7F2] text-[#5A524C] border border-[#D4AF37]/30 hover:border-[#D4AF37]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Editorial Grid Layout */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="relative group rounded-2xl overflow-hidden shadow-lg border border-[#D4AF37]/20 bg-[#FAF7F2] cursor-pointer aspect-[4/3]"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A18]/80 via-[#1E1A18]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#D4AF37] mb-1">
                  {photo.category}
                </span>
                <p className="font-serif text-lg font-medium leading-snug">
                  {photo.caption}
                </p>
                <div className="mt-2 flex items-center gap-1 text-xs text-white/80">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1E1A18]/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
              <img
                src={filteredPhotos[selectedPhotoIndex].url}
                alt={filteredPhotos[selectedPhotoIndex].caption}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl border border-white/20"
              />
              <p className="mt-4 text-white font-serif text-xl text-center">
                {filteredPhotos[selectedPhotoIndex].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
