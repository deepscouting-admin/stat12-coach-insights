import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import subtleTechBackground from '@/assets/subtle-tech-background.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={subtleTechBackground}
          alt="Modern Tech Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          {t('heroTitle')}
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 text-primary">
          {t('heroSubtitle')}
        </h2>
        <p className="text-lg sm:text-xl mb-6 text-gray-200 max-w-4xl mx-auto">
          {t('heroDescription')}
        </p>
        <p className="text-base sm:text-lg mb-10 text-gray-300 max-w-3xl mx-auto font-light">
          {t('heroDescription2')}
        </p>
        <Button 
          size="lg" 
          className="neon-button text-white px-8 py-6 text-lg font-semibold rounded-xl hover:bg-primary/20 hover:shadow-[0_0_40px_hsl(var(--stat12-teal)_/_0.8)] transform transition-all duration-300 hover:scale-105"
        >
          {t('heroButton')}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;