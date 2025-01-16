import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <div className="flex items-center gap-0.25">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
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
          className="w-full h-full drop-shadow-lg"
        >
          {/* Shield background with glow */}
          <motion.path
            d="M20 4L32 8V20C32 28 26 34 20 36C14 34 8 28 8 20V8L20 4Z"
            className="animate-glow"
            fill="url(#shield-gradient)"
            stroke="rgba(96, 165, 250, 0.5)"
            strokeWidth="1"
          />
          
          {/* Circuit pattern */}
          <path
            d="M16 16H24M20 12V20"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Letter D */}
          <path
            d="M16 14V26H20C23.3 26 26 23.3 26 20C26 16.7 23.3 14 20 14H16ZM19 17H20C21.7 17 23 18.3 23 20C23 21.7 21.7 23 20 23H19V17Z"
            fill="white"
            className="drop-shadow"
          />

          {/* Gradients */}
          <defs>
            <linearGradient
              id="shield-gradient"
              x1="20"
              y1="4"
              x2="20"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      
      <motion.span 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
      >
        escryber
      </motion.span>
    </div>
  );
};
