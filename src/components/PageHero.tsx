import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from './motion';

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[80%] rounded-full bg-accent/10 blur-[120px]" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl mx-auto text-center"
      >
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-bg-card/50 backdrop-blur-sm text-xs font-semibold tracking-[0.25em] uppercase text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            {label}
          </span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
