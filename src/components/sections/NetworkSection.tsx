import React from 'react';
import AnimatedElement from '../AnimatedElement';
import ParallaxElement from '../ParallaxElement';
import { Globe, Server, ArrowRight, Shield } from 'lucide-react';

const NetworkSection: React.FC = () => {
  return (
    <section
      id="network"
      className="min-h-screen flex flex-col relative py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-purple-900/20 to-violet-950 z-0" />
      
      <div className="max-w-6xl mx-auto relative z-10 mt-16">
        <AnimatedElement
          animationType="fade"
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            The <span className="text-purple-400">Network</span> Journey
          </h2>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            How data travels securely across the internet.
          </p>
        </AnimatedElement>
        
        <div className="flex flex-col items-center mt-16">
          <div className="w-full max-w-5xl">
            <div className="relative h-[300px] mb-16">
              {/* Visual representation of data flow */}
              <ParallaxElement 
                speed={-0.1} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900/30 rounded-full p-4"
              >
                <div className="bg-blue-800/40 rounded-full p-3">
                  <Globe className="h-16 w-16 text-blue-400" />
                </div>
              </ParallaxElement>
              
              <div className="absolute left-[calc(20%_-_30px)] top-1/2 transform -translate-y-1/2">
                <AnimatedElement
                  animationType="slide-right"
                  delay={200}
                >
                  <ArrowRight className="h-8 w-16 text-gray-400" />
                </AnimatedElement>
              </div>
              
              <ParallaxElement 
                speed={-0.15} 
                className="absolute left-[calc(30%_-_30px)] top-1/2 transform -translate-y-1/2 bg-purple-900/30 rounded-full p-4"
              >
                <div className="bg-purple-800/40 rounded-full p-3">
                  <Shield className="h-16 w-16 text-purple-400" />
                </div>
              </ParallaxElement>
              
              <div className="absolute left-[calc(50%_-_30px)] top-1/2 transform -translate-y-1/2">
                <AnimatedElement
                  animationType="slide-right"
                  delay={400}
                >
                  <ArrowRight className="h-8 w-16 text-gray-400" />
                </AnimatedElement>
              </div>
              
              <ParallaxElement 
                speed={-0.2} 
                className="absolute left-[calc(70%_-_30px)] top-1/2 transform -translate-y-1/2 bg-violet-900/30 rounded-full p-4"
              >
                <div className="bg-violet-800/40 rounded-full p-3">
                  <Server className="h-16 w-16 text-violet-400" />
                </div>
              </ParallaxElement>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedElement
                animationType="slide-up"
                className="bg-gray-900/50 p-6 rounded-xl border border-purple-900/30"
              >
                <h3 className="text-xl font-semibold mb-3 text-purple-300">API Request Formation</h3>
                <p className="text-gray-300">
                  The frontend packages user data into a structured request using protocols like HTTP/HTTPS and sends it to a specific API endpoint.
                </p>
              </AnimatedElement>
              
              <AnimatedElement
                animationType="slide-up"
                delay={200}
                className="bg-gray-900/50 p-6 rounded-xl border border-purple-900/30"
              >
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Secure Data Transmission</h3>
                <p className="text-gray-300">
                  Data is encrypted using TLS/SSL, creating a secure tunnel that protects sensitive information as it travels across the open internet.
                </p>
              </AnimatedElement>
              
              <AnimatedElement
                animationType="slide-up"
                delay={400}
                className="bg-gray-900/50 p-6 rounded-xl border border-purple-900/30"
              >
                <h3 className="text-xl font-semibold mb-3 text-purple-300">API Gateway</h3>
                <p className="text-gray-300">
                  The request arrives at an API gateway that validates authentication tokens, routes the request to the right service, and may perform rate limiting.
                </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;