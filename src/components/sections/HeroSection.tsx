import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const videos = [
    '/videos/hero-video-1.mp4',
    '/videos/hero-video-2.mp4'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 30000); // Switch every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {videos.map((video, index) => (
          <video
            key={video}
            autoPlay
            loop
            muted
            playsInline
            onContextMenu={handleContextMenu}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideo ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              pointerEvents: 'none',
              userSelect: 'none'
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Floating dots background overlay */}
      <div className="floating-dots"></div>

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