import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const stats = [
  { value: '10+', label: 'Projects' },
  { value: '2', label: 'Countries' },
  { value: '4', label: 'Services' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 px-6">
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-bg-base/0 via-bg-base/0 to-bg-base" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative max-w-5xl mx-auto text-center w-full"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-bg-card/50 backdrop-blur-sm mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-ink-secondary">
            Web · AI · Design · Apps
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white"
        >
          We don&apos;t just launch
          <br className="hidden sm:block" /> web applications.
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-gradient-gold"
        >
          We build the tools that multiply your
          <br className="hidden sm:block" /> market reach and business revenue.
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-7 mx-auto max-w-2xl text-base sm:text-lg text-ink-secondary leading-relaxed"
        >
          Figure Out is a digital agency crafting premium web &amp; app experiences,
          AI-powered products, and interfaces that convert.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/work"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-bg-base transition-all hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-[1.03] active:scale-95 w-full sm:w-auto"
          >
            See Our Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/60 bg-transparent px-7 py-3.5 text-sm font-semibold text-accent transition-all hover:bg-accent/10 hover:border-accent hover:scale-[1.03] active:scale-95 w-full sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            Let&apos;s Talk
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-14"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="text-center relative">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-ink-secondary uppercase tracking-wider">{s.label}</div>
              {i < stats.length - 1 && (
                <span className="hidden sm:block absolute -right-7 top-1/2 -translate-y-1/2 h-8 w-px bg-border-subtle" />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
