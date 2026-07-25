import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { fadeUp, staggerContainer, SectionLabel } from './motion';

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <SectionLabel>What We Do</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Built For The Digital Age
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-ink-secondary max-w-xl mx-auto">
            Four disciplines, one standard: production-ready products engineered to grow your business.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                variants={fadeUp}
                className="group relative card-lift rounded-2xl border border-border-subtle bg-bg-card p-7 sm:p-8 hover:border-accent/50 hover:gold-glow"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent group-hover:text-bg-base transition-all duration-500">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{service.tagline}</p>
                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
