import { useLanguage } from '@/hooks/useLanguage';

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">STAT12</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t('footerDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footerAbout')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  {t('footerSolutions')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  {t('footerPricing')}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  {t('footerFAQ')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footerLegalTitle')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/mentions-legales" className="hover:text-primary transition-colors">
                  {t('footerLegal')}
                </a>
              </li>
              <li>
                <a href="/politique-confidentialite" className="hover:text-primary transition-colors">
                  {t('footerPrivacy')}
                </a>
              </li>
              <li>
                <a href="/conditions-generales" className="hover:text-primary transition-colors">
                  {t('footerTerms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {t('footerRights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;