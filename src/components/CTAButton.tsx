import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DemoDialog } from './DemoDialog';
import { useLanguage } from '@/contexts/LanguageContext';

const CTAButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <div className="fixed top-20 right-4 z-40 md:top-4 md:right-8">
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="neon-button text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(93,206,180,0.6)] transition-all duration-300"
          size="lg"
        >
          <Calendar className="w-4 h-4 mr-2" />
          {t('demoButton')}
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