import React, { useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying, setIsPlaying }) => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Soft Indian / Mediterranean acoustic ambient notes (Pentatonic / Raga Bhupali notes: C, D, E, G, A)
  const chordProgression = [
    [261.63, 329.63, 392.00, 523.25], // C Major
    [220.00, 261.63, 329.63, 440.00], // A Minor
    [174.61, 220.00, 261.63, 349.23], // F Major
    [196.00, 246.94, 293.66, 392.00], // G Major
  ];

  let currentChordIdx = 0;

  const playSoftNotes = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const chord = chordProgression[currentChordIdx];
    currentChordIdx = (currentChordIdx + 1) % chordProgression.length;

    chord.forEach((freq, i) => {
      setTimeout(() => {
        if (!audioCtxRef.current || ctx.state !== 'running') return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 3.9);
      }, i * 300);
    });
  };

  useEffect(() => {
    if (isPlaying) {
      playSoftNotes();
      intervalRef.current = setInterval(playSoftNotes, 4500);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Sound Toggle Button as seen in screenshot (bottom-right circle) */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-12 h-12 rounded-full bg-[#1B2A4A] hover:bg-[#121C33] text-white flex items-center justify-center shadow-2xl border-2 border-[#D4AF37] hover:scale-110 transition-all cursor-pointer group"
        title={isPlaying ? 'Mute Background Audio' : 'Play Background Audio'}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-white animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 text-white/80 group-hover:text-white" />
        )}
      </button>
    </div>
  );
};
