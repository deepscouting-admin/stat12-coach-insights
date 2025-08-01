import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ScrollIndicator from '@/components/ScrollIndicator';
import CTAButton from '@/components/CTAButton';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PricingSection from '@/components/sections/PricingSection';
import AboutSection from '@/components/sections/AboutSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/hooks/useLanguage';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const { language, t } = useLanguage(); // Force re-render when language changes

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'features', 'pricing', 'faq', 'contact'];
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
    <div className="min-h-screen bg-background" key={language}>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <CTAButton />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <FooterSection />
      <ScrollIndicator />
    </div>
  );
};

export default Index;
