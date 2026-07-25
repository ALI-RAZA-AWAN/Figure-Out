import PageTransition from '@/components/PageTransition';
import PageHero from '@/components/PageHero';
import Work from '@/components/Work';
import CTABanner from '@/components/CTABanner';

export default function WorkPage() {
  return (
    <PageTransition>
      <PageHero
        label="Our Work"
        title="Projects That Speak"
        subtitle="Real products, built from scratch. Each one solves a real business problem — not a tutorial rehash."
      />
      <Work showLabel={false} />
      <CTABanner />
    </PageTransition>
  );
}
