import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex flex-col items-center space-y-1 scroll-indicator">
        <ChevronDown className="w-6 h-6 text-white opacity-80" />
        <ChevronDown className="w-6 h-6 text-white opacity-60" />
      </div>
    </div>
  );
};

export default ScrollIndicator;