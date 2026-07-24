import React from 'react';
import { motion } from 'motion/react';

export const BirdsAnimation: React.FC = () => {
  // Define 4 birds with different speed, delay, scale, and vertical positions across the upper sky
  const birds = [
    { id: 1, top: '15%', scale: 0.6, duration: 18, delay: 0, opacity: 0.7 },
    { id: 2, top: '22%', scale: 0.45, duration: 22, delay: 5, opacity: 0.6 },
    { id: 3, top: '12%', scale: 0.5, duration: 16, delay: 9, opacity: 0.65 },
    { id: 4, top: '28%', scale: 0.4, duration: 25, delay: 14, opacity: 0.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {birds.map((bird) => (
        <motion.div
          key={bird.id}
          initial={{ x: '-10vw', y: 0 }}
          animate={{
            x: '110vw',
            y: [0, -15, 10, -8, 0],
          }}
          transition={{
            x: { duration: bird.duration, repeat: Infinity, delay: bird.delay, ease: 'linear' },
            y: { duration: bird.duration / 3, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{ top: bird.top, opacity: bird.opacity }}
          className="absolute"
        >
          <div style={{ transform: `scale(${bird.scale})` }}>
            {/* Animated SVG Bird Silhouette with wing flapping keyframe */}
            <svg
              className="w-10 h-8 text-[#2C3E50]/70 fill-current"
              viewBox="0 0 100 80"
            >
              <path className="animate-bird-wing" d="M 0,30 Q 25,0 50,25 Q 75,0 100,30 Q 75,20 50,40 Q 25,20 0,30 Z" />
            </svg>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
