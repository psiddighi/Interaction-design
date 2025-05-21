import React from 'react';
import AnimatedElement from '../AnimatedElement';
import ParallaxElement from '../ParallaxElement';
import { Monitor, Smartphone, Tablet, MousePointer, User } from 'lucide-react';

const FrontendSection: React.FC = () => {
  return (
    <section
      id="frontend"
      className="min-h-screen flex flex-col relative py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-blue-950 z-0" />
      
      <div className="max-w-6xl mx-auto relative z-10 mt-16">
        <AnimatedElement
          animationType="fade"
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            The <span className="text-blue-400">Frontend</span> Experience
          </h2>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Where user interaction begins and visual magic happens.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <AnimatedElement
              animationType="slide-right"
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">User Interaction</h3>
              <p className="text-gray-300 mb-6">
                When a user interacts with a web application, they're engaging with the frontend - the visible, interactive layer built with HTML, CSS, and JavaScript.
              </p>
            </AnimatedElement>
            
            <AnimatedElement
              animationType="slide-right"
              delay={200}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Form Submission</h3>
              <p className="text-gray-300 mb-6">
                When a user submits a form, JavaScript captures this event, validates the input, and prepares the data to be sent to the backend.
              </p>
            </AnimatedElement>
            
            <AnimatedElement
              animationType="slide-right"
              delay={400}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Multi-Device Experience</h3>
              <p className="text-gray-300">
                Modern frontends are responsive, adapting to different screen sizes and devices for a consistent user experience everywhere.
              </p>
            </AnimatedElement>
          </div>
          
          <div className="relative h-[500px]">
            {/* Visual representation of frontend with devices and interactions */}
            <ParallaxElement 
              speed={-0.2} 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[280px] h-[560px] rounded-3xl border-4 border-gray-700 bg-gray-800"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <User className="h-20 w-20 text-white opacity-30" />
                
                <AnimatedElement
                  animationType="fade"
                  delay={600}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                    <MousePointer className="h-8 w-8 text-white" />
                  </div>
                </AnimatedElement>
              </div>
            </ParallaxElement>
            
            <ParallaxElement 
              speed={-0.1} 
              className="absolute bottom-0 left-0 transform"
            >
              <div className="rounded-lg bg-gray-800 border-2 border-gray-700 p-2">
                <Monitor className="h-16 w-16 text-blue-400" />
              </div>
            </ParallaxElement>
            
            <ParallaxElement 
              speed={-0.3} 
              className="absolute top-1/4 right-0 transform"
            >
              <div className="rounded-lg bg-gray-800 border-2 border-gray-700 p-2">
                <Smartphone className="h-10 w-10 text-blue-300" />
              </div>
            </ParallaxElement>
            
            <ParallaxElement 
              speed={-0.15} 
              className="absolute bottom-1/3 right-1/4 transform"
            >
              <div className="rounded-lg bg-gray-800 border-2 border-gray-700 p-2">
                <Tablet className="h-12 w-12 text-blue-300" />
              </div>
            </ParallaxElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendSection;