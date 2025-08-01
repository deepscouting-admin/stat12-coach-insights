import { Check, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const PricingSection = () => {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: 'basic',
      name: t('pricingBasic'),
      badge: t('pricingBasic'),
      price: t('pricingFree'),
      partnerText: t('pricingPartner'),
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
      id: 'bronze',
      name: t('pricingBronze'),
      badge: 'Bronze',
      monthlyPrice: '35€',
      annualPrice: '29€',
      includesText: t('bronzeIncludes'),
      features: [
        t('bronzeFeature1'),
        t('bronzeFeature2'),
        t('bronzeFeature3')
      ].filter(Boolean),
      isPopular: false,
      isPremium: true
    },
    {
      id: 'silver',
      name: t('pricingSilver'),
      badge: 'Silver',
      monthlyPrice: '72€',
      annualPrice: '59€',
      includesText: t('silverIncludes'),
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
      id: 'gold',
      name: t('pricingGold'),
      badge: 'Gold',
      monthlyPrice: '134€',
      annualPrice: '119€',
      includesText: t('goldIncludes'),
      features: [
        t('goldFeature1'),
        t('goldFeature2'),
        t('goldFeature3'),
        t('goldFeature4')
      ].filter(Boolean),
      isPopular: false,
      isPremium: true
    }
  ];

  const basicPlan = plans[0];
  const premiumPlans = plans.slice(1);

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
            {t('pricingTitle')}
          </h2>
        </div>

        {/* Mobile layout - carousel */}
        <div className="block lg:hidden">
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory px-4 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              {plans.map((plan, index) => (
                <Card
                  key={plan.id}
                  className={`relative flex flex-col min-w-[280px] max-w-[280px] ${
                    plan.id === 'basic' ? 'min-h-[600px]' : 'min-h-[560px]'
                  } snap-center ${
                    plan.isPopular 
                      ? 'border-primary shadow-lg shadow-primary/25' 
                      : 'border-transparent hover:border-primary/50'
                  } transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm`}
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
                  {plan.isPremium && (
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className={`text-sm ${isAnnual ? 'text-muted-foreground' : 'text-foreground'}`}>
                        Mois
                      </span>
                      <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                          isAnnual ? 'bg-primary' : 'bg-muted'
                        }`}
                      >
                        <span
                          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                            isAnnual ? 'translate-x-5' : 'translate-x-1'
                          }`}
                        />
                      </button>
                      <span className={`text-sm ${!isAnnual ? 'text-muted-foreground' : 'text-foreground'}`}>
                        An
                      </span>
                    </div>
                  )}
                  <div className="mb-4">
                    {plan.id === 'basic' ? (
                      <>
                        <span className="text-3xl font-bold text-primary">{plan.price}</span>
                        <div className="mt-2">
                          <p className="text-sm text-white">{plan.partnerText}</p>
                          <p className="text-base text-primary font-medium">{plan.fallback}</p>
                        </div>
                      </>
                    ) : (
                      <span className="text-3xl font-bold text-primary">
                        {isAnnual ? plan.annualPrice : plan.monthlyPrice}<span className="text-lg">/mois</span>
                      </span>
                    )}
                  </div>
                </CardHeader>
               
                <CardContent className="pt-0 flex-1 flex flex-col">
                  {plan.includesText && (
                    <div className="mb-4">
                      <p className="text-sm text-white font-normal mb-3">
                        {plan.includesText}
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
           
           {/* Mobile CTA after pricing */}
           <div className="mt-8 text-center px-4">
             <Button 
               size="lg" 
               className="neon-button w-full max-w-sm mx-auto"
             >
               <Calendar className="w-4 h-4 mr-2" />
               {t('demoButton')}
             </Button>
           </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-6 items-end">
            {/* Basic plan */}
            <Card className="relative flex flex-col h-[650px] border-transparent hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm">
              <div className="absolute -top-3 left-4 z-20">
                <span className="neon-tag px-3 py-1 rounded-full text-xs font-semibold">
                  {basicPlan.badge}
                </span>
              </div>
              
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-xl font-bold mb-2">{basicPlan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">{basicPlan.price}</span>
                  <div className="mt-2">
                    <p className="text-sm text-white">{basicPlan.partnerText}</p>
                    <p className="text-base text-primary font-medium">{basicPlan.fallback}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 flex-1 flex flex-col">
                <div className="space-y-3 mb-6 flex-1">
                  {basicPlan.features.map((feature, featureIndex) => (
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
              {/* Premium header bar with gap */}
              <div className="bg-primary/10 border border-primary/20 rounded-t-lg p-3 mb-6">
                <h3 className="text-center font-semibold text-primary">PREMIUM</h3>
              </div>
              
              {/* Premium plans */}
              <div className="grid grid-cols-3 gap-6">
                {premiumPlans.map((plan, index) => (
                  <Card
                    key={plan.id}
                    className={`relative flex flex-col h-[570px] ${
                      plan.isPopular 
                        ? 'border-primary shadow-lg shadow-primary/25' 
                        : 'border-transparent hover:border-primary/50'
                    } transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm`}
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
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <span className={`text-sm ${isAnnual ? 'text-muted-foreground' : 'text-foreground'}`}>
                          Mois
                        </span>
                        <button
                          onClick={() => setIsAnnual(!isAnnual)}
                          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                            isAnnual ? 'bg-primary' : 'bg-muted'
                          }`}
                        >
                          <span
                            className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                              isAnnual ? 'translate-x-5' : 'translate-x-1'
                            }`}
                          />
                        </button>
                        <span className={`text-sm ${!isAnnual ? 'text-muted-foreground' : 'text-foreground'}`}>
                          An
                        </span>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-primary">
                          {isAnnual ? plan.annualPrice : plan.monthlyPrice}<span className="text-lg">/mois</span>
                        </span>
                      </div>
                    </CardHeader>
                   
                    <CardContent className="pt-0 flex-1 flex flex-col">
                      <div className="mb-4">
                        <p className="text-sm text-white font-normal mb-3">
                          {plan.includesText}
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