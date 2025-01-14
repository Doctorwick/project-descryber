import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <motion.div 
        className="relative w-12 h-12"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full drop-shadow-[0_0_10px_rgba(0,149,255,0.3)]"
        >
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#0095ff" }} />
              <stop offset="100%" style={{ stopColor: "#0066cc" }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Shield background with subtle circuit pattern */}
          <path 
            d="M50 10 L90 25 L90 45 C90 65 75 85 50 90 C25 85 10 65 10 45 L10 25 Z" 
            fill="url(#shieldGradient)"
            stroke="#0066cc"
            strokeWidth="2"
            className="drop-shadow-lg"
          />
          
          {/* Circuit lines */}
          <path 
            d="M30 40 H45 M55 40 H70 M50 30 V45" 
            stroke="white"
            strokeWidth="1.5"
            filter="url(#glow)"
          />
          
          {/* D symbol */}
          <path 
            d="M35 55 Q50 35 65 55 Q50 75 35 55" 
            fill="none"
            stroke="white"
            strokeWidth="2"
            filter="url(#glow)"
          />
        </svg>
      </motion.div>
      
      <motion.span 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold text-gradient"
      >
        Descryber
      </motion.span>
    </div>
  );
};