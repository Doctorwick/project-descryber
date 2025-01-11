import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div 
      className="relative w-12 h-12 sm:w-14 sm:h-14"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#9b87f5" }} />
            <stop offset="100%" style={{ stopColor: "#7E69AB" }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Shield background */}
        <path 
          d="M50 10 L90 25 L90 45 C90 65 75 85 50 90 C25 85 10 65 10 45 L10 25 Z" 
          fill="url(#logoGradient)"
          stroke="#6E59A5"
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
  );
};