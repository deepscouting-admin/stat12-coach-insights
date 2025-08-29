import { useState } from 'react';
import { Menu, X, Globe, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { DemoDialog } from './DemoDialog';


interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/20 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:opacity-80 transition-opacity"
            >
              <img src="./lovable-uploads/34e9a7f2-95d1-46f3-a0ea-7102aae0dd70.png" alt="STAT12" className="h-9 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
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
              onClick={() => setIsDemoDialogOpen(true)}
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
              className="flex items-center space-x-2 px-3 py-2"
            >
              <img 
                src={language === 'fr' ? './lovable-uploads/97894d8a-7f3d-45d1-90b4-e0737e212032.png' : './lovable-uploads/f0342362-f432-4450-abca-25166142b18c.png'} 
                alt={language === 'fr' ? 'Français' : 'English'} 
                className="w-4 h-4 rounded-full"
              />
              <span className="text-xs font-medium uppercase">{language}</span>
            </Button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
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
          <div className="lg:hidden">
            <div 
              className="fixed inset-0 bg-black/50 z-40" 
              onClick={() => setIsOpen(false)}
            />
            <div 
              className="py-4 border-t border-border bg-background/95 backdrop-blur-sm absolute left-0 right-0 top-full z-50"
              onClick={(e) => {
                // Only close if clicking directly on the menu container (below the buttons)
                if (e.target === e.currentTarget) {
                  setIsOpen(false);
                }
              }}
            >
              <div className="flex flex-col space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left py-3 px-4 rounded-md text-base font-medium transition-colors hover:bg-secondary/80 ${
                      activeSection === section.id ? 'text-primary border-2 border-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
                <div className="px-4 pt-4 border-t border-border/50 mt-4">
                  <Button
                    onClick={() => {
                      setIsDemoDialogOpen(true);
                      setIsOpen(false);
                    }}
                    className="neon-button text-white font-semibold w-full px-6 py-3 rounded-lg hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(93,206,180,0.6)] transition-all duration-300"
                    size="lg"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    {demoSection.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <DemoDialog 
        isOpen={isDemoDialogOpen} 
        onClose={() => setIsDemoDialogOpen(false)} 
      />
    </nav>
  );
};

export default Navigation;
