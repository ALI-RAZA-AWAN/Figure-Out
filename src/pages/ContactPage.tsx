import PageTransition from '@/components/PageTransition';
import PageHero from '@/components/PageHero';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero
        label="Let's Talk"
        title="Tell Us About Your Project"
        subtitle="Tell us what you're building. We respond within 24 hours."
      />
      <Contact />
    </PageTransition>
  );
}
