import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DemoDialog } from './DemoDialog';
import { useLanguage } from '@/hooks/useLanguage';

const CTAButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <div className="fixed top-20 right-4 z-40 md:top-4 md:right-8">
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
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