import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Heart, ExternalLink, DollarSign, Check, X } from 'lucide-react';
import { REGISTRY_ITEMS } from '../data/weddingData';
import { RegistryItem } from '../types';

export const RegistrySection: React.FC = () => {
  const [selectedFund, setSelectedFund] = useState<RegistryItem | null>(null);
  const [contributionAmount, setContributionAmount] = useState<number>(150);
  const [contributed, setContributed] = useState<boolean>(false);

  const handleContribute = (e: React.FormEvent) => {
    e.preventDefault();
    setContributed(true);
    setTimeout(() => {
      setContributed(false);
      setSelectedFund(null);
    }, 2500);
  };

  return (
    <section id="registry" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#8B6E14] text-xs font-sans uppercase tracking-[0.2em] mb-4"
        >
          <Gift className="w-3.5 h-3.5" />
          <span>With Our Gratitude</span>
        </motion.div>

        <h2 className="font-serif text-4xl sm:text-5xl text-[#1B2A4A] mb-4">
          Gift Registry & Honeymoon Fund
        </h2>

        <p className="font-serif italic text-lg text-[#5A524C]">
          Your presence at our wedding is the greatest gift of all. If you wish to bless us with a gift, we have created a honeymoon fund and home registry.
        </p>
      </div>

      {/* Registry Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {REGISTRY_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            className="bg-[#FAF7F2] rounded-3xl p-6 shadow-xl border border-[#D4AF37]/30 glass-card flex flex-col justify-between group hover:border-[#D4AF37] transition-all"
          >
            <div>
              <div className="relative h-52 rounded-2xl overflow-hidden mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#8B6E14] text-xs font-cinzel font-bold">
                  {item.category === 'cash' ? 'Honeymoon Fund' : item.storeName}
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#2C2825] mb-2">
                {item.title}
              </h3>

              <p className="font-sans text-xs text-[#5A524C] leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Cash Fund Progress Bar */}
              {item.category === 'cash' && item.goalAmount && item.raisedAmount && (
                <div className="mb-6 space-y-2">
                  <div className="flex justify-between text-xs font-sans">
                    <span className="text-[#8B6E14] font-bold">
                      ${item.raisedAmount.toLocaleString()} Raised
                    </span>
                    <span className="text-[#8A7E76]">
                      Goal: ${item.goalAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-[#E8E2D5] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37]"
                      style={{
                        width: `${Math.min(
                          100,
                          (item.raisedAmount / item.goalAmount) * 100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {item.category === 'cash' ? (
              <button
                onClick={() => setSelectedFund(item)}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs font-sans uppercase tracking-widest font-medium transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Contribute To Fund</span>
              </button>
            ) : (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl border border-[#D4AF37] text-[#8B6E14] hover:bg-[#D4AF37] hover:text-white transition-all font-sans text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2"
              >
                <span>View {item.storeName} Registry</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Contribution Modal */}
      <AnimatePresence>
        {selectedFund && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1E1A18]/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="bg-[#FAF7F2] rounded-3xl p-8 max-w-md w-full shadow-2xl border border-[#D4AF37] relative">
              <button
                onClick={() => setSelectedFund(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#E8E2D5] text-[#2C2825]"
              >
                <X className="w-5 h-5" />
              </button>

              {!contributed ? (
                <form onSubmit={handleContribute} className="text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#8B6E14]">
                    <Heart className="w-8 h-8 fill-[#D4AF37]" />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#2C2825]">
                      {selectedFund.title}
                    </h3>
                    <p className="font-sans text-xs text-[#5A524C] mt-1">
                      Choose an amount to gift towards our honeymoon adventure.
                    </p>
                  </div>

                  {/* Preset Amounts */}
                  <div className="grid grid-cols-4 gap-2">
                    {[50, 100, 150, 250].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setContributionAmount(amt)}
                        className={`py-2 rounded-xl font-sans text-xs font-bold border transition-all ${contributionAmount === amt
                            ? 'bg-[#8B6E14] text-white border-[#8B6E14]'
                            : 'bg-white text-[#2C2825] border-[#D4AF37]/30'
                          }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-widest text-[#8B6E14] mb-1">
                      Or Custom Gift Amount ($)
                    </label>
                    <input
                      type="number"
                      min={10}
                      value={contributionAmount}
                      onChange={(e) => setContributionAmount(Number(e.target.value))}
                      className="w-full text-center py-3 rounded-xl bg-white border border-[#D4AF37] font-serif text-2xl font-bold text-[#2C2825]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-sans text-xs uppercase tracking-widest font-medium shadow-lg cursor-pointer"
                  >
                    Gift ${contributionAmount} With Warmest Wishes
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-500 text-green-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2C2825]">
                    Thank You So Much!
                  </h3>
                  <p className="font-serif italic text-base text-[#8B6E14]">
                    Your generous gift of ${contributionAmount} means the world to Sara & Laksh.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
