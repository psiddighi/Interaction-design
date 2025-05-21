import React from 'react';
import AnimatedElement from '../AnimatedElement';
import ParallaxElement from '../ParallaxElement';
import { Database, HardDrive, RefreshCw, Lock } from 'lucide-react';

const DatabaseSection: React.FC = () => {
  return (
    <section
      id="database"
      className="min-h-screen flex flex-col relative py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-cyan-900/10 to-slate-950 z-0" />
      
      <div className="max-w-6xl mx-auto relative z-10 mt-16">
        <AnimatedElement
          animationType="fade"
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            The <span className="text-cyan-400">Database</span> Layer
          </h2>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Where data is stored, retrieved, and maintained securely.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mt-16">
          <div className="md:col-span-5">
            <AnimatedElement
              animationType="slide-right"
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Data Storage</h3>
              <p className="text-gray-300 mb-6">
                Databases organize and store application data efficiently, ensuring it can be quickly retrieved and updated when needed.
              </p>
            </AnimatedElement>
            
            <AnimatedElement
              animationType="slide-right"
              delay={200}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Query Processing</h3>
              <p className="text-gray-300 mb-6">
                When the backend sends a query, the database optimizer determines the most efficient way to retrieve or modify the requested data.
              </p>
            </AnimatedElement>
            
            <AnimatedElement
              animationType="slide-right"
              delay={400}
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Data Integrity</h3>
              <p className="text-gray-300">
                Databases enforce constraints, transactions, and relationships to ensure data remains accurate and consistent, even during failures.
              </p>
            </AnimatedElement>
          </div>
          
          <div className="relative h-[400px] md:col-span-7">
            {/* Visual representation of database */}
            <ParallaxElement 
              speed={-0.1} 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative w-[400px] h-[300px]">
                <div className="absolute inset-0 bg-cyan-900/20 rounded-xl border border-cyan-800/30 flex flex-col items-center justify-center">
                  <Database className="h-20 w-20 text-cyan-500/30 mb-6" />
                  
                  <div className="w-3/4 h-4 bg-cyan-800/20 rounded-md mb-3" />
                  <div className="w-3/4 h-4 bg-cyan-800/20 rounded-md mb-3" />
                  <div className="w-3/4 h-4 bg-cyan-800/20 rounded-md mb-3" />
                  <div className="w-3/4 h-4 bg-cyan-800/20 rounded-md" />
                </div>
                
                <AnimatedElement
                  animationType="fade"
                  delay={300}
                  className="absolute -top-4 -right-4"
                >
                  <div className="bg-cyan-900/40 p-2 rounded-lg">
                    <Lock className="h-8 w-8 text-cyan-300" />
                  </div>
                </AnimatedElement>
                
                <AnimatedElement
                  animationType="fade"
                  delay={400}
                  className="absolute -bottom-4 -left-4"
                >
                  <div className="bg-cyan-900/40 p-2 rounded-lg">
                    <HardDrive className="h-8 w-8 text-cyan-300" />
                  </div>
                </AnimatedElement>
                
                <AnimatedElement
                  animationType="fade"
                  delay={500}
                  className="absolute -bottom-4 -right-4"
                >
                  <div className="bg-cyan-900/40 p-2 rounded-lg">
                    <RefreshCw className="h-8 w-8 text-cyan-300" />
                  </div>
                </AnimatedElement>
              </div>
            </ParallaxElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatabaseSection;