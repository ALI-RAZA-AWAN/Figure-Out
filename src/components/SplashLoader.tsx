import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashLoaderProps {
  onComplete?: () => void;
}

export default function SplashLoader({ onComplete }: SplashLoaderProps) {
  const [phase, setPhase] = useState<'throne' | 'slash' | 'split' | 'done'>('throne');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Timeline:
    // 0ms - 1200ms: Warrior on throne charging sword energy
    // 1200ms - 2000ms: SWORD SLASH ACROSS THE SCREEN (Screen cut line ignites)
    // 2000ms - 3200ms: Screen tears in two halves with sparks & embers
    // 3200ms: Complete reveal landing page

    const t1 = setTimeout(() => setPhase('slash'), 1300);
    const t2 = setTimeout(() => setPhase('split'), 2100);
    const t3 = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  // Particle Ember Canvas Effect
  useEffect(() => {
    if (phase === 'done') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    // Seed initial embers
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -Math.random() * 2 - 0.5,
        size: Math.random() * 3 + 1,
        color: Math.random() > 0.4 ? '#f59e0b' : '#ef4444',
        life: Math.random() * 100,
        maxLife: 100,
      });
    }

    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.life >= p.maxLife || p.y < 0) {
          p.x = Math.random() * width;
          p.y = height + 10;
          p.life = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] select-none pointer-events-auto overflow-hidden bg-black font-sans">
        
        {/* Canvas for Rising Embers & Sparks */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10 opacity-70" />

        {/* 🗡️ LEFT HALF OF THE TEARING SCREEN */}
        <motion.div
          animate={
            phase === 'split'
              ? {
                  x: '-100%',
                  rotate: -6,
                  opacity: 0,
                }
              : { x: 0, rotate: 0, opacity: 1 }
          }
          transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 left-0 bottom-0 w-1/2 bg-[#070709] z-20 border-r border-amber-500/50 overflow-hidden flex items-center justify-end pr-4 shadow-[10px_0_50px_rgba(0,0,0,0.9)]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
        >
          {/* Dark Fog Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0c0a09] to-transparent opacity-90" />

          {/* Left Side Warrior Outline */}
          <div className="relative z-30 opacity-20 pointer-events-none transform -translate-x-12">
            <svg viewBox="0 0 200 300" className="w-96 h-96 text-amber-500 fill-current">
              {/* Warrior Silhouette Throne Left */}
              <path d="M40,280 L40,160 L70,120 L90,60 L110,60 L120,90 L110,130 L140,160 L140,280 Z" />
            </svg>
          </div>
        </motion.div>

        {/* 🗡️ RIGHT HALF OF THE TEARING SCREEN */}
        <motion.div
          animate={
            phase === 'split'
              ? {
                  x: '100%',
                  rotate: 6,
                  opacity: 0,
                }
              : { x: 0, rotate: 0, opacity: 1 }
          }
          transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 right-0 bottom-0 w-1/2 bg-[#070709] z-20 border-l border-amber-500/50 overflow-hidden flex items-center justify-start pl-4 shadow-[-10px_0_50px_rgba(0,0,0,0.9)]"
          style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          {/* Dark Fog Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black via-[#0c0a09] to-transparent opacity-90" />

          {/* Right Side Warrior Sword Arm Outline */}
          <div className="relative z-30 opacity-20 pointer-events-none transform translate-x-12">
            <svg viewBox="0 0 200 300" className="w-96 h-96 text-amber-500 fill-current">
              {/* Warrior Silhouette Right */}
              <path d="M60,280 L60,160 L90,130 L100,70 L140,40 L160,280 Z" />
            </svg>
          </div>
        </motion.div>

        {/* ⚔️ CENTER WARRIOR STAGE & SWORD SLASH ANIMATION */}
        <motion.div
          animate={
            phase === 'slash'
              ? {
                  x: [-20, 20, -15, 15, -8, 8, 0],
                  y: [-12, 12, -8, 8, 0],
                }
              : {}
          }
          transition={{ duration: 0.4 }}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
        >
          {/* 👑 WARRIOR ON THRONE GRAPHIC & GLOWING SWORD */}
          <div className="relative w-96 h-96 flex items-center justify-center">
            
            {/* Throne Glow Backdrop */}
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-t from-amber-600/30 via-red-600/20 to-transparent blur-3xl animate-pulse" />

            {/* Warrior Throne Crest Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 flex flex-col items-center"
            >
              {/* Golden Sword Graphic */}
              <motion.div
                animate={
                  phase === 'slash'
                    ? {
                        rotate: [0, -45, 135],
                        scale: [1, 1.3, 1.6],
                        filter: ['drop-shadow(0 0 10px #f59e0b)', 'drop-shadow(0 0 40px #ef4444)', 'drop-shadow(0 0 80px #ffffff)'],
                      }
                    : {
                        y: [-4, 4, -4],
                      }
                }
                transition={
                  phase === 'slash'
                    ? { duration: 0.7, ease: 'easeOut' }
                    : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                }
                className="relative"
              >
                {/* Sword SVG */}
                <svg viewBox="0 0 100 300" className="w-32 h-80 drop-shadow-[0_0_25px_rgba(245,158,11,0.9)]">
                  {/* Blade */}
                  <path d="M50,10 L56,180 L50,200 L44,180 Z" fill="url(#sword-blade)" />
                  {/* Blade Core Line */}
                  <path d="M50,15 L50,195" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  {/* Guard */}
                  <path d="M20,200 Q50,210 80,200 Q50,225 20,200 Z" fill="#d97706" />
                  {/* Hilt Grip */}
                  <rect x="46" y="215" width="8" height="40" rx="2" fill="#78350f" />
                  {/* Pommel */}
                  <circle cx="50" cy="262" r="9" fill="#f59e0b" />

                  <defs>
                    <linearGradient id="sword-blade" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#fef3c7" />
                      <stop offset="50%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Title Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-center"
              >
                <div className="font-serif text-2xl sm:text-3xl font-extrabold tracking-[0.3em] text-gradient-gold uppercase drop-shadow-[0_0_20px_rgba(245,158,11,0.8)]">
                  USMAN GHAZI
                </div>
                <div className="font-mono text-xs tracking-[0.5em] text-amber-500/80 mt-1 uppercase">
                  THE WARRIOR AWAKENS
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* 💥 THE SWORD SLASH CUT LINE ACROSS THE SCREEN */}
        {(phase === 'slash' || phase === 'split') && (
          <div className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center">
            {/* Fiery Diagonal Laser Slash Trail */}
            <motion.div
              initial={{ scaleX: 0, opacity: 1 }}
              animate={{ scaleX: 1, opacity: [1, 1, 0] }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute w-[180%] h-3 bg-gradient-to-r from-amber-500 via-white to-red-600 shadow-[0_0_60px_#f59e0b,0_0_120px_#ef4444] rotate-[-25deg] transform origin-center"
            />
            {/* Secondary Cyan Shockline */}
            <motion.div
              initial={{ scaleX: 0, opacity: 1 }}
              animate={{ scaleX: 1, opacity: [1, 0.8, 0] }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
              className="absolute w-[180%] h-1 bg-white shadow-[0_0_40px_#ffffff] rotate-[-25deg] transform origin-center"
            />
          </div>
        )}

        {/* ⚡ BLINDING SLASH FLASH */}
        {phase === 'slash' && (
          <motion.div
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 bg-amber-400 z-50 pointer-events-none mix-blend-overlay"
          />
        )}
      </div>
    </AnimatePresence>
  );
}
