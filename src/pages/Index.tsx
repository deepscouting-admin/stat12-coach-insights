import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ScrollIndicator from '@/components/ScrollIndicator';
import CTAButton from '@/components/CTAButton';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PricingSection from '@/components/sections/PricingSection';
import WhySection from '@/components/sections/WhySection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'pricing', 'why', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <CTAButton />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <WhySection />
        <ContactSection />
      </main>
      <ScrollIndicator />
    </div>
  );
};

export default Index;
