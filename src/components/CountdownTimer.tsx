import React, { useState, useEffect } from 'react';
import { WEDDING_DETAILS } from '../data/weddingData';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(WEDDING_DETAILS.date.iso).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HRS', value: timeLeft.hours },
    { label: 'MINS', value: timeLeft.minutes },
    { label: 'SECS', value: timeLeft.seconds },
  ];

  return (
    <div className="max-w-xl mx-auto">
      {/* Sleek Frosted Glass Container with Vertical Dividers as in Screenshot */}
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-xl border border-[#D4AF37]/30 grid grid-cols-4 divide-x divide-[#D4AF37]/30 text-center">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="px-1 sm:px-4 flex flex-col justify-center items-center">
            <span className="font-serif text-3xl sm:text-5xl font-normal text-[#1B2A4A] tracking-tight">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="font-sans text-[9px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6E14] mt-1 sm:mt-2">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
