import { useState } from 'react';
import { Menu, X, Globe, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage, Language } from '@/contexts/LanguageContext';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onDemoClick?: () => void;
}

const Navigation = ({ activeSection, setActiveSection, onDemoClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const sections = [
    { id: 'about', label: t('aboutTitle') },
    { id: 'features', label: t('featuresTitle') },
    { id: 'pricing', label: t('pricingTitle') },
    { id: 'faq', label: t('faqTitle') },
    { id: 'contact', label: t('contactTitle') }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/lovable-uploads/34e9a7f2-95d1-46f3-a0ea-7102aae0dd70.png" alt="STAT12" className="h-8 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium uppercase">{language}</span>
            </Button>
            <Button
              onClick={onDemoClick}
              size="sm"
              className="neon-button"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {t('demoButton')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-4 space-y-1 bg-background/95 backdrop-blur-sm border-t border-border">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === section.id 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-primary hover:bg-accent'
                }`}
              >
                {section.label}
              </button>
            ))}
            
            <div className="pt-2 border-t border-border mt-2">
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language.toUpperCase()}
              </button>
              
              {/* Mobile Demo Button */}
              <div className="px-3 py-2">
                <Button
                  onClick={() => {
                    onDemoClick?.();
                    setIsOpen(false);
                  }}
                  size="sm"
                  className="neon-button w-full"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('demoButton')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;