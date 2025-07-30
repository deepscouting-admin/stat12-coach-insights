import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show indicator only in first section and hide when scrolled significantly or near bottom
      const showInFirstSection = scrollPosition < windowHeight * 0.8;
      const nearBottom = scrollPosition + windowHeight >= documentHeight - 100;
      setShowIndicator(showInFirstSection && !nearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showIndicator) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex flex-col items-center space-y-0 animate-bounce">
        <ChevronDown className="w-5 h-5 text-white opacity-80" />
        <ChevronDown className="w-5 h-5 text-white opacity-60 -mt-2" />
      </div>
    </div>
  );
};

export default ScrollIndicator;