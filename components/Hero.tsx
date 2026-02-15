import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewState } from '../types';
import { Linkedin, Mail, FileText } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [hoveredLink, setHoveredLink] = useState<ViewState | null>(null);
  const [isHoveringName, setIsHoveringName] = useState(false);

  const navItems = [
    { id: ViewState.PORTFOLIO, label: 'About Me' },
    { id: ViewState.EXPERIENCE, label: 'Experience' },
    { id: ViewState.RECOGNITION, label: 'Recognition' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-between items-center h-screen pt-12 pb-32 px-6 relative"
    >
      {/* Top Social Navigation - Fade In */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.0, ease: "easeOut" }}
        className="flex gap-10 text-secondary z-20"
      >
        <div className="relative flex flex-col items-center group">
          <a 
            href="https://www.linkedin.com/in/keneishasanap" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:-translate-y-1 hover:opacity-70 transition-all duration-300 block"
          >
            <Linkedin strokeWidth={1.5} size={22} />
          </a>
          <span className="absolute top-full mt-2 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-60 transition-opacity duration-300 font-sans pointer-events-none">
            LinkedIn
          </span>
        </div>

        <div className="relative flex flex-col items-center group">
          <a href="mailto:Keneisha.sanap.work@gmail.com" className="hover:-translate-y-1 hover:opacity-70 transition-all duration-300 block">
            <Mail strokeWidth={1.5} size={22} />
          </a>
          <span className="absolute top-full mt-2 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-60 transition-opacity duration-300 font-sans pointer-events-none">
            Email
          </span>
        </div>

        <div className="relative flex flex-col items-center group">
          <a 
            href="https://drive.google.com/file/d/1C3ki1dfsoBlK25qF7YcyemnuyuaGbSiE/view?usp=sharing"
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:-translate-y-1 hover:opacity-70 transition-all duration-300 block"
          >
            <FileText strokeWidth={1.5} size={22} />
          </a>
          <span className="absolute top-full mt-2 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-60 transition-opacity duration-300 font-sans pointer-events-none">
            Resume
          </span>
        </div>
      </motion.div>

      {/* Center Content Section */}
      <div className="flex-grow flex flex-col items-center justify-center w-full relative z-10">
        <div 
          className="relative cursor-pointer select-none mb-2 p-6"
          onMouseEnter={() => setIsHoveringName(true)}
          onMouseLeave={() => setIsHoveringName(false)}
        >
           {/* 
              We stack the two versions of the name.
              1. The Sans Serif version (Visible by default)
              2. The Signature version (Visible on hover)
           */}
           <div className="relative flex items-center justify-center">
             {/* Placeholder to reserve space and keep layout stable */}
             <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl font-black text-transparent opacity-0 pointer-events-none">
                Keneisha Sanap
             </h1>

             {/* The Default View: Modern Sans */}
             <motion.h1
               className="absolute font-sans text-6xl md:text-8xl lg:text-9xl font-black text-secondary tracking-tight"
               animate={{ 
                 opacity: isHoveringName ? 0 : 1,
                 scale: isHoveringName ? 0.95 : 1,
                 filter: isHoveringName ? "blur(4px)" : "blur(0px)"
               }}
               transition={{ duration: 0.3 }}
             >
               Keneisha Sanap
             </motion.h1>

             {/* The Hover View: Animated Signature */}
             <AnimatePresence>
               {isHoveringName && (
                 <motion.h1
                   initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
                   animate={{ clipPath: 'inset(0 0 0 0)', opacity: 1 }}
                   exit={{ opacity: 0, transition: { duration: 0.2 } }}
                   transition={{ duration: 1.5, ease: [0.445, 0.05, 0.55, 0.95] }}
                   className="absolute font-signature text-7xl md:text-9xl lg:text-[10rem] text-secondary whitespace-nowrap -mt-4 md:-mt-8"
                 >
                   Keneisha Sanap
                 </motion.h1>
               )}
             </AnimatePresence>
           </div>
        </div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-xs md:text-sm uppercase tracking-[0.25em] font-medium text-secondary opacity-80 mt-2 md:mt-4 text-center"
        >
          Communication and Media Studies, B.A
        </motion.p>
        
        {/* University Location */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-secondary opacity-60 mt-2 text-center"
        >
          Pace University, NYC
        </motion.p>
      </div>

      {/* Navigation Links - Fade In */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.0, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-8 z-10"
      >
        {navItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => onNavigate(item.id)}
            onMouseEnter={() => setHoveredLink(item.id)}
            onMouseLeave={() => setHoveredLink(null)}
            className="group relative px-8 py-3 rounded-full border border-secondary text-secondary overflow-hidden transition-all duration-300"
          >
            {/* Hover Background Fill */}
            <span className="absolute inset-0 w-full h-full bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></span>
            
            {/* Text Content */}
            <span className="relative z-10 font-sans text-xs md:text-sm uppercase font-bold tracking-[0.15em] group-hover:text-primary transition-colors duration-300">
              {item.label}
            </span>
          </button>
        ))}
      </motion.nav>
    </motion.div>
  );
};

export default Hero;