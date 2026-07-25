import { motion } from 'framer-motion';
import { Hammer, Sparkles, Lightbulb, type LucideIcon } from 'lucide-react';
import { fadeUp, staggerContainer, SectionLabel } from './motion';

interface Point {
  icon: LucideIcon;
  title: string;
  body: string;
}

const points: Point[] = [
  {
    icon: Hammer,
    title: 'We Build Real Things',
    body: 'Not mockups. Not templates. Custom built from scratch for your specific needs.',
  },
  {
    icon: Sparkles,
    title: 'AI Is In Our DNA',
    body: 'Every product we build considers how AI can make it smarter and more valuable.',
  },
  {
    icon: Lightbulb,
    title: 'We Think Like Founders',
    body: 'We understand your business goals, not just your design requirements.',
  },
];

export default function WhyFigureOut() {
  return (
    <section className="relative py-20 md:py-28 px-6 bg-bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <SectionLabel>Why Figure Out</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Why Work With Us
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="relative rounded-2xl border border-border-subtle bg-bg-card/60 p-8 hover:border-accent/40 transition-colors duration-500"
              >
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-50" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{p.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
