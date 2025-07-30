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
      ],
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
      ],
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
        t('silverFeature4'),
        t('silverFeature5')
      ],
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
      ],
      isPopular: false,
      isPremium: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('pricingTitle')}
          </h2>
        </div>

        <div className="relative">
          {/* Premium Banner */}
          <div className="hidden lg:block absolute top-0 left-1/3 right-0 h-10 bg-primary/10 rounded-t-2xl border-t border-l border-r border-primary/20 z-10">
            <div className="flex items-center justify-center h-full">
              <span className="text-primary font-semibold text-sm">PREMIUM</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:mt-10">
            <div className="lg:mr-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative h-full flex flex-col ${
                  index === 0 
                    ? 'lg:-mt-8 lg:mr-8' 
                    : plan.isPremium 
                      ? index === 1 
                        ? 'lg:rounded-l-2xl lg:border-r-0' 
                        : index === 2 
                          ? 'lg:rounded-none lg:border-r-0 border-primary shadow-lg shadow-primary/25 transform lg:scale-105 lg:mt-2' 
                          : 'lg:rounded-r-2xl'
                      : ''
                } ${
                  plan.isPopular 
                    ? 'border-primary shadow-lg shadow-primary/25' 
                    : 'border-border hover:border-primary/50'
                } transition-all duration-300 hover:shadow-xl`}
              >
                {/* Badge */}
                <div className={`absolute left-4 z-20 ${index === 0 ? '-top-3' : 'top-7'}`}>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    plan.isPopular 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {plan.badge}
                  </span>
                </div>

                {plan.isPopular && (
                  <div className="absolute top-7 right-4 z-20">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Populaire
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4 pt-8">
                  <CardTitle className="text-xl font-bold mb-2">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
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
        </div>
      </div>
    </section>
  );
};

export default PricingSection;