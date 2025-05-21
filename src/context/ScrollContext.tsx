import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ScrollContextType {
  scrollY: number;
  scrollProgress: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolling: boolean;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollProgress: 0,
  scrollDirection: null,
  isScrolling: false,
});

export const useScroll = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<number | null>(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(currentScrollY / documentHeight, 0), 1);
    
    setScrollY(currentScrollY);
    setScrollProgress(progress);
    setIsScrolling(true);
    
    // Determine scroll direction
    if (currentScrollY > lastScrollY) {
      setScrollDirection('down');
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection('up');
    }
    
    setLastScrollY(currentScrollY);
    
    // Reset scrolling state after a brief delay
    if (scrollTimeout !== null) {
      window.clearTimeout(scrollTimeout);
    }
    
    const timeout = window.setTimeout(() => {
      setIsScrolling(false);
    }, 150);
    
    setScrollTimeout(timeout as unknown as number);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout !== null) {
        window.clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY]);

  return (
    <ScrollContext.Provider
      value={{
        scrollY,
        scrollProgress,
        scrollDirection,
        isScrolling
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};