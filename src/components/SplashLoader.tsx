import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoMark from './LogoMark';

interface SplashLoaderProps {
  onComplete?: () => void;
}

const phrases = [
  'INITIALIZING SYSTEM...',
  'WEB APPLICATIONS',
  'AI INTEGRATIONS',
  'CRAFTING EXPERIENCES',
  'WELCOME TO FIGURE OUT'
];

export default function SplashLoader({ onComplete }: SplashLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Disable body scroll while splash is active
    document.body.style.overflow = 'hidden';

    // Counter animation loop
    const duration = 2200; // 2.2 seconds total intro
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const currentProgress = Math.min(100, Math.floor((stepCount / steps) * 100));
      setProgress(currentProgress);

      // Phase calculation
      if (currentProgress < 25) setPhaseIndex(0);
      else if (currentProgress < 50) setPhaseIndex(1);
      else if (currentProgress < 75) setPhaseIndex(2);
      else if (currentProgress < 95) setPhaseIndex(3);
      else setPhaseIndex(4);

      if (stepCount >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 300);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <div className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden font-sans">
          {/* Top Shutter Curtain */}
          <motion.div
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#050505] border-b border-amber-500/20 z-10 overflow-hidden flex items-end justify-center pb-2"
          >
            {/* Background Grid & Ambient Glow */}
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          </motion.div>

          {/* Bottom Shutter Curtain */}
          <motion.div
            exit={{ y: '100%' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#050505] border-t border-amber-500/20 z-10 overflow-hidden flex items-start justify-center pt-2"
          >
            {/* Background Grid & Ambient Glow */}
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          </motion.div>

          {/* Center Stage Animation */}
          <motion.div
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6"
          >
            {/* Outer Glowing Energy Rings */}
            <div className="relative mb-8 flex items-center justify-center">
              {/* Rotating Tech Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute w-36 h-36 border border-dashed border-amber-500/40 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                className="absolute w-28 h-28 border border-amber-500/30 rounded-full border-t-amber-500 border-b-amber-500"
              />

              {/* Central Logo Box */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'backOut' }}
                className="relative z-10 h-16 w-16 rounded-2xl bg-amber-500 text-black flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.8)]"
              >
                <LogoMark className="h-9 w-9 text-black" />
              </motion.div>

              {/* Pulse Waves */}
              <motion.div
                animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                className="absolute h-16 w-16 rounded-2xl bg-amber-500/50 pointer-events-none"
              />
            </div>

            {/* Kinetic Text Phase */}
            <div className="h-8 mb-4 overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phaseIndex}
                  initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="text-center font-mono text-sm sm:text-base font-bold tracking-[0.2em] text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                >
                  {phrases[phaseIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Percentage Number Counter */}
            <div className="flex items-baseline gap-1 font-mono font-black text-4xl sm:text-6xl text-white tracking-tighter mb-6">
              <span className="text-gradient-gold">
                {progress < 10 ? `0${progress}` : progress}
              </span>
              <span className="text-amber-500 text-2xl sm:text-3xl">%</span>
            </div>

            {/* Sleek Glowing Progress Bar */}
            <div className="w-64 sm:w-80 h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800 p-0.5 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.9)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Footer Tech Indicator */}
            <div className="mt-8 text-[11px] font-mono text-neutral-500 tracking-widest uppercase flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping" />
              <span>FIGURE OUT // DIGITAL STUDIO</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
