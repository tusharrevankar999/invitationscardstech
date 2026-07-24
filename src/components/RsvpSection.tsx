import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, CheckCircle2, Music, Utensils, Send, User, Mail, Sparkles, AlertCircle } from 'lucide-react';
import { GuestRSVP } from '../types';

interface RsvpSectionProps {
  onAddRsvp: (rsvp: GuestRSVP) => void;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({ onAddRsvp }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes' as 'yes' | 'no',
    plusOne: false,
    plusOneName: '',
    dietary: '',
    mealPreference: 'Pan-Seared Chilean Sea Bass',
    songRequest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastRsvp, setLastRsvp] = useState<GuestRSVP | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const newRsvp: GuestRSVP = {
      id: `rsvp_${Date.now()}`,
      name: formData.name,
      email: formData.email,
      attending: formData.attending,
      plusOne: formData.plusOne,
      plusOneName: formData.plusOneName,
      dietary: formData.dietary,
      mealPreference: formData.mealPreference,
      songRequest: formData.songRequest,
      message: formData.message,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    onAddRsvp(newRsvp);
    setLastRsvp(newRsvp);
    setSubmitted(true);
  };

  const mealOptions = [
    {
      id: 'seabass',
      title: 'Pan-Seared Chilean Sea Bass',
      desc: 'Accompanied by saffron risotto, braised leeks, and Meyer lemon beurre blanc.'
    },
    {
      id: 'filet',
      title: 'Prime Aged Beef Tenderloin Filet',
      desc: 'Truffle potato puree, roasted baby carrots, and rosemary cabernet reduction.'
    },
    {
      id: 'risotto',
      title: 'Wild Mushroom & Summer Truffle Risotto (V / GF)',
      desc: 'Arborio rice, chanterelles, aged parmigiano-reggiano, and micro herbs.'
    }
  ];

