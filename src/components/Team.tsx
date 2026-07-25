import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import { team } from '@/data/team';
import { fadeUp, staggerContainer, SectionLabel } from './motion';

export default function Team() {
  return (
    <section className="relative py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <SectionLabel>The Core</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            The Minds Behind Figure Out
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl mx-auto"
          >
            We are a focused team of developers and designers who work with a network of
            specialists to deliver exceptional results on every project.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {team.map((member) => (
            <motion.article
              key={member.name}
              variants={fadeUp}
              className="group relative rounded-2xl overflow-hidden border border-border-subtle bg-bg-card card-lift hover:border-accent/50 hover:gold-glow"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{member.role}</p>
                <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{member.bio}</p>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg-base transition-all hover:bg-accent-hover hover:scale-[1.03]"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border-subtle text-ink-secondary hover:text-accent hover:border-accent/50 transition-all"
                      aria-label={`${member.name} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 max-w-2xl mx-auto text-center"
        >
          <div className="rounded-2xl border border-border-subtle bg-bg-secondary/60 p-7">
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
              We collaborate with a trusted network of designers, developers, and strategists
              to scale with your project needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
