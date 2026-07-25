import { Link } from 'react-router-dom';
import { Linkedin, Github } from 'lucide-react';
import LogoMark from './LogoMark';

const quickLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-bg-secondary">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-bg-base">
                <LogoMark className="h-5 w-5" />
              </span>
              <span className="text-white font-bold text-lg">Figure Out</span>
            </Link>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-xs">
              We build high-converting web apps that multiply your reach and revenue.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-ink-secondary hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">Social</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/ali-raza-awan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-ink-secondary hover:text-accent hover:border-accent/50 transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ali-raza-awan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-ink-secondary hover:text-accent hover:border-accent/50 transition-all hover:scale-105"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-secondary">
            &copy; 2026 Figure Out. Built with purpose.
          </p>
          <p className="text-xs text-ink-secondary">Lahore, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
