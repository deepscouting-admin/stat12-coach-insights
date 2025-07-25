import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import stadiumHero from '@/assets/stadium-hero.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={stadiumHero}
          alt="Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
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
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg transform transition-transform hover:scale-105"
        >
          {t('heroButton')}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;