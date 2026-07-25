import { motion } from 'framer-motion';
import { Check, ArrowRight, Users } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { services } from '@/data/services';
import { fadeUp, staggerContainer } from '@/components/motion';

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHero
        label="What We Do"
        title="Services Built To Multiply Revenue"
        subtitle="Four disciplines, one outcome: premium products engineered to grow your business — in Pakistan and beyond."
      />

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-8 md:space-y-12">
        {services.map((service, i) => {
          const Icon = service.icon;
          const reversed = i % 2 === 1;
          return (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl border border-border-subtle bg-bg-card overflow-hidden hover:border-accent/30 transition-colors duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className={`lg:col-span-2 p-8 sm:p-10 ${reversed ? 'lg:order-2' : ''} relative bg-bg-secondary/40 border-b lg:border-b-0 border-border-subtle ${reversed ? 'lg:border-l' : 'lg:border-r'}`}>
                  <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/10 blur-[80px]" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <div className="mt-5 text-xs font-semibold tracking-[0.2em] uppercase text-ink-secondary">
                      0{i + 1}
                    </div>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">{service.title}</h2>
                    <p className="mt-4 text-sm text-ink-secondary leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className={`lg:col-span-3 p-8 sm:p-10 ${reversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What it includes</h3>
                    <motion.ul
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3"
                    >
                      {service.includes.map((item) => (
                        <motion.li
                          key={item}
                          variants={fadeUp}
                          className="flex items-start gap-3 text-sm text-ink-secondary"
                        >
                          <Check className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="rounded-xl border border-border-subtle bg-bg-base/40 p-5">
                      <div className="flex items-center gap-2 text-accent">
                        <Users className="h-4 w-4" />
                        <h4 className="text-xs font-semibold uppercase tracking-wider">Who it&apos;s for</h4>
                      </div>
                      <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{service.forWho}</p>
                    </div>
                    <div className="rounded-xl border border-border-subtle bg-bg-base/40 p-5">
                      <div className="flex items-center gap-2 text-accent">
                        <ArrowRight className="h-4 w-4" />
                        <h4 className="text-xs font-semibold uppercase tracking-wider">Example work</h4>
                      </div>
                      <p className="mt-3 text-sm text-white leading-relaxed">{service.exampleProject}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <CTABanner />
    </PageTransition>
  );
}
