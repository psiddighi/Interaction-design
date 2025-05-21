import React, { CSSProperties, ReactNode, useEffect, useState } from 'react';
import { useScroll } from '../context/ScrollContext';

interface ParallaxElementProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Positive values move slower, negative values move faster
  direction?: 'vertical' | 'horizontal';
  startOffset?: number;
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'vertical',
  startOffset = 0,
}) => {
  const { scrollY } = useScroll();
  const [offset, setOffset] = useState(startOffset);

  useEffect(() => {
    // Calculate the offset based on scroll position and speed
    const newOffset = startOffset + scrollY * speed;
    setOffset(newOffset);
  }, [scrollY, speed, startOffset]);

  const style: CSSProperties = {
    transform: direction === 'vertical' 
      ? `translateY(${offset}px)` 
      : `translateX(${offset}px)`,
    transition: 'transform 0.1s ease-out',
    willChange: 'transform',
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default ParallaxElement;