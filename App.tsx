import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ViewState } from './types';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Recognition from './components/Recognition';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);

  // Reset scroll position when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderView = () => {
    switch (view) {
      case ViewState.PORTFOLIO:
        return <Portfolio key="portfolio" onBack={() => setView(ViewState.HOME)} />;
      case ViewState.EXPERIENCE:
        return <Experience key="experience" onBack={() => setView(ViewState.HOME)} />;
      case ViewState.RECOGNITION:
        return <Recognition key="recognition" onBack={() => setView(ViewState.HOME)} />;
      case ViewState.HOME:
      default:
        return <Hero key="hero" onNavigate={setView} />;
    }
  };

  return (
    <motion.main
      className="min-h-screen bg-primary text-secondary selection:bg-secondary selection:text-primary overflow-x-hidden relative font-sans flex flex-col"
    >
      <div className="flex-grow w-full">
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </div>
      
      {/* Footer / Copyright */}
      <footer 
        className="w-full text-center py-6 opacity-60 text-secondary pointer-events-none mt-auto"
      >
        <p className="font-sans text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Keneisha Sanap
        </p>
      </footer>
    </motion.main>
  );
};

export default App;