  return (
    <section id="rsvp" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
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
            KINDLY RESPOND
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
          RSVP For Our Wedding
        </motion.h2>

        <p className="font-serif italic text-base sm:text-lg text-[#5A524C]">
          Please respond by December 1, 2026 so we can finalize seating and catering arrangements in Goa.
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

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="rsvp-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#D4AF37]/30 glass-card space-y-8"
          >
            {/* Step 1: Attendance Choice */}
            <div>
              <label className="block font-serif text-xl font-bold text-[#2C2825] mb-4 text-center">
                Will you be joining us in Goa?
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: 'yes' })}
                  className={`p-5 rounded-2xl border transition-all text-center cursor-pointer ${formData.attending === 'yes'
                      ? 'bg-gradient-to-br from-[#8B6E14] to-[#B8860B] text-white border-[#D4AF37] shadow-lg'
                      : 'bg-white text-[#2C2825] border-[#D4AF37]/30 hover:border-[#D4AF37]'
                    }`}
                >
                  <span className="font-serif text-lg font-bold block">
                    Joyfully Accepts
                  </span>
                  <span className="text-xs font-sans opacity-90 block mt-1">
                    I will be there to celebrate!
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: 'no' })}
                  className={`p-5 rounded-2xl border transition-all text-center cursor-pointer ${formData.attending === 'no'
                      ? 'bg-[#1E1A18] text-white border-black shadow-lg'
                      : 'bg-white text-[#2C2825] border-[#D4AF37]/30 hover:border-[#D4AF37]'
                    }`}
                >
                  <span className="font-serif text-lg font-bold block">
                    Regretfully Declines
                  </span>
                  <span className="text-xs font-sans opacity-90 block mt-1">
                    Will be celebrating in spirit
                  </span>
                </button>
              </div>
            </div>

            {/* Step 2: Personal Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-[#8B6E14] font-semibold mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8A7E76] absolute left-4 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none font-sans text-sm text-[#2C2825]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-[#8B6E14] font-semibold mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8A7E76] absolute left-4 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="e.g. eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none font-sans text-sm text-[#2C2825]"
                  />
                </div>
              </div>
            </div>

            {/* Plus One Checkbox */}
            {formData.attending === 'yes' && (
              <div className="bg-white rounded-2xl p-6 border border-[#D4AF37]/20 space-y-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="plusOne"
                    checked={formData.plusOne}
                    onChange={(e) => setFormData({ ...formData, plusOne: e.target.checked })}
                    className="w-5 h-5 rounded text-[#D4AF37] focus:ring-[#D4AF37] border-[#D4AF37]"
                  />
                  <label htmlFor="plusOne" className="font-serif text-lg text-[#2C2825] cursor-pointer">
                    I will be bringing a guest / plus-one
                  </label>
                </div>

                {formData.plusOne && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                  >
                    <label className="block font-sans text-xs uppercase tracking-widest text-[#8B6E14] font-semibold mb-2">
                      Plus-One Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Thomas Sterling"
                      value={formData.plusOneName}
                      onChange={(e) => setFormData({ ...formData, plusOneName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none font-sans text-sm text-[#2C2825]"
                    />
                  </motion.div>
                )}
              </div>
            )}

            {/* Meal Choice Selection */}
            {formData.attending === 'yes' && (
              <div>
                <label className="block font-serif text-xl font-bold text-[#2C2825] mb-3">
                  Entrée Choice
                </label>

                <div className="space-y-3">
                  {mealOptions.map((meal) => (
                    <label
                      key={meal.id}
                      className={`p-4 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${formData.mealPreference === meal.title
                          ? 'bg-[#E8E2D5]/50 border-[#D4AF37] ring-1 ring-[#D4AF37]'
                          : 'bg-white border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                        }`}
                    >
                      <input
                        type="radio"
                        name="mealPreference"
                        checked={formData.mealPreference === meal.title}
                        onChange={() => setFormData({ ...formData, mealPreference: meal.title })}
                        className="mt-1 text-[#D4AF37] focus:ring-[#D4AF37]"
                      />
                      <div>
                        <span className="font-serif font-bold text-base text-[#2C2825] block">
                          {meal.title}
                        </span>
                        <span className="font-sans text-xs text-[#5A524C] block mt-0.5">
                          {meal.desc}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Dietary Restrictions & Song Request */}
            {formData.attending === 'yes' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#8B6E14] font-semibold mb-2">
                    Dietary Restrictions / Allergies
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vegetarian, Gluten-Free, Nut allergy"
                    value={formData.dietary}
                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none font-sans text-sm text-[#2C2825]"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#8B6E14] font-semibold mb-2 flex items-center gap-1.5">
                    <Music className="w-3.5 h-3.5 text-[#C87D60]" />
                    <span>Song Request For The DJ</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Frank Sinatra - Fly Me To The Moon"
                    value={formData.songRequest}
                    onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none font-sans text-sm text-[#2C2825]"
                  />
                </div>
              </div>
            )}

            {/* Personal Message */}
            <div>
              <label className="block font-sans text-xs uppercase tracking-widest text-[#8B6E14] font-semibold mb-2">
                Personal Note For Sara & Laksh
              </label>
              <textarea
                rows={3}
                placeholder="Share a wish or special message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none font-sans text-sm text-[#2C2825]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#AA771C] text-white font-sans text-xs uppercase tracking-widest font-medium shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit RSVP Response</span>
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="rsvp-confirmation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#D4AF37] text-center gold-glow"
          >
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-6 text-[#8B6E14]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#2C2825] mb-2">
              Thank You, {lastRsvp?.name}!
            </h3>

            <p className="font-serif italic text-xl text-[#8B6E14] mb-6">
              {lastRsvp?.attending === 'yes'
                ? "Your response has been received. We can't wait to celebrate with you in Goa!"
                : "Your response has been received. You will be deeply missed on our big day!"}
            </p>

            {/* Summary Ticket */}
            <div className="max-w-md mx-auto bg-white rounded-2xl p-6 border border-[#D4AF37]/30 text-left space-y-3 font-sans text-xs text-[#5A524C] mb-8">
              <div className="flex justify-between border-b border-[#E8E2D5] pb-2">
                <span className="font-bold uppercase tracking-wider text-[#8B6E14]">Attendance</span>
                <span>{lastRsvp?.attending === 'yes' ? 'Joyfully Accepting' : 'Declining'}</span>
              </div>

              {lastRsvp?.attending === 'yes' && (
                <>
                  <div className="flex justify-between border-b border-[#E8E2D5] pb-2">
                    <span className="font-bold uppercase tracking-wider text-[#8B6E14]">Entrée</span>
                    <span>{lastRsvp?.mealPreference}</span>
                  </div>

                  {lastRsvp?.plusOne && (
                    <div className="flex justify-between border-b border-[#E8E2D5] pb-2">
                      <span className="font-bold uppercase tracking-wider text-[#8B6E14]">Plus One</span>
                      <span>{lastRsvp?.plusOneName || 'Yes'}</span>
                    </div>
                  )}
                </>
              )}

              <div className="flex justify-between pt-1 text-[11px] text-[#8A7E76]">
                <span>Confirmation ID:</span>
                <span className="font-mono">{lastRsvp?.id}</span>
              </div>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-full border border-[#D4AF37] text-[#8B6E14] text-xs font-sans uppercase tracking-widest font-medium hover:bg-[#D4AF37] hover:text-white transition-colors cursor-pointer"
            >
              Update RSVP Response
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
