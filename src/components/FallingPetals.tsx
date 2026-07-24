import React from 'react';
import { motion } from 'motion/react';

interface FallingPetalsProps {
  variant?: 'goldPetals' | 'heartsAndRoses';
}

export const FallingPetals: React.FC<FallingPetalsProps> = ({ variant = 'goldPetals' }) => {
  // Pure dark yellow, gold, and mustard tones for goldPetals variant
  const yellowColors = [
    '#B8860B', // Dark Goldenrod
    '#C59B27', // Rich Ochre Yellow
    '#DAA520', // Goldenrod
    '#A67C1E', // Deep Amber Yellow
    '#D4AF37', // Metallic Gold
    '#8B6E14', // Dark Yellow Brown
  ];

  // Romantic palette for heartsAndRoses variant (soft & vivid light pink tones)
  const romanticColors = [
    '#FFB6C1', // Light Pink
    '#FFC0CB', // Soft Pink
    '#FF8FA3', // Blush Rose Pink
    '#FF758F', // Soft Red Pink
    '#E05780', // Vibrant Rose Pink
    '#FFD1DC', // Pastel Light Pink
    '#F4ACB7', // Light Soft Rose
  ];

  const items = Array.from({ length: 60 }).map((_, i) => {
    if (variant === 'heartsAndRoses') {
      // High distribution of hearts (approx 75% hearts) with subtle petals
      const typeDistribution = [
        'filled_heart',
        'outline_heart',
        'filled_heart',
        'filled_heart',
        'outline_heart',
        'rose_petal',
        'filled_heart',
        'outline_heart',
        'filled_heart',
        'rose_petal_curved',
      ];
      const itemType = typeDistribution[i % typeDistribution.length];
      let leftPercent: number;
      if (i < 30) {
        // Left side border margin region (1% - 18%)
        leftPercent = 1 + (i / 30) * 17 + (Math.sin(i * 2.7) * 1.5);
      } else {
        // Right side border margin region (82% - 98%)
        const indexRight = i - 30;
        leftPercent = 82 + (indexRight / 30) * 16 + (Math.sin(i * 2.7) * 1.5);
      }
      leftPercent = Math.max(1, Math.min(98, leftPercent));

      return {
        id: i,
        left: `${leftPercent}%`,
        size: 13 + (i % 6) * 3.5, // slightly larger, clear 13px to 30px size
        duration: 8.0 + (i % 7) * 2.1,
        delay: (i * 0.22) % 7.5,
        drift: (i % 2 === 0 ? 1 : -1) * (6 + (i % 4) * 6), // constrained drift
        type: itemType,
        color: romanticColors[i % romanticColors.length],
      };
    } else {
      // Original Gold / Yellow Petals
      let leftPercent: number;
      if (i < 27) {
        leftPercent = 1 + (i / 27) * 17 + (Math.sin(i * 2.5) * 1.5);
      } else {
        leftPercent = 82 + ((i - 27) / 27) * 16 + (Math.sin(i * 2.5) * 1.5);
      }
      leftPercent = Math.max(1, Math.min(98, leftPercent));

      return {
        id: i,
        left: `${leftPercent}%`,
        size: 7 + (i % 5) * 2, // 7px to 15px
        duration: 11 + (i % 6) * 2.5,
        delay: (i * 0.4) % 7,
        drift: (i % 2 === 0 ? 1 : -1) * (8 + (i % 4) * 6),
        isFlower: i % 3 === 0,
        color: yellowColors[i % yellowColors.length],
        strokeColor: '#6B5210',
      };
    }
  });

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{
            y: '-5vh',
            x: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: '105vh',
            x: [0, item.drift, -item.drift / 2, item.drift / 3],
            rotate: [0, 180, 360, 540],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: 'linear',
          }}
          style={{
            left: item.left,
            width: `${item.size}px`,
            height: `${item.size}px`,
          }}
          className="absolute filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)]"
        >
          {variant === 'heartsAndRoses' ? (
            <>
              {(item.type === 'filled_heart' || item.type === 'outline_heart') && (
                /* Heart Icons */
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full opacity-90"
                  fill={item.type === 'filled_heart' ? item.color : 'none'}
                  stroke={item.color}
                  strokeWidth={item.type === 'outline_heart' ? '2' : '0'}
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              )}
              {item.type === 'rose_petal' && (
                /* Classic Rose Petal */
                <svg viewBox="0 0 50 50" className="w-full h-full opacity-85" fill={item.color}>
                  <path
                    d="M25 0 C44 10, 50 36, 25 50 C0 36, 6 10, 25 0 Z"
                    stroke="#E07A8B"
                    strokeWidth="0.8"
                  />
                </svg>
              )}
              {item.type === 'rose_petal_curved' && (
                /* Organic Curved Rose Petal */
                <svg viewBox="0 0 50 50" className="w-full h-full opacity-85" fill={item.color}>
                  <path
                    d="M25 2 C38 -2, 48 18, 36 44 C22 50, 6 42, 12 26 C16 14, 12 8, 25 2 Z"
                    stroke="#E07A8B"
                    strokeWidth="0.8"
                  />
                </svg>
              )}
              {item.type === 'flower_blossom' && (
                /* 5-Petal Flower Blossom */
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-85">
                  <ellipse cx="50" cy="22" rx="14" ry="20" fill={item.color} stroke="#E07A8B" strokeWidth="1" />
                  <ellipse cx="76" cy="40" rx="20" ry="14" fill="#FFB6C1" stroke="#E07A8B" strokeWidth="1" />
                  <ellipse cx="66" cy="72" rx="16" ry="20" fill="#FFCCD5" stroke="#E07A8B" strokeWidth="1" />
                  <ellipse cx="34" cy="72" rx="16" ry="20" fill="#FFCCD5" stroke="#E07A8B" strokeWidth="1" />
                  <ellipse cx="24" cy="40" rx="20" ry="14" fill="#FFB6C1" stroke="#E07A8B" strokeWidth="1" />
                  <circle cx="50" cy="50" r="12" fill="#F4ACB7" />
                  <circle cx="50" cy="50" r="8" fill="#FFFBEB" />
                </svg>
              )}
            </>
          ) : (
            <>
              {item.isFlower ? (
                /* Small 5-petal dark yellow flower */
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-85" fill={item.color}>
                  <path
                    d="M50 20 C40 -5, 60 -5, 50 20 C75 0, 85 25, 50 20 C90 40, 80 65, 50 20 C60 85, 40 85, 50 20 C20 65, 10 40, 50 20 Z"
                    stroke={item.strokeColor}
                    strokeWidth="1.5"
                  />
                  <circle cx="50" cy="20" r="5" fill="#4A380A" />
                </svg>
              ) : (
                /* Small curved dark yellow petal */
                <svg viewBox="0 0 50 50" className="w-full h-full opacity-85" fill={item.color}>
                  <path
                    d="M25 0 C42 12, 48 38, 25 50 C2 38, 8 12, 25 0 Z"
                    stroke={item.strokeColor}
                    strokeWidth="1"
                  />
                </svg>
              )}
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
};

