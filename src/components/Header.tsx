import React, { useState, useEffect } from 'react';
import { Layers } from 'lucide-react';
import { useScroll } from '../context/ScrollContext';

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4 ${
        isScrolled 
          ? 'bg-black/85 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-blue-400" />
          <span className="font-semibold text-lg tracking-tight">WebExplained</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#intro" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
                Introduction
              </a>
            </li>
            <li>
              <a href="#frontend" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
                Frontend
              </a>
            </li>
            <li>
              <a href="#network" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
                Network
              </a>
            </li>
            <li>
              <a href="#backend" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
                Backend
              </a>
            </li>
            <li>
              <a href="#database" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
                Database
              </a>
            </li>
            <li>
              <a href="#overview" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
                Overview
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;