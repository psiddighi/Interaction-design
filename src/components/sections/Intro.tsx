import React from 'react';
import AnimatedElement from '../AnimatedElement';
import FloatingElements from '../FloatingElements';
import { Globe, Layers, Code, Zap } from 'lucide-react';

const Intro: React.FC = () => {
  return (
    <section 
      id="intro"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-purple-900/30 to-black z-0" />
      

      
      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl animate-[pulse-glow_8s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-[pulse-glow_12s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 rounded-full bg-pink-500/20 blur-3xl animate-[pulse-glow_10s_ease-in-out_infinite_2s]" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedElement 
          animationType="fade" 
          duration={800}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-[pulse-glow_4s_ease-in-out_infinite]"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-full">
              <Globe className="h-20 w-20 text-white" />
            </div>
          </div>
        </AnimatedElement>
        
        <AnimatedElement 
          animationType="slide-up" 
          delay={200}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient from-primary">
            How Web Applications Work
          </h1>
        </AnimatedElement>
        
        <AnimatedElement 
          animationType="slide-up" 
          delay={400}
          className="mb-10"
        >
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            An interactive journey from user interaction to server response and everything in between.
          </p>
        </AnimatedElement>
        
        <AnimatedElement 
          animationType="slide-up" 
          delay={600}
          className="mb-12"
        >
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Scroll down to explore the fascinating journey of data as it travels through the layers of a modern web application. Learn about frontend interfaces, API communications, backend processes, and database interactions.
          </p>
        </AnimatedElement>
        
        <AnimatedElement
          animationType="fade"
          delay={800}
        >
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-full">
              <Layers className="h-5 w-5 text-blue-400" />
              <span className="text-white">Modern Design</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-full">
              <Code className="h-5 w-5 text-purple-400" />
              <span className="text-white">Clean Code</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-full">
              <Zap className="h-5 w-5 text-pink-400" />
              <span className="text-white">Fast Performance</span>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Intro;