import React from 'react';
import Header from './Header';
import Intro from './sections/Intro';
import FrontendSection from './sections/FrontendSection';
import NetworkSection from './sections/NetworkSection';
import BackendSection from './sections/BackendSection';
import DatabaseSection from './sections/DatabaseSection';
import Overview from './sections/Overview';
import ProgressIndicator from './ProgressIndicator';
import ScrollDownIndicator from './ScrollDownIndicator';

export const Router: React.FC = () => {
  return (
    <div className="relative bg-black text-white">
      <Header />
      <main className="relative">
        <Intro />
        <FrontendSection />
        <NetworkSection />
        <BackendSection />
        <DatabaseSection />
        <Overview />
      </main>
      <ProgressIndicator />
      <ScrollDownIndicator />
    </div>
  );
};