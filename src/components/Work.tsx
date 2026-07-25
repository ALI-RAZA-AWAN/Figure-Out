import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import { fadeUp, staggerContainer, SectionLabel } from './motion';

interface WorkProps {
  showLabel?: boolean;
  limit?: number;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative rounded-2xl overflow-hidden border border-border-subtle bg-bg-card card-lift hover:border-accent/50 hover:gold-glow"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-bg-base/70 backdrop-blur-sm border border-border-subtle px-3 py-1 text-xs font-medium text-ink-secondary">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-ink-secondary leading-relaxed">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-bg-base border border-border-subtle px-2.5 py-1 text-xs font-medium text-ink-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
        >
          View Project
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Work({ showLabel = false, limit }: WorkProps) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="relative py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {showLabel && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-14"
          >
            <SectionLabel>Our Work</SectionLabel>
            <motion.h2
              variants={fadeUp}
              className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
            >
              Projects That Speak
            </motion.h2>
          </motion.div>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {list.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {showLabel && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-ink-secondary">
              More projects added as they ship.{' '}
              <a
                href="https://github.com/ali-raza-awan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent font-semibold hover:text-accent-hover transition-colors"
              >
                See all on GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
