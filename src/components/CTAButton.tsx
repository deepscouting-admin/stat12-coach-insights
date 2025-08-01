import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DemoDialog } from './DemoDialog';
import { useLanguage } from '@/contexts/LanguageContext';

const CTAButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop button - fixed in top right */}
      <div className="hidden md:block fixed top-4 right-8 z-40">
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="neon-button"
          size="sm"
        >
          <Calendar className="w-4 h-4 mr-2" />
          {t('demoButton')}
        </Button>
      </div>

      {/* Mobile button - sticky at bottom after scroll */}
      {isScrolled && (
        <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="neon-button w-full"
            size="lg"
          >
            <Calendar className="w-4 h-4 mr-2" />
            {t('demoButton')}
          </Button>
        </div>
      )}
      
      <DemoDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </>
  );
};

export default CTAButton;