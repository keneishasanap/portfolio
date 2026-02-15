import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { RECOGNITION_CATEGORIES } from '../constants';

interface RecognitionProps {
  onBack: () => void;
}

const Recognition: React.FC<RecognitionProps> = ({ onBack }) => {
  const [showHome, setShowHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowHome(window.scrollY < 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen text-secondary relative font-sans selection:bg-secondary/20"
    >
      {/* Floating Home Button */}
      <motion.button 
        onClick={onBack}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: showHome ? 1 : 0, 
          pointerEvents: showHome ? 'auto' : 'none' 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-8 left-6 md:left-12 z-50 text-secondary bg-primary/80 backdrop-blur-sm p-3 rounded-full shadow-sm hover:shadow-md transition-all border border-secondary/10"
        aria-label="Return to Home"
      >
        <Home size={24} strokeWidth={1.5} />
      </motion.button>

      <div className="pt-24 pb-32 px-4 md:px-12 lg:px-24 max-w-4xl mx-auto">
        <header className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="font-signature text-7xl md:text-8xl lg:text-9xl mb-4 opacity-100">
              Recognition
            </h2>
            <p className="text-sm md:text-base uppercase tracking-[0.3em] opacity-60 font-medium">
              Honors & Awards
            </p>
          </motion.div>
        </header>

        <div className="space-y-32">
          {RECOGNITION_CATEGORIES.map((category, categoryIndex) => (
            <section key={categoryIndex} className="w-full">
              {/* Category Title - Centered */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-16 text-center"
              >
                 <div className="inline-block relative pb-4">
                   <h3 className="text-2xl md:text-3xl font-light text-secondary/80">
                     {category.title}
                   </h3>
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px bg-secondary/20"></div>
                 </div>
              </motion.div>

              <div className="flex flex-col space-y-20">
                {category.items.map((award, index) => (
                  <motion.div 
                    key={award.id}
                    initial={{ opacity: 0, y: 50, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.9, 
                      ease: [0.22, 1, 0.36, 1], // Custom smooth ease
                      delay: index * 0.05 
                    }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Year - Top and Centered */}
                    <div className="mb-3">
                      <span className="
                        inline-block px-3 py-1 
                        text-xs font-bold tracking-widest opacity-60 font-sans 
                        border border-secondary/20 rounded-full
                        group-hover:border-secondary/40 transition-colors duration-500
                      ">
                        {award.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="max-w-2xl mx-auto">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3 text-secondary tracking-tight">
                        {award.title}
                      </h3>
                      
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-50 mb-4 group-hover:opacity-80 transition-opacity duration-500">
                        {award.organization}
                      </h4>
                      
                      {award.description && (
                        <p className="text-base md:text-lg opacity-80 leading-relaxed font-light mx-auto">
                          {award.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Recognition;