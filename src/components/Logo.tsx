
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <div className="flex items-center gap-0.125">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ 
          scale: 1.05,
          filter: "brightness(1.2)",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="relative w-10 h-10"
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer glow effect */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feFlood floodColor="#92f7ff" floodOpacity="0.5" result="glowColor"/>
              <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
              <feMerge>
                <feMergeNode in="softGlow"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Enhanced gradients */}
            <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#92f7ff" />
              <stop offset="50%" stopColor="#016eff" />
              <stop offset="100%" stopColor="#016eff" />
            </linearGradient>

            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#92f7ff" />
              <stop offset="100%" stopColor="#016eff" />
            </linearGradient>

            {/* Metallic effect */}
            <linearGradient id="metallic" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
            </linearGradient>
          </defs>

          {/* Base shield with enhanced glow and metallic effect */}
          <motion.path
            d="M20 4L32 8V20C32 28 26 34 20 36C14 34 8 28 8 20V8L20 4Z"
            fill="url(#shield-gradient)"
            stroke="url(#circuit-gradient)"
            strokeWidth="0.5"
            filter="url(#glow)"
            className="animate-pulse"
          />

          {/* Decorative tech lines */}
          <g stroke="url(#circuit-gradient)" strokeWidth="0.5" opacity="0.8">
            <path d="M14 12H26M20 8V16" strokeLinecap="round" />
            <path d="M12 20H16M24 20H28" strokeLinecap="round" />
            <path d="M16 28L20 24L24 28" strokeLinecap="round" />
          </g>

          {/* Enhanced D symbol */}
          <path
            d="M16 14V26H20C23.3 26 26 23.3 26 20C26 16.7 23.3 14 20 14H16Z"
            fill="white"
            fillOpacity="0.95"
            filter="url(#glow)"
          />
          <path
            d="M19 17H20C21.7 17 23 18.3 23 20C23 21.7 21.7 23 20 23H19V17Z"
            fill="url(#shield-gradient)"
          />
        </svg>
      </motion.div>
      
      <motion.span 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold font-orbitron bg-gradient-to-r from-cyber-blue to-deep-blue bg-clip-text text-transparent"
      >
        Descryber
      </motion.span>
    </div>
  );
};
