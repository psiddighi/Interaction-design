import React, { useEffect, useState, ReactNode, useRef } from 'react';
import { useScroll } from '../context/ScrollContext';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  startPosition?: number; // 0 to 1 (percentage of viewport)
  endPosition?: number; // 0 to 1 (percentage of viewport)
  animationType?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale' | 'rotate' | 'spline-rotate' | 'spline-flip' | 'spline-wave' | 'spline-3d';
  delay?: number; // ms
  duration?: number; // ms
  easing?: string;
  threshold?: number; // 0 to 1
  perspective?: number; // px - for 3D effects
  rotateX?: number; // deg - for 3D rotation on X axis
  rotateY?: number; // deg - for 3D rotation on Y axis
  rotateZ?: number; // deg - for 3D rotation on Z axis
  translateZ?: number; // px - for 3D translation on Z axis
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className = '',
  startPosition = 0.8,
  endPosition = 0.2,
  animationType = 'fade',
  delay = 0,
  duration = 500,
  easing = 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  threshold = 0.5,
  perspective = 1000,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  translateZ = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStyle, setAnimationStyle] = useState({});
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const calculateVisibility = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when the element should become visible
      const elementPosition = rect.top + rect.height * threshold;
      const viewportTriggerPoint = windowHeight * startPosition;
      
      // Element is visible when it's above the trigger point
      const shouldBeVisible = elementPosition < viewportTriggerPoint;
      
      if (shouldBeVisible !== isVisible) {
        setIsVisible(shouldBeVisible);
      }
    };

    calculateVisibility();

    // Clean up
    return () => {};
  }, [scrollY, startPosition, threshold, isVisible]);

  useEffect(() => {
    // Set initial and animated styles based on animation type
    const initialStyles: Record<string, any> = {
      opacity: 0,
      transform: '',
      transition: `all ${duration}ms ${easing} ${delay}ms`,
    };

    // For 3D animations, we'll handle perspective in the container
    // but set other 3D-specific properties here
    if (animationType.includes('spline')) {
      initialStyles.transformStyle = 'preserve-3d';
      initialStyles.backfaceVisibility = 'visible';
      // Use a more sophisticated easing for 3D animations
      initialStyles.transition = `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`;
    }

    switch (animationType) {
      case 'fade':
        initialStyles.opacity = isVisible ? 1 : 0;
        break;
      case 'slide-up':
        initialStyles.transform = isVisible ? 'translateY(0)' : 'translateY(50px)';
        initialStyles.opacity = isVisible ? 1 : 0;
        break;
      case 'slide-down':
        initialStyles.transform = isVisible ? 'translateY(0)' : 'translateY(-50px)';
        initialStyles.opacity = isVisible ? 1 : 0;
        break;
      case 'slide-left':
        initialStyles.transform = isVisible ? 'translateX(0)' : 'translateX(50px)';
        initialStyles.opacity = isVisible ? 1 : 0;
        break;
      case 'slide-right':
        initialStyles.transform = isVisible ? 'translateX(0)' : 'translateX(-50px)';
        initialStyles.opacity = isVisible ? 1 : 0;
        break;
      case 'scale':
        initialStyles.transform = isVisible ? 'scale(1)' : 'scale(0.9)';
        initialStyles.opacity = isVisible ? 1 : 0;
        break;
      case 'rotate':
        initialStyles.transform = isVisible ? 'rotate(0)' : 'rotate(-5deg)';
        initialStyles.opacity = isVisible ? 1 : 0;
        break;
      case 'spline-rotate':
        initialStyles.transform = isVisible 
          ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)` 
          : `rotateX(${rotateX + 45}deg) rotateY(${rotateY - 30}deg) rotateZ(${rotateZ + 15}deg)`;
        initialStyles.opacity = isVisible ? 1 : 0;
        break;
      case 'spline-flip':
        initialStyles.transform = isVisible 
          ? 'rotateY(0) translateZ(0)' 
          : 'rotateY(180deg) translateZ(-100px)';
        initialStyles.opacity = isVisible ? 1 : 0;
        initialStyles.backfaceVisibility = 'visible';
        break;
      case 'spline-wave':
        // Create a more complex spline curve animation using parametric equations
        const waveProgress = isVisible ? 0 : 1;
        // Use Bezier curve-like motion for more natural movement
        const t = waveProgress;
        const bezierX = 30 * (3 * Math.pow(1-t, 2) * t + 3 * (1-t) * Math.pow(t, 2));
        const bezierY = 20 * (Math.pow(1-t, 3) + 3 * Math.pow(t, 2) * (1-t));
        const bezierZ = 40 * (Math.sin(t * Math.PI));
        
        // Add slight rotation for more dynamic effect
        const waveRotateX = isVisible ? 0 : Math.sin(t * Math.PI) * 10;
        const waveRotateY = isVisible ? 0 : Math.cos(t * Math.PI * 2) * 15;
        
        initialStyles.transform = isVisible 
          ? 'translateX(0) translateY(0) translateZ(0) rotateX(0) rotateY(0)' 
          : `translateX(${bezierX}px) translateY(${bezierY}px) translateZ(${bezierZ}px) rotateX(${waveRotateX}deg) rotateY(${waveRotateY}deg)`;
        initialStyles.opacity = isVisible ? 1 : 0;
        break;
      case 'spline-3d':
        initialStyles.transform = isVisible 
          ? `translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)` 
          : `translateZ(${translateZ - 100}px) rotateX(${rotateX + 90}deg) rotateY(${rotateY + 45}deg) rotateZ(${rotateZ + 45}deg)`;
        initialStyles.opacity = isVisible ? 1 : 0;
        break;
      default:
        initialStyles.opacity = isVisible ? 1 : 0;
    }

    setAnimationStyle(initialStyles);
  }, [isVisible, animationType, delay, duration, easing, perspective, rotateX, rotateY, rotateZ, translateZ]);

  // For 3D animations, we need a container with perspective and a child with the transforms
  if (animationType.includes('spline')) {
    return (
      <div 
        ref={ref}
        className={className}
        style={{ 
          perspective: `${perspective}px`,
          perspectiveOrigin: 'center center',
          transformStyle: 'preserve-3d'
        }}
      >
        <div style={animationStyle}>
          {children}
        </div>
      </div>
    );
  }
  
  // For regular animations
  return (
    <div
      ref={ref}
      className={className}
      style={animationStyle}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;