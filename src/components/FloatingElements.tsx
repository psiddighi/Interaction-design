import React, { useEffect, useState } from 'react';
import { useScroll } from '../context/ScrollContext';

interface FloatingElementProps {
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
  minSpeed?: number;
  maxSpeed?: number;
  className?: string;
}

const FloatingElements: React.FC<FloatingElementProps> = ({
  count = 15,
  colors = ['#60A5FA', '#A78BFA', '#F472B6', '#34D399', '#FBBF24'],
  minSize = 10,
  maxSize = 60,
  minOpacity = 0.1,
  maxOpacity = 0.4,
  minSpeed = 20,
  maxSpeed = 60,
  className = '',
}) => {
  const [elements, setElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    opacity: number;
    speed: number;
    delay: number;
  }>>([]);
  
  const { scrollY } = useScroll();

  useEffect(() => {
    // Generate random floating elements
    const newElements = [];
    
    for (let i = 0; i < count; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100, // percentage position
        y: Math.random() * 100,
        size: minSize + Math.random() * (maxSize - minSize),
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
        speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
        delay: Math.random() * 5, // seconds
      });
    }
    
    setElements(newElements);
  }, [count, colors, minSize, maxSize, minOpacity, maxOpacity, minSpeed, maxSpeed]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => {
        const yOffset = (scrollY / element.speed) % 100;
        
        return (
          <div
            key={element.id}
            className="absolute rounded-full"
            style={{
              left: `${element.x}%`,
              top: `${(element.y + yOffset) % 100}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              backgroundColor: element.color,
              opacity: element.opacity,
              filter: 'blur(8px)',
              animation: `float ${element.speed}s infinite alternate ease-in-out`,
              animationDelay: `${element.delay}s`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;