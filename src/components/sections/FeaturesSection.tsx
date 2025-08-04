import { BarChart3, Users, Search, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import rapportCollectif1 from '@/assets/rapport-collectif-1.png';
import rapportCollectif2 from '@/assets/rapport-collectif-2.png';
import analyseVideo from '@/assets/analyse-video.png';
import rapportIndividuel from '@/assets/rapport-individuel.png';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: BarChart3,
      title: t('feature1'),
      image: rapportCollectif1,
      description: t('feature1Desc')
    },
    {
      icon: Users,
      title: t('feature2'),
      image: rapportIndividuel,
      description: t('feature2Desc')
    },
    {
      icon: Search,
      title: t('feature3'),
      image: rapportCollectif2,
      description: t('feature3Desc')
    },
    {
      icon: Video,
      title: t('feature4'),
      image: "https://raw.githubusercontent.com/clairesecehDS/logo/refs/heads/main/Stat12_videoanalysis.png",
      description: t('feature4Desc')
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('featuresTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('featuresSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group h-full">
              <div className="bg-card rounded-2xl p-6 shadow-lg neon-glow-card transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden flex-1">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;