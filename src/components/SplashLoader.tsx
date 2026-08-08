import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashLoaderProps {
  onComplete?: () => void;
  // Optional video URL if user provides a direct .mp4 video file link
  videoUrl?: string;
}

export default function SplashLoader({ onComplete, videoUrl }: SplashLoaderProps) {
  const [phase, setPhase] = useState<'video' | 'tearing' | 'done'>('video');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Fallback timer if video doesn't trigger ended event automatically
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Fallback transition after 4 seconds if video plays or is loading
    const timer = setTimeout(() => {
      if (phase === 'video') {
        handleVideoEnd();
      }
    }, 4500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [phase]);

  const handleVideoEnd = () => {
    setPhase('tearing');
    setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 1200);
  };

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] select-none pointer-events-auto overflow-hidden bg-black font-sans flex items-center justify-center">
        
        {/* 🗡️ LEFT HALF OF THE TEARING SCREEN PANEL */}
        <motion.div
          animate={
            phase === 'tearing'
              ? {
                  x: '-105%',
                  rotate: -8,
                  opacity: 0,
                }
              : { x: 0, rotate: 0, opacity: 1 }
          }
          transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 left-0 bottom-0 w-1/2 bg-black z-20 overflow-hidden shadow-[20px_0_60px_rgba(0,0,0,0.95)]"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 92% 50%, 100% 100%, 0 100%)',
          }}
        >
          {/* Jagged Seam Glow */}
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-500 via-red-500 to-amber-400 shadow-[0_0_20px_#f59e0b]" />
        </motion.div>

        {/* 🗡️ RIGHT HALF OF THE TEARING SCREEN PANEL */}
        <motion.div
          animate={
            phase === 'tearing'
              ? {
                  x: '105%',
                  rotate: 8,
                  opacity: 0,
                }
              : { x: 0, rotate: 0, opacity: 1 }
          }
          transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 right-0 bottom-0 w-1/2 bg-black z-20 overflow-hidden shadow-[-20px_0_60px_rgba(0,0,0,0.95)]"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 50%)',
          }}
        >
          {/* Jagged Seam Glow */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-500 via-red-500 to-amber-400 shadow-[0_0_20px_#f59e0b]" />
        </motion.div>

        {/* 🎬 REAL VIDEO PLAYER & SWORD SLASH OVERLAY */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          
          {videoUrl ? (
            /* REAL MP4 VIDEO PLAYER */
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover"
            />
          ) : (
            /* CINEMATIC VIDEO PLACEHOLDER STAGE */
            <div className="relative w-full h-full max-w-4xl max-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
              
              {/* Glowing Video Frame */}
              <div className="relative w-full max-w-2xl h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-neutral-950 shadow-[0_0_60px_rgba(245,158,11,0.25)] flex flex-col items-center justify-center p-6">
                
                {/* Atmospheric Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-red-950/20 to-transparent pointer-events-none" />

                {/* Play / Warrior Reel Indicator */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.8)] animate-pulse">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-black tracking-widest text-gradient-gold uppercase">
                    USMAN GHAZI WARRIOR REEL
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-md">
                    To play your exact video of Usman Ghazi rising from the throne, attach the direct <code className="text-amber-400">.mp4</code> video file!
                  </p>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-4 left-6 right-6 h-1 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 4, ease: 'linear' }}
                    className="h-full bg-gradient-to-r from-amber-500 to-red-500"
                  />
                </div>
              </div>

              {/* Action Button to Skip or Tear Screen Now */}
              <button
                onClick={handleVideoEnd}
                className="mt-6 px-8 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105"
              >
                ⚔️ TEAR SCREEN & ENTER SITE
              </button>
            </div>
          )}
        </div>

        {/* ⚡ FLASH ON SCREEN TEAR */}
        {phase === 'tearing' && (
          <motion.div
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-amber-400 z-50 pointer-events-none mix-blend-overlay"
          />
        )}
      </div>
    </AnimatePresence>
  );
}
