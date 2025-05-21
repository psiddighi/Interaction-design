import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScroll } from '../context/ScrollContext';

const ScrollDownIndicator: React.FC = () => {
  const { scrollY, scrollProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide the indicator after scrolling down a bit or reaching the end
    setVisible(scrollY < 100 && scrollProgress < 0.1);
  }, [scrollY, scrollProgress]);

  if (!visible) return null;

  return (
    <div 
      className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center transition-transform duration-300"
      style={{ opacity: 1 - scrollY / 100 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg animate-[pulse-glow_3s_ease-in-out_infinite]"></div>
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-full flex items-center gap-2 animate-[float_3s_ease-in-out_infinite]">
          <span className="text-white text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="text-white h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default ScrollDownIndicator;