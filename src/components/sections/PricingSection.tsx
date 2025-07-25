import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const PricingSection = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricingBasic'),
      price: t('pricingFree'),
      subtitle: t('pricingPartner'),
      fallback: t('pricingOtherwise'),
      features: [t('basicFeatures')],
      isPopular: false
    },
    {
      name: t('pricingBronze'),
      price: '+39€/mois',
      subtitle: '',
      fallback: '',
      features: [t('bronzeFeatures')],
      isPopular: false
    },
    {
      name: t('pricingSilver'),
      price: '+79€/mois',
      subtitle: '',
      fallback: '',
      features: [t('silverFeatures')],
      isPopular: true
    },
    {
      name: t('pricingGold'),
      price: '+129€/mois',
      subtitle: '',
      fallback: '',
      features: [t('goldFeatures')],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('pricingTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative rounded-2xl transition-all duration-300 hover:scale-105 ${
                plan.isPopular 
                  ? 'border-primary shadow-lg shadow-primary/25' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Populaire
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  {plan.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">{plan.subtitle}</p>
                  )}
                  {plan.fallback && (
                    <p className="text-sm text-muted-foreground">{plan.fallback}</p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full" 
                  variant={plan.isPopular ? "default" : "outline"}
                >
                  {t('heroButton')}
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