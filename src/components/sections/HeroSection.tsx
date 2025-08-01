import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight whitespace-pre-line">
          {t('heroTitle')}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-primary/90 leading-relaxed">
          {t('heroSubtitle')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
          {t('heroDescription')}
        </p>
        <Button 
          size="lg" 
          className="neon-button text-white px-8 py-6 text-lg font-semibold rounded-xl hover:bg-primary/20 hover:shadow-[0_0_40px_rgba(93,206,180,0.8)] transform transition-all duration-300 hover:scale-105"
        >
          {t('heroButton')}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;