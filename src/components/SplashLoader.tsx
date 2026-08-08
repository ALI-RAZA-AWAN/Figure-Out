import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoMark from './LogoMark';

interface SplashLoaderProps {
  onComplete?: () => void;
}

export default function SplashLoader({ onComplete }: SplashLoaderProps) {
  const [phase, setPhase] = useState<'idle' | 'impact' | 'astral' | 'shatter' | 'done'>('idle');

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Timeline sequence:
    // 0ms: Idle dark energy
    // 800ms: Impact / Chest Strike
    // 1600ms: Astral Soul Projection
    // 3300ms: Reality Shatter & Re-entry
    // 4300ms: Finish and Reveal Site

    const t1 = setTimeout(() => setPhase('impact'), 700);
    const t2 = setTimeout(() => setPhase('astral'), 1500);
    const t3 = setTimeout(() => setPhase('shatter'), 3300);
    const t4 = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] select-none pointer-events-auto bg-[#030305] overflow-hidden flex items-center justify-center font-sans">
        
        {/* Background Ambient Cosmic Grid */}
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        {/* Dynamic Energy Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-amber-500/20 via-cyan-500/10 to-purple-600/20 rounded-full blur-[160px] pointer-events-none animate-pulse" />

        {/* Camera Shake Wrapper on Impact & Astral */}
        <motion.div
          animate={
            phase === 'impact'
              ? {
                  x: [-15, 15, -10, 10, -5, 5, 0],
                  y: [-10, 10, -8, 8, -3, 3, 0],
                  rotate: [-3, 3, -2, 2, 0],
                }
              : phase === 'astral'
              ? {
                  scale: [1, 1.05, 1],
                  filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'],
                }
              : {}
          }
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative flex flex-col items-center justify-center z-20 w-full px-6"
        >
          {/* Central Impact & Astral Stage */}
          <div className="relative flex items-center justify-center w-80 h-80">
            
            {/* 💥 IMPACT SHOCKWAVES (Chest Hit Strike) */}
            {phase === 'impact' && (
              <>
                <motion.div
                  initial={{ scale: 0.2, opacity: 1 }}
                  animate={{ scale: 3.5, opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute w-40 h-40 rounded-full border-4 border-amber-400 shadow-[0_0_80px_rgba(245,158,11,1)]"
                />
                <motion.div
                  initial={{ scale: 0.1, opacity: 1 }}
                  animate={{ scale: 4.5, opacity: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
                  className="absolute w-40 h-40 rounded-full border-2 border-cyan-400 shadow-[0_0_100px_rgba(6,182,212,1)]"
                />
              </>
            )}

            {/* ✨ DOCTOR STRANGE ASTRAL SOUL PROJECTION LAYERS */}
            {phase === 'astral' && (
              <>
                {/* Astral Ghost Soul 1 (Pushed Far Forward out of Chest) */}
                <motion.div
                  initial={{ scale: 1, opacity: 0.9, y: 0 }}
                  animate={{
                    scale: [1, 2.8, 3.2],
                    opacity: [0.9, 0.6, 0],
                    y: [0, -60, -100],
                  }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute flex items-center justify-center w-24 h-24 rounded-3xl bg-amber-400/30 border-2 border-amber-300 backdrop-blur-md shadow-[0_0_100px_rgba(245,158,11,0.8)] pointer-events-none"
                >
                  <LogoMark className="w-12 h-12 text-amber-200" />
                </motion.div>

                {/* Astral Ghost Soul 2 (Shifted Cyan Ghost Right) */}
                <motion.div
                  initial={{ scale: 1, opacity: 0.8, x: 0 }}
                  animate={{
                    scale: [1, 2.2, 2.6],
                    opacity: [0.8, 0.4, 0],
                    x: [0, 80, 120],
                    rotate: [0, 15, 25],
                  }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="absolute flex items-center justify-center w-24 h-24 rounded-3xl bg-cyan-500/20 border-2 border-cyan-400 backdrop-blur-md shadow-[0_0_80px_rgba(6,182,212,0.8)] pointer-events-none"
                >
                  <LogoMark className="w-12 h-12 text-cyan-200" />
                </motion.div>

                {/* Astral Ghost Soul 3 (Shifted Magenta Ghost Left) */}
                <motion.div
                  initial={{ scale: 1, opacity: 0.8, x: 0 }}
                  animate={{
                    scale: [1, 2.2, 2.6],
                    opacity: [0.8, 0.4, 0],
                    x: [0, -80, -120],
                    rotate: [0, -15, -25],
                  }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="absolute flex items-center justify-center w-24 h-24 rounded-3xl bg-purple-500/20 border-2 border-purple-400 backdrop-blur-md shadow-[0_0_80px_rgba(168,85,247,0.8)] pointer-events-none"
                >
                  <LogoMark className="w-12 h-12 text-purple-200" />
                </motion.div>
              </>
            )}

            {/* 🛡️ PHYSICAL BODY LOGO (Stays in center) */}
            <motion.div
              animate={
                phase === 'impact'
                  ? { scale: [1, 0.7, 1.1, 1], filter: 'brightness(2) contrast(1.5)' }
                  : phase === 'astral'
                  ? { scale: 1, opacity: [0.4, 1], filter: 'brightness(1.2)' }
                  : phase === 'shatter'
                  ? { scale: [1, 1.4, 0], opacity: [1, 1, 0] }
                  : { scale: 1 }
              }
              transition={{ duration: 0.5 }}
              className="relative z-10 flex items-center justify-center w-24 h-24 rounded-3xl bg-amber-500 text-black shadow-[0_0_60px_rgba(245,158,11,0.9)] border-2 border-amber-300"
            >
              <LogoMark className="w-14 h-14 text-black" />
            </motion.div>

            {/* Glowing Tech Ring around body */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute w-44 h-44 border-2 border-dashed border-amber-500/40 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="absolute w-56 h-56 border border-cyan-500/30 rounded-full border-t-cyan-400 border-b-amber-400"
            />

            {/* Explosive Particles Radial Burst */}
            {(phase === 'impact' || phase === 'astral') && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                      x: Math.cos((i * Math.PI) / 8) * (phase === 'impact' ? 120 : 180),
                      y: Math.sin((i * Math.PI) / 8) * (phase === 'impact' ? 120 : 180),
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="absolute w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,1)]"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Cinematic Status Text */}
          <div className="mt-8 h-12 flex flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              {phase === 'idle' && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-mono text-xs sm:text-sm font-semibold tracking-[0.3em] text-neutral-400 uppercase"
                >
                  ⚡ PREPARING QUANTUM STRIKE...
                </motion.div>
              )}

              {phase === 'impact' && (
                <motion.div
                  key="impact"
                  initial={{ opacity: 0, scale: 1.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-base sm:text-xl font-black tracking-[0.2em] text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,1)] uppercase"
                >
                  💥 IMPACT DETECTED!
                </motion.div>
              )}

              {phase === 'astral' && (
                <motion.div
                  key="astral"
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-sm sm:text-lg font-extrabold tracking-[0.25em] text-cyan-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.9)] uppercase flex items-center gap-2"
                >
                  ✨ ASTRAL SOUL PROJECTION ACTIVE
                </motion.div>
              )}

              {phase === 'shatter' && (
                <motion.div
                  key="shatter"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  className="font-mono text-lg sm:text-2xl font-black tracking-[0.3em] text-amber-300 drop-shadow-[0_0_30px_rgba(245,158,11,1)] uppercase"
                >
                  ⚡ REALITY RE-ENTERED // WELCOME
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-3 text-[10px] font-mono text-neutral-500 tracking-[0.4em] uppercase">
              FIGURE OUT // ASTRAL INTRO
            </div>
          </div>
        </motion.div>

        {/* 💥 BLINDING FLASH OVERLAY ON IMPACT */}
        {phase === 'impact' && (
          <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-white z-30 pointer-events-none"
          />
        )}

        {/* REALITY SHATTER GLASS LINES ON EXIT */}
        {phase === 'shatter' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-40 bg-gradient-to-r from-amber-500/30 via-white/50 to-cyan-500/30 backdrop-blur-3xl pointer-events-none"
          />
        )}
      </div>
    </AnimatePresence>
  );
}
