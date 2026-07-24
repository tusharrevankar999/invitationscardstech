import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquareHeart, Heart, Send, Sparkles, User } from 'lucide-react';
import { GuestbookMessage } from '../types';

interface GuestbookSectionProps {
  messages: GuestbookMessage[];
  onAddMessage: (msg: GuestbookMessage) => void;
}

export const GuestbookSection: React.FC<GuestbookSectionProps> = ({
  messages,
  onAddMessage,
}) => {
  const [author, setAuthor] = useState('');
  const [relationship, setRelationship] = useState('');
  const [messageText, setMessageText] = useState('');
  const [likedIds, setLikedIds] = useState<Record<string, number>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !messageText) return;

    const newMsg: GuestbookMessage = {
      id: `msg_${Date.now()}`,
      author,
      relationship: relationship || 'Dear Friend',
      message: messageText,
      likes: 1,
      date: 'Just now',
    };

    onAddMessage(newMsg);
    setAuthor('');
    setRelationship('');
    setMessageText('');
  };

  const handleLike = (id: string) => {
    setLikedIds((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <section id="guestbook" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
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
            WISHES & BLESSINGS
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
          The Guestbook
        </motion.h2>

        <p className="font-serif italic text-base sm:text-lg text-[#5A524C]">
          Leave a note of love, congratulations, or blessings for Sara & Laksh.
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

      {/* Add Message Form Card */}
      <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 shadow-xl border border-[#D4AF37]/30 glass-card mb-12">
        <h3 className="font-serif text-2xl font-bold text-[#2C2825] mb-4 text-center">
          Write Your Wishes
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-sans text-xs uppercase tracking-widest text-[#8B6E14] mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Aunt Sarah & Uncle Robert"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none font-sans text-sm text-[#2C2825]"
              />
            </div>

            <div>
              <label className="block font-sans text-xs uppercase tracking-widest text-[#8B6E14] mb-1">
                Relationship
              </label>
              <input
                type="text"
                placeholder="e.g. Cousin, High School Best Friend"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none font-sans text-sm text-[#2C2825]"
              />
            </div>
          </div>

          <div>
            <label className="block font-sans text-xs uppercase tracking-widest text-[#8B6E14] mb-1">
              Your Message *
            </label>
            <textarea
              rows={3}
              required
              placeholder="Wishing you both a lifetime of laughter, adventures, and endless love..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none font-sans text-sm text-[#2C2825]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-sans text-xs uppercase tracking-widest font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Post Wish To Guestbook</span>
          </button>
        </form>
      </div>

      {/* Messages Feed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {messages.map((msg) => {
          const extraLikes = likedIds[msg.id] || 0;

          return (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FAF7F2] rounded-2xl p-6 shadow-md border border-[#D4AF37]/25 glass-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-[#E8E2D5] pb-3">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#2C2825]">
                      {msg.author}
                    </h4>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-[#C87D60]">
                      {msg.relationship}
                    </span>
                  </div>
                  <span className="font-sans text-[10px] text-[#8A7E76]">
                    {msg.date}
                  </span>
                </div>

                <p className="font-serif italic text-sm text-[#5A524C] leading-relaxed mb-4">
                  “{msg.message}”
                </p>
              </div>

              <div className="pt-2 flex items-center justify-end">
                <button
                  onClick={() => handleLike(msg.id)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C87D60]/10 text-[#C87D60] hover:bg-[#C87D60] hover:text-white transition-all text-xs font-sans font-medium cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>{msg.likes + extraLikes}</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
