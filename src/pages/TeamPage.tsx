import PageTransition from '@/components/PageTransition';
import PageHero from '@/components/PageHero';
import Team from '@/components/Team';
import CTABanner from '@/components/CTABanner';

export default function TeamPage() {
  return (
    <PageTransition>
      <PageHero
        label="The Core"
        title="The Minds Behind Figure Out"
        subtitle="A focused core team backed by a trusted network of specialists — scaled to fit your project."
      />
      <Team />
      <CTABanner />
    </PageTransition>
  );
}
