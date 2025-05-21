import React from 'react';
import { useScroll } from '../context/ScrollContext';

const ProgressIndicator: React.FC = () => {
  const { scrollProgress } = useScroll();
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        style={{ width: `${scrollProgress * 100}%`, transition: 'width 0.1s ease-out' }}
      />
    </div>
  );
};

export default ProgressIndicator;