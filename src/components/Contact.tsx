import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { fadeUp, staggerContainer, SectionLabel } from './motion';

const serviceOptions = [
  'Web Development',
  'AI Integration',
  'UI/UX Design',
  'App Development',
  'Full Package',
];

const budgetOptions = [
  'Under 20,000 PKR',
  '20,000 - 50,000 PKR',
  '50,000 - 100,000 PKR',
  '100,000+ PKR',
  "Let's Discuss",
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hyali9211@gmail.com', href: 'mailto:hyali9211@gmail.com' },
  { icon: Phone, label: 'WhatsApp', value: '0343 476 2149', href: 'https://wa.me/923434762149' },
  { icon: Linkedin, label: 'LinkedIn', value: 'ali-raza-awan', href: 'https://linkedin.com/in/ali-raza-awan' },
  { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan', href: undefined },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try email or WhatsApp.'
      );
    }
  };

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
          <SectionLabel>Let&apos;s Talk</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Tell Us About Your Project
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-2 rounded-2xl border border-border-subtle bg-bg-card p-7 sm:p-8"
          >
            <h3 className="text-xl font-bold text-white">Get in touch</h3>
            <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
              Prefer a direct line? Reach us through any of these. We respond within 24 hours.
            </p>

            <div className="mt-7 space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-xl border border-border-subtle bg-bg-base/40 p-4 transition-all hover:border-accent/40 hover:bg-bg-base/70">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wider text-ink-secondary">{info.label}</div>
                      <div className="text-sm font-medium text-white truncate">{info.value}</div>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-3 rounded-2xl border border-border-subtle bg-bg-card p-7 sm:p-8"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 border border-accent/30 text-accent"
                >
                  <CheckCircle2 className="h-8 w-8" />
                </motion.div>
                <h3 className="mt-6 text-2xl font-bold text-white">Message sent!</h3>
                <p className="mt-3 text-sm text-ink-secondary max-w-sm">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-7 inline-flex items-center justify-center rounded-lg border border-border-subtle px-5 py-2.5 text-sm font-semibold text-white hover:border-accent/50 hover:text-accent transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name" htmlFor="name">
                    <input
                      id="name"
                      name="from_name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="from_email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Service Needed" htmlFor="service">
                    <select id="service" name="service" required defaultValue="" className={inputClass}>
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Budget Range" htmlFor="budget">
                    <select id="budget" name="budget" required defaultValue="" className={inputClass}>
                      <option value="" disabled>Select a range</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Project Description" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you're building..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group inline-flex items-center justify-center gap-2 w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-bg-base transition-all hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-[1.01] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      Send Message
                    </>
                  )}
                </button>
                <p className="text-xs text-ink-secondary text-center">
                  If the form isn&apos;t connected yet, email us directly at{' '}
                  <a href="mailto:hyali9211@gmail.com" className="text-accent hover:underline">
                    hyali9211@gmail.com
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  'w-full rounded-lg border border-border-subtle bg-bg-base/60 px-4 py-3 text-sm text-white placeholder:text-ink-secondary/60 focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-all';

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-xs font-semibold uppercase tracking-wider text-ink-secondary mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
