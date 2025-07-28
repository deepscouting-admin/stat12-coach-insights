import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex flex-col items-center space-y-0.5 smart-scroll">
        <ChevronDown className="w-5 h-5 text-primary opacity-90" />
        <ChevronDown className="w-5 h-5 text-primary opacity-70" />
      </div>
    </div>
  );
};

export default ScrollIndicator;