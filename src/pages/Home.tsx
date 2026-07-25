import PageTransition from '@/components/PageTransition';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyFigureOut from '@/components/WhyFigureOut';
import CTABanner from '@/components/CTABanner';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Services />
      <WhyFigureOut />
      <CTABanner />
    </PageTransition>
  );
}
