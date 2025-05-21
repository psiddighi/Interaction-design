import React, { useEffect } from 'react';
import { Router } from './components/Router';
import { ScrollProvider } from './context/ScrollContext';

function App() {
  useEffect(() => {
    // Update the title
    document.title = "Web Explained | Interactive Journey";
    
    // Remove default title if present
    const defaultTitle = document.querySelector('[data-default]');
    if (defaultTitle) {
      defaultTitle.removeAttribute('data-default');
    }
  }, []);

  return (
    <ScrollProvider>
      <Router />
    </ScrollProvider>
  );
}

export default App;