import { Target, Smartphone, Lightbulb, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const WhySection = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Users,
      title: t('why1'),
      description: "Spécialement pensé pour les entraîneurs de clubs amateurs et centres de formation"
    },
    {
      icon: Smartphone,
      title: t('why2'),
      description: "Utilisez simplement la vidéo de vos matchs, aucun équipement spécialisé nécessaire"
    },
    {
      icon: Lightbulb,
      title: t('why3'),
      description: "Interface simple et intuitive, conçue pour être utilisée par tous"
    },
    {
      icon: Target,
      title: t('why4'),
      description: "Développé avec et pour des coachs, en comprenant leurs vrais besoins"
    }
  ];

  return (
    <section id="why" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('whyTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            STAT12 démocratise l'analyse de données sportives pour tous les niveaux de jeu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhySection;