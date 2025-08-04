import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { DemoDialog } from '@/components/DemoDialog';

const HeroSection = () => {
  const { t } = useLanguage();
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vidéo de fond depuis Appwrite */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={(e) => {
            e.currentTarget.playbackRate = 0.60;
          }}
        >
          <source src="https://fra.cloud.appwrite.io/v1/storage/buckets/6890b1000039c68c177e/files/6890b1120026c63b3bf8/view?project=677e7e5c0031b8de094a&mode=admin" type="video/mp4" />
          {/* Fallback pour les navigateurs très anciens */}
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
        
        {/* Overlay sombre pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight whitespace-pre-line drop-shadow-lg">
          {t('heroTitle')}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-primary/90 leading-relaxed drop-shadow-md">
          {t('heroSubtitle')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed font-light px-4 drop-shadow-md">
          <span className="block sm:inline">Grâce à notre IA révolutionnaire, nous transformons</span>{' '}
          <span className="block sm:inline">vos vidéos de match en rapports d'analyse avancée :</span>{' '}
          <span className="block sm:inline">rapports collectifs, rapports individuels, analyse vidéo</span>{' '}
          <span className="block sm:inline">simplifiée, statistiques physiques...désormais</span>{' '}
          <span className="block sm:inline">accessibles à tous</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;