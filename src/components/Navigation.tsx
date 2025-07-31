import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage, Language } from '@/hooks/useLanguage';


interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const sections = [
    { id: 'about', label: t('about') },
    { id: 'features', label: t('features') },
    { id: 'pricing', label: t('pricing') },
    { id: 'faq', label: t('faq') },
    { id: 'contact', label: t('contact') }
  ];

  const demoSection = { id: 'demo', label: t('demo'), isDemo: true };

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/lovable-uploads/34e9a7f2-95d1-46f3-a0ea-7102aae0dd70.png" alt="STAT12" className="h-9 w-auto" />
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
            <Button
              className="neon-button text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(93,206,180,0.6)] transition-all duration-300"
              size="sm"
            >
              {demoSection.label}
            </Button>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium uppercase">{language}</span>
            </Button>

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
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left py-2 px-4 rounded-md text-sm font-medium transition-colors hover:bg-secondary ${
                    activeSection === section.id ? 'text-primary bg-secondary' : 'text-muted-foreground'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <Button
                className="neon-button text-white font-semibold mx-4 mt-2 px-6 py-3 rounded-lg hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(93,206,180,0.6)] transition-all duration-300"
                size="sm"
              >
                {demoSection.label}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;