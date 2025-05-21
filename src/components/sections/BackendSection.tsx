import React from 'react';
import AnimatedElement from '../AnimatedElement';
import ParallaxElement from '../ParallaxElement';
import { Server, Lock, Cpu, Code } from 'lucide-react';

const BackendSection: React.FC = () => {
  return (
    <section
      id="backend"
      className="min-h-screen flex flex-col relative py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950 via-indigo-900/20 to-indigo-950 z-0" />
      
      <div className="max-w-6xl mx-auto relative z-10 mt-16">
        <AnimatedElement
          animationType="fade"
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            The <span className="text-indigo-400">Backend</span> Processing
          </h2>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Where business logic comes to life and data is processed.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="relative h-[500px] order-2 md:order-1">
            {/* Visual representation of backend architecture */}
            <ParallaxElement 
              speed={-0.2} 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]"
            >
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-indigo-800/20 rounded-xl border border-indigo-700/40 flex items-center justify-center">
                  <Server className="h-16 w-16 text-indigo-400 opacity-30" />
                </div>
                
                <AnimatedElement
                  animationType="fade"
                  delay={200}
                  className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="bg-indigo-900/50 p-3 rounded-lg">
                    <Lock className="h-10 w-10 text-indigo-300" />
                  </div>
                </AnimatedElement>
                
                <AnimatedElement
                  animationType="fade"
                  delay={300}
                  className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2"
                >
                  <div className="bg-indigo-900/50 p-3 rounded-lg">
                    <Code className="h-10 w-10 text-indigo-300" />
                  </div>
                </AnimatedElement>
                
                <AnimatedElement
                  animationType="fade"
                  delay={400}
                  className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2"
                >
                  <div className="bg-indigo-900/50 p-3 rounded-lg">
                    <Cpu className="h-10 w-10 text-indigo-300" />
                  </div>
                </AnimatedElement>
                
                <ParallaxElement 
                  speed={-0.1} 
                  className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"
                >
                  <div className="bg-indigo-900/50 p-3 rounded-lg">
                    <Server className="h-10 w-10 text-indigo-300" />
                  </div>
                </ParallaxElement>
              </div>
            </ParallaxElement>
          </div>
          
          <div className="order-1 md:order-2">
            <AnimatedElement
              animationType="slide-left"
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Request Handling</h3>
              <p className="text-gray-300 mb-6">
                The backend receives the API request, authenticates the user, and routes it to the appropriate controller or service.
              </p>
            </AnimatedElement>
            
            <AnimatedElement
              animationType="slide-left"
              delay={200}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Business Logic</h3>
              <p className="text-gray-300 mb-6">
                Application rules and workflows are executed here. The backend processes the data, performs calculations, applies validation rules, and prepares database queries.
              </p>
            </AnimatedElement>
            
            <AnimatedElement
              animationType="slide-left"
              delay={400}
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Response Formation</h3>
              <p className="text-gray-300">
                After processing, the backend formats the results into a standardized response (usually JSON) to be sent back to the client.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendSection;