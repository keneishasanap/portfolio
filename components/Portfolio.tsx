import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home } from 'lucide-react';

interface PortfolioProps {
  onBack: () => void;
}

const PHRASES = [
  "growing your brand",
  "social media analytics",
  "effective creative strategy",
  "campaign planning",
  "persuasive communications",
  "content creation"
];

const Portfolio: React.FC<PortfolioProps> = ({ onBack }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [showHome, setShowHome] = useState(true);
  const [isHoveringGerman, setIsHoveringGerman] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHome(window.scrollY < 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Cycle every 1.5 seconds (1500ms) for a slightly faster but smooth pace
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen text-secondary relative font-sans"
    >
      {/* Floating Home Button - Stable implementation */}
      <motion.button 
        onClick={onBack}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: showHome ? 1 : 0, 
          pointerEvents: showHome ? 'auto' : 'none' 
        }}
        whileHover={{ opacity: 0.6 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-8 left-6 md:left-12 z-50 text-secondary p-2"
        aria-label="Return to Home"
      >
        <Home size={28} strokeWidth={1.25} />
      </motion.button>

      {/* Main Content with Slide Animation */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-16 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
      >
        <header className="mb-24 text-center">
          <h2 className="font-signature text-7xl md:text-9xl mb-6 opacity-100">About Me</h2>
          
          <div className="w-full cursor-default select-none">
            {/* 
              Grid layout ensures the visual center of the sentence (the gap between static and dynamic text)
              is always at the center of the container/screen, preventing layout shifts while looking cohesive.
              Added md:-translate-x-12 to shift slightly left.
            */}
            <div className="text-xl md:text-2xl font-light tracking-wide flex flex-col md:grid md:grid-cols-2 items-center gap-1.5 justify-center md:-translate-x-12 transition-transform duration-500">
              <span className="md:text-right w-full">Work with me for</span>
              
              <span className="relative h-[1.5em] w-full flex items-center justify-center md:justify-start overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={phraseIndex}
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Smooth ease-out transition
                    className="font-bold border-b-2 border-secondary/20 pb-1 whitespace-nowrap block"
                  >
                    {PHRASES[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
          </div>
        </header>

        {/* Section 1: Introduction */}
        <section className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center mb-32 max-w-5xl mx-auto">
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 order-2 md:order-1"
          >
             <div className="space-y-6 text-center md:text-left">
               <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight">
                 Even the Mona Lisa needed framing
               </h3>
               <div className="space-y-4">
                 <p className="text-lg md:text-xl font-light leading-relaxed text-secondary/90 text-justify md:text-left">
                   Narratives transform societies. With a background in Communication and Media Studies, I specialize in defining, analyzing, and conceptualizing brand narratives for increased metric growth. Through rigorous industry engagement, I’ve cultivated the skills to identify vital pressure points in cultural discourse and apply them for strategic campaign specificity.
                 </p>
                 <p className="text-lg md:text-xl font-light leading-relaxed text-secondary/90 text-justify md:text-left">
                   Recognized with several awards and honors, a two-time United Nations Delegate, and a Fellowship Scholar, I’m ambitious with a drive for creating global impact.
                 </p>
                 <p className="text-lg md:text-xl font-light leading-relaxed text-secondary/90 text-justify md:text-left">
                   Passionate and outgoing, I’d love to connect on pop culture, intercultural experiences, and all things Chai.
                 </p>
               </div>
             </div>
          </motion.div>
          
          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-md order-1 md:order-2"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl shadow-secondary/5 border border-secondary/10 relative">
               <img 
                 src="https://lh3.googleusercontent.com/d/19MfXcJacUQaGNUElwVUPB8SIdtELHBt4" 
                 alt="Keneisha Sanap"
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out"
               />
            </div>
          </motion.div>
        </section>

        {/* Section 2: Global Perspective / German */}
        <section className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center mb-24 max-w-5xl mx-auto">
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-sm"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl shadow-secondary/5 border border-secondary/10 relative">
               <img 
                 src="https://lh3.googleusercontent.com/d/1-tK8pSWTw8acjPPamal0bfrtghtiZeG-" 
                 alt="Global Perspective"
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out"
               />
            </div>
          </motion.div>

          {/* Right Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
             <div className="space-y-6 text-center md:text-left">
               {/* Animated Subheading */}
               <div 
                  className="relative cursor-default w-fit mx-auto md:mx-0"
                  onMouseEnter={() => setIsHoveringGerman(true)}
                  onMouseLeave={() => setIsHoveringGerman(false)}
               >
                 {/* Invisible spacer to maintain width based on the longer German text */}
                 <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight invisible">
                   Ich spreche etwas Deutsch
                 </h3>
                 
                 {/* German Layer */}
                 <h3 
                   className={`absolute top-0 left-0 font-sans text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight transition-opacity duration-700 ease-in-out ${isHoveringGerman ? 'opacity-0' : 'opacity-100'}`}
                 >
                   Ich spreche etwas Deutsch
                 </h3>
                 
                 {/* English Layer */}
                 <h3 
                   className={`absolute top-0 left-0 font-sans text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight transition-opacity duration-700 ease-in-out ${isHoveringGerman ? 'opacity-100' : 'opacity-0'}`}
                 >
                   I speak a little German
                 </h3>
               </div>

               <div className="space-y-4">
                 <p className="text-lg md:text-xl font-light leading-relaxed text-secondary/90 text-justify md:text-left">
                   If backpacking across six countries, striking up conversations with strangers on the EuroRail, and talking to locals in my best attempt at German taught me anything, it is that stories are deeply relational. There are no barriers to connection because storytelling is co-creation, but doing it effectively makes all the difference. At the core of my learning was one question: How can I tell a story with the tools I have?
                 </p>
                 <p className="text-lg md:text-xl font-light leading-relaxed text-secondary/90 text-justify md:text-left">
                   One evening, as I was sitting outside the Duomo in Florence, I noticed a stranger next to me. Christopher, 90, was a woodworker who frequented the bench on warm evenings. He was grumpy and I eventually got him to give me full-sentenced answers. We were in no way the same, but I was aware that we were both here, on a warm evening, admiring the Duomo.
                 </p>
               </div>
             </div>
          </motion.div>
        </section>

      </motion.div>
    </motion.div>
  );
};

export default Portfolio;