import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Globe, Briefcase, ChevronRight, ChevronLeft, Plus, Calendar } from 'lucide-react';
import { EXPERIENCE_ITEMS, INTERNATIONAL_EXPERIENCE, CERTIFICATIONS } from '../constants';
import { Role, Certification } from '../types';

interface ExperienceProps {
  onBack: () => void;
}

// Helper for formatted text rendering
const FormattedText: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(':');
  if (parts.length > 1) {
    const title = parts[0];
    const content = parts.slice(1).join(':');
    return (
      <span className="block mb-2">
        <strong className="block font-bold uppercase text-xs tracking-widest opacity-100 mb-1">{title}</strong>
        <span className="opacity-95 leading-relaxed">{content}</span>
      </span>
    );
  }
  return <span className="block mb-2 leading-relaxed">{text}</span>;
};

interface TimelineCardProps {
  role: Role;
  isInternational?: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ role, isInternational = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleInteraction = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setIsFlipped(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex items-stretch gap-0 relative min-h-[420px]"
    >
      {/* Timeline Column */}
      <div className="w-12 md:w-48 flex-shrink-0 relative flex flex-col items-center justify-center">
        {/* Continuous Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-secondary/20" />

        {/* Marker Wrapper - Centered Vertically */}
        <div className="relative z-10 flex items-center justify-center">
             
             {/* Marker Dot */}
             <div className={`
                w-4 h-4 rounded-full border-[3px] box-content transition-colors duration-300 bg-primary z-20
                ${isInternational 
                  ? 'border-secondary shadow-[0_0_0_4px_rgba(62,39,35,0.1)]' 
                  : 'border-secondary/60 shadow-[0_0_0_4px_rgba(62,39,35,0.05)]'}
             `} />

             {/* Horizontal Thread Connector */}
             <div className="absolute left-full top-1/2 -translate-y-1/2 h-px bg-secondary/20 w-6 md:w-16" />
        </div>
      </div>

      {/* Card Column - Reverted to max-w-2xl for balanced look */}
      <div className="flex-grow py-6 pl-2 md:pl-8 pr-4 flex items-center">
        <div className="w-full max-w-2xl">
            {/* Date Label - Moved here (Right side of timeline) */}
            <div className="mb-3 pl-1 flex items-center gap-3 opacity-70 text-secondary">
              <Calendar size={16} />
              <span className="text-sm md:text-base font-bold uppercase tracking-widest font-sans">
                {role.period}
              </span>
            </div>

            {/* Interactive Notecard */}
            <div 
              className="group relative h-[400px] w-full cursor-pointer perspective-1000"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleInteraction}
            >
            <motion.div
                className="relative h-full w-full preserve-3d"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* FRONT FACE */}
                <div 
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                <div className={`
                    h-full w-full flex flex-col p-8 rounded-lg border transition-colors duration-300
                    ${isInternational 
                    ? 'bg-white/90 border-secondary/30' 
                    : 'bg-white/80 border-secondary/20 hover:border-secondary/40'}
                    shadow-sm hover:shadow-lg
                `}>
                    {/* Header Icon */}
                    <div className="mb-auto flex justify-between items-start">
                    <div className={`p-2.5 rounded-full ${isInternational ? 'bg-secondary/10 text-secondary' : 'bg-white/60 text-secondary/70'}`}>
                        {isInternational ? <Globe size={24} strokeWidth={1.5} /> : <Briefcase size={24} strokeWidth={1.5} />}
                    </div>
                    {isInternational && (
                        <div className="px-3 py-1.5 rounded-full bg-secondary text-primary text-[10px] uppercase tracking-widest font-bold shadow-sm">
                        Global
                        </div>
                    )}
                    </div>

                    {/* Main Content */}
                    <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-light leading-tight mb-4 text-secondary">
                        {role.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-secondary/20 mb-4 rounded-full"></div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.15em] opacity-70 leading-relaxed">
                        {role.company}
                    </h4>
                    </div>

                    {/* Footer / View Impact Button */}
                    <div className="mt-auto self-start">
                        <div className={`
                            flex items-center gap-3 px-5 py-2.5 rounded-full
                            border transition-all duration-300 group-hover:scale-105
                            ${isInternational 
                                ? 'bg-secondary/10 border-secondary/30 text-secondary group-hover:bg-secondary group-hover:text-primary' 
                                : 'bg-white/50 border-secondary/20 text-secondary/80 group-hover:bg-secondary group-hover:text-primary group-hover:border-secondary'}
                        `}>
                            <span className="text-[11px] uppercase tracking-widest font-bold">View Impact</span>
                            <Plus size={14} strokeWidth={3} />
                        </div>
                    </div>
                </div>
                </div>

                {/* BACK FACE */}
                <div 
                className="absolute inset-0 backface-hidden h-full w-full rounded-lg overflow-hidden"
                style={{ 
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden', 
                  WebkitBackfaceVisibility: 'hidden'
                }}
                >
                <div className="h-full w-full bg-secondary text-primary p-8 flex flex-col shadow-xl border border-secondary">
                    <div className="mb-4 pb-4 border-b border-primary/20 flex justify-between items-center flex-shrink-0">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/90">Key Achievements</span>
                    <ChevronRight size={16} className="text-primary/70" />
                    </div>
                    
                    <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
                    <div className="space-y-4 text-base font-normal leading-relaxed text-primary/95">
                        {role.description.map((item: string, i: number) => (
                        <FormattedText key={i} text={item} />
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </motion.div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

const CertificatesCarousel: React.FC<{ items: Certification[] }> = ({ items }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  const navigate = (dir: number) => {
    setIndex((prev) => (prev + dir + items.length) % items.length);
  };

  const getVariant = (itemIndex: number) => {
    const length = items.length;
    const diff = (itemIndex - index + length) % length;
    
    // For 3 items: 0 is center, 1 is right, 2 is left
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === length - 1) return 'left';
    return 'hidden';
  };

  const variants = {
    center: { x: '0%', scale: 1, zIndex: 30, opacity: 1, filter: 'blur(0px)' },
    left: { x: '-55%', scale: 0.8, zIndex: 10, opacity: 0.6, filter: 'blur(2px)' },
    right: { x: '55%', scale: 0.8, zIndex: 10, opacity: 0.6, filter: 'blur(2px)' },
    hidden: { opacity: 0, scale: 0, zIndex: 0 },
  };

  return (
    <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center max-w-3xl mx-auto group perspective-1000">
       {/* Controls - visible on hover */}
       <div className="absolute inset-x-0 z-40 flex justify-between pointer-events-none px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
             onClick={() => navigate(-1)} 
             className="pointer-events-auto p-3 rounded-full bg-white/90 backdrop-blur text-secondary hover:bg-secondary hover:text-primary transition-all shadow-lg hover:scale-110"
             aria-label="Previous"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          <button 
             onClick={() => navigate(1)} 
             className="pointer-events-auto p-3 rounded-full bg-white/90 backdrop-blur text-secondary hover:bg-secondary hover:text-primary transition-all shadow-lg hover:scale-110"
             aria-label="Next"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
       </div>

       {/* Cards */}
       <div className="relative w-full h-full flex items-center justify-center">
         {items.map((item, i) => (
           <motion.div
             key={item.id}
             variants={variants}
             initial="hidden"
             animate={getVariant(i)}
             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
             className="absolute w-[65%] aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border border-secondary/10 bg-white"
           >
              <img 
                 src={item.imageUrl} 
                 alt={item.title} 
                 className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs md:text-sm font-bold uppercase tracking-widest text-center shadow-black drop-shadow-md">
                    {item.title}
                  </span>
              </div>
           </motion.div>
         ))}
       </div>
       
       {/* Indicators */}
       <div className="absolute -bottom-8 flex justify-center gap-3 z-30">
          {items.map((_, i) => (
            <button
               key={i}
               onClick={() => setIndex(i)}
               className={`h-2 rounded-full transition-all duration-500 ease-out ${i === index ? 'w-8 bg-secondary' : 'w-2 bg-secondary/20 hover:bg-secondary/40'}`}
            />
          ))}
       </div>
    </div>
  );
};

const Experience: React.FC<ExperienceProps> = ({ onBack }) => {
  const [showHome, setShowHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowHome(window.scrollY < 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen text-secondary relative font-sans selection:bg-secondary/20 bg-primary"
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

      {/* Reduced max-width to align with reverting cards to previous size (was 90rem, now back to standard layout) */}
      <div className="max-w-7xl mx-auto pt-24 pb-32 px-4 md:px-12">
        
        {/* Header */}
        <header className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-signature text-7xl md:text-8xl opacity-100 mb-2 relative">
              Experience
            </h2>
          </motion.div>
        </header>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Section: Professional */}
          <div className="mb-0">
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="md:pl-[12rem] mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-light">Professional Experience</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mt-1">Marketing & Management</p>
            </motion.div>

            {EXPERIENCE_ITEMS.map((role) => (
              <TimelineCard 
                key={role.id} 
                role={role} 
              />
            ))}
          </div>

          {/* Section: International */}
          <div>
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="md:pl-[12rem] mb-12 mt-24 md:mt-32 pt-12 md:pt-0 border-t border-secondary/10 md:border-none"
            >
              <h3 className="text-3xl md:text-4xl font-light">International Relations</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mt-1">Global Strategy & Policy</p>
            </motion.div>

            {INTERNATIONAL_EXPERIENCE.items.map((role) => (
              <TimelineCard 
                key={role.id} 
                role={role as Role} 
                isInternational={true}
              />
            ))}
          </div>

          {/* Section: Certifications */}
          <div>
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="md:pl-[12rem] mb-12 mt-24 md:mt-32 pt-12 md:pt-0 border-t border-secondary/10 md:border-none"
            >
              <h3 className="text-3xl md:text-4xl font-light">Certifications</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mt-1">Expert Credentials</p>
            </motion.div>

            <div className="md:pl-[12rem] max-w-4xl">
              <CertificatesCarousel items={CERTIFICATIONS} />
            </div>
          </div>

        </div>
      </div>
      
      {/* Styles for 3D flip effect */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(244, 201, 214, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(244, 201, 214, 0.5);
          border-radius: 2px;
        }
      `}</style>
    </motion.div>
  );
};

export default Experience;