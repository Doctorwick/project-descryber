import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
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
          <motion.circle
            cx="20"
            cy="20"
            r="18"
            className="animate-glow"
            fill="url(#blue-glow)"
            fillOpacity="0.2"
          />
          
          {/* Shield background */}
          <path
            d="M20 4C13.5 4 8 9.5 8 16V28C8 31.3 10.7 34 14 34H26C29.3 34 32 31.3 32 28V16C32 9.5 26.5 4 20 4Z"
            fill="url(#shield-gradient)"
            className="drop-shadow-lg"
          />
          
          {/* Letter D */}
          <path
            d="M16 14V26H20C23.3 26 26 23.3 26 20C26 16.7 23.3 14 20 14H16ZM19 17H20C21.7 17 23 18.3 23 20C23 21.7 21.7 23 20 23H19V17Z"
            fill="white"
            className="drop-shadow"
          />

          {/* Gradients */}
          <defs>
            <radialGradient
              id="blue-glow"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(20 20) rotate(90) scale(20)"
            >
              <stop stopColor="#60A5FA" />
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
            
            <linearGradient
              id="shield-gradient"
              x1="20"
              y1="4"
              x2="20"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#60A5FA" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};