import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/15 via-bg-card to-bg-card p-10 md:p-16 text-center"
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
          <div className="absolute inset-0 bg-grid opacity-[0.08]" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Ready To Figure It Out?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink-secondary max-w-lg mx-auto">
              Tell us about your project. We respond within 24 hours.
            </p>
            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-bg-base transition-all hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:scale-[1.03] active:scale-95"
            >
              Start A Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
