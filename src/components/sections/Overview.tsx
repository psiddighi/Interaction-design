import React, { useState } from 'react';
import AnimatedElement from '../AnimatedElement';
import { Globe, Server, Database, ArrowRight, ChevronRight } from 'lucide-react';

const Overview: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      title: "Frontend Interaction",
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      color: "blue",
      description: "User interacts with the interface, triggering JavaScript events. Form data is validated and prepared for submission."
    },
    {
      title: "API Request",
      icon: <ArrowRight className="h-6 w-6 text-purple-400" />,
      color: "purple",
      description: "Data is formatted and sent securely over HTTPS to the backend API endpoint. Authentication tokens verify the user's identity."
    },
    {
      title: "Backend Processing",
      icon: <Server className="h-6 w-6 text-indigo-400" />,
      color: "indigo",
      description: "The server authenticates the request, applies business logic, and prepares data operations for the database."
    },
    {
      title: "Database Operations",
      icon: <Database className="h-6 w-6 text-cyan-400" />,
      color: "cyan",
      description: "Data is securely stored or retrieved from the database. Transactions ensure data integrity during operations."
    },
    {
      title: "Response Journey",
      icon: <ArrowRight className="h-6 w-6 text-emerald-400" />,
      color: "emerald",
      description: "Results are formatted and sent back to the frontend. The response travels securely back to the user's device."
    },
  ];
  
  const colorMap: Record<string, string> = {
    blue: "bg-blue-900/20 border-blue-700/30 text-blue-300",
    purple: "bg-purple-900/20 border-purple-700/30 text-purple-300",
    indigo: "bg-indigo-900/20 border-indigo-700/30 text-indigo-300",
    cyan: "bg-cyan-900/20 border-cyan-700/30 text-cyan-300",
    emerald: "bg-emerald-900/20 border-emerald-700/30 text-emerald-300",
  };
  
  return (
    <section
      id="overview"
      className="min-h-screen flex flex-col relative py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black z-0" />
      
      <div className="max-w-6xl mx-auto relative z-10 mt-16">
        <AnimatedElement
          animationType="fade"
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            The Complete <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Journey</span>
          </h2>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Understanding how all the pieces fit together.
          </p>
        </AnimatedElement>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {steps.map((step, index) => (
              <AnimatedElement
                key={index}
                animationType="slide-up"
                delay={index * 100}
              >
                <button
                  className={`w-full p-6 rounded-xl border transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center ${
                    activeStep === index
                      ? colorMap[step.color]
                      : "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <ChevronRight className="h-6 w-6 text-gray-600" />
                    </div>
                  )}
                </button>
              </AnimatedElement>
            ))}
          </div>
          
          <AnimatedElement
            animationType="fade"
            delay={300}
          >
            <div className="bg-gray-900/40 rounded-xl border border-gray-800 p-8">
              {activeStep !== null ? (
                <div>
                  <h3 className="text-xl font-semibold mb-4">{steps[activeStep].title}</h3>
                  <p className="text-gray-300">{steps[activeStep].description}</p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-gray-400">Click on any step above to see more details</p>
                </div>
              )}
            </div>
          </AnimatedElement>
          
          <div className="mt-16 text-center">
            <AnimatedElement
              animationType="slide-up"
            >
              <h3 className="text-2xl font-semibold mb-6">Ready to Learn More?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-lg font-medium text-white">
                  Explore Documentation
                </a>
                <a href="#" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 rounded-lg font-medium text-white">
                  Contact Our Team
                </a>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;