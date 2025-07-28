import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hide indicator when near bottom of page
      const nearBottom = scrollPosition + windowHeight >= documentHeight - 100;
      setShowIndicator(!nearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showIndicator) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex flex-col items-center space-y-1 smart-scroll">
        <ChevronDown className="w-4 h-4 text-primary opacity-90" />
        <ChevronDown className="w-4 h-4 text-primary opacity-70" />
      </div>
    </div>
  );
};

export default ScrollIndicator;