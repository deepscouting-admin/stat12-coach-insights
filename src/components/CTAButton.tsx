import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DemoDialog } from './DemoDialog';
import { useLanguage } from '@/contexts/LanguageContext';

const CTAButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'pricing'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only show on desktop or on specific sections on mobile
  const shouldShow = window.innerWidth >= 768 || ['hero', 'pricing'].includes(currentSection);

  if (!shouldShow) return <DemoDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />;

  return (
    <>
      <div className="fixed top-20 right-4 z-40 md:top-4 md:right-8">
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="neon-button text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(93,206,180,0.6)] transition-all duration-300 text-sm md:text-base"
          size="sm"
        >
          <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
          <span className="hidden sm:inline">{t('demoButton')}</span>
          <span className="sm:hidden">Démo</span>
        </Button>
      </div>
      
      <DemoDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </>
  );
};

export default CTAButton;