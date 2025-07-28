import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import footballAiBackground from '@/assets/football-ai-background.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={footballAiBackground}
          alt="Football AI Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {t('heroTitle')}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto font-light">
          {t('heroSubtitle')}
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