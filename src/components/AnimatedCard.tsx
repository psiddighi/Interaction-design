import React, { ReactNode } from 'react';
import AnimatedElement from './AnimatedElement';

interface AnimatedCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  color?: string;
  delay?: number;
  className?: string;
  iconClassName?: string;
  animationType?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale' | 'rotate';
  hoverEffect?: 'lift' | 'glow' | 'pulse' | 'tilt' | 'none';
  glowIntensity?: 'low' | 'medium' | 'high';
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  icon,
  title,
  description,
  color = 'blue',
  delay = 0,
  className = '',
  iconClassName = '',
  animationType = 'slide-up',
  hoverEffect = 'lift',
  glowIntensity = 'medium',
}) => {
  const colorMap: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600 shadow-blue-500/20',
    purple: 'from-purple-500 to-purple-600 shadow-purple-500/20',
    pink: 'from-pink-500 to-pink-600 shadow-pink-500/20',
    indigo: 'from-indigo-500 to-indigo-600 shadow-indigo-500/20',
    cyan: 'from-cyan-500 to-cyan-600 shadow-cyan-500/20',
    emerald: 'from-emerald-500 to-emerald-600 shadow-emerald-500/20',
    amber: 'from-amber-500 to-amber-600 shadow-amber-500/20',
    // More vibrant gradient combinations
    rainbow: 'from-purple-600 via-pink-500 to-blue-500 shadow-purple-500/30',
    sunset: 'from-orange-500 via-red-500 to-pink-500 shadow-orange-500/30',
    ocean: 'from-cyan-400 via-blue-500 to-indigo-600 shadow-blue-500/30',
    aurora: 'from-green-400 via-cyan-500 to-blue-500 shadow-green-400/30',
    neon: 'from-pink-500 via-purple-500 to-indigo-500 shadow-pink-500/40'
  };
  
  // Glow intensity mapping
  const glowIntensityMap: Record<string, string> = {
    low: 'opacity-10 blur-md',
    medium: 'opacity-20 blur-lg',
    high: 'opacity-30 blur-xl'
  };
  
  // Hover effect mapping
  const hoverEffectMap: Record<string, string> = {
    lift: 'hover:-translate-y-2 hover:scale-[1.02]',
    glow: 'hover:shadow-lg',
    pulse: 'hover:animate-pulse',
    tilt: 'hover:rotate-1',
    none: ''
  };

  return (
    <AnimatedElement
      animationType={animationType}
      delay={delay}
      className={`group ${className}`}
    >
      <div className={`relative overflow-hidden rounded-xl bg-black/30 border border-white/10 p-6 transition-all duration-500 ${hoverEffectMap[hoverEffect]} hover:shadow-lg hover:shadow-${color}-500/20 backdrop-blur-sm`}>
        {/* Background gradient - Fixed string interpolation issue */}
        <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-15 transition-opacity duration-500 ${colorMap[color]}`} />
        

        
        {/* 3D-like card effect with pseudo-elements */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {icon && (
            <div className={`mb-4 ${iconClassName} transform transition-transform duration-500 group-hover:scale-110`}>
              <div className="relative">
                {/* Enhanced glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/30 to-purple-500/30 rounded-full ${glowIntensityMap[glowIntensity]} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                <div className={`relative inline-flex p-3 rounded-full bg-gradient-to-br ${colorMap[color]} transform transition-all duration-500 group-hover:rotate-3`}>
                  {icon}
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-1 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin-slow"></div>
              </div>
            </div>
          )}
          
          <h3 className={`text-xl font-semibold mb-2 bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-${color}-400 to-purple-400 transition-all duration-500`}>{title}</h3>
          <p className="text-gray-300 group-hover:text-white transition-colors duration-500">{description}</p>
          
          {/* Subtle highlight line */}
          <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-${color}-500 to-purple-500 group-hover:w-full transition-all duration-700 ease-out`}></div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default AnimatedCard;