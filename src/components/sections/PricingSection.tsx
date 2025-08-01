import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const PricingSection = () => {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: t('pricingBasic'),
      badge: 'Basic',
      price: t('pricingFree'),
      subtitle: t('pricingPartner'),
      fallback: t('pricingOtherwise'),
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
      monthlyPrice: '39€/mois',
      annualPrice: '390€/an',
      previousPlan: 'Basic',
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
      monthlyPrice: '79€/mois',
      annualPrice: '790€/an',
      previousPlan: 'Bronze',
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
      monthlyPrice: '129€/mois',
      annualPrice: '1290€/an',
      previousPlan: 'Silver',
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
          
          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!isAnnual ? 'text-muted-foreground' : 'text-foreground'}`}>
              Mensuel
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isAnnual ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-muted-foreground' : 'text-foreground'}`}>
              Annuel
            </span>
          </div>
        </div>

        {/* Mobile layout - scrollable */}
        <div className="block lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative flex flex-col min-w-[280px] ${
                  plan.name === 'Basic' ? 'h-[620px]' : 'h-[580px]'
                } snap-center ${
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
                   <div className="mb-4">
                     <span className="text-3xl font-bold text-primary">
                       {plan.name === 'Basic' ? plan.price : (isAnnual ? plan.annualPrice : plan.monthlyPrice)}
                     </span>
                     {plan.subtitle && (
                       <p className="text-sm text-muted-foreground mt-1">{plan.subtitle}</p>
                     )}
                     {plan.fallback && (
                       <p className="text-sm text-muted-foreground">{plan.fallback}</p>
                     )}
                   </div>
                 </CardHeader>
                
                 <CardContent className="pt-0 flex-1 flex flex-col">
                   {plan.previousPlan && (
                     <div className="mb-4 pb-4 border-b border-border/50">
                       <p className="text-sm text-muted-foreground text-center">
                         Tout de {plan.previousPlan}, plus:
                       </p>
                     </div>
                   )}
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
        <div className="hidden lg:block max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-6 items-end">
            {/* Basic plan */}
            <Card className="relative flex flex-col h-[620px] border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <div className="absolute -top-3 left-4 z-20">
                <span className="neon-tag px-3 py-1 rounded-full text-xs font-semibold">
                  Basic
                </span>
              </div>
              
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-xl font-bold mb-2">{plans[0].name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">{plans[0].price}</span>
                  <p className="text-sm text-muted-foreground mt-1">{plans[0].subtitle}</p>
                  <p className="text-sm text-muted-foreground">{plans[0].fallback}</p>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 flex-1 flex flex-col">
                <div className="space-y-3 mb-6 flex-1">
                  {plans[0].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full" variant="outline">
                  {t('subscribe')}
                </Button>
              </CardContent>
            </Card>

            {/* Premium plans group */}
            <div className="col-span-3">
              {/* Premium header bar */}
              <div className="bg-primary/10 border border-primary/20 rounded-t-lg p-3 mb-0" style={{ marginTop: '46px' }}>
                <h3 className="text-center font-semibold text-primary">PREMIUM</h3>
              </div>
              
              {/* Premium plans */}
              <div className="grid grid-cols-3 gap-6">
                {plans.slice(1).map((plan, index) => (
                  <Card
                    key={index + 1}
                    className={`relative flex flex-col h-[540px] rounded-t-none ${
                      plan.isPopular 
                        ? 'border-primary shadow-lg shadow-primary/25' 
                        : 'border-border hover:border-primary/50'
                    } transition-all duration-300 hover:shadow-xl`}
                  >
                    <div className="absolute -top-3 left-4 z-20">
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
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
                       <div className="mb-4">
                         <span className="text-3xl font-bold text-primary">
                           {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                         </span>
                       </div>
                     </CardHeader>
                    
                     <CardContent className="pt-0 flex-1 flex flex-col">
                       <div className="mb-4 pb-4 border-b border-border/50">
                         <p className="text-sm text-muted-foreground text-center">
                           Tout de {plan.previousPlan}, plus:
                         </p>
                       </div>
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
      </div>
    </section>
  );
};

export default PricingSection;