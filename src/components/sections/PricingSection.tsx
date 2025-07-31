import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const PricingSection = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricingBasic'),
      badge: 'Basic',
      price: t('pricingFree'),
      subtitle: t('pricingPartner'),
      fallback: t('pricingOtherwise'),
      description: t('basicDesc'),
      features: [
        t('basicFeature1'),
        t('basicFeature2'),
        t('basicFeature3')
      ].filter(Boolean),
      isPopular: false,
      isPremium: false
    },
    {
      name: t('pricingBronze'),
      badge: 'Bronze',
      price: '39€/mois',
      subtitle: '',
      fallback: '',
      description: t('bronzeDesc'),
      features: [
        t('bronzeFeature1'),
        t('bronzeFeature2'),
        t('bronzeFeature3'),
        t('bronzeFeature4')
      ].filter(Boolean),
      isPopular: false,
      isPremium: true
    },
    {
      name: t('pricingSilver'),
      badge: 'Silver',
      price: '79€/mois',
      subtitle: '',
      fallback: '',
      description: t('silverDesc'),
      features: [
        t('silverFeature1'),
        t('silverFeature2'),
        t('silverFeature3'),
        t('silverFeature4')
      ].filter(Boolean),
      isPopular: true,
      isPremium: true
    },
    {
      name: t('pricingGold'),
      badge: 'Gold',
      price: '129€/mois',
      subtitle: '',
      fallback: '',
      description: t('goldDesc'),
      features: [
        t('goldFeature1'),
        t('goldFeature2'),
        t('goldFeature3'),
        t('goldFeature4'),
        t('goldFeature5')
      ].filter(Boolean),
      isPopular: false,
      isPremium: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('pricingTitle')}
          </h2>
        </div>

        {/* Desktop: 4 columns, Mobile: 1 column with scroll */}
        <div className="block lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative flex flex-col min-w-[280px] h-[580px] snap-center ${
                  plan.isPopular 
                    ? 'border-primary shadow-lg shadow-primary/25' 
                    : 'border-border hover:border-primary/50'
                } transition-all duration-300 hover:shadow-xl`}
              >
                {/* Badge */}
                <div className="absolute -top-3 left-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    plan.isPopular || !plan.isPremium
                      ? 'neon-tag' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {plan.badge}
                  </span>
                </div>

                {plan.isPopular && (
                  <div className="absolute -top-3 right-4 z-20">
                    <span className="neon-tag px-3 py-1 rounded-full text-xs font-semibold">
                      Populaire
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4 pt-8">
                  <CardTitle className="text-xl font-bold mb-2">{plan.name}</CardTitle>
                  {plan.description && (
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  )}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    {plan.subtitle && (
                      <p className="text-sm text-muted-foreground mt-1">{plan.subtitle}</p>
                    )}
                    {plan.fallback && (
                      <p className="text-sm text-muted-foreground">{plan.fallback}</p>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <div className="space-y-3 mb-6 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    variant={plan.isPopular ? "default" : "outline"}
                  >
                    {t('subscribe')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col h-[580px] ${
                plan.isPopular 
                  ? 'border-primary shadow-lg shadow-primary/25' 
                  : 'border-border hover:border-primary/50'
              } transition-all duration-300 hover:shadow-xl`}
            >
              {/* Badge */}
              <div className="absolute -top-3 left-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  plan.isPopular || !plan.isPremium
                    ? 'neon-tag' 
                    : 'bg-secondary text-secondary-foreground'
                }`}>
                  {plan.badge}
                </span>
              </div>

              {plan.isPopular && (
                <div className="absolute -top-3 right-4 z-20">
                  <span className="neon-tag px-3 py-1 rounded-full text-xs font-semibold">
                    Populaire
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-xl font-bold mb-2">{plan.name}</CardTitle>
                {plan.description && (
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                )}
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  {plan.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">{plan.subtitle}</p>
                  )}
                  {plan.fallback && (
                    <p className="text-sm text-muted-foreground">{plan.fallback}</p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 flex-1 flex flex-col">
                <div className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full" 
                  variant={plan.isPopular ? "default" : "outline"}
                >
                  {t('subscribe')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;