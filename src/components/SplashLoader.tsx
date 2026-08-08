import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashLoaderProps {
  onComplete?: () => void;
}

export default function SplashLoader({ onComplete }: SplashLoaderProps) {
  // Timeline phases:
  // 'sitting'  -> Man is sitting on the throne (0ms - 1200ms)
  // 'standing' -> Man stands up from throne & draws sword (1200ms - 2400ms)
  // 'tearing'  -> Man grabs the screen & tears it from the middle (2400ms - 3600ms)
  // 'done'     -> Screen fully torn open, landing page revealed
  const [phase, setPhase] = useState<'sitting' | 'standing' | 'tearing' | 'done'>('sitting');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const t1 = setTimeout(() => setPhase('standing'), 1300);
    const t2 = setTimeout(() => setPhase('tearing'), 2500);
    const t3 = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  // Particle Embers Effect
  useEffect(() => {
    if (phase === 'done') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -Math.random() * 2.5 - 0.5,
        size: Math.random() * 3 + 1,
        color: Math.random() > 0.3 ? '#f59e0b' : '#dc2626',
        alpha: Math.random(),
      });
    }

    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] select-none pointer-events-auto overflow-hidden bg-[#050507] font-sans">
        
        {/* Ember Particle Background */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10 opacity-75" />

        {/* Ambient Dark Fog */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0a0705] to-[#050507] opacity-90 pointer-events-none" />

        {/* 👑 THRONE ROOM BACKDROP GLOW */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-t from-amber-600/20 via-red-600/15 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse" />

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
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 left-0 bottom-0 w-1/2 bg-[#09080b] z-20 overflow-hidden shadow-[20px_0_60px_rgba(0,0,0,0.95)] flex items-center justify-end"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 92% 50%, 100% 100%, 0 100%)',
          }}
        >
          {/* Jagged Glowing Seam Left */}
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
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 right-0 bottom-0 w-1/2 bg-[#09080b] z-20 overflow-hidden shadow-[-20px_0_60px_rgba(0,0,0,0.95)] flex items-center justify-start"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 50%)',
          }}
        >
          {/* Jagged Glowing Seam Right */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-500 via-red-500 to-amber-400 shadow-[0_0_20px_#f59e0b]" />
        </motion.div>

        {/* 🧍 THE MAN SITTING ON THRONE -> STANDING UP -> TEARING THE SCREEN */}
        <motion.div
          animate={
            phase === 'tearing'
              ? {
                  scale: [1, 1.2, 1.5],
                  opacity: [1, 1, 0],
                }
              : {}
          }
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="relative w-[340px] h-[480px] sm:w-[400px] sm:h-[540px] flex items-center justify-center">

            {/* 🏰 ORNATE ROYAL THRONE (BACKGROUND) */}
            <svg viewBox="0 0 200 300" className="absolute w-full h-full text-amber-600/40 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              {/* High Backrest Arch */}
              <path d="M40,20 Q100,-10 160,20 L165,180 L180,260 L20,260 L35,180 Z" fill="#1c130b" stroke="#d97706" strokeWidth="2" />
              {/* Gold Crown Crest on Throne */}
              <path d="M85,15 L100,2 L115,15 L125,5 L115,30 L85,30 L75,5 Z" fill="#f59e0b" />
              {/* Armrests */}
              <rect x="15" y="160" width="30" height="90" rx="6" fill="#2d1b0e" stroke="#b45309" strokeWidth="1.5" />
              <rect x="155" y="160" width="30" height="90" rx="6" fill="#2d1b0e" stroke="#b45309" strokeWidth="1.5" />
            </svg>

            {/* ⚔️ THE WARRIOR MAN CHARACTER (SVG ANIMATED POSES) */}
            <motion.div
              animate={
                phase === 'sitting'
                  ? { y: 20, scale: 0.96 }
                  : phase === 'standing'
                  ? { y: [-10, -25], scale: [0.96, 1.05] }
                  : { y: -35, scale: 1.2 }
              }
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-[0_0_40px_rgba(245,158,11,0.7)]">
                <defs>
                  {/* Armor Gold Metallic Gradient */}
                  <linearGradient id="gold-armor" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#78350f" />
                  </linearGradient>
                  {/* Cape Red Gradient */}
                  <linearGradient id="red-cape" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#450a0a" />
                  </linearGradient>
                  {/* Glowing Blade Gradient */}
                  <linearGradient id="blade-glow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>

                {/* 🧣 RED WARRIOR CAPE */}
                <path d="M45,90 Q100,120 155,90 L175,270 L25,270 Z" fill="url(#red-cape)" opacity="0.9" />

                {/* 🛡️ BODY ARMOR & CHESTPLATE */}
                <path d="M65,85 L135,85 L145,170 L55,170 Z" fill="url(#gold-armor)" stroke="#fef08a" strokeWidth="1.5" />
                {/* Belt & Buckle */}
                <rect x="60" y="165" width="80" height="15" fill="#451a03" stroke="#f59e0b" strokeWidth="1" />
                <rect x="90" y="162" width="20" height="21" rx="3" fill="#fbbf24" />

                {/* 👤 HEAD, HELMET / CROWN & BEARD */}
                <g>
                  {/* Face Skin */}
                  <path d="M80,50 Q100,45 120,50 L118,78 Q100,90 82,78 Z" fill="#d97706" />
                  {/* Warrior Beard */}
                  <path d="M80,68 Q100,95 120,68 L115,82 Q100,98 85,82 Z" fill="#1c1917" />
                  {/* Helmet / Crown */}
                  <path d="M72,48 L128,48 L125,28 L100,10 L75,28 Z" fill="url(#gold-armor)" stroke="#ffffff" strokeWidth="1.5" />
                  {/* Helmet Ruby Gem */}
                  <circle cx="100" cy="30" r="5" fill="#ef4444" />
                </g>

                {/* 💪 ARMS & HANDS (CHANGES POSES) */}
                {phase === 'sitting' && (
                  /* Hands Resting on Knees/Throne */
                  <g>
                    <path d="M65,90 L35,130 L45,170" stroke="url(#gold-armor)" strokeWidth="14" strokeLinecap="round" fill="none" />
                    <path d="M135,90 L165,130 L155,170" stroke="url(#gold-armor)" strokeWidth="14" strokeLinecap="round" fill="none" />
                  </g>
                )}

                {(phase === 'standing' || phase === 'tearing') && (
                  /* Hands Outstretched & Gripping Sword Tearing Screen */
                  <g>
                    {/* Left Arm Outward */}
                    <path d="M65,90 L20,70 L5,100" stroke="url(#gold-armor)" strokeWidth="16" strokeLinecap="round" fill="none" />
                    {/* Right Arm Holding Glowing Sword Up */}
                    <path d="M135,90 L180,60 L195,20" stroke="url(#gold-armor)" strokeWidth="16" strokeLinecap="round" fill="none" />

                    {/* 🗡️ BLAZING WARRIOR SWORD IN HAND */}
                    <g>
                      {/* Sword Blade */}
                      <path d="M195,20 L195,-60 L200,-70 L205,-60 L205,20 Z" fill="url(#blade-glow)" className="drop-shadow-[0_0_20px_#f59e0b]" />
                      {/* Sword Guard */}
                      <rect x="180" y="18" width="40" height="8" rx="2" fill="#fbbf24" />
                    </g>
                  </g>
                )}
              </svg>
            </motion.div>

            {/* ⚡ SPARK BURSTS ON TEARING */}
            {phase === 'tearing' && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                      x: (Math.random() - 0.5) * 400,
                      y: (Math.random() - 0.5) * 400,
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="absolute w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_20px_#f59e0b]"
                  />
                ))}
              </div>
            )}
          </div>

          {/* 📜 CINEMATIC ACTION CAPTION */}
          <div className="mt-4 text-center">
            <AnimatePresence mode="wait">
              {phase === 'sitting' && (
                <motion.div
                  key="sitting"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-serif text-xl sm:text-2xl font-black tracking-[0.3em] text-gradient-gold uppercase drop-shadow-[0_0_20px_rgba(245,158,11,0.8)]"
                >
                  👑 USMAN GHAZI ON THE THRONE
                </motion.div>
              )}

              {phase === 'standing' && (
                <motion.div
                  key="standing"
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-serif text-2xl sm:text-3xl font-black tracking-[0.3em] text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,1)] uppercase animate-bounce"
                >
                  ⚔️ THE WARRIOR STANDS UP!
                </motion.div>
              )}

              {phase === 'tearing' && (
                <motion.div
                  key="tearing"
                  initial={{ opacity: 0, scale: 1.5 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  className="font-serif text-2xl sm:text-4xl font-black tracking-[0.3em] text-amber-300 drop-shadow-[0_0_40px_rgba(245,158,11,1)] uppercase"
                >
                  💥 TEARING THE SCREEN IN TWO!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

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
